import { Link } from "react-router-dom";
import { ArrowRight, Beaker, Zap, Activity } from "lucide-react";

const articles = [
  {
    slug: "dna-test-supplements",
    title: "Why Your DNA Test Cannot Tell You What Supplements to Take",
    subtitle: "524,592 clinical trial participants. Zero additional benefit.",
    icon: Beaker,
    color: "#FF1F23",
    readTime: "8 min read",
    summary:
      "The personalized supplement industry charges $115-$200 for DNA tests that produce outcomes indistinguishable from a five-minute questionnaire. We analyzed the largest meta-analyses available. The data is unambiguous.",
  },
  {
    slug: "nutrient-interactions",
    title: "The 3 Nutrient Interactions Your Supplement Brand Ignores",
    subtitle: "Iron blocks zinc. Calcium fights magnesium. Timing is clinical.",
    icon: Zap,
    color: "#FFD600",
    readTime: "6 min read",
    summary:
      "Most supplement companies print 'take with food' on the label and call it guidance. The pharmacokinetic reality is that absorption is a competitive process governed by timing, stomach state, and co-ingestion.",
  },
  {
    slug: "blood-work-biology",
    title: "What Your Blood Work Really Means for Your Biology",
    subtitle: "Real-time biochemistry vs. static predispositions.",
    icon: Activity,
    color: "#009BFF",
    readTime: "10 min read",
    summary:
      "A comprehensive metabolic panel reveals more about your current biological state than any DNA test, wearable device, or symptom questionnaire combined. Here is what each biomarker actually tells you.",
  },
];

const Learn = () => (
  <div className="min-h-screen bg-[#05070A]">
    <section className="gx-hero pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="gx-safety-badge mx-auto w-fit mb-6">
          <Beaker className="w-3 h-3" />
          <span>Category Education</span>
        </div>
        <h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          Learn Why the Old Way Is Broken
        </h1>
        <p className="text-lg text-[#6B7A90] max-w-2xl mx-auto">
          Research-backed analysis of what the supplement industry gets wrong
          and why blood biomarkers, gender optimization, and chronobiology
          change everything.
        </p>
      </div>
    </section>

    <section className="gx-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              to={`/learn/${a.slug}`}
              className="gx-card p-8 block group hover:border-white/10 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: `${a.color}15` }}
                  >
                    <a.icon className="w-7 h-7" style={{ color: a.color }} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{
                        color: a.color,
                        background: `${a.color}15`,
                      }}
                    >
                      {a.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF1F23] transition-colors">
                    {a.title}
                  </h2>
                  <p className="text-sm text-[#6B7A90]/80 italic mb-3">
                    {a.subtitle}
                  </p>
                  <p className="text-sm text-[#6B7A90] leading-relaxed">
                    {a.summary}
                  </p>
                  <div className="mt-4 text-xs text-[#FF1F23] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read article{" "}
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="gx-section-surface text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl font-bold text-white mb-4"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          Ready to Stop Guessing?
        </h2>
        <p className="text-[#6B7A90] mb-8 max-w-xl mx-auto">
          Your blood speaks. We listen. Your protocol follows.
        </p>
        <Link
          to="/assessment"
          className="gx-btn-primary inline-flex items-center gap-2"
        >
          Initialize Your Protocol <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default Learn;
