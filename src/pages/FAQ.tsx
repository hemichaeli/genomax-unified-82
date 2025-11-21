import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about GenoMAX²
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="what-is">
              <AccordionTrigger className="text-lg font-semibold">
                What is GenoMAX²?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                GenoMAX² is a Gender-Optimized Biological Operating System. We're not a supplement subscription - we create 
                personalized protocols based on your actual blood biomarkers, with separate optimization pathways for male 
                and female biology.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-different">
              <AccordionTrigger className="text-lg font-semibold">
                How is this different from other supplement companies?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Most companies use quizzes or DNA tests (which multiple studies show provide zero benefit). We use real blood 
                biomarkers to see what your body actually needs right now. Plus, your protocol evolves as you improve - you're 
                not stuck with the same supplements forever.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="dna-vs-biomarkers">
              <AccordionTrigger className="text-lg font-semibold">
                Why biomarkers instead of DNA testing?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Clinical trials with 524,592+ participants show DNA-based supplement recommendations provide no measurable 
                benefit over standard advice. Your genes might suggest predispositions, but your blood work shows what's 
                actually happening in your body right now. That's what matters for supplementation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="gender-specific">
              <AccordionTrigger className="text-lg font-semibold">
                Why gender-specific protocols?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Male and female biology is fundamentally different. Women have 2-3x higher iron needs due to menstruation, 
                different bone density timelines, hormone cycling that affects nutrient needs, and distinct inflammatory patterns. 
                Men have different cardiovascular risk profiles, testosterone optimization needs, and metabolic patterns. 
                One-size-fits-all never worked.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="no-blood-work">
              <AccordionTrigger className="text-lg font-semibold">
                What if I don't have recent blood work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No problem! Start with our comprehensive health assessment and we'll recommend which blood tests to get. 
                We can also provide a basic protocol based on your assessment while you arrange testing with your doctor 
                or a local lab.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="which-tests">
              <AccordionTrigger className="text-lg font-semibold">
                Which blood tests do I need?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Ideal: comprehensive metabolic panel, lipid panel, vitamin D, iron studies (ferritin, serum iron, TIBC), 
                hsCRP, and omega-3 index. But we can work with whatever blood work you have. Most people get these tests 
                through their regular doctor as part of annual checkups.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-long">
              <AccordionTrigger className="text-lg font-semibold">
                How long until I see results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Depends on what you're optimizing. Energy and sleep improvements often show within 2-4 weeks. Biomarker 
                changes (vitamin D, iron, inflammation) typically take 8-12 weeks. We recommend retesting every 3-6 months 
                to track progress and adjust your protocol.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="subscription">
              <AccordionTrigger className="text-lg font-semibold">
                Is this a subscription?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, but not like traditional supplement subscriptions. Your protocol changes as your biomarkers improve. 
                When you've optimized a marker (say, vitamin D is now perfect), we remove that supplement. The goal is 
                continuous optimization, not selling you the same bottles forever.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cost">
              <AccordionTrigger className="text-lg font-semibold">
                How much does it cost?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Pricing depends on your specific protocol, but most people are already spending $150-300/month on random 
                supplements. GenoMAX² typically costs less while being far more effective because you're only taking what 
                you actually need based on your biomarkers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="organizations">
              <AccordionTrigger className="text-lg font-semibold">
                Do you work with companies or medical practices?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes! We have programs for corporate wellness, functional medicine practices, and sports teams. 
                Visit our <Link to="/organizations" className="text-primary hover:underline">Organizations page</Link> or 
                contact us for details.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* CTA */}
          <div className="text-center space-y-6 py-8 border-t">
            <h2 className="text-2xl md:text-3xl font-bold">
              Still have questions?
            </h2>
            <p className="text-muted-foreground">
              Start your assessment or upload your blood work to get personalized answers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/upload">
                <Button size="lg">Upload Blood Work</Button>
              </Link>
              <Link to="/assessment">
                <Button size="lg" variant="outline">Start Assessment</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
