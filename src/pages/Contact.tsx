import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "buyer",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `שלום, אני ${formData.name}. ${formData.type === "seller" ? "אני רוצה למכור נכס" : "אני רוצה לקנות נכס"}. ${formData.message}`;
    window.open(`https://wa.me/972XXXXXXXXX?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="quantum-hero py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="quantum-gold-line-center" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto' }} />
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              דברו איתנו
            </h1>
            <p className="text-white/60 text-lg">
              כל שיחה מתחילה בהקשבה. ספרו לנו מה אתם מחפשים.
            </p>
          </div>
        </div>
      </section>

      <section className="quantum-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                השאירו פרטים
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A3E] mb-2">שם מלא</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(40,15%,88%)] bg-white focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] outline-none transition-all text-sm"
                    placeholder="ישראל ישראלי"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A3E] mb-2">טלפון</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[hsl(40,15%,88%)] bg-white focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] outline-none transition-all text-sm"
                      placeholder="050-1234567"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A3E] mb-2">אימייל</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[hsl(40,15%,88%)] bg-white focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] outline-none transition-all text-sm"
                      placeholder="email@example.com"
                      dir="ltr"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A3E] mb-2">אני מעוניין/ת ב:</label>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, type: "seller" })}
                      className={`flex-1 py-3 rounded-lg text-sm font-semibold border-2 transition-all ${
                        formData.type === "seller"
                          ? "border-[#1A1A3E] bg-[#1A1A3E] text-white"
                          : "border-[hsl(40,15%,88%)] text-[#1A1A3E]/60 hover:border-[#1A1A3E]/30"
                      }`}
                    >
                      למכור נכס
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, type: "buyer" })}
                      className={`flex-1 py-3 rounded-lg text-sm font-semibold border-2 transition-all ${
                        formData.type === "buyer"
                          ? "border-[#B8860B] bg-[#B8860B] text-white"
                          : "border-[hsl(40,15%,88%)] text-[#1A1A3E]/60 hover:border-[#B8860B]/30"
                      }`}
                    >
                      לקנות נכס
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A3E] mb-2">ספרו לנו עוד</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(40,15%,88%)] bg-white focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] outline-none transition-all text-sm resize-none"
                    placeholder="מה אתם מחפשים? באיזה אזור? מה התקציב?"
                  />
                </div>
                <button type="submit" className="w-full quantum-btn-gold text-center">
                  שליחה
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  דרכים נוספות ליצור קשר
                </h2>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/972XXXXXXXXX"
                    className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-100 hover:bg-green-100 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A3E]">WhatsApp</div>
                      <div className="text-sm text-[#1A1A3E]/60">הדרך המהירה ביותר לדבר איתנו</div>
                    </div>
                  </a>

                  <a
                    href="tel:+972XXXXXXXXX"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[hsl(40,15%,88%)] hover:border-[#B8860B]/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#1A1A3E] flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A3E]">טלפון</div>
                      <div className="text-sm text-[#1A1A3E]/60" dir="ltr">+972-XX-XXX-XXXX</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@quantum-re.co.il"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[hsl(40,15%,88%)] hover:border-[#B8860B]/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#B8860B] flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A3E]">אימייל</div>
                      <div className="text-sm text-[#1A1A3E]/60" dir="ltr">info@quantum-re.co.il</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-[#1A1A3E] rounded-2xl p-6 text-white space-y-4">
                <h3 className="font-bold text-lg">שעות פעילות</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#B8860B]" />
                    <span className="text-white/70">ראשון-חמישי: 09:00-19:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#B8860B]" />
                    <span className="text-white/70">שישי: 09:00-13:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#B8860B]" />
                    <span className="text-white/70">ישראל</span>
                  </div>
                </div>
                <p className="text-xs text-white/40 pt-2 border-t border-white/10">
                  * זמינות ב-WhatsApp גם מחוץ לשעות הפעילות
                </p>
              </div>

              {/* English note */}
              <div className="bg-[#B8860B]/5 rounded-xl p-5 border border-[#B8860B]/10" dir="ltr">
                <p className="text-sm text-[#1A1A3E]/70">
                  <strong className="text-[#B8860B]">International clients:</strong> We speak English, French, Russian, and Spanish. Feel free to reach out in your language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
