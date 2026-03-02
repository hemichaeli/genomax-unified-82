import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Manifesto = () => (
  <div className="min-h-screen bg-[#05070A]">
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      {/* Header */}
      <header className="text-center mb-16">
        <p className="text-xs font-mono text-[#FF1F23] tracking-[0.3em] mb-4">THE MANIFESTO</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          Why We Built an AI-Powered Biological Operating System Instead of Another Supplement Brand
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

        {/* NEW: AI Brain Section */}
        <Section title="The Brain: AI That Thinks in Biology">
          <P>Raw blood data is necessary. It is not sufficient. A list of biomarker values is just numbers until something interprets them in clinical context, weighs them against each other, resolves conflicts between competing priorities, and produces a coherent action plan. That something is the GenoMAX&#178; Brain.</P>
          <P>The Brain is an AI-powered clinical intelligence layer that sits between your blood data and your protocol. It does not simply match low values to supplements. It reasons. When your iron is low but your CRP is elevated, the Brain recognizes that the iron reading may be suppressed by acute inflammation and holds iron supplementation until the next blood draw confirms true deficiency. When your vitamin D is suboptimal but you are already taking a calcium-heavy protocol, the Brain adjusts dosing to avoid hypercalcemia risk. When your homocysteine is elevated, it does not blindly add B12. It cross-references your methylation markers, checks for MTHFR-related context, evaluates your folate and B6 status, and composes a methylation support protocol where every component has a clinical reason to be there.</P>
          <P>This is not a lookup table. It is not a decision tree with fixed branches. The Brain orchestrates across every biomarker, every safety gate, every nutrient interaction, and every gender-specific consideration simultaneously, producing a protocol that no human practitioner could assemble as quickly or as consistently.</P>
          <P>The AI layer also powers the explainability engine. Every module in your protocol comes with a plain-language explanation of why it was selected, what biomarker triggered it, what evidence supports it, and what the expected outcome is. You do not take anything on faith. You take it because the Brain showed you the reasoning.</P>
          <P className="text-white font-bold">Other companies give you a list. GenoMAX&#178; gives you a mind that understands your biology.</P>
        </Section>

        {/* NEW: Living System Section */}
        <Section title="A Living System, Not a Static Prescription">
          <P>Here is the fundamental problem with every other supplement recommendation service: they hand you a protocol and walk away. Whether it comes from a questionnaire, a DNA test, or even a single blood draw, the output is a snapshot. A frozen moment. And biology does not freeze.</P>
          <P className="text-white font-bold text-lg">Your body changes. Your protocol must change with it.</P>
          <P>You age. Your hormonal profile shifts. You start a new medication. You develop a new health concern. You go through a period of high stress that alters your cortisol and inflammatory markers. You move to a different climate that changes your vitamin D synthesis. You shift your diet. You get pregnant. You enter perimenopause. You train for a marathon. You recover from surgery.</P>
          <P>Every one of these changes alters what your body needs. A protocol generated six months ago from a single blood draw is already wrong. Not slightly wrong. Fundamentally wrong, because the biology it was calibrated to no longer exists.</P>
          <P>GenoMAX&#178; is architected for continuous adaptation. Every quarterly blood draw feeds new data into the Bloodwork Engine. The Brain re-evaluates your entire protocol against your current biology, not your historical biology. Modules are added, removed, or re-dosed. Dosing windows shift. Safety gates activate or deactivate as your biomarkers move. Your trend dashboard shows you exactly how each marker has changed and what the Brain did about it.</P>

          <div className="my-8 p-6 rounded-lg border border-[#1A2030] bg-[#0A0E1A]">
            <p className="text-xs font-mono text-[#FF1F23] mb-3 tracking-wider">THE SYSTEM EVOLVES ON TWO AXES</p>
            <div className="space-y-4">
              <div>
                <p className="text-white font-bold mb-1" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Your biology evolves.</p>
                <p className="text-sm text-[#6B7A90]">New blood work. New conditions. New medications. Age-related shifts. Lifestyle changes. Pregnancy, menopause, training cycles, recovery periods. The Brain recalibrates your protocol every time new data arrives.</p>
              </div>
              <div className="border-t border-[#1A2030] pt-4">
                <p className="text-white font-bold mb-1" style={{ fontFamily: "'Inter Tight', sans-serif" }}>The science evolves.</p>
                <p className="text-sm text-[#6B7A90]">New meta-analyses published. New biomarkers validated. New safety signals identified. New supplement formulations approved. New drug-nutrient interactions discovered. The platform absorbs new clinical evidence continuously, and your protocol benefits from it automatically.</p>
              </div>
            </div>
          </div>

          <P>This is why a one-time recommendation from any service, including ours, is inherently incomplete. The value of GenoMAX&#178; is not in the first protocol. It is in the tenth. The twentieth. It is in the compounding intelligence that comes from tracking your biology over months and years, building a longitudinal dataset of your unique biomarker responses, and continuously refining what works specifically for you.</P>
          <P>A cheaper alternative can give you a list of supplements based on today's blood work. It cannot give you a system that remembers your ferritin was 180 ng/mL eight months ago, dropped to 65 after the Brain removed iron, and is now holding steady at 72. It cannot warn you that your current medication change will interact with three modules in your protocol. It cannot tell you that your vitamin D consistently drops every winter and preemptively adjust your dose in October.</P>
          <P className="text-white font-bold">Static recommendations expire. Living systems compound.</P>
        </Section>

        {/* Updated: BioOS Section with AI emphasis */}
        <Section title="An AI-Powered Biological Operating System">
          <P>We did not build another supplement brand. We built an AI-powered Biological Operating System.</P>
          <P>The distinction matters. Supplement brands sell products. Operating systems process inputs, apply intelligence, and generate outputs that improve over time. Supplement brands have ingredient lists. Operating systems have engines, safety architectures, AI brains, and protocol generators. Supplement brands compete on marketing. Operating systems compete on accuracy, adaptability, and the depth of their intelligence layer.</P>
          <P>GenoMAX&#178; processes your blood biomarker data through the Bloodwork Engine, a deterministic interpretation system that maps 41 biomarkers through 31 safety gates, applies gender-specific reference ranges, and computes derived markers like HOMA-IR and zinc-to-copper ratios. That assessment feeds into the Brain, which orchestrates constraint resolution, nutrient interaction logic, and evidence-weighted module selection to compose a protocol unique to your current biology.</P>
          <P>The Brain does not stop working after your protocol is generated. It monitors adherence patterns through MAXync&#178;. It flags when retesting is due. It absorbs new clinical evidence as the platform's research pipeline validates new biomarkers, new safety signals, and new modules. When you retest, the Brain does not start from scratch. It builds on everything it already knows about you.</P>
          <P>Every user who retests adds another data point to the platform's understanding of how specific biomarkers respond to specific interventions in specific demographics. Over time, the AI layer does not just personalize to you. It learns patterns across thousands of users, refining its recommendations with real-world outcome data that no clinical trial can replicate at this scale.</P>
          <P className="text-white font-bold">The longer you stay, the smarter the system gets for you. That is not a marketing claim. It is an architectural fact.</P>
        </Section>

        <Section title="The Category We Are Creating">
          <P>There is no existing market category for what GenoMAX&#178; does. Personalized supplements exist. Blood test companies exist. AI health platforms exist. But no platform combines real-time blood biomarker interpretation, gender-optimized formulation logic, AI-powered clinical orchestration, and chronobiology-based dosing into a single deterministic system with hard safety enforcement and continuous adaptation.</P>
          <P className="text-white font-bold text-lg">We are not entering a market. We are creating one.</P>
          <P>The category is Gender-Optimized Biological Operating Systems. It does not exist yet. When it does, GenoMAX&#178; will be the company that defined it, named it, and set its standards.</P>
          <P>Research on category creation shows that the company that defines a new category captures approximately 76% of the total market value in that space. The company that arrives second captures a fraction. The company that arrives third captures nearly nothing.</P>
          <P>This is not arrogance. It is arithmetic.</P>
        </Section>

        <Section title="Your Blood Speaks. The Brain Listens. Your Protocol Evolves.">
          <P>If you are currently taking supplements chosen by a questionnaire, you are guessing. If you are taking supplements chosen by a DNA test, you are guessing with more expensive data. If you are taking the same formula as the opposite sex, you are ignoring half of what makes your biology unique. If you took a blood test once, got a list, and never retested, you are running on outdated instructions while your biology moved on without you.</P>
          <P>GenoMAX&#178; exists because we refused to accept any of these compromises. We refused to sell supplements. We refused to guess. We refused to let commercial incentives override clinical data. And we refused to build a system that becomes irrelevant the day after it delivers its first recommendation.</P>
          <P>We built an AI-powered operating system that reads your blood, applies gender-specific clinical intelligence, composes a deterministic protocol, and then keeps watching, keeps learning, keeps adapting as your biology changes and as science advances.</P>
          <P className="text-xl text-white font-bold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Your blood speaks. The Brain listens. Your protocol evolves.</P>
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
