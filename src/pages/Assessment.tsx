import React, { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Building2, MapPin, Ruler, Layers, DoorOpen, Send, CheckCircle2, Shield } from "lucide-react";

const Assessment = () => {
  const { t, isRTL, lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    address: "",
    city: "",
    size: "",
    floor: "",
    rooms: "",
    complexName: "",
    name: "",
    phone: "",
    email: "",
  });

  const update = (key: string, val: string) => setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `הערכת שווי חדשה:\nשם: ${form.name}\nטלפון: ${form.phone}\nאימייל: ${form.email}\nכתובת: ${form.address}, ${form.city}\nגודל: ${form.size} מ"ר\nקומה: ${form.floor}\nחדרים: ${form.rooms}\nמתחם: ${form.complexName || "לא צוין"}`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/972547669985?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[hsl(40,30%,97%)] flex items-center justify-center px-4">
        <div className="quantum-card p-12 text-center max-w-lg animate-fade-up">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-3">
            {isRTL ? "הבקשה התקבלה!" : lang === "fr" ? "Demande reçue !" : lang === "es" ? "¡Solicitud recibida!" : lang === "ru" ? "Запрос получен!" : "Request Received!"}
          </h2>
          <p className="text-gray-600 mb-6">
            {isRTL
              ? "נחזור אליך תוך 24 שעות עם הערכת שווי מקצועית. בינתיים, שתה קפה."
              : lang === "fr"
              ? "Nous reviendrons vers vous sous 24 heures avec une évaluation professionnelle."
              : lang === "es"
              ? "Volveremos a contactarte en 24 horas con una valoración profesional."
              : lang === "ru"
              ? "Мы свяжемся с вами в течение 24 часов с профессиональной оценкой."
              : "We'll get back to you within 24 hours with a professional valuation."}
          </p>
          <a href="/" className="quantum-btn-navy inline-block">
            {t("nav_home")}
          </a>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[hsl(38,76%,44%)] focus:ring-2 focus:ring-[hsl(38,76%,44%)]/20 outline-none transition-all text-sm bg-white";

  return (
    <div className="min-h-screen bg-[hsl(40,30%,97%)]">
      {/* Hero */}
      <section className="quantum-hero text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <Building2 className="w-12 h-12 text-[hsl(38,76%,44%)] mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
            {t("assessment_title")}
          </h1>
          <div className="quantum-gold-line-center mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t("assessment_subtitle")}
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="quantum-section">
        <div className="container mx-auto px-4 max-w-2xl">
          <form onSubmit={handleSubmit} className="quantum-card p-8 lg:p-10">
            <div className="flex items-center gap-2 mb-8">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm text-green-600 font-medium">{t("assessment_free")}</span>
            </div>

            {/* Property Details */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[hsl(38,76%,44%)]" />
                {isRTL ? "פרטי הנכס" : lang === "fr" ? "Détails du bien" : lang === "es" ? "Detalles de la propiedad" : lang === "ru" ? "Данные объекта" : "Property Details"}
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <MapPin className="w-3.5 h-3.5 inline mr-1" />
                    {t("assessment_address")} *
                  </label>
                  <input
                    type="text"
                    required
                    className={inputClass}
                    value={form.address}
                    onChange={(e) => update("address", e.target.value)}
                    placeholder={isRTL ? "רחוב ומספר בית" : "Street and number"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("assessment_city")} *
                  </label>
                  <input
                    type="text"
                    required
                    className={inputClass}
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    placeholder={isRTL ? "בת ים, חולון..." : "Bat Yam, Netanya..."}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Ruler className="w-3.5 h-3.5 inline mr-1" />
                    {t("assessment_size")} *
                  </label>
                  <input
                    type="number"
                    required
                    className={inputClass}
                    value={form.size}
                    onChange={(e) => update("size", e.target.value)}
                    placeholder="65"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <Layers className="w-3.5 h-3.5 inline mr-1" />
                    {t("assessment_floor")}
                  </label>
                  <input
                    type="number"
                    className={inputClass}
                    value={form.floor}
                    onChange={(e) => update("floor", e.target.value)}
                    placeholder="3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <DoorOpen className="w-3.5 h-3.5 inline mr-1" />
                    {t("assessment_rooms")} *
                  </label>
                  <input
                    type="number"
                    required
                    className={inputClass}
                    value={form.rooms}
                    onChange={(e) => update("rooms", e.target.value)}
                    placeholder="3"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("assessment_complex_name")}
                </label>
                <input
                  type="text"
                  className={inputClass}
                  value={form.complexName}
                  onChange={(e) => update("complexName", e.target.value)}
                  placeholder={isRTL ? "למשל: מתחם הרצל, מתחם סוקולוב..." : "e.g. Herzl Complex..."}
                />
              </div>
            </div>

            <div className="quantum-divider mb-8" />

            {/* Personal Details */}
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-bold">
                {isRTL ? "פרטים אישיים" : lang === "fr" ? "Informations personnelles" : lang === "es" ? "Datos personales" : lang === "ru" ? "Личные данные" : "Personal Details"}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("assessment_name")} *
                  </label>
                  <input
                    type="text"
                    required
                    className={inputClass}
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("assessment_phone")} *
                  </label>
                  <input
                    type="tel"
                    required
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="054-XXX-XXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("assessment_email")}
                </label>
                <input
                  type="email"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="quantum-btn-gold w-full flex items-center justify-center gap-2 text-lg">
              <Send className="w-5 h-5" />
              {t("assessment_submit")}
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              {t("assessment_disclaimer")}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Assessment;
