const Privacy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

          <h2>1. Information We Collect</h2>
          <p>
            GenoMAX² collects information you provide directly to us, including:
          </p>
          <ul>
            <li>Personal information (name, email, age, biological sex)</li>
            <li>Health information (blood work results, health goals, symptoms)</li>
            <li>Account information (login credentials, preferences)</li>
            <li>Usage data (how you interact with our platform)</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Create personalized, gender-specific supplement protocols</li>
            <li>Track your biomarker progress over time</li>
            <li>Improve our algorithms and recommendations</li>
            <li>Communicate with you about your protocol and account</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. HIPAA Compliance</h2>
          <p>
            GenoMAX² is HIPAA compliant. Your health information is:
          </p>
          <ul>
            <li>Encrypted in transit and at rest</li>
            <li>Stored on secure, HIPAA-compliant servers</li>
            <li>Accessible only to authorized personnel</li>
            <li>Never sold to third parties</li>
            <li>Only used for the purposes you've authorized</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures including:
          </p>
          <ul>
            <li>End-to-end encryption for all health data</li>
            <li>Regular security audits and penetration testing</li>
            <li>Multi-factor authentication options</li>
            <li>Secure data backup and recovery procedures</li>
          </ul>

          <h2>5. Sharing Your Information</h2>
          <p>
            We do not sell your personal or health information. We may share your information only:
          </p>
          <ul>
            <li>With your explicit consent</li>
            <li>With healthcare providers you've authorized</li>
            <li>With service providers who help us operate our platform (under strict confidentiality agreements)</li>
            <li>When required by law or to protect rights and safety</li>
          </ul>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal and health information</li>
            <li>Request corrections to your information</li>
            <li>Delete your account and associated data</li>
            <li>Export your data</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2>7. Data Retention</h2>
          <p>
            We retain your information as long as your account is active or as needed to provide services. 
            You may request deletion at any time, though we may retain certain information as required by law.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under 18. We do not knowingly collect information 
            from children.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this privacy policy periodically. We'll notify you of significant changes via email 
            or through our platform.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            Questions about this privacy policy or your data? Contact us at:
            <br />
            Email: privacy@genomax.com
            <br />
            Address: [Company Address]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
