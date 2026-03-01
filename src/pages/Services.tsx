import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Check, Star, Zap, Globe, Users, Home, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const { t, isRTL, lang } = useLanguage();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const sellerPlans = [
    {
      name: t("services_standard"),
      commission: "2%",
      minimum: "₪25,000",
      badge: null,
      desc: t("services_standard_desc"),
      features: isRTL
        ? [
            "חשיפה לרשת קונים גלובלית",
            "ליווי משפטי בסיסי",
            "ניתוח שוק ותמחור אסטרטגי",
            "צילום מקצועי",
          ]
        : lang === "fr"
        ? [
            "Exposition au réseau mondial d'acheteurs",
            "Accompagnement juridique de base",
            "Analyse de marché et prix stratégique",
            "Photographie professionnelle",
          ]
        : lang === "es"
        ? [
            "Exposición a red global de compradores",
            "Acompañamiento legal básico",
            "Análisis de mercado y precio estratégico",
            "Fotografía profesional",
          ]
        : lang === "ru"
        ? [
            "Доступ к глобальной сети покупателей",
            "Базовое юридическое сопровождение",
            "Анализ рынка и стратегическое ценообразование",
            "Профессиональная фотосъёмка",
          ]
        : [
            "Exposure to global buyer network",
            "Basic legal guidance",
            "Market analysis & strategic pricing",
            "Professional photography",
          ],
    },
    {
      name: t("services_exclusive"),
      commission: "2%",
      minimum: "₪30,000",
      badge: t("services_popular"),
      desc: t("services_exclusive_desc"),
      features: isRTL
        ? [
            "כל מה שב-Standard +",
            "בלעדיות 90 יום עם שיווק גלובלי מלא",
            "חשיפה ל-7+ מדינות בשפות מרובות",
            "דוח שוק מקצועי מפורט",
            "סיור וירטואלי 360°",
            "קמפיין ממומן ממוקד",
          ]
        : lang === "fr"
        ? [
            "Tout le Standard +",
            "Exclusivité 90 jours avec marketing mondial complet",
            "Exposition dans 7+ pays en plusieurs langues",
            "Rapport de marché professionnel détaillé",
            "Visite virtuelle 360°",
            "Campagne sponsorisée ciblée",
          ]
        : lang === "es"
        ? [
            "Todo lo del Standard +",
            "Exclusividad 90 días con marketing global completo",
            "Exposición en 7+ países en múltiples idiomas",
            "Informe de mercado profesional detallado",
            "Tour virtual 360°",
            "Campaña patrocinada dirigida",
          ]
        : lang === "ru"
        ? [
            "Всё из Стандарта +",
            "Эксклюзивность 90 дней с полным глобальным маркетингом",
            "Охват 7+ стран на нескольких языках",
            "Детальный профессиональный отчёт о рынке",
            "Виртуальный тур 360°",
            "Таргетированная рекламная кампания",
          ]
        : [
            "Everything in Standard +",
            "90-day exclusivity with full global marketing",
            "Exposure to 7+ countries in multiple languages",
            "Detailed professional market report",
            "360° virtual tour",
            "Targeted sponsored campaign",
          ],
    },
    {
      name: t("services_express"),
      commission: "2.5%",
      minimum: "₪35,000",
      badge: t("services_fast"),
      desc: t("services_express_desc"),
      features: isRTL
        ? [
            "כל מה שב-Exclusive +",
            "התחייבות מכירה תוך 60 יום",
            "השקעה אגרסיבית בפרסום",
            "משא ומתן אינטנסיבי",
            "דיווח שבועי מפורט",
            "עדיפות מקסימלית",
          ]
        : lang === "fr"
        ? [
            "Tout l'Exclusif +",
            "Engagement de vente sous 60 jours",
            "Investissement publicitaire agressif",
            "Négociation intensive",
            "Rapport hebdomadaire détaillé",
            "Priorité maximale",
          ]
        : lang === "es"
        ? [
            "Todo lo del Exclusivo +",
            "Compromiso de venta en 60 días",
            "Inversión publicitaria agresiva",
            "Negociación intensiva",
            "Informe semanal detallado",
            "Prioridad máxima",
          ]
        : lang === "ru"
        ? [
            "Всё из Эксклюзива +",
            "Обязательство продажи за 60 дней",
            "Агрессивные инвестиции в рекламу",
            "Интенсивные переговоры",
            "Детальный еженедельный отчёт",
            "Максимальный приоритет",
          ]
        : [
            "Everything in Exclusive +",
            "Commitment to sell within 60 days",
            "Aggressive advertising investment",
            "Intensive negotiation",
            "Detailed weekly report",
            "Maximum priority",
          ],
    },
  ];

  const buyerPlans = [
    {
      name: t("services_purchase"),
      commission: "1.5%",
      minimum: "₪20,000",
      badge: null,
      icon: Home,
      desc: t("services_purchase_desc"),
      features: isRTL
        ? [
            "גישה לנכסים לפני השוק",
            "ניתוח שוק מקצועי",
            "ליווי מלא עד החתימה",
            "ייעוץ משכנתא ומיסוי",
          ]
        : lang === "fr"
        ? [
            "Accès aux biens hors marché",
            "Analyse de marché professionnelle",
            "Accompagnement complet jusqu'à la signature",
            "Conseil en hypothèque et fiscalité",
          ]
        : lang === "es"
        ? [
            "Acceso a propiedades fuera del mercado",
            "Análisis de mercado profesional",
            "Acompañamiento completo hasta la firma",
            "Asesoría en hipoteca e impuestos",
          ]
        : lang === "ru"
        ? [
            "Доступ к внерыночной недвижимости",
            "Профессиональный анализ рынка",
            "Полное сопровождение до подписания",
            "Консультации по ипотеке и налогам",
          ]
        : [
            "Access to pre-market properties",
            "Professional market analysis",
            "Full support until closing",
            "Mortgage & tax advisory",
          ],
    },
    {
      name: t("services_softlanding"),
      commission: "2%",
      minimum: "₪30,000",
      badge: t("services_popular"),
      icon: Globe,
      desc: t("services_softlanding_desc"),
      features: isRTL
        ? [
            "כל מה שב-רכישה רגילה +",
            "ליווי מהנחיתה בארץ ועד המפתח",
            "סיוע בפתיחת חשבון בנק",
            "חיבור לקהילה מקומית",
            "תרגום מסמכים משפטיים",
            "ייעוץ מס לתושבי חוץ",
          ]
        : lang === "fr"
        ? [
            "Tout l'Achat standard +",
            "Accompagnement de l'arrivée jusqu'aux clés",
            "Aide à l'ouverture de compte bancaire",
            "Connexion à la communauté locale",
            "Traduction de documents juridiques",
            "Conseil fiscal pour non-résidents",
          ]
        : lang === "es"
        ? [
            "Todo lo de Compra estándar +",
            "Acompañamiento desde llegada hasta las llaves",
            "Asistencia en apertura de cuenta bancaria",
            "Conexión con comunidad local",
            "Traducción de documentos legales",
            "Asesoría fiscal para no residentes",
          ]
        : lang === "ru"
        ? [
            "Всё из стандартной покупки +",
            "Сопровождение от прилёта до ключей",
            "Помощь в открытии банковского счёта",
            "Связь с местным сообществом",
            "Перевод юридических документов",
            "Налоговые консультации для нерезидентов",
          ]
        : [
            "Everything in Standard Purchase +",
            "Support from landing to keys in hand",
            "Bank account opening assistance",
            "Local community connection",
            "Legal document translation",
            "Tax advisory for non-residents",
          ],
    },
    {
      name: t("services_community_buy"),
      commission: "1.5%",
      minimum: "₪20,000",
      badge: null,
      icon: Users,
      desc: t("services_community_buy_desc"),
      features: isRTL
        ? [
            "הצטרפות לקבוצת רכישה",
            "משפחות מרקע דומה",
            "תנאים מועדפים מהיזם",
            "קהילה מוכנה לפני הבנייה",
            "אירועי היכרות",
          ]
        : lang === "fr"
        ? [
            "Rejoindre un groupe d'achat",
            "Familles de même origine",
            "Conditions préférentielles du promoteur",
            "Communauté prête avant construction",
            "Événements de rencontre",
          ]
        : lang === "es"
        ? [
            "Unirse a grupo de compra",
            "Familias de origen similar",
            "Condiciones preferenciales del promotor",
            "Comunidad lista antes de construcción",
            "Eventos de conocimiento",
          ]
        : lang === "ru"
        ? [
            "Присоединение к группе покупателей",
            "Семьи схожего происхождения",
            "Льготные условия от застройщика",
            "Готовое сообщество до строительства",
            "Мероприятия знакомства",
          ]
        : [
            "Join a buying group",
            "Families from similar backgrounds",
            "Preferred terms from developer",
            "Ready community before construction",
            "Meet & greet events",
          ],
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(40,30%,97%)]">
      {/* Hero */}
      <section className="quantum-hero text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
            {t("services_title")}
          </h1>
          <div className="quantum-gold-line-center mb-6" />
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t("services_subtitle")}
          </p>
        </div>
      </section>

      {/* Seller Plans */}
      <section className="quantum-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("services_sellers_title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sellerPlans.map((plan, i) => (
              <div
                key={i}
                className={`quantum-card p-8 relative ${
                  plan.badge === t("services_popular")
                    ? "border-2 border-[hsl(38,76%,44%)] ring-2 ring-[hsl(38,76%,44%)]/20"
                    : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[hsl(38,76%,44%)] text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                      {plan.badge === t("services_popular") ? (
                        <Star className="w-3 h-3" />
                      ) : (
                        <Zap className="w-3 h-3" />
                      )}
                      {plan.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold text-[hsl(38,76%,44%)]">
                    {plan.commission}
                  </span>
                  <span className="text-sm text-gray-500">+ {isRTL ? "מע\"מ" : "VAT"}</span>
                </div>
                <p className="text-xs text-gray-400 mb-4">
                  {t("services_minimum")}: {plan.minimum}
                </p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{plan.desc}</p>
                <div className="quantum-divider mb-6" />
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {t("services_includes")}
                </p>
                <ul className="space-y-2.5">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="quantum-btn-navy w-full mt-8 block text-center text-sm"
                >
                  {t("services_cta")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Plans */}
      <section className="quantum-section-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("services_buyers_title")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {buyerPlans.map((plan, i) => {
              const Icon = plan.icon;
              return (
                <div
                  key={i}
                  className={`quantum-card p-8 relative ${
                    plan.badge
                      ? "border-2 border-[hsl(38,76%,44%)] ring-2 ring-[hsl(38,76%,44%)]/20"
                      : ""
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[hsl(38,76%,44%)] text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-[hsl(225,40%,16%)]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[hsl(225,40%,16%)]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-bold text-[hsl(38,76%,44%)]">
                      {plan.commission}
                    </span>
                    <span className="text-sm text-gray-500">+ {isRTL ? "מע\"מ" : "VAT"}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-4">
                    {t("services_minimum")}: {plan.minimum}
                  </p>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">{plan.desc}</p>
                  <div className="quantum-divider mb-6" />
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    {t("services_includes")}
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="quantum-btn-gold w-full mt-8 block text-center text-sm"
                  >
                    {t("services_cta")}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="quantum-section-navy text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 font-display">
            {t("services_free_consultation")}
          </h2>
          <p className="text-gray-300 mb-8 text-lg">{t("services_no_commitment")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="quantum-btn-gold inline-flex items-center gap-2">
              {t("services_cta")} <Arrow className="w-4 h-4" />
            </Link>
            <Link to="/assessment" className="quantum-btn-outline border-white text-white hover:bg-white hover:text-[hsl(225,40%,16%)] inline-flex items-center gap-2">
              {t("assessment_title")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
