import { Link } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface FAQItem {
  q: Record<string, string>;
  a: Record<string, string>;
}

const faqData: FAQItem[] = [
  {
    q: { he: "מה זה פינוי-בינוי?", en: "What is Pinuy-Binuy (urban renewal)?", fr: "Qu'est-ce que le Pinuy-Binuy ?", es: "Que es Pinuy-Binuy?", ru: "Что такое Пинуй-Бинуй?" },
    a: { he: "פינוי-בינוי הוא תהליך בו בניינים ישנים נהרסים ונבנים מחדש בניינים חדשים ומודרניים. הדיירים הקיימים מקבלים דירה חדשה וגדולה יותר, והיזם בונה דירות נוספות למכירה. זו הזדמנות השקעה ייחודית בישראל.", en: "Pinuy-Binuy is Israel's urban renewal program where old buildings are demolished and rebuilt as modern complexes. Existing residents receive new, larger apartments, and the developer builds additional units for sale. It's a unique investment opportunity.", fr: "Le Pinuy-Binuy est le programme de renouvellement urbain d'Israel ou les anciens batiments sont demolis et reconstruits. Les residents recoivent des appartements neufs et plus grands.", es: "Pinuy-Binuy es el programa de renovacion urbana de Israel donde se reconstruyen edificios antiguos. Los residentes existentes reciben departamentos nuevos y mas grandes.", ru: "Пинуй-Бинуй - программа обновления городов в Израиле, где старые здания сносятся и строятся новые современные комплексы." },
  },
  {
    q: { he: "למה לקנות דירה בפרויקט פינוי-בינוי?", en: "Why buy in an urban renewal project?", fr: "Pourquoi acheter dans un projet de renouvellement ?", es: "Por que comprar en un proyecto de renovacion?", ru: "Зачем покупать в проекте обновления?" },
    a: { he: "דירות בפרויקטים מאושרים נמכרות בדרך כלל 15-25% מתחת למחיר השוק של דירות חדשות באותו אזור. ככל שהפרויקט מתקדם, המחיר עולה. קנייה בשלב מוקדם מבטיחה את הרווח הגדול ביותר.", en: "Approved project apartments typically sell 15-25% below market price for new apartments in the same area. As the project advances, prices rise. Buying early secures the largest profit potential.", fr: "Les appartements en projet approuve se vendent 15-25% en dessous du prix du marche. Plus le projet avance, plus les prix montent.", es: "Los departamentos en proyectos aprobados se venden 15-25% por debajo del precio de mercado. Comprar temprano asegura mayor ganancia.", ru: "Квартиры в одобренных проектах продаются на 15-25% ниже рыночной цены. Чем раньше покупка - тем больше прибыль." },
  },
  {
    q: { he: "מה QUANTUM עושה אחרת ממתווכים רגילים?", en: "What makes QUANTUM different from regular brokers?", fr: "Qu'est-ce qui distingue QUANTUM ?", es: "Que diferencia a QUANTUM?", ru: "Чем QUANTUM отличается от обычных агентов?" },
    a: { he: "אנחנו לא מחכים שנכסים יעלו לפרסום. אנחנו יודעים על הזדמנויות חודשים לפני השוק - מוכרים במצוקה, כינוסי נכסים, ירושות. כל לקוח מקבל יחס אישי מלא כאילו הוא הלקוח היחיד שלנו.", en: "We don't wait for properties to be listed. We know about opportunities months before the market - distressed sellers, receiverships, inheritances. Every client gets full personal attention as if they're our only client.", fr: "Nous n'attendons pas les annonces. Nous connaissons les opportunites des mois avant le marche. Chaque client recoit une attention personnelle totale.", es: "No esperamos a que se publiquen propiedades. Conocemos oportunidades meses antes. Cada cliente recibe atencion personal total.", ru: "Мы не ждем публикации объявлений. Мы знаем о возможностях за месяцы до рынка. Каждый клиент получает полное личное внимание." },
  },
  {
    q: { he: "אני גר בחו\"ל. איך זה עובד?", en: "I live abroad. How does it work?", fr: "J'habite a l'etranger. Comment ca marche ?", es: "Vivo en el extranjero. Como funciona?", ru: "Я живу за границей. Как это работает?" },
    a: { he: "אנחנו עובדים עם קונים מ-7+ מדינות. כל התהליך יכול להתבצע מרחוק - סיורים וירטואליים, חתימה דיגיטלית, ליווי משפטי מלא. אנחנו מדברים עברית, אנגלית, צרפתית, ספרדית ורוסית.", en: "We work with buyers from 7+ countries. The entire process can be done remotely - virtual tours, digital signing, full legal support. We speak Hebrew, English, French, Spanish, and Russian.", fr: "Nous travaillons avec des acheteurs de 7+ pays. Tout peut se faire a distance - visites virtuelles, signature numerique, accompagnement juridique complet.", es: "Trabajamos con compradores de 7+ paises. Todo el proceso puede hacerse de forma remota con soporte legal completo.", ru: "Мы работаем с покупателями из 7+ стран. Весь процесс может быть дистанционным - виртуальные туры, цифровая подпись, полное юридическое сопровождение." },
  },
  {
    q: { he: "מה העמלות שלכם?", en: "What are your fees?", fr: "Quels sont vos tarifs ?", es: "Cuales son sus tarifas?", ru: "Какие у вас комиссии?" },
    a: { he: "יש לנו מספר מסלולי שירות עם עמלות שונות, החל מ-1.5% לקונים ו-2% למוכרים. כל מסלול כולל שירותים שונים. מוזמנים לבקר בדף השירותים שלנו לפרטים מלאים.", en: "We offer several service tracks with different fees, starting from 1.5% for buyers and 2% for sellers. Each track includes different services. Visit our Services page for full details.", fr: "Nous proposons plusieurs forfaits a partir de 1.5% pour les acheteurs et 2% pour les vendeurs.", es: "Ofrecemos varias opciones desde 1.5% para compradores y 2% para vendedores.", ru: "У нас несколько тарифов начиная от 1.5% для покупателей и 2% для продавцов." },
  },
  {
    q: { he: "מה זה כינוס נכסים ואיך זה קשור?", en: "What is receivership and how is it related?", fr: "Qu'est-ce que la saisie immobiliere ?", es: "Que es un concurso de bienes?", ru: "Что такое конкурсное управление?" },
    a: { he: "כינוס נכסים הוא מכירה בפיקוח בית משפט של נכס של בעלים שלא עמד בחובותיו. נכסים אלה נמכרים לרוב במחירים נמוכים משמעותית מהשוק. ל-QUANTUM גישה לנכסים בכינוס לפני שהם מתפרסמים לציבור.", en: "Receivership is a court-supervised sale of a property whose owner defaulted on debts. These properties often sell significantly below market price. QUANTUM has access to receivership properties before they're publicly listed.", fr: "La saisie est une vente supervisee par le tribunal. Ces proprietes se vendent souvent bien en dessous du prix du marche.", es: "El concurso es una venta supervisada por el tribunal. Estas propiedades se venden por debajo del mercado.", ru: "Конкурсное управление - продажа недвижимости по решению суда. Такие объекты часто продаются значительно ниже рыночной цены." },
  },
  {
    q: { he: "כמה זמן לוקח תהליך פינוי-בינוי?", en: "How long does the Pinuy-Binuy process take?", fr: "Combien de temps dure le processus ?", es: "Cuanto tiempo toma el proceso?", ru: "Сколько времени занимает процесс?" },
    a: { he: "מרגע אישור הוועדה ועד למסירת דירות - בדרך כלל 3-5 שנים. אבל העלייה במחיר מתחילה הרבה לפני כן. אישור ועדה מקומית לבד יכול להעלות את ערך הנכסים ב-10-20%.", en: "From committee approval to apartment delivery, typically 3-5 years. But price appreciation starts much earlier. Local committee approval alone can increase property values by 10-20%.", fr: "De l'approbation a la livraison: 3-5 ans typiquement. L'appreciation commence bien avant.", es: "Desde la aprobacion hasta la entrega: 3-5 anos. La apreciacion comienza antes.", ru: "От одобрения до передачи квартир: обычно 3-5 лет. Но рост цен начинается намного раньше." },
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const { isRTL, lang } = useLanguage();
  const l = lang as string;

  const labels: Record<string, Record<string, string>> = {
    he: { title: "שאלות נפוצות", sub: "כל מה שצריך לדעת על פינוי-בינוי והשירותים שלנו", cta: "לא מצאתם תשובה? דברו איתנו", contact: "צור קשר" },
    en: { title: "Frequently Asked Questions", sub: "Everything you need to know about urban renewal and our services", cta: "Didn't find your answer? Talk to us", contact: "Contact Us" },
    fr: { title: "Questions frequentes", sub: "Tout savoir sur le renouvellement urbain et nos services", cta: "Pas trouve votre reponse ?", contact: "Contactez-nous" },
    es: { title: "Preguntas frecuentes", sub: "Todo sobre renovacion urbana y nuestros servicios", cta: "No encontro respuesta?", contact: "Contactenos" },
    ru: { title: "Часто задаваемые вопросы", sub: "Все об обновлении городов и наших услугах", cta: "Не нашли ответ?", contact: "Свяжитесь" },
  };
  const lb = labels[l] || labels.en;

  return (
    <div className="min-h-screen">
      <section className="quantum-hero py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto' }} />
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{lb.title}</h1>
            <p className="text-lg text-white/60">{lb.sub}</p>
          </div>
        </div>
      </section>

      <section className="quantum-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-3">
            {faqData.map((item, i) => (
              <div key={i} className="quantum-card overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-right hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-[#1A1A3E]">{item.q[l] || item.q.en}</span>
                  <ChevronDown className={`w-5 h-5 text-[#B8860B] flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <div className="px-6 pb-6 text-sm text-[#1A1A3E]/70 leading-relaxed border-t border-gray-100 pt-4 animate-fade-in">
                    {item.a[l] || item.a.en}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quantum-section-navy text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{lb.cta}</h2>
            <Link to="/contact" className="inline-flex items-center gap-2 quantum-btn-gold">
              <span>{lb.contact}</span>
              {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
