import { Link } from "react-router-dom";
import { TrendingUp, Shield, Users, Eye, ChevronLeft } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="quantum-hero py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="quantum-gold-line-center" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto' }} />
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              אנחנו QUANTUM
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              משרד תיווך בוטיק שנבנה על תובנה אחת פשוטה: מי שמבין את השוק הכי עמוק, מנצח.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="quantum-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="quantum-gold-line" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)' }} />
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              הסיפור שלנו
            </h2>
            <div className="space-y-6 text-[#1A1A3E]/70 leading-relaxed">
              <p>
                QUANTUM נולד מתוך תסכול. ראינו משקיעים חכמים מפספסים הזדמנויות כי הם לא ידעו מה שאנחנו יודעים. ראינו מוכרים מוכרים במחירים נמוכים מדי כי הם לא הכירו את הקונים הנכונים. וראינו יהודים מכל העולם שרוצים לקנות בישראל אבל לא יודעים למי לפנות.
              </p>
              <p>
                אז בנינו משהו אחר. לא עוד משרד תיווך שמחכה שנכסים יעלו לפרסום. אלא משרד שיודע על נכסים חודשים לפני - ויודע בדיוק למי להתקשר כדי ליצור חיבור מושלם בין מוכר לקונה.
              </p>
              <p>
                היום אנחנו עוקבים אחרי 334+ מתחמי פינוי-בינוי ברחבי ישראל. אנחנו מכירים כל יזם, כל ועדה, כל שלב תכנוני. ויש לנו רשת קונים גלובלית שמשתרעת מניו יורק ועד מלבורן.
              </p>
              <p>
                אבל הדבר הכי חשוב? אנחנו זוכרים שמאחורי כל עסקה יש אנשים. משפחות. חלומות. ולכן כל לקוח שלנו מרגיש כמו הלקוח היחיד שלנו.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="quantum-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="quantum-gold-line-center" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto 24px' }} />
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              ה-DNA של QUANTUM
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Eye, title: "מח חד", desc: "אנחנו רואים דברים שאחרים לא רואים. חיבורים שאף אחד לא חשב עליהם. הזדמנויות שמחכות למי שיודע לזהות אותן." },
              { icon: Users, title: "הבנה עמוקה", desc: "אנחנו מבינים את הצרכים שלך לפני שתסיים להסביר. כי הקשבנו, שאלנו, וחשבנו שלושה צעדים קדימה." },
              { icon: Shield, title: "שקיפות מלאה", desc: "אין סודות מהלקוחות שלנו. אתה יודע בדיוק מה קורה, למה, ומה הצעד הבא. תמיד." },
              { icon: TrendingUp, title: "תוצאות", desc: "בסוף, מה שחשוב זה התוצאה. מחיר טוב יותר, מכירה מהירה יותר, קנייה חכמה יותר. זה מה שאנחנו מספקים." },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-14 h-14 rounded-xl bg-[#B8860B]/10 flex items-center justify-center mx-auto">
                  <item.icon className="w-7 h-7 text-[#B8860B]" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A3E]">{item.title}</h3>
                <p className="text-sm text-[#1A1A3E]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="quantum-section-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "334+", label: "מתחמים במעקב" },
              { number: "7+", label: "מדינות ברשת הקונים" },
              { number: "98%", label: "שביעות רצון" },
              { number: "60%", label: "מהיר יותר מהממוצע" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-[#B8860B]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stat.number}
                </div>
                <div className="text-sm text-white/50 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="quantum-section text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              מוכנים להכיר?
            </h2>
            <p className="text-[#1A1A3E]/60">
              שיחה ראשונה היא תמיד בחינם. בואו נדבר ונבין אם QUANTUM מתאים לכם.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 quantum-btn-gold">
              <span>תיאום שיחה</span>
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
