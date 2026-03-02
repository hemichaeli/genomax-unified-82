import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Manifesto = () => (
  <div className="min-h-screen bg-[#05070A]">
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      {/* Header */}
      <header className="text-center mb-16">
        <p className="text-xs font-mono text-[#FF1F23] tracking-[0.3em] mb-4">THE MANIFESTO</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          Why We Built a Biological Operating System Instead of Another Supplement Brand
        </h1>
        <p className="text-2xl font-bold text-[#FF1F23]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          Blood does not negotiate.
        </p>
      </header>

      {/* Body */}
      <div className="space-y-12 text-[#A0AEC0] text-base leading-relaxed">
        <Section title="The $46 Billion Guess">
          <P>The personalized supplement industry is projected to reach $46.87 billion by 2032. It is built almost entirely on guessing.</P>
          <P>Questionnaires ask you how you feel. DNA tests read static predispositions that may never express. Marketing teams select ingredients based on trending search terms and margin targets. Then the entire apparatus delivers a monthly pouch of capsules and calls it personalized.</P>
          <P>This is not personalization. It is segmentation dressed in clinical language.</P>
          <P>We studied the data. We analyzed 524,592 clinical trial participants across the largest meta-analyses and systematic reviews available in the literature. The conclusion was unambiguous: DNA-based supplement recommendations provide no additional benefit beyond standard dietary assessment. The effect sizes were negligible. The confidence intervals overlapped with placebo.</P>
          <P>Meanwhile, the single most clinically reliable data source for nutrient optimization was being used superficially or ignored entirely.</P>
          <P className="text-white font-bold text-lg">Blood biomarkers.</P>
        </Section>

        <Section title="What Blood Actually Tells You">
          <P>A comprehensive metabolic panel reveals more about your current biological state than any DNA test, wearable device, or symptom questionnaire combined. Ferritin tells you if your iron stores are depleted or dangerously elevated. 25-hydroxyvitamin D tells you whether your body can absorb calcium, regulate immune function, and modulate gene expression. Homocysteine tells you if your methylation cycle is functioning or if you are accumulating a cardiovascular risk factor with every passing week.</P>
          <P>These are not abstract risk scores. They are real-time measurements of biochemical processes happening inside your body right now.</P>
          <P>Blood does not guess. Blood does not rely on self-reported symptoms. Blood does not care about your marketing preferences.</P>
          <P className="text-white font-bold">And blood is gender-specific.</P>
        </Section>

        <Section title="The Unisex Lie">
          <P>The supplement industry treats human biology as a single category. Male and female physiology are collapsed into one formulation, one dosing schedule, one recommendation engine.</P>
          <P className="text-white font-bold">This is not a simplification. It is negligence.</P>
          <P>Iron metabolism differs fundamentally between sexes. Premenopausal women require dramatically different iron intake than men, and supplementing iron when ferritin is already elevated creates oxidative stress and organ damage. Hormonal cycling in women creates predictable fluctuations in micronutrient needs that no unisex protocol accounts for. Thyroid sensitivity, estrogen metabolism, testosterone optimization, bone mineral density trajectories, and cardiovascular risk profiles all diverge significantly between male and female biology.</P>
          <P>A supplement protocol that ignores these differences is not personalized. It is a generic product with your name printed on the label.</P>
          <P>GenoMAX&#178; operates two distinct product lines for this reason. <span className="text-[#00AEEF] font-bold">MAXimo&#178;</span> is engineered for male biology. <span className="text-[#E6007A] font-bold">MAXima&#178;</span> is engineered for female biology. These are not the same formula in different colored packaging. They are fundamentally different protocols derived from fundamentally different biological logic.</P>
        </Section>

        <Section title="Why Timing Is Not a Feature">
          <P>Most supplement companies include a note on the bottle: take with food. None of them engineer their protocols around the clinical reality that nutrient absorption is a competitive process governed by timing, stomach state, and co-ingestion.</P>
          <P>Iron blocks zinc absorption. Calcium competes with magnesium for the same transport channels. Fat-soluble vitamins require dietary fat for bioavailability, making fasted consumption wasteful. Certain B vitamins taken before sleep interfere with circadian rhythms.</P>
          <P>These are not edge cases. They are well-established pharmacokinetic interactions documented across thousands of clinical studies.</P>
          <P>GenoMAX&#178; separates every protocol into three dosing windows: <span className="text-white font-mono text-sm">morning fasted</span>, <span className="text-white font-mono text-sm">midday with food</span>, and <span className="text-white font-mono text-sm">evening before sleep</span>. Each module is assigned to its optimal window based on absorption kinetics, nutrient interactions, and chronobiology. This is not a convenience feature. It is a clinical requirement.</P>
        </Section>

        <Section title="Safety Gates, Not Suggestions">
          <P>When your ferritin is above 200 ng/mL, GenoMAX&#178; does not suggest reducing iron. It blocks iron-containing modules from your protocol. Completely. Non-negotiably. There is no override button. There is no user preference that supersedes the blood data.</P>
          <P>We call these Safety Gates. There are 31 of them in the current Bloodwork Engine, operating across three tiers. Tier 1 gates enforce hard blocks for clinically dangerous situations. Tier 2 gates optimize for efficacy. Tier 3 gates incorporate hormonal and genetic context when available.</P>
          <P>We permanently rejected ingredients with documented safety risks regardless of their efficacy data. Ashwagandha, one of the most popular and profitable supplements in the market, was excluded from our catalog after reviewing systematic safety data documenting hepatotoxicity events including three deaths and one liver transplant. The margin potential was significant. The clinical risk was unacceptable.</P>
          <P className="text-white font-bold">No ingredient enters a GenoMAX&#178; protocol because it is profitable. It enters because the evidence demands it and the safety data permits it.</P>
        </Section>

        <Section title="A Biological Operating System">
          <P>We did not build another supplement brand. We built a Biological Operating System.</P>
          <P>The distinction matters. Supplement brands sell products. Operating systems process inputs, apply logic, and generate outputs. Supplement brands have ingredient lists. Operating systems have engines, safety architectures, and protocol generators. Supplement brands compete on marketing. Operating systems compete on accuracy, reliability, and the depth of their intelligence layer.</P>
          <P>GenoMAX&#178; processes your blood biomarker data through the Bloodwork Engine, a deterministic interpretation system that maps 41 biomarkers through 31 safety gates, applies gender-specific reference ranges, computes derived markers like HOMA-IR and zinc-to-copper ratios, and produces a complete assessment of your current biological state.</P>
          <P>The system then monitors adherence, prompts quarterly retesting, displays biomarker trends over time, and adjusts your protocol based on how your biology actually responds. The longer you use the system, the more personalized it becomes. Not because of an algorithm learning your preferences, but because your longitudinal blood data creates an increasingly precise picture of your biochemistry.</P>
        </Section>

        <Section title="The Category We Are Creating">
          <P>There is no existing market category for what GenoMAX&#178; does. Personalized supplements exist. Blood test companies exist. Supplement companies that offer blood tests exist. But no platform combines real-time blood biomarker interpretation, gender-optimized formulation logic, and chronobiology-based dosing into a single deterministic system with hard safety enforcement.</P>
          <P className="text-white font-bold text-lg">We are not entering a market. We are creating one.</P>
          <P>The category is Gender-Optimized Biological Operating Systems. It does not exist yet. When it does, GenoMAX&#178; will be the company that defined it, named it, and set its standards.</P>
        </Section>

        <Section title="Your Blood Speaks. We Listen.">
          <P>If you are currently taking supplements chosen by a questionnaire, you are guessing. If you are taking supplements chosen by a DNA test, you are guessing with more expensive data. If you are taking the same formula as the opposite sex, you are ignoring half of what makes your biology unique.</P>
          <P>GenoMAX&#178; exists because we refused to accept any of these compromises. We refused to sell supplements. We refused to guess. We refused to let commercial incentives override clinical data.</P>
          <P>We built a system that reads your blood, applies gender-specific clinical intelligence, and outputs a deterministic protocol that evolves with your biology.</P>
          <P className="text-xl text-white font-bold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Your blood speaks. We listen. Your protocol follows.</P>
        </Section>
      </div>

      {/* CTA */}
      <div className="mt-16 pt-8 border-t border-[#1A2030] text-center space-y-4">
        <Link to="/assessment" className="gx-btn-primary inline-flex items-center gap-2">
          Initialize Your Protocol <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-xs text-[#6B7A90]">Blood does not negotiate. Neither does category leadership.</p>
      </div>
    </article>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h2 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{title}</h2>
    <div className="space-y-4">{children}</div>
  </section>
);

const P = ({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
  <p className={`leading-relaxed ${className}`} style={style}>{children}</p>
);

export default Manifesto;
