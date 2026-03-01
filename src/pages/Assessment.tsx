import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { Building2, TrendingUp, MapPin, Calculator, ChevronLeft, ChevronRight, CheckCircle, Phone } from "lucide-react";

const Assessment = () => {
  const { isRTL, lang } = useLanguage();
  const l = lang as string;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const lb: Record<string, Record<string, string>> = {
    he: { title: "הערכת נכס חינם", sub: "ענו על כמה שאלות ונספק לכם הערכה מקצועית של הנכס שלכם", start: "התחלה", next: "הבא", back: "חזרה", submit: "שליחה", done: "תודה!", doneSub: "קיבלנו את הפרטים. ניצור איתכם קשר תוך 24 שעות עם הערכה מפורטת.", call: "רוצים תשובה מיידית?", callBtn: "התקשרו עכשיו" },
    en: { title: "Free Property Assessment", sub: "Answer a few questions and we'll provide a professional property evaluation", start: "Start", next: "Next", back: "Back", submit: "Submit", done: "Thank You!", doneSub: "We received your details. We'll contact you within 24 hours with a detailed assessment.", call: "Want an immediate answer?", callBtn: "Call Now" },
    fr: { title: "Evaluation Gratuite", sub: "Repondez a quelques questions pour une evaluation professionnelle", start: "Commencer", next: "Suivant", back: "Retour", submit: "Envoyer", done: "Merci!", doneSub: "Nous avons recu vos details. Nous vous contacterons sous 24h.", call: "Reponse immediate?", callBtn: "Appelez" },
    es: { title: "Evaluacion Gratuita", sub: "Responda unas preguntas para una evaluacion profesional", start: "Comenzar", next: "Siguiente", back: "Atras", submit: "Enviar", done: "Gracias!", doneSub: "Recibimos sus datos. Le contactaremos en 24 horas.", call: "Respuesta inmediata?", callBtn: "Llamar" },
    ru: { title: "Бесплатная Оценка", sub: "Ответьте на несколько вопросов для профессиональной оценки", start: "Начать", next: "Далее", back: "Назад", submit: "Отправить", done: "Спасибо!", doneSub: "Мы получили ваши данные. Свяжемся в течение 24 часов.", call: "Хотите ответ сразу?", callBtn: "Позвонить" },
  };
  const t = lb[l] || lb.en;

  const questions: Array<{ key: string; q: Record<string, string>; options: Array<Record<string, string>> }> = [
    { key: "type", q: { he: "מה סוג הנכס?", en: "Property type?", fr: "Type de bien?", es: "Tipo de propiedad?", ru: "Тип недвижимости?" }, options: [{ he: "דירה בפינוי-בינוי", en: "Pinuy-Binuy apartment", fr: "Appartement renouvellement", es: "Depto renovacion", ru: "Квартира обновления" }, { he: "דירה רגילה", en: "Regular apartment", fr: "Appartement standard", es: "Depto regular", ru: "Обычная квартира" }, { he: "בית פרטי", en: "Private house", fr: "Maison", es: "Casa", ru: "Частный дом" }] },
    { key: "city", q: { he: "באיזו עיר?", en: "Which city?", fr: "Quelle ville?", es: "Que ciudad?", ru: "Какой город?" }, options: [{ he: "בת ים", en: "Bat Yam" }, { he: "חולון", en: "Holon" }, { he: "נתניה", en: "Netanya" }, { he: "פתח תקווה", en: "Petah Tikva" }, { he: "ראשון לציון", en: "Rishon LeZion" }, { he: "אחר", en: "Other" }] },
    { key: "status", q: { he: "מה סטטוס הפרויקט?", en: "Project status?", fr: "Statut du projet?", es: "Estado del proyecto?", ru: "Статус проекта?" }, options: [{ he: "לפני אישור ועדה", en: "Before committee approval", fr: "Avant approbation", es: "Antes de aprobacion", ru: "До одобрения" }, { he: "ועדה מקומית אישרה", en: "Local committee approved", fr: "Comite local approuve", es: "Comite local aprobo", ru: "Местный комитет одобрил" }, { he: "ועדה מחוזית אישרה", en: "District committee approved", fr: "Comite regional approuve", es: "Comite distrital aprobo", ru: "Окружной комитет одобрил" }, { he: "לא בטוח", en: "Not sure", fr: "Pas sur", es: "No seguro", ru: "Не уверен" }] },
    { key: "goal", q: { he: "מה המטרה שלכם?", en: "What's your goal?", fr: "Votre objectif?", es: "Su objetivo?", ru: "Ваша цель?" }, options: [{ he: "למכור", en: "Sell", fr: "Vendre", es: "Vender", ru: "Продать" }, { he: "לקנות", en: "Buy", fr: "Acheter", es: "Comprar", ru: "Купить" }, { he: "הערכת שווי", en: "Valuation only", fr: "Evaluation seulement", es: "Solo valuacion", ru: "Только оценка" }] },
  ];

  const submitted = step > questions.length;

  return (
    <div className="min-h-screen">
      <section className="quantum-hero py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto' }} />
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{t.title}</h1>
            <p className="text-lg text-white/60">{t.sub}</p>
          </div>
        </div>
      </section>

      <section className="quantum-section">
        <div className="container mx-auto px-4 max-w-2xl">
          {submitted ? (
            <div className="text-center space-y-6 py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
              <h2 className="text-2xl font-bold text-[#1A1A3E]" style={{ fontFamily: "'Playfair Display', serif" }}>{t.done}</h2>
              <p className="text-[#1A1A3E]/60">{t.doneSub}</p>
              <div className="pt-4 space-y-4">
                <p className="text-sm text-[#1A1A3E]/40">{t.call}</p>
                <a href="tel:+972547669985" className="inline-flex items-center gap-2 quantum-btn-gold"><Phone className="w-4 h-4" /><span>{t.callBtn}</span></a>
              </div>
            </div>
          ) : step === 0 ? (
            <div className="text-center space-y-8 py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[{ icon: Building2, l: { he: "סוג נכס", en: "Property Type" } }, { icon: MapPin, l: { he: "מיקום", en: "Location" } }, { icon: TrendingUp, l: { he: "סטטוס", en: "Status" } }, { icon: Calculator, l: { he: "הערכה", en: "Assessment" } }].map((item, i) => (
                  <div key={i} className="quantum-card p-6 text-center space-y-3">
                    <item.icon className="w-8 h-8 text-[#B8860B] mx-auto" />
                    <p className="text-sm font-medium text-[#1A1A3E]">{item.l[l as keyof typeof item.l] || item.l.en}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="quantum-btn-gold">{t.start}</button>
            </div>
          ) : (
            <div className="py-8 space-y-8">
              <div className="flex gap-2 mb-8">
                {questions.map((_, i) => (<div key={i} className={`h-1 flex-1 rounded-full ${i < step ? "bg-[#B8860B]" : "bg-gray-200"}`} />))}
              </div>
              <h3 className="text-xl font-bold text-[#1A1A3E]">{questions[step - 1].q[l] || questions[step - 1].q.en}</h3>
              <div className="grid gap-3">
                {questions[step - 1].options.map((opt, i) => {
                  const label = opt[l] || opt.en || opt.he;
                  const selected = answers[questions[step - 1].key] === label;
                  return (
                    <button key={i} onClick={() => setAnswers({ ...answers, [questions[step - 1].key]: label })} className={`w-full text-right p-4 rounded-xl border-2 transition-all ${selected ? "border-[#B8860B] bg-[#B8860B]/5" : "border-gray-200 hover:border-[#B8860B]/40"}`}>
                      <span className={`font-medium ${selected ? "text-[#B8860B]" : "text-[#1A1A3E]"}`}>{label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-between pt-4">
                <button onClick={() => setStep(step - 1)} className="quantum-btn-outline text-sm">{t.back}</button>
                <button onClick={() => setStep(step + 1)} disabled={!answers[questions[step - 1].key]} className="quantum-btn-gold text-sm disabled:opacity-40">
                  {step === questions.length ? t.submit : t.next}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Assessment;
