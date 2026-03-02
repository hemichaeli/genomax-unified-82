import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Upload, FileText, ArrowRight, Clock, User, Loader2, CheckCircle2, AlertTriangle, ChevronRight, ChevronLeft, Shield, Activity } from "lucide-react";

const API_BASE = "https://web-production-97b74.up.railway.app";

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

const GOAL_OPTIONS = [
  "Energy & Vitality",
  "Immune Support",
  "Cardiovascular Health",
  "Cognitive Performance",
  "Muscle & Recovery",
  "Hormonal Balance",
  "Metabolic Optimization",
  "Sleep Quality",
  "Gut Health",
  "Longevity",
];

const Assessment = () => {
  const [step, setStep] = useState<Step>("profile");
  const [profile, setProfile] = useState<ProfileData>({ gender: "", age: "", medications: "", conditions: "", goals: [] });
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [results, setResults] = useState<BiomarkerResult[]>([]);
  const [protocolSummary, setProtocolSummary] = useState<any>(null);
  const [safetyGates, setSafetyGates] = useState<any[]>([]);
  const [interactions, setInteractions] = useState<any[]>([]);

  const toggleGoal = (goal: string) => {
    setProfile((p) => ({
      ...p,
      goals: p.goals.includes(goal) ? p.goals.filter((g) => g !== goal) : [...p.goals, goal],
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
    setStep("processing");

    try {
      // Step 1: Try OCR file parse endpoint
      const formData = new FormData();
      formData.append("file", file);

      const ocrRes = await fetch(`${API_BASE}/api/v1/bloodwork/ocr/parse`, {
        method: "POST",
        body: formData,
      });

      if (ocrRes.ok) {
        const ocrData = await ocrRes.json();
        const markers = ocrData.markers || ocrData.normalized_markers || ocrData.biomarkers || [];
        await processBloodworkResults(markers);
        return;
      }

      // Fallback: Read file as text and use parse-text endpoint
      const text = await file.text();
      const textRes = await fetch(`${API_BASE}/api/v1/bloodwork/ocr/parse-text`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (textRes.ok) {
        const data = await textRes.json();
        const markers = data.markers || data.normalized_markers || data.biomarkers || [];
        await processBloodworkResults(markers);
      } else {
        throw new Error("Could not process this file.");
      }
    } catch (err: any) {
      setUploadError(err.message || "Upload failed. Please try a clearer image or PDF of your lab results.");
      setStep("upload");
      setUploading(false);
    }
  };

  const processBloodworkResults = async (markers: BiomarkerResult[]) => {
    setResults(markers);

    // Step 2: Run through Bloodwork Engine
    try {
      const engineRes = await fetch(`${API_BASE}/api/v1/bloodwork/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          markers,
          gender: profile.gender,
          age: parseInt(profile.age),
        }),
      });

      if (engineRes.ok) {
        const engineData = await engineRes.json();
        setSafetyGates(engineData.safety_gates_triggered || engineData.gates || []);
      }
    } catch {
      // Analysis optional for displaying results
    }

    // Step 3: Check drug-nutrient interactions if medications provided
    if (profile.medications.trim()) {
      try {
        const meds = profile.medications.split(",").map((m) => m.trim()).filter(Boolean);
        const intRes = await fetch(`${API_BASE}/api/v1/brain/interactions`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ medications: meds }),
        });
        if (intRes.ok) {
          const intData = await intRes.json();
          setInteractions(intData.interactions || intData.warnings || []);
        }
      } catch {
        // Interactions check optional
      }
    }

    // Step 4: Try Brain orchestrator v2
    try {
      const brainRes = await fetch(`${API_BASE}/api/v1/brain/orchestrate/v2`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bloodwork_input: { markers, gender: profile.gender, age: parseInt(profile.age) },
          selected_goals: profile.goals,
          assessment_context: {
            conditions: profile.conditions || "",
            medications: profile.medications || "",
          },
        }),
      });
      if (brainRes.ok) {
        const brainData = await brainRes.json();
        setProtocolSummary(brainData);
      }
    } catch {
      // Brain orchestration optional for now
    }

    setStep("results");
    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-[#05070A]">
      <section className="gx-hero pt-32 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            Initialize Your <span className="text-[#FF1F23]">Protocol</span>
          </h1>
          <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
            {step === "profile" && "Tell us about yourself. Gender-specific optimization starts here."}
            {step === "upload" && "Upload your blood work. The Bloodwork Engine needs your data."}
            {step === "processing" && "Processing your biomarkers through 31 safety gates..."}
            {step === "results" && "Your biomarker analysis is ready."}
          </p>

          {/* Progress bar */}
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
                    <button
                      key={g}
                      onClick={() => setProfile((p) => ({ ...p, gender: g }))}
                      className={`p-4 rounded-lg border-2 transition-all text-center ${
                        profile.gender === g
                          ? g === "male"
                            ? "border-[#00AEEF] bg-[#00AEEF]/10 text-[#00AEEF]"
                            : "border-[#E6007A] bg-[#E6007A]/10 text-[#E6007A]"
                          : "border-[#1A2030] text-[#6B7A90] hover:border-[#6B7A90]/50"
                      }`}
                    >
                      <User className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-bold">{g === "male" ? "MAXimo\u00B2" : "MAXima\u00B2"}</span>
                      <span className="block text-xs mt-1 opacity-70">{g === "male" ? "Male-Optimized" : "Female-Optimized"}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2">Age *</label>
                <input
                  type="number"
                  min="18"
                  max="120"
                  value={profile.age}
                  onChange={(e) => setProfile((p) => ({ ...p, age: e.target.value }))}
                  placeholder="Enter your age"
                  className="w-full bg-[#0D1117] border border-[#1A2030] rounded-lg px-4 py-3 text-white placeholder-[#6B7A90]/50 focus:border-[#FF1F23] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2">Current Medications</label>
                <textarea
                  value={profile.medications}
                  onChange={(e) => setProfile((p) => ({ ...p, medications: e.target.value }))}
                  placeholder="List any medications, separated by commas (e.g., Metformin, Lisinopril)"
                  rows={2}
                  className="w-full bg-[#0D1117] border border-[#1A2030] rounded-lg px-4 py-3 text-white placeholder-[#6B7A90]/50 focus:border-[#FF1F23] focus:outline-none resize-none"
                />
                <p className="text-xs text-[#6B7A90]/60 mt-1">Used for drug-nutrient interaction screening. Never shared.</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2">Existing Conditions</label>
                <textarea
                  value={profile.conditions}
                  onChange={(e) => setProfile((p) => ({ ...p, conditions: e.target.value }))}
                  placeholder="Any diagnosed conditions (e.g., hypothyroidism, iron deficiency)"
                  rows={2}
                  className="w-full bg-[#0D1117] border border-[#1A2030] rounded-lg px-4 py-3 text-white placeholder-[#6B7A90]/50 focus:border-[#FF1F23] focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-3">Health Goals</label>
                <div className="flex flex-wrap gap-2">
                  {GOAL_OPTIONS.map((goal) => (
                    <button
                      key={goal}
                      onClick={() => toggleGoal(goal)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                        profile.goals.includes(goal)
                          ? "border-[#FF1F23] bg-[#FF1F23]/10 text-[#FF1F23]"
                          : "border-[#1A2030] text-[#6B7A90] hover:border-[#6B7A90]/50"
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep("upload")}
                disabled={!profileValid}
                className={`gx-btn-primary w-full justify-center flex items-center gap-2 ${!profileValid ? "opacity-40 cursor-not-allowed" : ""}`}
              >
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

                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-8 transition-colors cursor-pointer ${
                    dragActive ? "border-[#009BFF] bg-[#009BFF]/5" : file ? "border-[#00E676] bg-[#00E676]/5" : "border-[#1A2030] hover:border-[#009BFF]/40"
                  }`}
                  onClick={() => document.getElementById("file-input")?.click()}
                >
                  <input id="file-input" type="file" accept=".pdf,.png,.jpg,.jpeg,.webp" onChange={handleFileSelect} className="hidden" />
                  {file ? (
                    <>
                      <CheckCircle2 className="w-8 h-8 text-[#00E676] mx-auto mb-2" />
                      <p className="text-sm text-[#00E676] font-bold">{file.name}</p>
                      <p className="text-xs text-[#6B7A90] mt-1">{(file.size / 1024).toFixed(0)} KB - Click to change</p>
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

                <button
                  onClick={handleUpload}
                  disabled={!file || uploading}
                  className={`gx-btn-primary w-full justify-center flex items-center gap-2 mt-6 ${!file ? "opacity-40 cursor-not-allowed" : ""}`}
                >
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
                {["OCR extracting biomarker values...", "Validating against reference ranges...", "Running 31 safety gates...", "Applying gender-specific logic...", "Generating protocol..."].map((msg, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#FF1F23] animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                    <span className="text-sm text-[#6B7A90]">{msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STEP 4: RESULTS */}
      {step === "results" && (
        <section className="gx-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8">
            {/* Safety gates */}
            {safetyGates.length > 0 && (
              <div className="gx-card p-6 border-l-4 border-[#FF9500]">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-[#FF9500]" />
                  <h3 className="text-sm font-bold text-white">Safety Gates Triggered</h3>
                </div>
                {safetyGates.map((gate: any, i: number) => (
                  <div key={i} className="text-xs text-[#6B7A90] mb-1">
                    <span className="text-[#FF9500] font-mono">{gate.gate_id || gate.name || gate.code || `Gate ${i + 1}`}:</span>{" "}
                    {gate.message || gate.action || gate.description || "Review required"}
                  </div>
                ))}
              </div>
            )}

            {/* Drug-nutrient interactions */}
            {interactions.length > 0 && (
              <div className="gx-card p-6 border-l-4 border-[#FF1F23]">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-[#FF1F23]" />
                  <h3 className="text-sm font-bold text-white">Drug-Nutrient Interactions</h3>
                </div>
                {interactions.map((int: any, i: number) => (
                  <div key={i} className="text-xs text-[#6B7A90] mb-2 p-2 rounded bg-[#FF1F23]/5">
                    <span className="text-[#FF1F23] font-bold">{int.severity || "Warning"}:</span>{" "}
                    {int.message || int.description || JSON.stringify(int)}
                  </div>
                ))}
              </div>
            )}

            {/* Biomarkers */}
            <div className="gx-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-[#009BFF]" />
                <h3 className="text-sm font-bold text-white">Extracted Biomarkers ({results.length})</h3>
              </div>
              {results.length > 0 ? (
                <div className="grid gap-2">
                  {results.map((m: any, i: number) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#0D1117]">
                      <span className="text-sm text-white font-mono">{m.code || m.name || m.biomarker || `Marker ${i + 1}`}</span>
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
              ) : (
                <p className="text-sm text-[#6B7A90]">No biomarkers could be extracted. Please try uploading a clearer lab report.</p>
              )}
            </div>

            {/* Protocol summary */}
            {protocolSummary && (
              <div className="gx-card p-6">
                <h3 className="text-sm font-bold text-white mb-3">Protocol Preview</h3>
                <pre className="text-xs text-[#6B7A90] font-mono overflow-auto max-h-60 bg-[#0D1117] p-4 rounded-lg">
                  {JSON.stringify(protocolSummary, null, 2)}
                </pre>
              </div>
            )}

            {/* CTA */}
            <div className="text-center space-y-4">
              <Link to="/pricing" className="gx-btn-primary inline-flex items-center gap-2">
                Choose Your Protocol Tier <ArrowRight className="w-4 h-4" />
              </Link>
              <div>
                <button onClick={() => { setStep("upload"); setFile(null); setResults([]); setSafetyGates([]); setInteractions([]); setProtocolSummary(null); }} className="text-sm text-[#6B7A90] hover:text-white">
                  Upload Different Results
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
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
