export type Language = "he" | "en" | "fr" | "es" | "ru";

export interface LanguageInfo {
  code: Language;
  label: string;
  flag: string;
  dir: "rtl" | "ltr";
  fontFamily: string;
}

export const languages: Record<Language, LanguageInfo> = {
  he: { code: "he", label: "עברית", flag: "🇮🇱", dir: "rtl", fontFamily: "'Heebo', sans-serif" },
  en: { code: "en", label: "English", flag: "🇺🇸", dir: "ltr", fontFamily: "'Inter', sans-serif" },
  fr: { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr", fontFamily: "'Inter', sans-serif" },
  es: { code: "es", label: "Español", flag: "🇦🇷", dir: "ltr", fontFamily: "'Inter', sans-serif" },
  ru: { code: "ru", label: "Русский", flag: "🇷🇺", dir: "ltr", fontFamily: "'Inter', sans-serif" },
};

type TranslationKeys = {
  // Navigation
  nav_home: string;
  nav_sellers: string;
  nav_buyers: string;
  nav_neighborhoods: string;
  nav_community: string;
  nav_services: string;
  nav_about: string;
  nav_contact: string;
  nav_schedule: string;

  // Hero
  hero_title_1: string;
  hero_title_2: string;
  hero_title_3: string;
  hero_subtitle: string;
  hero_sellers_btn: string;
  hero_sellers_desc: string;
  hero_buyers_btn: string;
  hero_buyers_desc: string;
  hero_for_sellers: string;
  hero_for_buyers: string;

  // Stats
  stat_complexes: string;
  stat_below_market: string;
  stat_satisfaction: string;
  stat_availability: string;

  // Services page
  services_title: string;
  services_subtitle: string;
  services_sellers_title: string;
  services_buyers_title: string;
  services_standard: string;
  services_standard_desc: string;
  services_exclusive: string;
  services_exclusive_desc: string;
  services_express: string;
  services_express_desc: string;
  services_purchase: string;
  services_purchase_desc: string;
  services_softlanding: string;
  services_softlanding_desc: string;
  services_community_buy: string;
  services_community_buy_desc: string;
  services_commission: string;
  services_minimum: string;
  services_includes: string;
  services_popular: string;
  services_fast: string;
  services_cta: string;
  services_free_consultation: string;
  services_no_commitment: string;

  // Assessment
  assessment_title: string;
  assessment_subtitle: string;
  assessment_address: string;
  assessment_city: string;
  assessment_size: string;
  assessment_floor: string;
  assessment_rooms: string;
  assessment_complex_name: string;
  assessment_name: string;
  assessment_phone: string;
  assessment_email: string;
  assessment_submit: string;
  assessment_free: string;
  assessment_disclaimer: string;

  // Footer
  footer_tagline: string;
  footer_nav: string;
  footer_contact: string;
  footer_legal: string;
  footer_rights: string;
  footer_only_client: string;

  // Common
  common_whatsapp: string;
  common_call: string;
  common_learn_more: string;
  common_schedule_meeting: string;
  common_free_consultation: string;
};

export const translations: Record<Language, TranslationKeys> = {
  he: {
    nav_home: "ראשי",
    nav_sellers: "מוכרים",
    nav_buyers: "קונים",
    nav_neighborhoods: "שכונות",
    nav_community: "קהילה",
    nav_services: "שירותים",
    nav_about: "אודות",
    nav_contact: "צור קשר",
    nav_schedule: "תיאום פגישה",

    hero_title_1: "אנחנו לא מחפשים נכסים.",
    hero_title_2: "אנחנו יודעים על נכסים",
    hero_title_3: "שאחרים אפילו לא יודעים שקיימים.",
    hero_subtitle: "משרד תיווך בוטיק לפינוי-בינוי. מח חד, הבנה עמוקה, ויחס אישי שגורם לכל לקוח להרגיש כמו בן יחיד.",
    hero_sellers_btn: "אני רוצה למכור",
    hero_sellers_desc: "יש לנו קונים שאתה אפילו לא יודע שהם קיימים. מישראל ומכל העולם.",
    hero_buyers_btn: "אני רוצה לקנות",
    hero_buyers_desc: "גישה להזדמנויות לפני השוק. מוכרים במצוקה, כינוסים, ירושות.",
    hero_for_sellers: "למוכרים",
    hero_for_buyers: "לקונים",

    stat_complexes: "מתחמי פינוי-בינוי במעקב",
    stat_below_market: "מתחת למחיר השוק בממוצע",
    stat_satisfaction: "שביעות רצון לקוחות",
    stat_availability: "זמינות מלאה",

    services_title: "השירותים שלנו",
    services_subtitle: "כל מסלול כולל את המודיעין השוקי העמוק של QUANTUM, גישה לרשת הקונים הגלובלית, וליווי אישי מלא.",
    services_sellers_title: "למוכרים",
    services_buyers_title: "לקונים מכל העולם",
    services_standard: "Standard",
    services_standard_desc: "תיווך מקצועי עם חשיפה לקונים גלובליים. מתאים למוכר שרוצה שירות איכותי ללא בלעדיות.",
    services_exclusive: "Exclusive",
    services_exclusive_desc: "בלעדיות 90 יום + שיווק גלובלי מלא בכל הערוצים. חשיפה ל-7+ מדינות, שיווק ממוקד, ודוח שוק מקצועי.",
    services_express: "Express",
    services_express_desc: "התחייבות למכירה תוך 60 יום. השקעה אגרסיבית בשיווק, חשיפה מקסימלית, ומשא ומתן אינטנסיבי.",
    services_purchase: "תיווך רכישה",
    services_purchase_desc: "גישה לנכסים לפני השוק, ניתוח שוק מקצועי, וליווי מלא עד החתימה.",
    services_softlanding: "Soft Landing",
    services_softlanding_desc: "חבילה מלאה לעולים חדשים ומשקיעים מחו\"ל. מהנחיתה בארץ ועד המפתח ביד.",
    services_community_buy: "רכישה קהילתית",
    services_community_buy_desc: "הצטרפו לקבוצת רכישה עם משפחות מרקע דומה. תנאים מועדפים + קהילה מוכנה.",
    services_commission: "עמלה",
    services_minimum: "מינימום",
    services_includes: "כולל",
    services_popular: "הכי פופולרי",
    services_fast: "מהיר",
    services_cta: "תיאום פגישת ייעוץ",
    services_free_consultation: "ייעוץ ראשוני חינם",
    services_no_commitment: "ללא התחייבות",

    assessment_title: "כמה שווה הנכס שלך?",
    assessment_subtitle: "הזינו את פרטי הנכס וקבלו הערכת שווי ראשונית תוך דקות. בחינם, ללא התחייבות.",
    assessment_address: "כתובת",
    assessment_city: "עיר",
    assessment_size: "גודל (מ\"ר)",
    assessment_floor: "קומה",
    assessment_rooms: "חדרים",
    assessment_complex_name: "שם מתחם פינוי-בינוי (אם ידוע)",
    assessment_name: "שם מלא",
    assessment_phone: "טלפון",
    assessment_email: "אימייל",
    assessment_submit: "קבלו הערכת שווי חינם",
    assessment_free: "חינם וללא התחייבות",
    assessment_disclaimer: "ההערכה מבוססת על נתוני שוק עדכניים ונועדה לתת אינדיקציה ראשונית. להערכה מדויקת, נפגש אישית.",

    footer_tagline: "משרד תיווך בוטיק לפינוי-בינוי.\nמח חד. הבנה עמוקה. גישה לנכסים שאחרים לא יודעים שקיימים.",
    footer_nav: "ניווט",
    footer_contact: "צור קשר",
    footer_legal: "מידע משפטי",
    footer_rights: "QUANTUM Real Estate. כל הזכויות שמורות.",
    footer_only_client: "ב-QUANTUM, אתה לא עוד לקוח. אתה הלקוח היחיד.",

    common_whatsapp: "WhatsApp",
    common_call: "התקשרו",
    common_learn_more: "למידע נוסף",
    common_schedule_meeting: "תיאום פגישה",
    common_free_consultation: "ייעוץ חינם",
  },

  en: {
    nav_home: "Home",
    nav_sellers: "Sellers",
    nav_buyers: "Buyers",
    nav_neighborhoods: "Neighborhoods",
    nav_community: "Community",
    nav_services: "Services",
    nav_about: "About",
    nav_contact: "Contact",
    nav_schedule: "Schedule Meeting",

    hero_title_1: "We don't search for properties.",
    hero_title_2: "We know about properties",
    hero_title_3: "that others don't even know exist.",
    hero_subtitle: "A boutique brokerage for Israeli urban renewal. Sharp minds, deep understanding, and personal service that makes every client feel like our only client.",
    hero_sellers_btn: "I Want to Sell",
    hero_sellers_desc: "We have buyers you don't even know exist. From Israel and around the world.",
    hero_buyers_btn: "I Want to Buy",
    hero_buyers_desc: "Access to pre-market opportunities. Distressed sellers, receiverships, inheritances.",
    hero_for_sellers: "For Sellers",
    hero_for_buyers: "For Buyers",

    stat_complexes: "Urban renewal complexes tracked",
    stat_below_market: "Below market price on average",
    stat_satisfaction: "Client satisfaction",
    stat_availability: "Full availability",

    services_title: "Our Services",
    services_subtitle: "Every plan includes QUANTUM's deep market intelligence, access to our global buyer network, and full personal support.",
    services_sellers_title: "For Sellers",
    services_buyers_title: "For Global Buyers",
    services_standard: "Standard",
    services_standard_desc: "Professional brokerage with exposure to global buyers. Ideal for sellers who want quality service without exclusivity.",
    services_exclusive: "Exclusive",
    services_exclusive_desc: "90-day exclusivity + full global marketing across all channels. Exposure to 7+ countries, targeted marketing, and professional market report.",
    services_express: "Express",
    services_express_desc: "Commitment to sell within 60 days. Aggressive marketing investment, maximum exposure, and intensive negotiation.",
    services_purchase: "Purchase Brokerage",
    services_purchase_desc: "Access to pre-market properties, professional market analysis, and full support until closing.",
    services_softlanding: "Soft Landing",
    services_softlanding_desc: "Complete package for new immigrants and international investors. From landing in Israel to keys in hand.",
    services_community_buy: "Community Buy",
    services_community_buy_desc: "Join a buying group with families from similar backgrounds. Preferred terms + ready-made community.",
    services_commission: "Commission",
    services_minimum: "Minimum",
    services_includes: "Includes",
    services_popular: "Most Popular",
    services_fast: "Fast Track",
    services_cta: "Schedule Consultation",
    services_free_consultation: "Free initial consultation",
    services_no_commitment: "No commitment",

    assessment_title: "What's Your Property Worth?",
    assessment_subtitle: "Enter your property details and get an initial valuation within minutes. Free, no commitment.",
    assessment_address: "Address",
    assessment_city: "City",
    assessment_size: "Size (sqm)",
    assessment_floor: "Floor",
    assessment_rooms: "Rooms",
    assessment_complex_name: "Urban renewal complex name (if known)",
    assessment_name: "Full Name",
    assessment_phone: "Phone",
    assessment_email: "Email",
    assessment_submit: "Get Free Valuation",
    assessment_free: "Free, no commitment",
    assessment_disclaimer: "This valuation is based on current market data and provides an initial indication. For a precise valuation, we'll meet in person.",

    footer_tagline: "Boutique brokerage for Israeli urban renewal.\nSharp minds. Deep understanding. Access to properties others don't know exist.",
    footer_nav: "Navigation",
    footer_contact: "Contact",
    footer_legal: "Legal",
    footer_rights: "QUANTUM Real Estate. All rights reserved.",
    footer_only_client: "At QUANTUM, you're not just another client. You're our only client.",

    common_whatsapp: "WhatsApp",
    common_call: "Call Us",
    common_learn_more: "Learn More",
    common_schedule_meeting: "Schedule Meeting",
    common_free_consultation: "Free Consultation",
  },

  fr: {
    nav_home: "Accueil",
    nav_sellers: "Vendeurs",
    nav_buyers: "Acheteurs",
    nav_neighborhoods: "Quartiers",
    nav_community: "Communauté",
    nav_services: "Services",
    nav_about: "À propos",
    nav_contact: "Contact",
    nav_schedule: "Prendre RDV",

    hero_title_1: "Nous ne cherchons pas des biens.",
    hero_title_2: "Nous connaissons des biens",
    hero_title_3: "que les autres ignorent.",
    hero_subtitle: "Agence immobilière boutique spécialisée en renouvellement urbain israélien. Intelligence aiguë, compréhension profonde, et un service personnel qui fait de chaque client notre seul client.",
    hero_sellers_btn: "Je veux vendre",
    hero_sellers_desc: "Nous avons des acheteurs dont vous ignorez l'existence. D'Israël et du monde entier.",
    hero_buyers_btn: "Je veux acheter",
    hero_buyers_desc: "Accès aux opportunités avant le marché. Vendeurs en difficulté, saisies, héritages.",
    hero_for_sellers: "Vendeurs",
    hero_for_buyers: "Acheteurs",

    stat_complexes: "Complexes de renouvellement urbain suivis",
    stat_below_market: "En dessous du prix du marché en moyenne",
    stat_satisfaction: "Satisfaction client",
    stat_availability: "Disponibilité totale",

    services_title: "Nos Services",
    services_subtitle: "Chaque formule inclut l'intelligence de marché approfondie de QUANTUM, l'accès à notre réseau mondial d'acheteurs, et un accompagnement personnel complet.",
    services_sellers_title: "Pour les vendeurs",
    services_buyers_title: "Pour les acheteurs internationaux",
    services_standard: "Standard",
    services_standard_desc: "Courtage professionnel avec exposition aux acheteurs internationaux. Idéal pour les vendeurs souhaitant un service de qualité sans exclusivité.",
    services_exclusive: "Exclusif",
    services_exclusive_desc: "Exclusivité 90 jours + marketing mondial complet. Exposition dans 7+ pays, marketing ciblé et rapport de marché professionnel.",
    services_express: "Express",
    services_express_desc: "Engagement de vente sous 60 jours. Investissement marketing agressif, exposition maximale et négociation intensive.",
    services_purchase: "Courtage d'achat",
    services_purchase_desc: "Accès aux biens hors marché, analyse de marché professionnelle et accompagnement complet jusqu'à la signature.",
    services_softlanding: "Soft Landing",
    services_softlanding_desc: "Package complet pour les nouveaux immigrants et investisseurs internationaux. De l'atterrissage en Israël aux clés en main.",
    services_community_buy: "Achat Communautaire",
    services_community_buy_desc: "Rejoignez un groupe d'achat avec des familles de même origine. Conditions préférentielles + communauté prête.",
    services_commission: "Commission",
    services_minimum: "Minimum",
    services_includes: "Inclus",
    services_popular: "Le plus populaire",
    services_fast: "Rapide",
    services_cta: "Prendre rendez-vous",
    services_free_consultation: "Consultation initiale gratuite",
    services_no_commitment: "Sans engagement",

    assessment_title: "Combien vaut votre bien ?",
    assessment_subtitle: "Entrez les détails de votre bien et recevez une estimation initiale en quelques minutes. Gratuit, sans engagement.",
    assessment_address: "Adresse",
    assessment_city: "Ville",
    assessment_size: "Surface (m²)",
    assessment_floor: "Étage",
    assessment_rooms: "Pièces",
    assessment_complex_name: "Nom du complexe de renouvellement (si connu)",
    assessment_name: "Nom complet",
    assessment_phone: "Téléphone",
    assessment_email: "Email",
    assessment_submit: "Obtenir une estimation gratuite",
    assessment_free: "Gratuit, sans engagement",
    assessment_disclaimer: "Cette estimation est basée sur les données actuelles du marché et fournit une indication initiale. Pour une évaluation précise, nous nous rencontrerons en personne.",

    footer_tagline: "Agence immobilière boutique pour le renouvellement urbain israélien.\nIntelligence aiguë. Compréhension profonde. Accès à des biens que d'autres ignorent.",
    footer_nav: "Navigation",
    footer_contact: "Contact",
    footer_legal: "Mentions légales",
    footer_rights: "QUANTUM Real Estate. Tous droits réservés.",
    footer_only_client: "Chez QUANTUM, vous n'êtes pas un client de plus. Vous êtes notre seul client.",

    common_whatsapp: "WhatsApp",
    common_call: "Appelez-nous",
    common_learn_more: "En savoir plus",
    common_schedule_meeting: "Prendre rendez-vous",
    common_free_consultation: "Consultation gratuite",
  },

  es: {
    nav_home: "Inicio",
    nav_sellers: "Vendedores",
    nav_buyers: "Compradores",
    nav_neighborhoods: "Barrios",
    nav_community: "Comunidad",
    nav_services: "Servicios",
    nav_about: "Nosotros",
    nav_contact: "Contacto",
    nav_schedule: "Agendar cita",

    hero_title_1: "No buscamos propiedades.",
    hero_title_2: "Conocemos propiedades",
    hero_title_3: "que otros ni saben que existen.",
    hero_subtitle: "Inmobiliaria boutique especializada en renovación urbana israelí. Mentes agudas, comprensión profunda y servicio personal que hace que cada cliente se sienta como nuestro único cliente.",
    hero_sellers_btn: "Quiero vender",
    hero_sellers_desc: "Tenemos compradores que ni sabías que existían. De Israel y de todo el mundo.",
    hero_buyers_btn: "Quiero comprar",
    hero_buyers_desc: "Acceso a oportunidades antes del mercado. Vendedores motivados, ejecuciones, herencias.",
    hero_for_sellers: "Vendedores",
    hero_for_buyers: "Compradores",

    stat_complexes: "Complejos de renovación urbana monitoreados",
    stat_below_market: "Por debajo del precio de mercado en promedio",
    stat_satisfaction: "Satisfacción del cliente",
    stat_availability: "Disponibilidad total",

    services_title: "Nuestros Servicios",
    services_subtitle: "Cada plan incluye la inteligencia de mercado profunda de QUANTUM, acceso a nuestra red global de compradores y acompañamiento personal completo.",
    services_sellers_title: "Para vendedores",
    services_buyers_title: "Para compradores internacionales",
    services_standard: "Standard",
    services_standard_desc: "Corretaje profesional con exposición a compradores globales. Ideal para vendedores que quieren servicio de calidad sin exclusividad.",
    services_exclusive: "Exclusivo",
    services_exclusive_desc: "Exclusividad 90 días + marketing global completo. Exposición en 7+ países, marketing dirigido e informe de mercado profesional.",
    services_express: "Express",
    services_express_desc: "Compromiso de venta en 60 días. Inversión agresiva en marketing, máxima exposición y negociación intensiva.",
    services_purchase: "Corretaje de compra",
    services_purchase_desc: "Acceso a propiedades fuera del mercado, análisis de mercado profesional y acompañamiento completo hasta la firma.",
    services_softlanding: "Soft Landing",
    services_softlanding_desc: "Paquete completo para nuevos inmigrantes e inversores internacionales. Desde el aterrizaje en Israel hasta las llaves en mano.",
    services_community_buy: "Compra Comunitaria",
    services_community_buy_desc: "Únase a un grupo de compra con familias de origen similar. Condiciones preferenciales + comunidad lista.",
    services_commission: "Comisión",
    services_minimum: "Mínimo",
    services_includes: "Incluye",
    services_popular: "Más popular",
    services_fast: "Rápido",
    services_cta: "Agendar consulta",
    services_free_consultation: "Consulta inicial gratuita",
    services_no_commitment: "Sin compromiso",

    assessment_title: "¿Cuánto vale tu propiedad?",
    assessment_subtitle: "Ingresa los datos de tu propiedad y recibe una valoración inicial en minutos. Gratis, sin compromiso.",
    assessment_address: "Dirección",
    assessment_city: "Ciudad",
    assessment_size: "Tamaño (m²)",
    assessment_floor: "Piso",
    assessment_rooms: "Habitaciones",
    assessment_complex_name: "Nombre del complejo de renovación (si se conoce)",
    assessment_name: "Nombre completo",
    assessment_phone: "Teléfono",
    assessment_email: "Email",
    assessment_submit: "Obtener valoración gratuita",
    assessment_free: "Gratis, sin compromiso",
    assessment_disclaimer: "Esta valoración se basa en datos de mercado actuales y proporciona una indicación inicial. Para una valoración precisa, nos reuniremos en persona.",

    footer_tagline: "Inmobiliaria boutique para renovación urbana israelí.\nMentes agudas. Comprensión profunda. Acceso a propiedades que otros desconocen.",
    footer_nav: "Navegación",
    footer_contact: "Contacto",
    footer_legal: "Legal",
    footer_rights: "QUANTUM Real Estate. Todos los derechos reservados.",
    footer_only_client: "En QUANTUM, no eres un cliente más. Eres nuestro único cliente.",

    common_whatsapp: "WhatsApp",
    common_call: "Llámenos",
    common_learn_more: "Más información",
    common_schedule_meeting: "Agendar cita",
    common_free_consultation: "Consulta gratuita",
  },

  ru: {
    nav_home: "Главная",
    nav_sellers: "Продавцам",
    nav_buyers: "Покупателям",
    nav_neighborhoods: "Районы",
    nav_community: "Сообщество",
    nav_services: "Услуги",
    nav_about: "О нас",
    nav_contact: "Контакты",
    nav_schedule: "Записаться",

    hero_title_1: "Мы не ищем недвижимость.",
    hero_title_2: "Мы знаем о недвижимости,",
    hero_title_3: "о которой другие даже не подозревают.",
    hero_subtitle: "Бутиковое агентство недвижимости, специализирующееся на городском обновлении Израиля. Острый ум, глубокое понимание и персональный сервис, где каждый клиент чувствует себя единственным.",
    hero_sellers_btn: "Хочу продать",
    hero_sellers_desc: "У нас есть покупатели, о которых вы даже не знаете. Из Израиля и со всего мира.",
    hero_buyers_btn: "Хочу купить",
    hero_buyers_desc: "Доступ к возможностям до выхода на рынок. Мотивированные продавцы, конфискации, наследства.",
    hero_for_sellers: "Продавцам",
    hero_for_buyers: "Покупателям",

    stat_complexes: "Комплексов городского обновления на мониторинге",
    stat_below_market: "Ниже рыночной цены в среднем",
    stat_satisfaction: "Удовлетворённость клиентов",
    stat_availability: "Полная доступность",

    services_title: "Наши услуги",
    services_subtitle: "Каждый план включает глубокую рыночную аналитику QUANTUM, доступ к глобальной сети покупателей и полное персональное сопровождение.",
    services_sellers_title: "Для продавцов",
    services_buyers_title: "Для международных покупателей",
    services_standard: "Стандарт",
    services_standard_desc: "Профессиональное посредничество с выходом на глобальных покупателей. Идеально для продавцов, желающих качественный сервис без эксклюзивности.",
    services_exclusive: "Эксклюзив",
    services_exclusive_desc: "Эксклюзивность 90 дней + полный глобальный маркетинг. Охват 7+ стран, таргетированный маркетинг и профессиональный отчёт о рынке.",
    services_express: "Экспресс",
    services_express_desc: "Обязательство продажи за 60 дней. Агрессивные инвестиции в маркетинг, максимальный охват и интенсивные переговоры.",
    services_purchase: "Посредничество при покупке",
    services_purchase_desc: "Доступ к внерыночной недвижимости, профессиональный анализ рынка и полное сопровождение до подписания.",
    services_softlanding: "Soft Landing",
    services_softlanding_desc: "Полный пакет для новых репатриантов и международных инвесторов. От прилёта в Израиль до ключей в руках.",
    services_community_buy: "Общинная покупка",
    services_community_buy_desc: "Присоединяйтесь к группе покупателей с семьями схожего происхождения. Льготные условия + готовое сообщество.",
    services_commission: "Комиссия",
    services_minimum: "Минимум",
    services_includes: "Включает",
    services_popular: "Самый популярный",
    services_fast: "Быстрый",
    services_cta: "Записаться на консультацию",
    services_free_consultation: "Бесплатная первичная консультация",
    services_no_commitment: "Без обязательств",

    assessment_title: "Сколько стоит ваша недвижимость?",
    assessment_subtitle: "Введите данные вашего объекта и получите предварительную оценку за минуты. Бесплатно, без обязательств.",
    assessment_address: "Адрес",
    assessment_city: "Город",
    assessment_size: "Площадь (м²)",
    assessment_floor: "Этаж",
    assessment_rooms: "Комнаты",
    assessment_complex_name: "Название комплекса обновления (если известно)",
    assessment_name: "Полное имя",
    assessment_phone: "Телефон",
    assessment_email: "Email",
    assessment_submit: "Получить бесплатную оценку",
    assessment_free: "Бесплатно, без обязательств",
    assessment_disclaimer: "Эта оценка основана на текущих рыночных данных и даёт предварительное представление. Для точной оценки мы встретимся лично.",

    footer_tagline: "Бутиковое агентство недвижимости для городского обновления Израиля.\nОстрый ум. Глубокое понимание. Доступ к объектам, о которых другие не знают.",
    footer_nav: "Навигация",
    footer_contact: "Контакты",
    footer_legal: "Правовая информация",
    footer_rights: "QUANTUM Real Estate. Все права защищены.",
    footer_only_client: "В QUANTUM вы не просто клиент. Вы наш единственный клиент.",

    common_whatsapp: "WhatsApp",
    common_call: "Позвоните нам",
    common_learn_more: "Подробнее",
    common_schedule_meeting: "Записаться",
    common_free_consultation: "Бесплатная консультация",
  },
};
