import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Upload, FileText, ArrowRight, Clock, User, Loader2, CheckCircle2, ChevronRight, ChevronLeft, Shield, Activity, Type } from "lucide-react";

const API_BASE = "https://web-production-97b74.up.railway.app";

type Step = "profile" | "upload" | "processing" | "results";
type UploadMode = "file" | "paste";

interface ProfileData {
  gender: "male" | "female" | "";
  age: string;
  medications: string;
  conditions: string;
  goals: string[];
}

interface ParsedMarker {
  code: string;
  value: number;
  unit: string;
  confidence?: number;
  flag?: string;
}

const GOAL_OPTIONS = [
  "Energy & Vitality", "Immune Support", "Cardiovascular Health", "Cognitive Performance",
  "Muscle & Recovery", "Hormonal Balance", "Metabolic Optimization", "Sleep Quality",
  "Gut Health", "Longevity",
];

const Assessment = () => {
  const [step, setStep] = useState<Step>("profile");
  const [profile, setProfile] = useState<ProfileData>({ gender: "", age: "", medications: "", conditions: "", goals: [] });
  const [uploadMode, setUploadMode] = useState<UploadMode>("file");
  const [file, setFile] = useState<File | null>(null);
  const [pasteText, setPasteText] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [markers, setMarkers] = useState<ParsedMarker[]>([]);
  const [engineSummary, setEngineSummary] = useState<any>(null);

  const toggleGoal = (goal: string) => {
    setProfile((p) => ({ ...p, goals: p.goals.includes(goal) ? p.goals.filter((g) => g !== goal) : [...p.goals, goal] }));
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
    const f = e.dataTransfer.files?.[0];
    if (f) { setFile(f); setUploadError(""); }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) { setFile(e.target.files[0]); setUploadError(""); }
  };

  const sendToParseText = async (text: string) => {
    const res = await fetch(`${API_BASE}/api/v1/bloodwork/ocr/parse-text`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, gender: profile.gender }),
    });
    if (!res.ok) throw new Error(`API returned ${res.status}`);
    return res.json();
  };

  const handleAnalyze = async () => {
    setUploading(true);
    setUploadError("");
    setStep("processing");

    try {
      let textContent = "";

      if (uploadMode === "paste") {
        textContent = pasteText;
      } else if (file) {
        // Read file as text (works for text-based PDFs and plain text)
        textContent = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = () => reject(new Error("Could not read file"));
          reader.readAsText(file);
        });
      }

      if (!textContent.trim()) {
        throw new Error("No readable text found. For scanned PDFs or images, please copy and paste the values using the Text Paste option.");
      }

      const data = await sendToParseText(textContent);

      const rawMarkers: ParsedMarker[] = (data.parse_result?.raw_markers || []).map((m: any) => ({
        code: m.code,
        value: m.value,
        unit: m.unit || "",
        confidence: m.confidence,
      }));

      setMarkers(rawMarkers);
      setEngineSummary(data.engine_result || null);
      setStep("results");
    } catch (err: any) {
      setUploadError(err.message || "Processing failed. Please try again.");
      setStep("upload");
    }
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
          <div className="flex items-center justify-center gap-2 mt-8 max-w-md mx-auto">
            {(["profile", "upload", "processing", "results"] as Step[]).map((s, i) => (
              <div key={s} className="flex-1">
                <div className={`h-1 rounded-full transition-colors ${["profile","upload","processing","results"].indexOf(step) >= i ? "bg-[#FF1F23]" : "bg-[#1A2030]"}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFILE */}
      {step === "profile" && (
        <section className="gx-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
            <div className="gx-card p-8 space-y-6">
              <div>
                <label className="block text-sm font-bold text-white mb-3">Biological Sex *</label>
                <div className="grid grid-cols-2 gap-4">
                  {(["male","female"] as const).map((g) => (
                    <button key={g} onClick={() => setProfile((p) => ({...p, gender: g}))}
                      className={`p-4 rounded-lg border-2 transition-all text-center ${profile.gender === g ? (g === "male" ? "border-[#00AEEF] bg-[#00AEEF]/10 text-[#00AEEF]" : "border-[#E6007A] bg-[#E6007A]/10 text-[#E6007A]") : "border-[#1A2030] text-[#6B7A90] hover:border-[#6B7A90]/50"}`}>
                      <User className="w-6 h-6 mx-auto mb-2" />
                      <span className="text-sm font-bold">{g === "male" ? "MAXimo\u00B2" : "MAXima\u00B2"}</span>
                      <span className="block text-xs mt-1 opacity-70">{g === "male" ? "Male-Optimized" : "Female-Optimized"}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Age *</label>
                <input type="number" min="18" max="120" value={profile.age} onChange={(e) => setProfile((p) => ({...p, age: e.target.value}))} placeholder="Enter your age" className="w-full bg-[#0D1117] border border-[#1A2030] rounded-lg px-4 py-3 text-white placeholder-[#6B7A90]/50 focus:border-[#FF1F23] focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Current Medications</label>
                <textarea value={profile.medications} onChange={(e) => setProfile((p) => ({...p, medications: e.target.value}))} placeholder="List any medications, separated by commas" rows={2} className="w-full bg-[#0D1117] border border-[#1A2030] rounded-lg px-4 py-3 text-white placeholder-[#6B7A90]/50 focus:border-[#FF1F23] focus:outline-none resize-none" />
                <p className="text-xs text-[#6B7A90]/60 mt-1">Used for drug-nutrient interaction screening. Never shared.</p>
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Existing Conditions</label>
                <textarea value={profile.conditions} onChange={(e) => setProfile((p) => ({...p, conditions: e.target.value}))} placeholder="Any diagnosed conditions (e.g., hypothyroidism, iron deficiency)" rows={2} className="w-full bg-[#0D1117] border border-[#1A2030] rounded-lg px-4 py-3 text-white placeholder-[#6B7A90]/50 focus:border-[#FF1F23] focus:outline-none resize-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-3">Health Goals</label>
                <div className="flex flex-wrap gap-2">
                  {GOAL_OPTIONS.map((goal) => (
                    <button key={goal} onClick={() => toggleGoal(goal)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${profile.goals.includes(goal) ? "border-[#FF1F23] bg-[#FF1F23]/10 text-[#FF1F23]" : "border-[#1A2030] text-[#6B7A90] hover:border-[#6B7A90]/50"}`}>
                      {goal}
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

      {/* UPLOAD */}
      {step === "upload" && (
        <section className="gx-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            {/* Mode toggle */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <button onClick={() => setUploadMode("file")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${uploadMode === "file" ? "bg-[#FF1F23]/15 border border-[#FF1F23] text-white" : "border border-[#1A2030] text-[#6B7A90] hover:border-[#6B7A90]/50"}`}>
                <Upload className="w-4 h-4" /> Upload File
              </button>
              <button onClick={() => setUploadMode("paste")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${uploadMode === "paste" ? "bg-[#FF1F23]/15 border border-[#FF1F23] text-white" : "border border-[#1A2030] text-[#6B7A90] hover:border-[#6B7A90]/50"}`}>
                <Type className="w-4 h-4" /> Paste Text
              </button>
            </div>

            <div className="gx-card p-8">
              {uploadMode === "file" ? (
                <>
                  <div onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-10 transition-colors cursor-pointer text-center ${dragActive ? "border-[#009BFF] bg-[#009BFF]/5" : file ? "border-[#00E676] bg-[#00E676]/5" : "border-[#1A2030] hover:border-[#009BFF]/40"}`}
                    onClick={() => document.getElementById("file-input")?.click()}>
                    <input id="file-input" type="file" accept=".pdf,.txt,.csv,.png,.jpg,.jpeg,.webp" onChange={handleFileSelect} className="hidden" />
                    {file ? (
                      <>
                        <CheckCircle2 className="w-10 h-10 text-[#00E676] mx-auto mb-3" />
                        <p className="text-sm text-[#00E676] font-bold">{file.name}</p>
                        <p className="text-xs text-[#6B7A90] mt-1">{(file.size / 1024).toFixed(0)} KB - Click to change</p>
                      </>
                    ) : (
                      <>
                        <FileText className="w-10 h-10 text-[#6B7A90] mx-auto mb-3" />
                        <p className="text-sm text-white mb-1">Drop your lab results here</p>
                        <p className="text-xs text-[#6B7A90]">PDF, TXT, CSV (text-based files). For scanned docs, use Paste Text.</p>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm text-[#6B7A90] mb-4">Copy and paste your blood test results below. Include biomarker names, values, and units.</p>
                  <textarea value={pasteText} onChange={(e) => setPasteText(e.target.value)} rows={10}
                    placeholder={"Vitamin D 25-OH: 22 ng/mL\nFerritin: 45 ng/mL\nHemoglobin: 14.2 g/dL\nTSH: 2.1 mIU/L\nVitamin B12: 380 pg/mL\nFolate: 12 ng/mL\nIron: 85 mcg/dL\nCRP: 0.8 mg/L\n..."}
                    className="w-full bg-[#0D1117] border border-[#1A2030] rounded-lg px-4 py-3 text-white placeholder-[#6B7A90]/30 focus:border-[#FF1F23] focus:outline-none resize-none font-mono text-sm" />
                </>
              )}

              {uploadError && (
                <div className="mt-4 p-3 rounded-lg bg-[#FF1F23]/10 border border-[#FF1F23]/30">
                  <p className="text-xs text-[#FF1F23]">{uploadError}</p>
                </div>
              )}

              <button onClick={handleAnalyze} disabled={uploading || (uploadMode === "file" ? !file : !pasteText.trim())}
                className={`gx-btn-primary w-full justify-center flex items-center gap-2 mt-6 ${(uploadMode === "file" ? !file : !pasteText.trim()) ? "opacity-40 cursor-not-allowed" : ""}`}>
                {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
                {uploading ? "Analyzing..." : "Run Bloodwork Engine"}
              </button>
            </div>

            <button onClick={() => setStep("profile")} className="mt-6 text-sm text-[#6B7A90] hover:text-white flex items-center gap-1 mx-auto">
              <ChevronLeft className="w-4 h-4" /> Back to Profile
            </button>
          </div>
        </section>
      )}

      {/* PROCESSING */}
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

      {/* RESULTS */}
      {step === "results" && (
        <section className="gx-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8">
            {/* Engine summary */}
            {engineSummary && (
              <div className="gx-card p-6">
                <h3 className="text-sm font-bold text-white mb-4">Bloodwork Engine Summary</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Markers Found", value: engineSummary.summary?.total || engineSummary.markers || 0, color: "text-white" },
                    { label: "In Range", value: engineSummary.summary?.in_range || 0, color: "text-[#00E676]" },
                    { label: "Out of Range", value: engineSummary.summary?.out_of_range || 0, color: "text-[#FF9500]" },
                    { label: "Safety Gates", value: engineSummary.safety_gates || 0, color: engineSummary.safety_gates > 0 ? "text-[#FF1F23]" : "text-[#00E676]" },
                  ].map((s, i) => (
                    <div key={i} className="bg-[#0D1117] rounded-lg p-4 text-center">
                      <div className={`font-mono text-2xl font-bold ${s.color}`}>{s.value}</div>
                      <div className="text-xs text-[#6B7A90] mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                {engineSummary.require_review && (
                  <div className="mt-4 p-3 rounded-lg bg-[#FF9500]/10 border border-[#FF9500]/30 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#FF9500]" />
                    <span className="text-xs text-[#FF9500]">Some results require clinical review before protocol generation.</span>
                  </div>
                )}
              </div>
            )}

            {/* Biomarkers */}
            <div className="gx-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-[#009BFF]" />
                <h3 className="text-sm font-bold text-white">Extracted Biomarkers ({markers.length})</h3>
              </div>
              {markers.length > 0 ? (
                <div className="grid gap-2">
                  {markers.map((m, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-[#0D1117]">
                      <span className="text-sm text-white font-mono">{m.code}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white font-bold">{m.value}</span>
                        <span className="text-xs text-[#6B7A90]">{m.unit}</span>
                        {m.confidence !== undefined && (
                          <span className={`text-xs font-mono px-2 py-0.5 rounded ${m.confidence >= 0.9 ? "bg-[#00E676]/20 text-[#00E676]" : "bg-[#FF9500]/20 text-[#FF9500]"}`}>
                            {(m.confidence * 100).toFixed(0)}%
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-[#6B7A90]">No biomarkers could be extracted. Please try the Text Paste option with your lab values.</p>
              )}
            </div>

            {/* CTA */}
            <div className="text-center space-y-4">
              <Link to="/pricing" className="gx-btn-primary inline-flex items-center gap-2">
                Choose Your Protocol Tier <ArrowRight className="w-4 h-4" />
              </Link>
              <div>
                <button onClick={() => { setStep("upload"); setFile(null); setPasteText(""); setMarkers([]); setEngineSummary(null); }} className="text-sm text-[#6B7A90] hover:text-white">
                  Upload Different Results
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How it works footer */}
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
