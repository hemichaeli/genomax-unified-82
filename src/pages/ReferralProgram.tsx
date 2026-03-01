import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { Gift, Users, DollarSign, ArrowLeft, ArrowRight, Share2, CheckCircle2, Star, Sparkles } from "lucide-react";

const ReferralProgram = () => {
  const { isRTL, lang } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const content = {
    he: {
      title: "תוכנית השותפים של QUANTUM",
      subtitle: "הכירו לנו לקוח, הרוויחו יחד. כי המלצה טובה שווה זהב.",
      howTitle: "איך זה עובד?",
      steps: [
        { icon: Share2, title: "הפנו לקוח", desc: "שלחו לנו את הפרטים של מישהו שרוצה לקנות או למכור נכס בפינוי-בינוי." },
        { icon: Users, title: "אנחנו מטפלים", desc: "הצוות שלנו נכנס לפעולה - פגישה, ניתוח שוק, והצגת הזדמנויות." },
        { icon: DollarSign, title: "אתם מרוויחים", desc: "ברגע שהעסקה נסגרת, אתם מקבלים בונוס הפניה ישירות לחשבון." },
      ],
      tiers: [
        { label: "עסקה ראשונה", reward: "₪3,000", desc: "בונוס קבוע על ההפניה הראשונה שמסתיימת בעסקה" },
        { label: "3+ עסקאות", reward: "₪5,000", desc: "מעמד שותף מועדף + בונוס מוגדל לכל עסקה" },
        { label: "שותף VIP", reward: "0.5%", desc: "עמלה מהעסקה + מעמד שותף VIP עם הטבות בלעדיות" },
      ],
      whoTitle: "למי זה מתאים?",
      whoList: [
        "מתווכים שעובדים בתחומים אחרים (שכירויות, מסחרי)",
        "עורכי דין בתחום הנדל\"ן",
        "יועצי משכנתאות",
        "מנהלי קהילות עולים חדשים",
        "כל מי שמכיר מישהו שרוצה לקנות או למכור",
      ],
      ctaTitle: "רוצים להצטרף?",
      ctaDesc: "שלחו לנו הודעה וניצור איתכם קשר תוך 24 שעות.",
      ctaBtn: "הצטרפו לתוכנית",
      note: "* הבונוסים משולמים לאחר השלמת העסקה בלבד. פרטים מלאים בהסכם השותפות.",
    },
    en: {
      title: "QUANTUM Referral Program",
      subtitle: "Introduce a client, earn together. Because a good referral is worth gold.",
      howTitle: "How It Works",
      steps: [
        { icon: Share2, title: "Refer a Client", desc: "Send us the details of someone looking to buy or sell a property in Israeli urban renewal." },
        { icon: Users, title: "We Take Over", desc: "Our team steps in with a meeting, market analysis, and curated opportunities." },
        { icon: DollarSign, title: "You Earn", desc: "Once the deal closes, you receive a referral bonus directly to your account." },
      ],
      tiers: [
        { label: "First Deal", reward: "₪3,000", desc: "Fixed bonus on your first referral that results in a deal" },
        { label: "3+ Deals", reward: "₪5,000", desc: "Preferred partner status + increased bonus per deal" },
        { label: "VIP Partner", reward: "0.5%", desc: "Commission from the deal + VIP partner status with exclusive benefits" },
      ],
      whoTitle: "Who Is This For?",
      whoList: [
        "Agents working in other real estate areas (rentals, commercial)",
        "Real estate attorneys",
        "Mortgage advisors",
        "New immigrant community leaders",
        "Anyone who knows someone looking to buy or sell",
      ],
      ctaTitle: "Ready to Join?",
      ctaDesc: "Send us a message and we'll get back to you within 24 hours.",
      ctaBtn: "Join the Program",
      note: "* Bonuses are paid only after deal completion. Full details in the partnership agreement.",
    },
    fr: {
      title: "Programme de parrainage QUANTUM",
      subtitle: "Présentez un client, gagnez ensemble. Car une bonne recommandation vaut de l'or.",
      howTitle: "Comment ça marche ?",
      steps: [
        { icon: Share2, title: "Référez un client", desc: "Envoyez-nous les coordonnées de quelqu'un cherchant à acheter ou vendre un bien en renouvellement urbain." },
        { icon: Users, title: "Nous prenons le relais", desc: "Notre équipe intervient : rencontre, analyse de marché et opportunités sélectionnées." },
        { icon: DollarSign, title: "Vous gagnez", desc: "Une fois la transaction conclue, vous recevez un bonus directement sur votre compte." },
      ],
      tiers: [
        { label: "Première affaire", reward: "₪3,000", desc: "Bonus fixe sur votre première référence conclue" },
        { label: "3+ affaires", reward: "₪5,000", desc: "Statut partenaire préféré + bonus augmenté par affaire" },
        { label: "Partenaire VIP", reward: "0.5%", desc: "Commission sur la transaction + statut VIP avec avantages exclusifs" },
      ],
      whoTitle: "Pour qui ?",
      whoList: [
        "Agents dans d'autres domaines immobiliers (locations, commercial)",
        "Avocats en immobilier",
        "Conseillers en prêts hypothécaires",
        "Leaders de communautés de nouveaux immigrants",
        "Toute personne connaissant quelqu'un qui cherche à acheter ou vendre",
      ],
      ctaTitle: "Prêt à rejoindre ?",
      ctaDesc: "Envoyez-nous un message et nous vous recontacterons sous 24 heures.",
      ctaBtn: "Rejoindre le programme",
      note: "* Les bonus sont versés uniquement après la conclusion de la transaction.",
    },
    es: {
      title: "Programa de Referidos QUANTUM",
      subtitle: "Presente un cliente, gane juntos. Porque una buena recomendación vale oro.",
      howTitle: "¿Cómo funciona?",
      steps: [
        { icon: Share2, title: "Refiera un cliente", desc: "Envíenos los datos de alguien que busca comprar o vender una propiedad en renovación urbana." },
        { icon: Users, title: "Nosotros nos encargamos", desc: "Nuestro equipo toma el control: reunión, análisis de mercado y oportunidades seleccionadas." },
        { icon: DollarSign, title: "Usted gana", desc: "Una vez cerrado el trato, recibe un bono directamente en su cuenta." },
      ],
      tiers: [
        { label: "Primera operación", reward: "₪3,000", desc: "Bono fijo por su primera referencia que resulte en operación" },
        { label: "3+ operaciones", reward: "₪5,000", desc: "Estatus de socio preferido + bono aumentado por operación" },
        { label: "Socio VIP", reward: "0.5%", desc: "Comisión de la operación + estatus VIP con beneficios exclusivos" },
      ],
      whoTitle: "¿Para quién es?",
      whoList: [
        "Agentes en otras áreas inmobiliarias (alquileres, comercial)",
        "Abogados inmobiliarios",
        "Asesores hipotecarios",
        "Líderes de comunidades de nuevos inmigrantes",
        "Cualquiera que conozca a alguien que busca comprar o vender",
      ],
      ctaTitle: "¿Listo para unirse?",
      ctaDesc: "Envíenos un mensaje y le contactaremos en 24 horas.",
      ctaBtn: "Unirse al programa",
      note: "* Los bonos se pagan solo después de completar la transacción.",
    },
    ru: {
      title: "Реферальная программа QUANTUM",
      subtitle: "Порекомендуйте клиента, зарабатывайте вместе. Потому что хорошая рекомендация на вес золота.",
      howTitle: "Как это работает?",
      steps: [
        { icon: Share2, title: "Порекомендуйте клиента", desc: "Отправьте нам данные того, кто хочет купить или продать недвижимость в проекте обновления." },
        { icon: Users, title: "Мы берём на себя", desc: "Наша команда проводит встречу, анализ рынка и подбор возможностей." },
        { icon: DollarSign, title: "Вы зарабатываете", desc: "После закрытия сделки вы получаете реферальный бонус на свой счёт." },
      ],
      tiers: [
        { label: "Первая сделка", reward: "₪3,000", desc: "Фиксированный бонус за первую рекомендацию, завершившуюся сделкой" },
        { label: "3+ сделки", reward: "₪5,000", desc: "Статус привилегированного партнёра + увеличенный бонус за сделку" },
        { label: "VIP партнёр", reward: "0.5%", desc: "Комиссия от сделки + статус VIP с эксклюзивными преимуществами" },
      ],
      whoTitle: "Для кого это?",
      whoList: [
        "Агенты в других сферах недвижимости (аренда, коммерция)",
        "Юристы по недвижимости",
        "Ипотечные консультанты",
        "Лидеры общин новых репатриантов",
        "Все, кто знает кого-то, кто хочет купить или продать",
      ],
      ctaTitle: "Готовы присоединиться?",
      ctaDesc: "Отправьте нам сообщение, и мы свяжемся с вами в течение 24 часов.",
      ctaBtn: "Присоединиться к программе",
      note: "* Бонусы выплачиваются только после завершения сделки.",
    },
  };

  const c = content[lang] || content.en;

  return (
    <div className="min-h-screen bg-[hsl(40,30%,97%)]">
      {/* Hero */}
      <section className="quantum-hero text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <Gift className="w-14 h-14 text-[hsl(38,76%,44%)] mx-auto mb-6" />
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
            {c.title}
          </h1>
          <div className="quantum-gold-line-center mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{c.subtitle}</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="quantum-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-display">{c.howTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {c.steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[hsl(225,40%,16%)] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[hsl(38,76%,44%)]" />
                  </div>
                  <div className="text-sm font-bold text-[hsl(38,76%,44%)] mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="quantum-section-alt">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {c.tiers.map((tier, i) => (
              <div
                key={i}
                className={`quantum-card p-8 text-center ${
                  i === 2 ? "border-2 border-[hsl(38,76%,44%)] ring-2 ring-[hsl(38,76%,44%)]/20" : ""
                }`}
              >
                {i === 2 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[hsl(38,76%,44%)] text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> VIP
                    </span>
                  </div>
                )}
                <div className="text-sm font-medium text-gray-500 mb-2">{tier.label}</div>
                <div className="text-4xl font-bold text-[hsl(38,76%,44%)] mb-3 font-display">
                  {tier.reward}
                </div>
                <p className="text-sm text-gray-600">{tier.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who */}
      <section className="quantum-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-8 font-display">{c.whoTitle}</h2>
          <div className="quantum-card p-8">
            <ul className="space-y-3">
              {c.whoList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="quantum-section-navy text-center">
        <div className="container mx-auto px-4">
          <Star className="w-10 h-10 text-[hsl(38,76%,44%)] mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-3 font-display">{c.ctaTitle}</h2>
          <p className="text-gray-300 mb-8">{c.ctaDesc}</p>
          <Link
            to="/contact"
            className="quantum-btn-gold inline-flex items-center gap-2"
          >
            {c.ctaBtn} <Arrow className="w-4 h-4" />
          </Link>
          <p className="text-xs text-white/30 mt-6">{c.note}</p>
        </div>
      </section>
    </div>
  );
};

export default ReferralProgram;
