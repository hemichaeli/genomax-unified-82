const Disclaimer = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1>Medical Disclaimer</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 not-prose mb-8">
            <p className="text-sm font-medium">
              IMPORTANT: GenoMAX² is not a medical provider. Our protocols are educational and informational. 
              Always consult qualified healthcare professionals before making health decisions.
            </p>
          </div>

          <h2>Not Medical Advice</h2>
          <p>
            The information, protocols, and recommendations provided by GenoMAX² are for educational and 
            informational purposes only. They do not constitute medical advice, diagnosis, or treatment.
          </p>
          <ul>
            <li>We are not licensed healthcare providers</li>
            <li>Our protocols are not intended to replace medical advice</li>
            <li>We do not diagnose, treat, cure, or prevent any disease</li>
            <li>Individual results may vary significantly</li>
          </ul>

          <h2>Consult Healthcare Professionals</h2>
          <p>
            Before starting any supplement protocol, you should:
          </p>
          <ul>
            <li>Consult with your physician or qualified healthcare provider</li>
            <li>Discuss any existing medical conditions or medications</li>
            <li>Obtain appropriate blood work and testing</li>
            <li>Follow your healthcare provider's recommendations</li>
          </ul>

          <h2>Biomarker Interpretation</h2>
          <p>
            Our analysis of blood biomarkers:
          </p>
          <ul>
            <li>Is based on general reference ranges and may not apply to your specific situation</li>
            <li>Should not replace professional medical interpretation</li>
            <li>May not account for all relevant medical factors</li>
            <li>Is provided as educational information, not medical diagnosis</li>
          </ul>

          <h2>Supplement Safety</h2>
          <p>
            Dietary supplements:
          </p>
          <ul>
            <li>Are not evaluated by the FDA for safety or efficacy</li>
            <li>May interact with medications or medical conditions</li>
            <li>Should be used as directed and not exceeded without professional guidance</li>
            <li>May cause adverse reactions in some individuals</li>
            <li>Are not substitutes for a healthy diet and lifestyle</li>
          </ul>

          <h2>Individual Variability</h2>
          <p>
            Health outcomes vary significantly between individuals due to:
          </p>
          <ul>
            <li>Genetics and individual biochemistry</li>
            <li>Existing health conditions</li>
            <li>Lifestyle factors</li>
            <li>Medication interactions</li>
            <li>Adherence to protocols</li>
          </ul>
          <p>
            Results referenced in our materials reflect general research findings and do not guarantee 
            individual outcomes.
          </p>

          <h2>Medical Emergencies</h2>
          <p>
            GenoMAX² is not for medical emergencies. If you experience:
          </p>
          <ul>
            <li>Severe adverse reactions to supplements</li>
            <li>Acute health symptoms</li>
            <li>Medical emergencies of any kind</li>
          </ul>
          <p>
            <strong>Seek immediate medical attention by calling emergency services or visiting an emergency room.</strong>
          </p>

          <h2>Research References</h2>
          <p>
            While we reference clinical research to support our protocols:
          </p>
          <ul>
            <li>Research findings may not apply to all individuals</li>
            <li>Scientific understanding evolves over time</li>
            <li>Individual responses to interventions vary</li>
            <li>Correlation does not imply causation</li>
          </ul>

          <h2>Liability Disclaimer</h2>
          <p>
            By using GenoMAX² services, you acknowledge that:
          </p>
          <ul>
            <li>You assume full responsibility for decisions based on our information</li>
            <li>We are not liable for health outcomes or adverse reactions</li>
            <li>You will consult healthcare professionals for medical advice</li>
            <li>You understand the limitations of our educational services</li>
          </ul>

          <h2>Continuing Medical Care</h2>
          <p>
            GenoMAX² protocols are designed to complement, not replace, ongoing medical care. Continue to:
          </p>
          <ul>
            <li>Maintain regular check-ups with your healthcare providers</li>
            <li>Take prescribed medications as directed</li>
            <li>Follow medical advice from qualified professionals</li>
            <li>Inform your doctors of any supplements you're taking</li>
          </ul>

          <h2>Questions or Concerns</h2>
          <p>
            If you have medical questions or health concerns, contact your healthcare provider. 
            For questions about our service:
            <br />
            Email: support@genomax2.ai
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
