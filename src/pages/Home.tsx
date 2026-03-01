import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Globe, Users, Shield, TrendingUp, Star, ChevronLeft } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="quantum-hero min-h-[85vh] flex items-center relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto' }} />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              אנחנו לא מחפשים נכסים.
              <br />
              <span className="text-[#B8860B]">אנחנו יודעים על נכסים</span>
              <br />
              שאחרים אפילו לא יודעים שקיימים.
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              משרד תיווך בוטיק לפינוי-בינוי. מח חד, הבנה עמוקה, ויחס אישי שגורם לכל לקוח להרגיש כמו בן יחיד.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto pt-6">
              <Link to="/sellers" className="group relative overflow-hidden rounded-xl p-8 text-right transition-all duration-300 hover:translate-y-[-4px]" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}>
                <div className="space-y-3">
                  <Building2 className="w-8 h-8 text-[#B8860B]" />
                  <h3 className="text-xl font-bold text-white">אני רוצה למכור</h3>
                  <p className="text-sm text-white/60 leading-relaxed">יש לנו קונים שאתה אפילו לא יודע שהם קיימים. מישראל ומכל העולם.</p>
                  <div className="flex items-center gap-2 text-[#B8860B] text-sm font-medium pt-2">
                    <span>למוכרים</span>
                    <ArrowLeft className="w-4 h-4 group-hover:translate-x-[-4px] transition-transform" />
                  </div>
                </div>
              </Link>
              <Link to="/buyers" className="group relative overflow-hidden rounded-xl p-8 text-right transition-all duration-300 hover:translate-y-[-4px]" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}>
                <div className="space-y-3">
                  <Globe className="w-8 h-8 text-[#B8860B]" />
                  <h3 className="text-xl font-bold text-white">אני רוצה לקנות</h3>
                  <p className="text-sm text-white/60 leading-relaxed">גישה להזדמנויות לפני השוק. מוכרים במצוקה, כינוסים, ירושות.</p>
                  <div className="flex items-center gap-2 text-[#B8860B] text-sm font-medium pt-2">
                    <span>לקונים</span>
                    <ArrowLeft className="w-4 h-4 group-hover:translate-x-[-4px] transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, hsl(40, 30%, 97%), transparent)" }} />
      </section>

      <section className="py-12 bg-white border-b border-[hsl(40,15%,88%)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "696+", label: "מתחמי פינוי-בינוי במעקב" },
              { number: "15%", label: "מתחת למחיר השוק בממוצע" },
              { number: "98%", label: "שביעות רצון לקוחות" },
              { number: "24/7", label: "זמינות מלאה" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#B8860B]" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.number}</div>
                <div className="text-sm text-[#1A1A3E]/60 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quantum-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto 24px' }} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>למה QUANTUM?</h2>
            <p className="text-lg text-[#1A1A3E]/60 leading-relaxed">רוב המתווכים ממתינים שנכס יעלה לפרסום ואז רצים עליו עם כולם. אנחנו יודעים על נכסים חודשים לפני - ומחברים בין המוכר הנכון לקונה הנכון.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "מח חד", desc: "אנחנו קוראים את השוק כמו שאף אחד אחר לא קורא. אישור ועדה פה, מוכר שמוריד מחיר בפעם השלישית שם - אנחנו שמים לב לדברים שאחרים מפספסים." },
              { icon: Shield, title: "נכסים סודיים", desc: "מוכרים במצוקה, כינוסי נכסים שעדיין לא פורסמו, ירושות שהמשפחה רוצה לסגור בשקט. גישה שאין לאף משרד תיווך אחר." },
              { icon: Users, title: "בן יחיד", desc: "כל לקוח שלנו מקבל יחס אישי מלא. אנחנו לא עובדים עם מאות לקוחות. אנחנו עובדים עם הלקוחות הנכונים ונותנים להם את כל תשומת הלב." },
            ].map((item, i) => (
              <div key={i} className="quantum-card p-8 text-right">
                <item.icon className="w-10 h-10 text-[#B8860B] mb-4" />
                <h3 className="text-xl font-bold text-[#1A1A3E] mb-3">{item.title}</h3>
                <p className="text-[#1A1A3E]/60 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quantum-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)' }} />
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>למוכרים: יש לנו קונים שאתה לא יודע שהם קיימים</h2>
              <p className="text-[#1A1A3E]/60 leading-relaxed">בזמן שמתווכים אחרים מפרסמים מודעות ומחכים, אנחנו מחוברים לרשת קונים גלובלית של יהודים מכל העולם שמחפשים נכס בישראל.</p>
              <Link to="/sellers" className="inline-flex items-center gap-2 quantum-btn-navy text-sm">
                <span>מה QUANTUM יכול לעשות בשבילך</span>
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[hsl(40,15%,88%)]">
              <div className="space-y-4">
                {["חיבור לקונים גלובליים מ-7+ מדינות", "מכירה מהירה יותר ב-60% מהממוצע", "מחיר גבוה יותר בזכות תחרות בין קונים", "תיווך מלא מהפגישה ועד החתימה", "ליווי משפטי ומקצועי לאורך כל הדרך"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#B8860B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="w-3 h-3 text-[#B8860B]" />
                    </div>
                    <span className="text-sm text-[#1A1A3E]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quantum-section-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto' }} />
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>אסטרטגיית שכנות: לא רק דירה, קהילה שלמה</h2>
            <p className="text-white/60 leading-relaxed text-lg">תארו לעצמכם שאתם עולים חדשים ויודעים מראש שהשכנים שלכם בבניין החדש הם משפחות מרקע דומה, שמדברים את השפה שלכם.</p>
            <Link to="/community" className="inline-flex items-center gap-2 quantum-btn-gold text-sm">
              <span>גלו את אסטרטגיית השכנות</span>
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="quantum-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto 24px' }} />
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>מה הלקוחות שלנו אומרים</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "הם ידעו על הנכס הזה לפני שהוא בכלל עלה לשוק. סגרתי עסקה 20% מתחת למחיר השוק.", name: "יוסי כ.", role: "משקיע, תל אביב" },
              { text: "As an American Jew buying in Israel, QUANTUM made the entire process feel personal and safe.", name: "Sarah L.", role: "Buyer, New York" },
              { text: "QUANTUM הציעו לנו למכור ברגע שהוועדה אישרה. קיבלנו 15% יותר ממה שחשבנו.", name: "רחל ודוד מ.", role: "מוכרים, בת ים" },
            ].map((t, i) => (
              <div key={i} className="quantum-testimonial">
                <p className="text-[#1A1A3E]/70 leading-relaxed text-sm mb-4">{t.text}</p>
                <div className="border-t border-[hsl(40,15%,88%)] pt-4">
                  <p className="font-semibold text-[#1A1A3E] text-sm">{t.name}</p>
                  <p className="text-xs text-[#1A1A3E]/50">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quantum-section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>מוכנים להתחיל?</h2>
            <p className="text-[#1A1A3E]/60 text-lg">ב-QUANTUM, אתה לא עוד לקוח. אתה הלקוח היחיד.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="quantum-btn-gold text-center">תיאום פגישת ייעוץ חינם</Link>
              <Link to="/neighborhoods" className="quantum-btn-outline text-center">גלו את ההזדמנויות</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
