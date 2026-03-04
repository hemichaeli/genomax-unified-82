import { useState, useCallback, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Upload, FileText, ArrowRight, Clock, User, Loader2, CheckCircle2, AlertTriangle, ChevronRight, ChevronLeft, Shield, Activity, Sun, Utensils, Moon, Package, Pill, TrendingUp, ShoppingCart, Gift, Info } from "lucide-react";

const API_BASE = "https://web-production-97b74.up.railway.app";
const DEMO_USER_ID = "00000000-0000-0000-0000-000000000001";

type Step = "profile" | "upload" | "processing" | "results";

interface ProfileData {
  gender: "male" | "female" | "";
  age: string;
  medications: string;
  conditions: string;
  goals: string[];
}

interface BiomarkerResult {
  code: string;
  value: number;
  unit: string;
  flag?: string;
  confidence?: number;
}

interface SKUItem {
  sku: string;
  product_name: string;
  intent_id: string;
  shopify_handle?: string;
  reason_codes?: string[];
  dosing_window: string;
}

interface ClinicalWarning {
  type: string;
  severity: string;
  gate_id: string;
  title: string;
  message: string;
  detail: string;
  affected_ingredients: string[];
  retest_recommendation: string;
}

interface PipelineResult {
  protocol_id: string;
  os_environment: string;
  phases_completed: string[];
  sku_plan: SKUItem[];
  dosing_schedule: Record<string, string[]>;
  safety_gates_activated: string[];
  blocked_ingredients: string[];
  interaction_warnings: any[];
  interaction_removals: any[];
  medications_screened: string[];
  clinical_warnings: ClinicalWarning[];
  audit: any;
}

const GOAL_OPTIONS = [
  { label: "Energy & Vitality", code: "energy" },
  { label: "Immune Support", code: "immunity" },
  { label: "Cardiovascular Health", code: "heart" },
  { label: "Cognitive Performance", code: "focus" },
  { label: "Muscle & Recovery", code: "recovery" },
  { label: "Hormonal Balance", code: "hormones" },
  { label: "Metabolic Optimization", code: "metabolism" },
  { label: "Sleep Quality", code: "sleep" },
  { label: "Gut Health", code: "gut" },
  { label: "Longevity", code: "longevity" },
];

const DOSING_LABELS: Record<string, { label: string; desc: string; color: string }> = {
  morning_fasted: { label: "Morning (Fasted)", desc: "Take on empty stomach, 30 min before food", color: "#FFD600" },
  midday_with_food: { label: "Midday (With Food)", desc: "Take with a meal containing dietary fat", color: "#00E676" },
  evening_before_sleep: { label: "Evening (Before Sleep)", desc: "Take 30-60 min before bedtime", color: "#7C4DFF" },
};

const DOSING_ICONS: Record<string, typeof Sun> = {
  morning_fasted: Sun,
  midday_with_food: Utensils,
  evening_before_sleep: Moon,
};

const INTENT_LABELS: Record<string, string> = {
  vitamin_d_immune: "Low Vitamin D detected",
  b12_energy_support: "Energy optimization",
  iron_energy_support: "Iron status support",
  zinc_immune_support: "Immune function",
  coq10_cellular_energy: "Cellular energy",
  vitamin_c_immune: "Antioxidant support",
  magnesium_sleep: "Sleep & recovery",
  omega3_brain_support: "Brain health",
  sleep_support_melatonin: "Sleep regulation",
};

const saveTrendSession = async (
  profileData: ProfileData,
  markers: BiomarkerResult[],
  pipelineData: PipelineResult
) => {
  try {
    await fetch(`${API_BASE}/api/v1/trends/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: DEMO_USER_ID,
        sex: profileData.gender,
        age: profileData.age ? parseInt(profileData.age) : null,
        upload_method: "ocr",
        biomarkers: markers.map((m) => ({
          code: m.code,
          value: m.value,
          unit: m.unit || "ng/mL",
          flag: m.flag || null,
        })),
        protocol: {
          os_environment: pipelineData.os_environment,
          sku_plan: pipelineData.sku_plan,
          safety_gates: pipelineData.safety_gates_activated,
          blocked_ingredients: pipelineData.blocked_ingredients,
          interaction_warnings: pipelineData.interaction_warnings,
          dosing_schedule: pipelineData.dosing_schedule,
        },
      }),
    });
  } catch {}
};

const persistSession = (profileData: ProfileData, pipelineData: PipelineResult) => {
  try {
    localStorage.setItem("gx_session", JSON.stringify({
      gender: profileData.gender,
      environment: pipelineData.os_environment,
      protocol_skus: pipelineData.sku_plan.map((s) => s.sku),
      protocol_handles: pipelineData.sku_plan.map((s) => s.shopify_handle).filter(Boolean),
      protocol_id: pipelineData.protocol_id,
      sku_count: pipelineData.sku_plan.length,
      saved_at: Date.now(),
    }));
  } catch {}
};

const Assessment = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<Step>("profile");
  const [profile, setProfile] = useState<ProfileData>({ gender: "", age: "", medications: "", conditions: "", goals: [] });
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [processingStage, setProcessingStage] = useState(0);
  const [results, setResults] = useState<BiomarkerResult[]>([]);
  const [pipeline, setPipeline] = useState<PipelineResult | null>(null);
  const [trendSaved, setTrendSaved] = useState(false);
  const [referralDiscount, setReferralDiscount] = useState<number | null>(null);
  const [referralCode, setReferralCode] = useState<string>("");

  // Read referral params from URL (?ref=CODE&discount=20&os=maximo)
  useEffect(() => {
    const refCode = searchParams.get("ref");
    const refDiscount = searchParams.get("discount");
    const osParam = searchParams.get("os");

    if (refCode) {
      setReferralCode(refCode);
      setReferralDiscount(refDiscount ? parseFloat(refDiscount) : 20);
      // Persist for checkout
      try {
        localStorage.setItem("gx_referral_code", refCode);
        localStorage.setItem("gx_referral_discount", refDiscount || "20");
      } catch {}
    } else {
      // Check localStorage
      try {
        const stored = localStorage.getItem("gx_referral_code");
        const storedDiscount = localStorage.getItem("gx_referral_discount");
        if (stored) {
          setReferralCode(stored);
          setReferralDiscount(storedDiscount ? parseFloat(storedDiscount) : 20);
        }
      } catch {}
    }

    // Pre-select gender from OS param
    if (osParam === "maximo") {
      setProfile((p) => ({ ...p, gender: "male" }));
    } else if (osParam === "maxima") {
      setProfile((p) => ({ ...p, gender: "female" }));
    }
  }, [searchParams]);

  const toggleGoal = (code: string) => {
    setProfile((p) => ({
      ...p,
      goals: p.goals.includes(code) ? p.goals.filter((g) => g !== code) : [...p.goals, code],
    }));
  };

  const profileValid = profile.gender && profile.age && parseInt(profile.age) >= 18 && parseInt(profile.age) <= 120;

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files?.[0]) {
      const f = e.dataTransfer.files[0];
      if (["application/pdf", "image/jpeg", "image/png", "image/webp"].includes(f.type)) {
        setFile(f);
        setUploadError("");
      } else {
        setUploadError("Unsupported file type. Use PDF, PNG, JPEG, or WebP.");
      }
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
      setUploadError("");
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setUploadError("");
    setTrendSaved(false);
    setStep("processing");
    setProcessingStage(0);

    try {
      setProcessingStage(1);
      const formData = new FormData();
      formData.append("file", file);

      let markers: BiomarkerResult[] = [];

      const ocrRes = await fetch(`${API_BASE}/api/v1/bloodwork/ocr/parse`, {
        method: "POST",
        body: formData,
      });

      if (ocrRes.ok) {
        const ocrData = await ocrRes.json();
        markers = ocrData.markers || ocrData.normalized_markers || ocrData.biomarkers || [];
      } else {
        const text = await file.text();
        const textRes = await fetch(`${API_BASE}/api/v1/bloodwork/ocr/parse-text`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        });
        if (textRes.ok) {
          const data = await textRes.json();
          markers = data.markers || data.normalized_markers || data.biomarkers || [];
        } else {
          throw new Error("Could not extract biomarkers from this file. Try a clearer image or PDF.");
        }
      }

      if (markers.length === 0) {
        throw new Error("No biomarkers detected. Please upload a lab report with blood test values.");
      }

      setResults(markers);
      setProcessingStage(2);

      const meds = profile.medications.trim()
        ? profile.medications.split(",").map((m) => m.trim()).filter(Boolean)
        : [];

      const pipelineRes = await fetch(`${API_BASE}/api/v1/brain/pipeline`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sex: profile.gender,
          biomarkers: markers.map((m) => ({
            code: m.code,
            value: m.value,
            unit: m.unit || "ng/mL",
          })),
          goals: profile.goals.length > 0 ? profile.goals : ["energy", "immunity"],
          medications: meds.length > 0 ? meds : undefined,
          age: parseInt(profile.age),
        }),
      });

      setProcessingStage(3);

      if (pipelineRes.ok) {
        const pipelineData = await pipelineRes.json();
        setPipeline(pipelineData);
        persistSession(profile as ProfileData, pipelineData);
        saveTrendSession(profile as ProfileData, markers, pipelineData).then(() => {
          setTrendSaved(true);
        });
      } else {
        const errData = await pipelineRes.json().catch(() => ({}));
        throw new Error(errData.detail || "Protocol generation failed. Please try again.");
      }

      setProcessingStage(4);
      setStep("results");
      setUploading(false);
    } catch (err: any) {
      setUploadError(err.message || "Upload failed. Please try again.");
      setStep("upload");
      setUploading(false);
    }
  };

  const accentColor = profile.gender === "female" ? "#E6007A" : "#00AEEF";
  const envLabel = profile.gender === "female" ? "MAXima\u00B2" : "MAXimo\u00B2";

  // Helper to classify safety gate strings for badge rendering
  const getGateBadge = (gate: string) => {
    if (gate.startsWith("BLOCK_")) return { label: "BLOCK", color: "#FF1F23", bg: "rgba(255,31,35,0.15)" };
    if (gate.startsWith("EXCEPTION_")) return { label: "DEFERRED", color: "#FF9500", bg: "rgba(255,149,0,0.15)" };
    if (gate.startsWith("CAUTION_")) return { label: "CAUTION", color: "#FFD600", bg: "rgba(255,214,0,0.15)" };
    if (gate.startsWith("FLAG_")) return { label: "FLAG", color: "#009BFF", bg: "rgba(0,155,255,0.15)" };
    return { label: "ACTIVE", color: "#FF9500", bg: "rgba(255,149,0,0.15)" };
  };

  return (
    <div className="min-h-screen bg-[#05070A]">

      {/* Referral discount banner */}
      {referralCode && referralDiscount && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#FF1F23] text-white py-2 px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Gift className="w-4 h-4" />
            <span>${referralDiscount} off your first protocol</span>
            <span className="text-white/60 font-mono text-xs hidden sm:inline">| Code: {referralCode}</span>
          </div>
        </div>
      )}

      <section className={`gx-hero pb-8 ${referralCode ? "pt-44" : "pt-32"}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Initialize Your <span className="text-[#FF1F23]">Protocol</span>
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
            {step === "profile" && "Tell us about yourself. Gender-specific optimization starts here."}
            {step === "upload" && "Upload your blood work. The Bloodwork Engine needs your data."}
            {step === "processing" && "Processing your biomarkers through 31 safety gates..."}
            {step === "results" && "Your protocol is ready."}
          </p>
          <div className="flex items-center justify-center gap-2 mt-8 max-w-md mx-auto">
            {(["profile", "upload", "processing", "results"] as Step[]).map((s, i) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`h-1 flex-1 rounded-full transition-colors ${["profile", "upload", "processing", "results"].indexOf(step) >= i ? "bg-[#FF1F23]" : "bg-[#1A2030]"}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP 1: PROFILE */}
      {step === "profile" && (
        <section className="gx-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <div className="gx-card p-8 space-y-6">
              <div>
                <label className="block text-sm font-bold text-white mb-3">Biological Sex *</label>
                <div className="grid grid-cols-2 gap-4">
                  {(["male", "female"] as const).map((g) => (
                    <button key={g} onClick={() => setProfile((p) => ({ ...p, gender: g }))}
                      className={`p-4 rounded-lg border-2 transition-all text-center ${profile.gender === g ? g === "male" ? "border-[#00AEEF] bg-[#00AEEF]/10 text-[#00AEEF]" : "border-[#E6007A] bg-[#E6007A]/10 text-[#E6007A]" : "border-[#1A2030] text-[#6B7A90] hover:border-[#6B7A90]/50"}`}>
                      <User className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-bold">{g === "male" ? "MAXimo\u00B2" : "MAXima\u00B2"}</span>
                      <span className="block text-xs mt-1 opacity-70">{g === "male" ? "Male-Optimized" : "Female-Optimized"}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Age *</label>
                <input type="number" min="18" max="120" value={profile.age} onChange={(e) => setProfile((p) => ({ ...p, age: e.target.value }))} placeholder="Enter your age"
                  className="w-full bg-[#0D1117] border border-[#1A2030] rounded-lg px-4 py-3 text-white placeholder-[#6B7A90]/50 focus:border-[#FF1F23] focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Current Medications</label>
                <textarea value={profile.medications} onChange={(e) => setProfile((p) => ({ ...p, medications: e.target.value }))} placeholder="List any medications, separated by commas (e.g., Metformin, Lisinopril)" rows={2}
                  className="w-full bg-[#0D1117] border border-[#1A2030] rounded-lg px-4 py-3 text-white placeholder-[#6B7A90]/50 focus:border-[#FF1F23] focus:outline-none resize-none" />
                <p className="text-xs text-[#6B7A90]/60 mt-1">Used for drug-nutrient interaction screening. Never shared.</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Existing Conditions</label>
                <textarea value={profile.conditions} onChange={(e) => setProfile((p) => ({ ...p, conditions: e.target.value }))} placeholder="Any diagnosed conditions (e.g., hypothyroidism, iron deficiency)" rows={2}
                  className="w-full bg-[#0D1117] border border-[#1A2030] rounded-lg px-4 py-3 text-white placeholder-[#6B7A90]/50 focus:border-[#FF1F23] focus:outline-none resize-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-3">Health Goals</label>
                <div className="flex flex-wrap gap-2">
                  {GOAL_OPTIONS.map((goal) => (
                    <button key={goal.code} onClick={() => toggleGoal(goal.code)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${profile.goals.includes(goal.code) ? "border-[#FF1F23] bg-[#FF1F23]/10 text-[#FF1F23]" : "border-[#1A2030] text-[#6B7A90] hover:border-[#6B7A90]/50"}`}>
                      {goal.label}
                    </button>
                  ))}
                </div>
              </div>
              <button onClick={() => setStep("upload")} disabled={!profileValid}
                className={`gx-btn-primary w-full justify-center flex items-center gap-2 ${!profileValid ? "opacity-40 cursor-not-allowed" : ""}`}>
                Continue to Blood Upload <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* STEP 2: UPLOAD */}
      {step === "upload" && (
        <section className="gx-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="gx-card p-8 text-center">
                <Upload className="w-12 h-12 text-[#009BFF] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Upload Blood Work</h3>
                <p className="text-sm text-[#6B7A90] mb-6">Upload existing lab results from any provider. Our OCR engine extracts biomarker values automatically.</p>
                <div onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-8 transition-colors cursor-pointer ${dragActive ? "border-[#009BFF] bg-[#009BFF]/5" : file ? "border-[#00E676] bg-[#00E676]/5" : "border-[#1A2030] hover:border-[#009BFF]/40"}`}
                  onClick={() => document.getElementById("file-input")?.click()}>
                  <input id="file-input" type="file" accept=".pdf,.png,.jpg,.jpeg,.webp" onChange={handleFileSelect} className="hidden" />
                  {file ? (
                    <>
                      <CheckCircle2 className="w-8 h-8 text-[#00E676] mx-auto mb-2" />
                      <p className="text-sm text-[#00E676] font-bold">{file.name}</p>
                      <p className="text-xs text-[#6B7A90] mt-1">{(file.size / 1024).toFixed(0)} KB</p>
                    </>
                  ) : (
                    <>
                      <FileText className="w-8 h-8 text-[#6B7A90] mx-auto mb-2" />
                      <p className="text-sm text-[#6B7A90]">Drop your lab results here</p>
                      <p className="text-xs text-[#6B7A90]/50 mt-1">PDF, PNG, JPEG, WebP (max 10MB)</p>
                    </>
                  )}
                </div>
                {uploadError && (
                  <div className="mt-4 p-3 rounded-lg bg-[#FF1F23]/10 border border-[#FF1F23]/30">
                    <p className="text-xs text-[#FF1F23]">{uploadError}</p>
                  </div>
                )}
                <button onClick={handleUpload} disabled={!file || uploading}
                  className={`gx-btn-primary w-full justify-center flex items-center gap-2 mt-6 ${!file ? "opacity-40 cursor-not-allowed" : ""}`}>
                  {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
                  {uploading ? "Processing..." : "Analyze Blood Work"}
                </button>
              </div>
              <div className="gx-card p-8 text-center relative">
                <div className="absolute top-4 right-4 px-2 py-1 rounded text-xs font-mono bg-[#FFD600]/10 text-[#FFD600]">Coming Q2 2026</div>
                <Clock className="w-12 h-12 text-[#6B7A90]/30 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Order Blood Kit</h3>
                <p className="text-sm text-[#6B7A90] mb-6">White-label at-home blood collection kit. End-to-end experience with no external lab visit needed.</p>
                <div className="border-2 border-dashed border-[#1A2030]/50 rounded-lg p-8 opacity-50">
                  <p className="text-sm text-[#6B7A90]">Kit ordering coming soon</p>
                </div>
              </div>
            </div>
            <button onClick={() => setStep("profile")} className="mt-6 text-sm text-[#6B7A90] hover:text-white flex items-center gap-1 mx-auto">
              <ChevronLeft className="w-4 h-4" /> Back to Profile
            </button>
          </div>
        </section>
      )}

      {/* STEP 3: PROCESSING */}
      {step === "processing" && (
        <section className="gx-section">
          <div className="container mx-auto px-4 text-center max-w-lg">
            <div className="gx-card p-12">
              <Loader2 className="w-16 h-16 text-[#FF1F23] mx-auto mb-6 animate-spin" />
              <h2 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Bloodwork Engine Running</h2>
              <div className="space-y-3 text-left">
                {[
                  "OCR extracting biomarker values...",
                  "Running 31 safety gates with gender-specific thresholds...",
                  "Composing protocol from 218 modules...",
                  "Generating chronobiology-based dosing schedule...",
                ].map((msg, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {processingStage > i ? (
                      <CheckCircle2 className="w-4 h-4 text-[#00E676] flex-shrink-0" />
                    ) : processingStage === i ? (
                      <Loader2 className="w-4 h-4 text-[#FF1F23] animate-spin flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-[#1A2030] flex-shrink-0" />
                    )}
                    <span className={`text-sm ${processingStage >= i ? "text-white" : "text-[#6B7A90]/50"}`}>{msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STEP 4: RESULTS */}
      {step === "results" && pipeline && (
        <section className="gx-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6">
            <div className="gx-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                    Your <span style={{ color: accentColor }}>{envLabel}</span> Protocol
                  </h2>
                  <p className="text-xs text-[#6B7A90] mt-1 font-mono">
                    {pipeline.sku_plan.length} modules selected from {results.length} biomarkers analyzed
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono px-2 py-1 rounded" style={{ backgroundColor: `${accentColor}15`, color: accentColor }}>
                    {pipeline.os_environment}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-xs">
                {pipeline.phases_completed.map((phase) => (
                  <span key={phase} className="px-2 py-1 rounded bg-[#00E676]/10 text-[#00E676] font-mono">{phase}</span>
                ))}
                {trendSaved && (
                  <span className="px-2 py-1 rounded bg-[#009BFF]/10 text-[#009BFF] font-mono flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Saved to Trends
                  </span>
                )}
              </div>
            </div>

            {/* Clinical Warnings (v1.4.0) - deferred safety gates with retest recommendations */}
            {pipeline.clinical_warnings && pipeline.clinical_warnings.length > 0 && (
              <div className="gx-card p-6 border-l-4 border-[#FF9500]">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-5 h-5 text-[#FF9500]" />
                  <h3 className="text-sm font-bold text-white">Clinical Alerts</h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#FF9500]/15 text-[#FF9500] font-mono">Requires Attention</span>
                </div>
                <div className="space-y-3">
                  {pipeline.clinical_warnings.map((warning, i) => (
                    <div key={i} className="p-4 rounded-lg bg-[#FF9500]/5 border border-[#FF9500]/20">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-[#FF9500] mt-0.5 flex-shrink-0" />
                        <div className="flex-1 space-y-2">
                          <p className="text-sm text-white font-medium">{warning.message}</p>
                          <p className="text-xs text-[#6B7A90]">{warning.detail}</p>
                          {warning.affected_ingredients && warning.affected_ingredients.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {warning.affected_ingredients.map((ing, j) => (
                                <span key={j} className="text-xs px-2 py-0.5 rounded bg-[#FF9500]/10 text-[#FF9500]/80 font-mono">
                                  {ing.replace(/_/g, " ")}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="mt-2 p-3 rounded bg-[#0D1117] border border-[#1A2030]">
                            <p className="text-xs text-[#009BFF]">
                              <span className="font-bold">Retest recommendation:</span> {warning.retest_recommendation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Safety Gates */}
            {pipeline.safety_gates_activated.length > 0 && (
              <div className="gx-card p-6 border-l-4 border-[#1A2030]">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-[#6B7A90]" />
                  <h3 className="text-sm font-bold text-white">Safety Gates Activated</h3>
                  <span className="text-xs text-[#6B7A90] font-mono">{pipeline.safety_gates_activated.length} gates</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {pipeline.safety_gates_activated.map((gate, i) => {
                    const badge = getGateBadge(gate);
                    return (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#0D1117]">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded" style={{ backgroundColor: badge.bg, color: badge.color }}>
                          {badge.label}
                        </span>
                        <span className="text-xs text-[#6B7A90] font-mono">{gate.replace(/^(BLOCK_|EXCEPTION_|CAUTION_|FLAG_)/, "")}</span>
                      </div>
                    );
                  })}
                </div>
                {pipeline.blocked_ingredients.length > 0 && (
                  <p className="text-xs text-[#FF1F23] mt-3 font-mono">
                    Blocked: {pipeline.blocked_ingredients.join(", ")}
                  </p>
                )}
              </div>
            )}

            {/* Drug-Nutrient Interactions */}
            {pipeline.interaction_warnings.length > 0 && (
              <div className="gx-card p-6 border-l-4 border-[#FF1F23]">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-[#FF1F23]" />
                  <h3 className="text-sm font-bold text-white">Drug-Nutrient Interactions</h3>
                  <span className="text-xs text-[#6B7A90]">({pipeline.medications_screened.join(", ")})</span>
                </div>
                <div className="space-y-2">
                  {pipeline.interaction_warnings.map((int: any, i: number) => (
                    <div key={i} className="p-3 rounded-lg bg-[#FF1F23]/5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${int.severity === "HIGH" ? "bg-[#FF1F23]/20 text-[#FF1F23]" : int.severity === "MODERATE" ? "bg-[#FF9500]/20 text-[#FF9500]" : "bg-[#FFD600]/20 text-[#FFD600]"}`}>
                          {int.severity}
                        </span>
                        <span className="text-sm text-white">{int.product_name}</span>
                      </div>
                      <p className="text-xs text-[#6B7A90]">{int.ingredient} interacts with {int.drug_class}: {int.mechanism}</p>
                      {int.clinical_action && <p className="text-xs text-[#FF9500] mt-1">{int.clinical_action}</p>}
                    </div>
                  ))}
                </div>
                {pipeline.interaction_removals.length > 0 && (
                  <div className="mt-3 p-3 rounded-lg bg-[#FF1F23]/10">
                    <p className="text-xs text-[#FF1F23] font-bold mb-1">Modules Removed From Protocol:</p>
                    {pipeline.interaction_removals.map((r: any, i: number) => (
                      <p key={i} className="text-xs text-[#6B7A90]">{r.product_name} - {r.reason}</p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Dosing Schedule */}
            <div className="gx-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <Pill className="w-5 h-5" style={{ color: accentColor }} />
                <h3 className="text-sm font-bold text-white">Your Dosing Schedule</h3>
                <span className="text-xs text-[#6B7A90]">Chronobiology-optimized timing</span>
              </div>
              <div className="space-y-6">
                {Object.entries(DOSING_LABELS).map(([window, meta]) => {
                  const items = pipeline.sku_plan.filter((s) => s.dosing_window === window);
                  if (items.length === 0) return null;
                  const Icon = DOSING_ICONS[window] || Sun;
                  return (
                    <div key={window}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${meta.color}15` }}>
                          <Icon className="w-5 h-5" style={{ color: meta.color }} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{meta.label}</h4>
                          <p className="text-xs text-[#6B7A90]">{meta.desc}</p>
                        </div>
                        <span className="ml-auto text-xs font-mono px-2 py-1 rounded" style={{ backgroundColor: `${meta.color}15`, color: meta.color }}>
                          {items.length} module{items.length !== 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="space-y-2 ml-13 pl-6 border-l-2" style={{ borderColor: `${meta.color}30` }}>
                        {items.map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#0D1117] hover:bg-[#0D1117]/80 transition-colors">
                            <div className="flex items-center gap-3">
                              <Package className="w-4 h-4 text-[#6B7A90]" />
                              <div>
                                <p className="text-sm text-white font-medium">{item.product_name}</p>
                                <p className="text-xs text-[#6B7A90]">{INTENT_LABELS[item.intent_id] || item.intent_id.replace(/_/g, " ")}</p>
                              </div>
                            </div>
                            <span className="text-xs font-mono text-[#6B7A90]">{item.sku}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Biomarkers */}
            <details className="gx-card">
              <summary className="p-6 cursor-pointer flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#009BFF]" />
                <span className="text-sm font-bold text-white">Biomarkers Analyzed ({results.length})</span>
                <ChevronRight className="w-4 h-4 text-[#6B7A90] ml-auto" />
              </summary>
              <div className="px-6 pb-6 space-y-2">
                {results.map((m, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#0D1117]">
                    <span className="text-sm text-white font-mono">{m.code || `Marker ${i + 1}`}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-white font-bold">{m.value}</span>
                      <span className="text-xs text-[#6B7A90]">{m.unit || ""}</span>
                      {m.flag && (
                        <span className={`text-xs font-mono px-2 py-0.5 rounded ${m.flag === "H" || m.flag === "HIGH" ? "bg-[#FF1F23]/20 text-[#FF1F23]" : m.flag === "L" || m.flag === "LOW" ? "bg-[#FF9500]/20 text-[#FF9500]" : "bg-[#00E676]/20 text-[#00E676]"}`}>
                          {m.flag}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </details>

            {/* CTA */}
            <div className="text-center space-y-4 pt-4">
              {referralCode && referralDiscount ? (
                <p className="text-sm text-[#6B7A90]">
                  Your protocol is ready. Subscribe to receive modules monthly with your <span className="text-[#FF1F23] font-bold">${referralDiscount} referral discount</span>.
                </p>
              ) : (
                <p className="text-sm text-[#6B7A90]">Your protocol is saved. Shop your exact modules or subscribe to receive them monthly.</p>
              )}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/shop" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-all" style={{ backgroundColor: accentColor, color: "#fff" }}>
                  <ShoppingCart className="w-4 h-4" />
                  Shop Your {pipeline.sku_plan.length} Protocol Modules
                </Link>
                <Link to="/pricing" className="gx-btn-outline inline-flex items-center gap-2">
                  {referralCode ? `Subscribe (-$${referralDiscount})` : "Subscribe for Monthly Delivery"} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/dashboard/trends" className="gx-btn-outline inline-flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" /> Trends
                </Link>
              </div>
              <div>
                <button onClick={() => { setStep("upload"); setFile(null); setResults([]); setPipeline(null); setTrendSaved(false); }}
                  className="text-sm text-[#6B7A90] hover:text-white">
                  Upload Different Results
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {step === "results" && !pipeline && (
        <section className="gx-section">
          <div className="container mx-auto px-4 text-center max-w-lg">
            <div className="gx-card p-8">
              <AlertTriangle className="w-12 h-12 text-[#FF9500] mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-3">Protocol Generation Issue</h2>
              <p className="text-sm text-[#6B7A90] mb-6">
                We extracted {results.length} biomarkers but could not generate your protocol. This may happen with unusual lab report formats.
              </p>
              <button onClick={() => { setStep("upload"); setFile(null); setResults([]); }}
                className="gx-btn-primary inline-flex items-center gap-2">
                Try Again <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {(step === "profile" || step === "upload") && (
        <section className="gx-section-surface text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>What Happens Next</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
              {[
                { step: "1", title: "Upload Processed", desc: "OCR extracts biomarker values. Manual QA on flagged results." },
                { step: "2", title: "Engine Runs", desc: "41 biomarkers through 31 safety gates. Gender-specific interpretation." },
                { step: "3", title: "Protocol Generated", desc: "Modules, dosing schedule, clinical evidence. Your first shipment follows." },
              ].map((s) => (
                <div key={s.step} className="gx-card p-6">
                  <div className="font-mono text-xl font-bold text-[#FF1F23] mb-2">{s.step}</div>
                  <h3 className="text-sm font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-xs text-[#6B7A90]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Assessment;
