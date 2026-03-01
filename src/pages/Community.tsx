import { Link } from "react-router-dom";
import { Users, Globe, Heart, Home as HomeIcon, ChevronLeft, MessageCircle } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="quantum-hero py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="quantum-gold-line-center" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto' }} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              לא רק דירה.
              <br />
              <span className="text-[#B8860B]">קהילה שלמה.</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              אסטרטגיית השכנות של QUANTUM: אנחנו מזהים מתחמי פינוי-בינוי ומשווקים אשכולות דירות למשפחות מרקע משותף. כך נוצרת קהילה עוד לפני שהבניין קם.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="quantum-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="quantum-gold-line-center" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto 24px' }} />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              איך אסטרטגיית השכנות עובדת?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { icon: HomeIcon, title: "זיהוי מתחם מתאים", desc: "אנחנו מזהים מתחמי פינוי-בינוי בשלבים מתקדמים עם יזם חזק ותוכניות ברורות. המתחם חייב לעמוד בסטנדרטים שלנו." },
                { icon: Users, title: "בניית פרופיל קהילתי", desc: "\"משפחות צרפתיות בבת ים\", \"משקיעים אמריקאים בנתניה\", \"אנשי מקצוע בריטיים בתל אביב\" - אנחנו יוצרים קהילות ממוקדות." },
                { icon: Globe, title: "שיווק ממוקד בקהילות", desc: "פנייה דרך בתי כנסת, ארגוני עלייה, קהילות ברשתות חברתיות, ווביינרים בשפה המקומית." },
                { icon: Heart, title: "קהילה לפני הבניין", desc: "הקונים מכירים אחד את השני עוד לפני שהבניין קם. שכנים, חברים, קהילה - מהיום הראשון." },
              ].map((item, i) => (
                <div key={i} className="quantum-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#B8860B]/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[#B8860B]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A3E]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[#1A1A3E]/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits - English section for international audience */}
      <section className="quantum-section-alt" dir="ltr">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Know Your Neighbors Before You Move In
            </h2>
            <p className="text-[#1A1A3E]/60 mt-4 max-w-2xl mx-auto">
              Making Aliyah is exciting but challenging. What if you already knew your neighbors would share your language, culture, and values?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Reduced Aliyah Friction", desc: "Moving to a new country is hard. Moving to a building full of people who understand your journey makes it infinitely easier." },
              { title: "Built-in Support Network", desc: "From day one, you have neighbors who speak your language, understand your culture, and can help navigate the new reality." },
              { title: "Children Grow Up Together", desc: "Your kids will have friends from similar backgrounds in the same building. Playdates, homework help, shared holidays." },
            ].map((item, i) => (
              <div key={i} className="quantum-card p-6">
                <h3 className="text-lg font-bold text-[#1A1A3E] mb-3">{item.title}</h3>
                <p className="text-sm text-[#1A1A3E]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Community Groups */}
      <section className="quantum-section-navy">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              קבוצות קהילתיות פעילות
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { flag: "🇫🇷", group: "משפחות צרפתיות", location: "בת ים / נתניה", spots: "3 מקומות נותרו" },
                { flag: "🇺🇸", group: "American Families", location: "Raanana / Modiin", spots: "5 spots available" },
                { flag: "🇬🇧", group: "UK Professionals", location: "Tel Aviv / Herzliya", spots: "Forming now" },
              ].map((group, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <span className="text-3xl mb-3 block">{group.flag}</span>
                  <h3 className="text-lg font-bold text-white mb-1">{group.group}</h3>
                  <p className="text-white/60 text-sm">{group.location}</p>
                  <p className="text-[#B8860B] text-xs font-semibold mt-3">{group.spots}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="quantum-section text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              רוצים להצטרף לקהילה?
            </h2>
            <p className="text-[#1A1A3E]/60">
              ספרו לנו מאיפה אתם, מה אתם מחפשים, ואנחנו נמצא את הקהילה המושלמת בשבילכם.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/972XXXXXXXXX?text=Hi, I'm interested in the community buying program"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <Link to="/contact" className="quantum-btn-gold">
                הצטרפו עכשיו
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
