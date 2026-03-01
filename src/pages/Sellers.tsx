import { Link } from "react-router-dom";
import { Phone, MessageCircle, TrendingUp, Users, Clock, Shield, ChevronLeft, CheckCircle } from "lucide-react";

const Sellers = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="quantum-hero py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="quantum-gold-line-center" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto' }} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              יש לנו קונים
              <br />
              <span className="text-[#B8860B]">שאתה לא יודע שהם קיימים</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              בזמן שמתווכים אחרים מפרסמים ומחכים, אנחנו כבר מחוברים לרשת קונים גלובלית. יהודים מכל העולם שמחפשים בדיוק את הנכס שלך.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 quantum-btn-gold">
              <span>תיאום פגישה אישית</span>
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="quantum-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "קונים מ-7+ מדינות", desc: "גישה לקונים מארה\"ב, צרפת, בריטניה, קנדה, דרום אפריקה, אוסטרליה, ארגנטינה ועוד." },
              { icon: Clock, title: "מהיר ב-60%", desc: "מכירה מהירה משמעותית מהממוצע בשוק, בזכות התאמה מדויקת בין מוכר לקונה." },
              { icon: TrendingUp, title: "מחיר מקסימלי", desc: "כשיש תחרות בין קונים, המחיר עולה. אנחנו יוצרים תחרות." },
              { icon: Shield, title: "ליווי מלא", desc: "מהשיחה הראשונה ועד החתימה אצל הנוטריון. כולל ייעוץ משפטי ומיסוי." },
            ].map((item, i) => (
              <div key={i} className="quantum-card p-6 text-center">
                <item.icon className="w-10 h-10 text-[#B8860B] mx-auto mb-4" />
                <h3 className="text-lg font-bold text-[#1A1A3E] mb-2">{item.title}</h3>
                <p className="text-sm text-[#1A1A3E]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works for Sellers */}
      <section className="quantum-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="quantum-gold-line-center" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto 24px' }} />
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              איך זה עובד?
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { step: "01", title: "פגישה אישית", desc: "נפגשים, מבינים את המצב שלך לעומק, ומסבירים מה אנחנו יכולים לעשות בשבילך. בלי התחייבות." },
              { step: "02", title: "הערכת שוק מדויקת", desc: "אנחנו לא מנחשים מחירים. אנחנו יודעים בדיוק כמה שווה הנכס שלך בהתבסס על עסקאות אמיתיות, שלב התכנון, ומצב השוק." },
              { step: "03", title: "חיבור לקונים ממוקדים", desc: "הנכס שלך לא עולה למודעה גנרית. אנחנו מתאימים אותו לקונים ספציפיים מהרשת הגלובלית שלנו שמחפשים בדיוק את מה שיש לך." },
              { step: "04", title: "מכירה ולעגת ליווי", desc: "משא ומתן מקצועי, ליווי משפטי, וסגירת עסקה. אתה יושב בשקט ואנחנו דואגים לכל השאר." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-xl bg-[#1A1A3E] flex items-center justify-center flex-shrink-0">
                  <span className="text-[#B8860B] font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A3E] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#1A1A3E]/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose QUANTUM for Selling */}
      <section className="quantum-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                למה למכור דרך QUANTUM ולא לבד?
              </h2>
              <div className="space-y-4">
                {[
                  "אנחנו יודעים מה הנכס שלך באמת שווה - לא מה כתוב ביד2",
                  "גישה לקונים שאף מתווך אחר לא מכיר",
                  "מכירה במחיר גבוה יותר בזכות תחרות בין קונים",
                  "ליווי מלא כולל עורכי דין ויועצי מס",
                  "שקיפות מלאה בכל שלב של התהליך",
                  "הנכס שלך לא יישב חודשים בשוק",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1A1A3E]/80">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1A1A3E] rounded-2xl p-8 text-white space-y-6">
              <h3 className="text-xl font-bold">רוצים לדעת כמה שווה הנכס שלכם?</h3>
              <p className="text-white/60 text-sm">
                השאירו פרטים ונחזור אליכם עם הערכת שוק מקצועית ואישית - בלי שום התחייבות.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/972XXXXXXXXX?text=היי, אני רוצה לדעת כמה שווה הנכס שלי"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  שלחו הודעה ב-WhatsApp
                </a>
                <a
                  href="tel:+972XXXXXXXXX"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  התקשרו עכשיו
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sellers;
