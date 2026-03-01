import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP_NUMBER = "972547669985";
const PHONE_DISPLAY = "+972-54-766-9985";

const Contact = () => {
  const { t, isRTL, lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "buyer",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = isRTL
      ? `שלום, אני ${formData.name}. ${formData.type === "seller" ? "אני רוצה למכור נכס" : "אני רוצה לקנות נכס"}. ${formData.message}`
      : `Hello, I'm ${formData.name}. I'm interested in ${formData.type === "seller" ? "selling" : "buying"} a property. ${formData.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  // Labels based on language
  const labels = {
    title: isRTL ? "דברו איתנו" : lang === "fr" ? "Contactez-nous" : lang === "es" ? "Contáctenos" : lang === "ru" ? "Свяжитесь с нами" : "Talk to Us",
    subtitle: isRTL ? "כל שיחה מתחילה בהקשבה. ספרו לנו מה אתם מחפשים." : lang === "fr" ? "Chaque conversation commence par l'écoute. Dites-nous ce que vous cherchez." : lang === "es" ? "Cada conversación comienza con escuchar. Cuéntenos qué busca." : lang === "ru" ? "Каждый разговор начинается с внимания. Расскажите, что вы ищете." : "Every conversation starts with listening. Tell us what you're looking for.",
    formTitle: isRTL ? "השאירו פרטים" : lang === "fr" ? "Laissez vos coordonnées" : lang === "es" ? "Deje sus datos" : lang === "ru" ? "Оставьте данные" : "Leave Your Details",
    name: isRTL ? "שם מלא" : lang === "fr" ? "Nom complet" : lang === "es" ? "Nombre completo" : lang === "ru" ? "Полное имя" : "Full Name",
    phone: isRTL ? "טלפון" : lang === "fr" ? "Téléphone" : lang === "es" ? "Teléfono" : lang === "ru" ? "Телефон" : "Phone",
    email: isRTL ? "אימייל" : "Email",
    interested: isRTL ? "אני מעוניין/ת ב:" : lang === "fr" ? "Je suis intéressé(e) par :" : lang === "es" ? "Estoy interesado/a en:" : lang === "ru" ? "Меня интересует:" : "I'm interested in:",
    sell: isRTL ? "למכור נכס" : lang === "fr" ? "Vendre un bien" : lang === "es" ? "Vender una propiedad" : lang === "ru" ? "Продать недвижимость" : "Sell Property",
    buy: isRTL ? "לקנות נכס" : lang === "fr" ? "Acheter un bien" : lang === "es" ? "Comprar una propiedad" : lang === "ru" ? "Купить недвижимость" : "Buy Property",
    tellMore: isRTL ? "ספרו לנו עוד" : lang === "fr" ? "Dites-nous en plus" : lang === "es" ? "Cuéntenos más" : lang === "ru" ? "Расскажите подробнее" : "Tell Us More",
    placeholder: isRTL ? "מה אתם מחפשים? באיזה אזור? מה התקציב?" : lang === "fr" ? "Que cherchez-vous ? Dans quel quartier ? Quel budget ?" : lang === "es" ? "¿Qué busca? ¿En qué zona? ¿Cuál es su presupuesto?" : lang === "ru" ? "Что вы ищете? В каком районе? Какой бюджет?" : "What are you looking for? Which area? What's your budget?",
    submit: isRTL ? "שליחה" : lang === "fr" ? "Envoyer" : lang === "es" ? "Enviar" : lang === "ru" ? "Отправить" : "Send",
    otherWays: isRTL ? "דרכים נוספות ליצור קשר" : lang === "fr" ? "Autres moyens de contact" : lang === "es" ? "Otras formas de contacto" : lang === "ru" ? "Другие способы связи" : "Other Ways to Reach Us",
    whatsappDesc: isRTL ? "הדרך המהירה ביותר לדבר איתנו" : lang === "fr" ? "Le moyen le plus rapide de nous parler" : lang === "es" ? "La forma más rápida de hablar con nosotros" : lang === "ru" ? "Самый быстрый способ связаться" : "The fastest way to talk to us",
    hours: isRTL ? "שעות פעילות" : lang === "fr" ? "Heures d'ouverture" : lang === "es" ? "Horario de atención" : lang === "ru" ? "Часы работы" : "Working Hours",
    whatsappNote: isRTL ? "* זמינות ב-WhatsApp גם מחוץ לשעות הפעילות" : lang === "fr" ? "* Disponible sur WhatsApp en dehors des heures" : lang === "es" ? "* Disponible en WhatsApp fuera del horario" : lang === "ru" ? "* Доступны в WhatsApp вне рабочих часов" : "* Available on WhatsApp outside working hours",
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="quantum-hero py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="quantum-gold-line-center" style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto' }} />
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              {labels.title}
            </h1>
            <p className="text-white/60 text-lg">
              {labels.subtitle}
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
                {labels.formTitle}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#1A1A3E] mb-2">{labels.name}</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(40,15%,88%)] bg-white focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] outline-none transition-all text-sm"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A3E] mb-2">{labels.phone}</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[hsl(40,15%,88%)] bg-white focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] outline-none transition-all text-sm"
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1A1A3E] mb-2">{labels.email}</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[hsl(40,15%,88%)] bg-white focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] outline-none transition-all text-sm"
                      dir="ltr"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A3E] mb-2">{labels.interested}</label>
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
                      {labels.sell}
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
                      {labels.buy}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1A1A3E] mb-2">{labels.tellMore}</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[hsl(40,15%,88%)] bg-white focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] outline-none transition-all text-sm resize-none"
                    placeholder={labels.placeholder}
                  />
                </div>
                <button type="submit" className="w-full quantum-btn-gold text-center">
                  {labels.submit}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {labels.otherWays}
                </h2>
                <div className="space-y-4">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-100 hover:bg-green-100 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A3E]">WhatsApp</div>
                      <div className="text-sm text-[#1A1A3E]/60">{labels.whatsappDesc}</div>
                    </div>
                  </a>

                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[hsl(40,15%,88%)] hover:border-[#B8860B]/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#1A1A3E] flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1A3E]">{labels.phone}</div>
                      <div className="text-sm text-[#1A1A3E]/60" dir="ltr">{PHONE_DISPLAY}</div>
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
                      <div className="font-semibold text-[#1A1A3E]">{labels.email}</div>
                      <div className="text-sm text-[#1A1A3E]/60" dir="ltr">info@quantum-re.co.il</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-[#1A1A3E] rounded-2xl p-6 text-white space-y-4">
                <h3 className="font-bold text-lg">{labels.hours}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#B8860B]" />
                    <span className="text-white/70">{isRTL ? "ראשון-חמישי: 09:00-19:00" : "Sun-Thu: 09:00-19:00"}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-[#B8860B]" />
                    <span className="text-white/70">{isRTL ? "שישי: 09:00-13:00" : "Fri: 09:00-13:00"}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#B8860B]" />
                    <span className="text-white/70">Israel</span>
                  </div>
                </div>
                <p className="text-xs text-white/40 pt-2 border-t border-white/10">
                  {labels.whatsappNote}
                </p>
              </div>

              {/* Multilingual note */}
              <div className="bg-[#B8860B]/5 rounded-xl p-5 border border-[#B8860B]/10" dir="ltr">
                <p className="text-sm text-[#1A1A3E]/70">
                  <strong className="text-[#B8860B]">🌍</strong> We speak English, Français, Español, Русский, and עברית.
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
