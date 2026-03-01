import { Link } from "react-router-dom";
import { MapPin, TrendingUp, ChevronLeft, Building2, CheckCircle } from "lucide-react";

const cities = [
  { name: "בת ים", complexes: 42, avgIAI: 78, status: "hot", desc: "מוקד פינוי-בינוי מרכזי עם פרויקטים בשלבים מתקדמים" },
  { name: "חולון", complexes: 35, avgIAI: 74, status: "growing", desc: "פוטנציאל עליית ערך משמעותי עם תוכניות חדשות" },
  { name: "נתניה", complexes: 28, avgIAI: 72, status: "growing", desc: "ביקוש גבוה מקונים בינלאומיים, קרבה לים" },
  { name: "פתח תקווה", complexes: 31, avgIAI: 76, status: "hot", desc: "מתחמים גדולים עם אישורי ועדות טריים" },
  { name: "ראשון לציון", complexes: 25, avgIAI: 71, status: "growing", desc: "תוכניות מתאר חדשות מאיצות פרויקטים" },
  { name: "גבעתיים", complexes: 18, avgIAI: 82, status: "premium", desc: "מיקום פרימיום, ביקוש גבוה, מחירים עולים" },
  { name: "רמת גן", complexes: 22, avgIAI: 80, status: "premium", desc: "מתחם הבורסה ומגמת פינוי-בינוי חזקה" },
  { name: "הרצליה", complexes: 15, avgIAI: 85, status: "premium", desc: "פרויקטים יוקרתיים עם תשואה גבוהה" },
];

const statusColors: Record<string, { bg: string; text: string; label: string }> = {
  hot: { bg: "bg-red-50", text: "text-red-700", label: "חם" },
  growing: { bg: "bg-green-50", text: "text-green-700", label: "בצמיחה" },
  premium: { bg: "bg-[#B8860B]/10", text: "text-[#B8860B]", label: "פרימיום" },
};

const Neighborhoods = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="quantum-hero py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="quantum-gold-line-center" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto' }} />
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              מפת ההזדמנויות
              <br />
              <span className="text-[#B8860B]">פינוי-בינוי בישראל</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              334+ מתחמים במעקב פעיל. אנחנו יודעים על כל מתחם, בכל שלב, עם כל יזם. השאלה היא לא "איפה" - השאלה היא "מתי".
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="quantum-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              ערים עיקריות
            </h2>
            <p className="text-[#1A1A3E]/60 mt-3">
              יש לנו דעה על כל מתחם, בכל עיר. לחצו לפרטים.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, i) => {
              const status = statusColors[city.status];
              return (
                <div key={i} className="quantum-card p-6 cursor-pointer group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#B8860B]" />
                      <h3 className="text-lg font-bold text-[#1A1A3E]">{city.name}</h3>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${status.bg} ${status.text}`}>
                      {status.label}
                    </span>
                  </div>
                  <p className="text-sm text-[#1A1A3E]/60 mb-4 leading-relaxed">{city.desc}</p>
                  <div className="flex items-center justify-between text-sm border-t border-[hsl(40,15%,88%)] pt-3">
                    <div>
                      <span className="text-[#1A1A3E]/50">מתחמים: </span>
                      <span className="font-semibold text-[#1A1A3E]">{city.complexes}</span>
                    </div>
                    <div>
                      <span className="text-[#1A1A3E]/50">ציון: </span>
                      <span className="font-semibold text-[#B8860B]">{city.avgIAI}/100</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Understanding IAI */}
      <section className="quantum-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="quantum-gold-line" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)' }} />
              <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                איך אנחנו יודעים איפה ההזדמנויות?
              </h2>
              <p className="text-[#1A1A3E]/60 leading-relaxed">
                בוא נגיד ככה - כשאתה מבין איך השוק באמת עובד, אתה יודע לקרוא סימנים שאחרים לא רואים. אישור ועדה פה, מוכר שמוריד מחיר בפעם השלישית שם, כינוס שנפתח בשקט...
              </p>
              <p className="text-[#1A1A3E]/60 leading-relaxed">
                אנחנו פשוט שמים לב לדברים שאחרים מפספסים. וכשאנחנו מזהים הזדמנות - אנחנו יודעים בדיוק למי להתקשר.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "שלב הפרויקט", desc: "איפה המתחם בתהליך - תכנון, ועדה, ביצוע" },
                { label: "חוזק היזם", desc: "האם מאחורי הפרויקט יזם חזק עם הון ומוניטין" },
                { label: "אחוזי חתימה", desc: "כמה דיירים כבר חתמו - סימן חד לביצוע" },
                { label: "מגמת מחירים", desc: "לאן נעים המחירים באזור ובמתחם הספציפי" },
                { label: "לחץ מוכרים", desc: "זיהוי מוכרים שצריכים למכור - ההזדמנות שלך" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-[hsl(40,15%,88%)]">
                  <CheckCircle className="w-5 h-5 text-[#B8860B] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#1A1A3E]">{item.label}</h4>
                    <p className="text-xs text-[#1A1A3E]/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="quantum-section-navy text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              רוצים לדעת מה קורה במתחם שלכם?
            </h2>
            <p className="text-white/60">
              ספרו לנו איפה אתם גרים ונגיד לכם בדיוק מה קורה - שלב התכנון, מי היזם, ומה הצפי.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 quantum-btn-gold">
              <span>דברו איתנו</span>
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Neighborhoods;
