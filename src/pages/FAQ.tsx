import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const faqData = [
  {
    id: "what-is",
    question: "What is GenoMAX²?",
    answer: "GenoMAX² is a Gender-Optimized Biological Operating System. We're not a supplement subscription - we create personalized protocols based on your actual blood biomarkers, with separate optimization pathways for male and female biology."
  },
  {
    id: "how-different",
    question: "How is this different from other supplement companies?",
    answer: "Most companies use quizzes or DNA tests (which multiple studies show provide zero benefit). We use real blood biomarkers to see what your body actually needs right now. Plus, your protocol evolves as you improve - you're not stuck with the same supplements forever."
  },
  {
    id: "dna-vs-biomarkers",
    question: "Why biomarkers instead of DNA testing?",
    answer: "Clinical trials with 524,592+ participants show DNA-based supplement recommendations provide no measurable benefit over standard advice. Your genes might suggest predispositions, but your blood work shows what's actually happening in your body right now. That's what matters for supplementation."
  },
  {
    id: "gender-specific",
    question: "Why gender-specific protocols?",
    answer: "Male and female biology is fundamentally different. Women have 2-3x higher iron needs due to menstruation, different bone density timelines, hormone cycling that affects nutrient needs, and distinct inflammatory patterns. Men have different cardiovascular risk profiles, testosterone optimization needs, and metabolic patterns. One-size-fits-all never worked."
  },
  {
    id: "no-blood-work",
    question: "What if I don't have recent blood work?",
    answer: "No problem! Start with our comprehensive health assessment and we'll recommend which blood tests to get. We can also provide a basic protocol based on your assessment while you arrange testing with your doctor or a local lab."
  },
  {
    id: "which-tests",
    question: "Which blood tests do I need?",
    answer: "Ideal: comprehensive metabolic panel, lipid panel, vitamin D, iron studies (ferritin, serum iron, TIBC), hsCRP, and omega-3 index. But we can work with whatever blood work you have. Most people get these tests through their regular doctor as part of annual checkups."
  },
  {
    id: "how-long",
    question: "How long until I see results?",
    answer: "Depends on what you're optimizing. Energy and sleep improvements often show within 2-4 weeks. Biomarker changes (vitamin D, iron, inflammation) typically take 8-12 weeks. We recommend retesting every 3-6 months to track progress and adjust your protocol."
  },
  {
    id: "subscription",
    question: "Is this a subscription?",
    answer: "Yes, but not like traditional supplement subscriptions. Your protocol changes as your biomarkers improve. When you've optimized a marker (say, vitamin D is now perfect), we remove that supplement. The goal is continuous optimization, not selling you the same bottles forever."
  },
  {
    id: "cost",
    question: "How much does it cost?",
    answer: "Protocols are personalized, so pricing varies based on which modules your biomarkers indicate. Most protocols fall between $89-$169/month. Compare that to the $150-300/month most people spend on random supplements that may not match what their body actually needs. We'll show you exact pricing after your assessment, before you commit to anything."
  },
  {
    id: "organizations",
    question: "Do you work with companies or medical practices?",
    answer: "Yes! We have programs for corporate wellness, functional medicine practices, and sports teams. Visit our Organizations page or contact us for details."
  },
];

const FAQ = () => {
  useEffect(() => {
    // Inject FAQ JSON-LD structured data
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    script.id = 'faq-jsonld';
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById('faq-jsonld');
      if (existing) existing.remove();
    };
  }, []);

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
              Everything you need to know about Geno<span className="text-[#FF2A2A]">MAX</span>²
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.id === "organizations" ? (
                    <>
                      Yes! We have programs for corporate wellness, functional medicine practices, and sports teams.
                      Visit our <Link to="/organizations" className="text-primary hover:underline">Organizations page</Link> or
                      contact us for details.
                    </>
                  ) : (
                    faq.answer
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
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
