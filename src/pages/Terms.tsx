const Terms = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1>Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using GenoMAX² services, you agree to be bound by these Terms of Service. 
            If you do not agree to these terms, do not use our services.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            GenoMAX² provides personalized, gender-specific supplement protocols based on biomarker analysis 
            and health assessments. We are not a medical provider and do not diagnose, treat, or cure diseases.
          </p>

          <h2>3. Eligibility</h2>
          <p>
            You must be at least 18 years old to use our services. By using GenoMAX², you represent that you 
            meet this age requirement.
          </p>

          <h2>4. Account Registration</h2>
          <ul>
            <li>You must provide accurate and complete information</li>
            <li>You are responsible for maintaining account security</li>
            <li>You must notify us immediately of any unauthorized access</li>
            <li>You may not share your account credentials</li>
          </ul>

          <h2>5. Subscription and Billing</h2>
          <ul>
            <li>Subscriptions renew automatically unless cancelled</li>
            <li>You may cancel at any time before your next billing date</li>
            <li>Refunds are provided according to our refund policy</li>
            <li>We reserve the right to change pricing with advance notice</li>
          </ul>

          <h2>6. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate health information</li>
            <li>Consult with healthcare providers before starting any supplement protocol</li>
            <li>Inform us of any adverse reactions or concerns</li>
            <li>Use the service only for lawful purposes</li>
            <li>Not attempt to reverse engineer or compromise our platform</li>
          </ul>

          <h2>7. Intellectual Property</h2>
          <p>
            All content, algorithms, trademarks, and other intellectual property on our platform are owned 
            by GenoMAX² or our licensors. You may not copy, modify, or distribute our content without 
            written permission.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            GenoMAX² is not liable for:
          </p>
          <ul>
            <li>Any health outcomes or adverse reactions from supplement use</li>
            <li>Decisions made based on our recommendations</li>
            <li>Service interruptions or technical issues</li>
            <li>Third-party actions or products</li>
          </ul>
          <p>
            Our total liability shall not exceed the amount you paid us in the 12 months preceding any claim.
          </p>

          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold GenoMAX² harmless from any claims, damages, or expenses arising 
            from your use of our services or violation of these terms.
          </p>

          <h2>10. Termination</h2>
          <p>
            We may suspend or terminate your account if you violate these terms. You may terminate your 
            account at any time by contacting us.
          </p>

          <h2>11. Dispute Resolution</h2>
          <p>
            Any disputes shall be resolved through binding arbitration in accordance with the rules of 
            the American Arbitration Association. You waive the right to participate in class actions.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We may modify these terms at any time. Continued use of our services after changes constitutes 
            acceptance of the new terms.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of Delaware, United States, without regard 
            to conflict of law principles.
          </p>

          <h2>14. Contact Information</h2>
          <p>
            Questions about these terms? Contact us at:
            <br />
            Email: legal@genomax2.ai
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
