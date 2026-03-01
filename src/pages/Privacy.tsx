import { useLanguage } from "@/i18n/LanguageContext";

const Privacy = () => {
  const { lang } = useLanguage();
  const l = lang as string;

  const content: Record<string, { title: string; updated: string; sections: Array<{ h: string; p: string }> }> = {
    he: {
      title: "מדיניות פרטיות", updated: "עודכן לאחרונה: מרץ 2026",
      sections: [
        { h: "מבוא", p: "QUANTUM נדל\"ן (\"QUANTUM\", \"אנחנו\") מחויבת להגן על הפרטיות שלכם. מדיניות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלכם." },
        { h: "מידע שאנו אוספים", p: "אנו אוספים מידע שאתם מספקים לנו ישירות: שם, מספר טלפון, כתובת אימייל, העדפות נכס, ומידע פיננסי רלוונטי לעסקאות נדל\"ן. כמו כן, אנו אוספים מידע אוטומטית כגון כתובת IP, סוג דפדפן, ודפוסי שימוש באתר." },
        { h: "שימוש במידע", p: "אנו משתמשים במידע שלכם כדי: לספק שירותי תיווך נדל\"ן, להתאים הצעות נכסים לצרכים שלכם, ליצור איתכם קשר בנוגע להזדמנויות רלוונטיות, ולשפר את השירותים שלנו." },
        { h: "שיתוף מידע", p: "אנו לא מוכרים את המידע האישי שלכם. אנו עשויים לשתף מידע עם: עורכי דין ויועצים משפטיים המעורבים בעסקה, שמאים ומעריכי נכסים, וגורמים רגולטוריים כנדרש על פי חוק." },
        { h: "אבטחת מידע", p: "אנו נוקטים באמצעי אבטחה סבירים להגנה על המידע האישי שלכם, כולל הצפנה, גישה מוגבלת, ואחסון מאובטח." },
        { h: "זכויותיכם", p: "יש לכם זכות לבקש גישה למידע האישי שלכם, לתקן מידע שגוי, למחוק את המידע שלכם, ולהתנגד לעיבוד המידע. ליצירת קשר בנושא פרטיות: privacy@quantum-realestate.co.il" },
        { h: "יצירת קשר", p: "לשאלות בנוגע למדיניות פרטיות זו, ניתן לפנות אלינו בטלפון 054-766-9985 או באימייל privacy@quantum-realestate.co.il" },
      ]
    },
    en: {
      title: "Privacy Policy", updated: "Last updated: March 2026",
      sections: [
        { h: "Introduction", p: "QUANTUM Real Estate (\"QUANTUM\", \"we\") is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information." },
        { h: "Information We Collect", p: "We collect information you provide directly: name, phone number, email, property preferences, and financial information relevant to real estate transactions. We also automatically collect IP address, browser type, and website usage patterns." },
        { h: "Use of Information", p: "We use your information to: provide real estate brokerage services, match property offerings to your needs, contact you about relevant opportunities, and improve our services." },
        { h: "Information Sharing", p: "We do not sell your personal information. We may share information with: lawyers and legal advisors involved in transactions, property appraisers, and regulatory authorities as required by law." },
        { h: "Data Security", p: "We take reasonable security measures to protect your personal information, including encryption, restricted access, and secure storage." },
        { h: "Your Rights", p: "You have the right to access, correct, delete, and object to processing of your personal data. Contact us at privacy@quantum-realestate.co.il" },
        { h: "Contact", p: "For questions about this privacy policy, contact us at 054-766-9985 or privacy@quantum-realestate.co.il" },
      ]
    },
  };

  const c = content[l] || content.en;

  return (
    <div className="min-h-screen">
      <section className="quantum-hero py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto 24px' }} />
          <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{c.title}</h1>
          <p className="text-sm text-white/40 mt-4">{c.updated}</p>
        </div>
      </section>
      <section className="quantum-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {c.sections.map((s, i) => (
              <div key={i} className="space-y-3">
                <h2 className="text-xl font-bold text-[#1A1A3E]" style={{ fontFamily: "'Playfair Display', serif" }}>{s.h}</h2>
                <p className="text-[#1A1A3E]/70 leading-relaxed">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
