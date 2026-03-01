import { useLanguage } from "@/i18n/LanguageContext";

const Terms = () => {
  const { lang } = useLanguage();
  const l = lang as string;

  const content: Record<string, { title: string; updated: string; sections: Array<{ h: string; p: string }> }> = {
    he: {
      title: "תנאי שימוש", updated: "עודכן לאחרונה: מרץ 2026",
      sections: [
        { h: "הסכמה לתנאים", p: "השימוש באתר QUANTUM נדל\"ן ובשירותיו מהווה הסכמה לתנאי שימוש אלה. אם אינכם מסכימים לתנאים, אנא אל תשתמשו באתר." },
        { h: "שירותי תיווך", p: "QUANTUM מספקת שירותי תיווך נדל\"ן בהתאם לחוק המתווכים במקרקעין, תשנ\"ו-1996. כל עסקה כפופה להסכם תיווך נפרד שייחתם בין הצדדים." },
        { h: "מידע באתר", p: "המידע באתר מסופק למטרות מידע כללי בלבד ואינו מהווה ייעוץ משפטי, פיננסי או השקעתי. QUANTUM עושה מאמצים סבירים לוודא את דיוק המידע, אך אינה מתחייבת לדיוקו המלא." },
        { h: "הגבלת אחריות", p: "QUANTUM לא תישא באחריות לכל נזק ישיר או עקיף הנובע מהשימוש באתר או מהסתמכות על המידע המוצג בו. החלטות השקעה הן באחריות המשתמש בלבד." },
        { h: "קניין רוחני", p: "כל התכנים באתר, כולל טקסט, גרפיקה, לוגואים ועיצוב, הם רכושה של QUANTUM ומוגנים בחוקי זכויות יוצרים. אין להעתיק, להפיץ או להשתמש בתכנים ללא אישור מראש." },
        { h: "פרטיות", p: "השימוש באתר כפוף גם למדיניות הפרטיות שלנו. אנא עיינו במדיניות הפרטיות להבנת האופן שבו אנו אוספים ומשתמשים במידע שלכם." },
        { h: "שינויים בתנאים", p: "QUANTUM שומרת לעצמה את הזכות לשנות תנאים אלה בכל עת. שינויים ייכנסו לתוקף עם פרסומם באתר." },
        { h: "דין חל וסמכות שיפוט", p: "תנאים אלה כפופים לדיני מדינת ישראל. סמכות השיפוט הבלעדית נתונה לבתי המשפט במחוז תל אביב." },
        { h: "יצירת קשר", p: "לשאלות בנוגע לתנאי שימוש אלה: QUANTUM נדל\"ן, טלפון: 054-766-9985, אימייל: info@quantum-realestate.co.il" },
      ]
    },
    en: {
      title: "Terms of Service", updated: "Last updated: March 2026",
      sections: [
        { h: "Agreement to Terms", p: "By using the QUANTUM Real Estate website and services, you agree to these terms. If you do not agree, please do not use the site." },
        { h: "Brokerage Services", p: "QUANTUM provides real estate brokerage services in accordance with Israeli Real Estate Brokers Law, 1996. Every transaction is subject to a separate brokerage agreement." },
        { h: "Website Information", p: "Information on the site is provided for general informational purposes only and does not constitute legal, financial, or investment advice. QUANTUM makes reasonable efforts to ensure accuracy but does not guarantee it." },
        { h: "Limitation of Liability", p: "QUANTUM shall not be liable for any direct or indirect damages arising from use of the site or reliance on information presented. Investment decisions are solely the user's responsibility." },
        { h: "Intellectual Property", p: "All content on the site, including text, graphics, logos, and design, is QUANTUM's property and protected by copyright law. No copying, distribution, or use without prior permission." },
        { h: "Privacy", p: "Use of the site is also subject to our Privacy Policy. Please review it to understand how we collect and use your information." },
        { h: "Changes to Terms", p: "QUANTUM reserves the right to modify these terms at any time. Changes take effect upon publication on the site." },
        { h: "Governing Law", p: "These terms are governed by the laws of the State of Israel. Exclusive jurisdiction is granted to the courts of the Tel Aviv District." },
        { h: "Contact", p: "For questions about these terms: QUANTUM Real Estate, Phone: 054-766-9985, Email: info@quantum-realestate.co.il" },
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

export default Terms;
