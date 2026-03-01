import { Link } from "react-router-dom";
import { TrendingUp, Shield, Users, Eye, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { isRTL, lang } = useLanguage();
  const l = lang as string;
  const lb: Record<string, Record<string, string>> = {
    he: { t: "אנחנו QUANTUM", s: "משרד תיווך בוטיק שנבנה על תובנה אחת פשוטה: מי שמבין את השוק הכי עמוק, מנצח.", story: "הסיפור שלנו", dna: "ה-DNA של QUANTUM", numbers: "במספרים", ready: "מוכנים להכיר?", readySub: "שיחה ראשונה היא תמיד בחינם.", cta: "תיאום שיחה" },
    en: { t: "We Are QUANTUM", s: "A boutique brokerage built on one insight: whoever understands the market deepest, wins.", story: "Our Story", dna: "The QUANTUM DNA", numbers: "By The Numbers", ready: "Ready to Meet?", readySub: "The first call is always free.", cta: "Schedule a Call" },
    fr: { t: "Nous Sommes QUANTUM", s: "Un courtage boutique bati sur une idee: celui qui comprend le mieux le marche, gagne.", story: "Notre Histoire", dna: "L'ADN QUANTUM", numbers: "En Chiffres", ready: "Pret a Nous Rencontrer ?", readySub: "Le premier appel est gratuit.", cta: "Planifier un Appel" },
    es: { t: "Somos QUANTUM", s: "Una correduria boutique construida sobre una idea: quien entiende mejor el mercado, gana.", story: "Nuestra Historia", dna: "El ADN de QUANTUM", numbers: "En Numeros", ready: "Listos para Conocernos?", readySub: "La primera llamada es siempre gratis.", cta: "Programar Llamada" },
    ru: { t: "Мы QUANTUM", s: "Бутик-брокерство, построенное на одном принципе: кто глубже понимает рынок - побеждает.", story: "Наша История", dna: "ДНК QUANTUM", numbers: "В Цифрах", ready: "Готовы Познакомиться?", readySub: "Первый звонок всегда бесплатный.", cta: "Запланировать Звонок" },
  };
  const t = lb[l] || lb.en;

  const stories: Record<string, string[]> = {
    he: ["QUANTUM נולד מתוך תסכול. ראינו משקיעים חכמים מפספסים הזדמנויות כי הם לא ידעו מה שאנחנו יודעים. ראינו מוכרים מוכרים במחירים נמוכים מדי כי הם לא הכירו את הקונים הנכונים.", "אז בנינו משהו אחר. לא עוד משרד תיווך שמחכה שנכסים יעלו לפרסום. אלא משרד שיודע על נכסים חודשים לפני.", "היום אנחנו עוקבים אחרי 696+ מתחמי פינוי-בינוי ברחבי ישראל. אנחנו מכירים כל יזם, כל ועדה, כל שלב תכנוני. ויש לנו רשת קונים גלובלית.", "אבל הדבר הכי חשוב? כל לקוח שלנו מרגיש כמו הלקוח היחיד שלנו."],
    en: ["QUANTUM was born from frustration. Smart investors missing opportunities because they didn't know what we know. Sellers accepting below-market prices because they didn't know the right buyers.", "So we built something different. Not another brokerage waiting for listings. A firm that knows about properties months before they hit the market.", "Today we track 696+ urban renewal complexes across Israel. We know every developer, every committee, every planning stage. And we have a global buyer network.", "But the most important thing? Every client feels like our only client."],
    fr: ["QUANTUM est ne de la frustration. Des investisseurs intelligents ratant des opportunites.", "Nous avons construit quelque chose de different. Un cabinet qui connait les proprietes des mois avant le marche.", "Aujourd'hui nous suivons 696+ complexes de renouvellement urbain a travers Israel.", "Le plus important? Chaque client se sent comme notre seul client."],
    es: ["QUANTUM nacio de la frustracion. Inversores inteligentes perdiendo oportunidades.", "Construimos algo diferente. Una firma que conoce propiedades meses antes del mercado.", "Hoy seguimos 696+ complejos de renovacion urbana en Israel.", "Lo mas importante? Cada cliente se siente como nuestro unico cliente."],
    ru: ["QUANTUM родился из разочарования. Умные инвесторы упускали возможности.", "Мы построили нечто иное. Фирму, которая знает о недвижимости за месяцы до рынка.", "Сегодня мы отслеживаем 696+ комплексов обновления по Израилю.", "Самое важное? Каждый клиент чувствует себя нашим единственным клиентом."],
  };

  const values = [
    { icon: Eye, title: { he: "מח חד", en: "Sharp Mind", fr: "Esprit Vif", es: "Mente Aguda", ru: "Острый Ум" }, desc: { he: "אנחנו רואים דברים שאחרים לא רואים. חיבורים שאף אחד לא חשב עליהם.", en: "We see what others miss. Connections nobody thought of.", fr: "Nous voyons ce que les autres manquent.", es: "Vemos lo que otros no ven.", ru: "Мы видим то, что другие не замечают." } },
    { icon: Users, title: { he: "הבנה עמוקה", en: "Deep Understanding", fr: "Comprehension Profonde", es: "Comprension Profunda", ru: "Глубокое Понимание" }, desc: { he: "אנחנו מבינים את הצרכים שלך לפני שתסיים להסביר.", en: "We understand your needs before you finish explaining.", fr: "Nous comprenons vos besoins avant que vous finissiez.", es: "Entendemos tus necesidades antes de que termines.", ru: "Мы понимаем ваши потребности раньше, чем вы договорите." } },
    { icon: Shield, title: { he: "שקיפות מלאה", en: "Full Transparency", fr: "Transparence Totale", es: "Transparencia Total", ru: "Полная Прозрачность" }, desc: { he: "אין סודות מהלקוחות שלנו. אתה יודע בדיוק מה קורה.", en: "No secrets from our clients. You know exactly what's happening.", fr: "Pas de secrets. Vous savez exactement ce qui se passe.", es: "Sin secretos. Sabes exactamente que pasa.", ru: "Никаких секретов. Вы знаете все, что происходит." } },
    { icon: TrendingUp, title: { he: "תוצאות", en: "Results", fr: "Resultats", es: "Resultados", ru: "Результаты" }, desc: { he: "מחיר טוב יותר, מכירה מהירה יותר, קנייה חכמה יותר.", en: "Better price, faster sale, smarter purchase.", fr: "Meilleur prix, vente rapide, achat intelligent.", es: "Mejor precio, venta rapida, compra inteligente.", ru: "Лучшая цена, быстрая продажа, умная покупка." } },
  ];

  const stats = [
    { n: "696+", l: { he: "מתחמים במעקב", en: "Complexes tracked", fr: "Complexes suivis", es: "Complejos monitoreados", ru: "Комплексов" } },
    { n: "7+", l: { he: "מדינות ברשת הקונים", en: "Countries in buyer network", fr: "Pays dans le reseau", es: "Paises en la red", ru: "Стран в сети" } },
    { n: "98%", l: { he: "שביעות רצון", en: "Satisfaction", fr: "Satisfaction", es: "Satisfaccion", ru: "Удовлетворенность" } },
    { n: "60%", l: { he: "מהיר יותר מהממוצע", en: "Faster than average", fr: "Plus rapide", es: "Mas rapido", ru: "Быстрее среднего" } },
  ];

  return (
    <div className="min-h-screen">
      <section className="quantum-hero py-24 md:py-32">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto' }} />
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{t.t}</h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">{t.s}</p>
          </div>
        </div>
      </section>

      <section className="quantum-section">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)' }} />
          <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{t.story}</h2>
          <div className="space-y-6 text-[#1A1A3E]/70 leading-relaxed">
            {(stories[l] || stories.en).map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="quantum-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto 24px' }} />
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{t.dna}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-14 h-14 rounded-xl bg-[#B8860B]/10 flex items-center justify-center mx-auto"><v.icon className="w-7 h-7 text-[#B8860B]" /></div>
                <h3 className="text-lg font-bold text-[#1A1A3E]">{v.title[l as keyof typeof v.title] || v.title.en}</h3>
                <p className="text-sm text-[#1A1A3E]/60 leading-relaxed">{v.desc[l as keyof typeof v.desc] || v.desc.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quantum-section-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8"><h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{t.numbers}</h2></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i}><div className="text-3xl md:text-4xl font-bold text-[#B8860B]" style={{ fontFamily: "'Playfair Display', serif" }}>{s.n}</div><div className="text-sm text-white/50 mt-2">{s.l[l as keyof typeof s.l] || s.l.en}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="quantum-section text-center">
        <div className="container mx-auto px-4 max-w-2xl space-y-6">
          <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{t.ready}</h2>
          <p className="text-[#1A1A3E]/60">{t.readySub}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 quantum-btn-gold"><span>{t.cta}</span><ChevronLeft className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  );
};

export default About;
