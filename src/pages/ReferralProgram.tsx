import { Link } from "react-router-dom";
import { Gift, Users, Star, ChevronLeft, ChevronRight, DollarSign, Percent, Crown, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ReferralProgram = () => {
  const { isRTL, lang } = useLanguage();
  const l = lang as string;

  const lb: Record<string, Record<string, string>> = {
    he: { title: "תוכנית שותפים", sub: "הרוויחו מכל הפניה שמובילה לעסקה", t1: "הפניה ראשונה", t2: "3+ עסקאות", t3: "VIP שגריר", t1d: "בונוס על עסקה ראשונה שנסגרת", t2d: "בונוס מוגדל לשותפים פעילים", t3d: "אחוז מכל עסקה + הטבות בלעדיות", how: "איך זה עובד?", s1: "שלחו לנו את הליד", s2: "אנחנו מטפלים בהכל", s3: "העסקה נסגרת", s4: "אתם מקבלים את הבונוס", cta: "רוצים להצטרף?", ctaD: "דברו איתנו ונסביר את כל הפרטים", btn: "צור קשר", perks: "הטבות שגריר", p1: "גישה מוקדמת להזדמנויות", p2: "דוחות שוק חודשיים", p3: "אירועי נטוורקינג", p4: "עמלת שותפים גבוהה" },
    en: { title: "Referral Program", sub: "Earn on every referral that leads to a deal", t1: "First Referral", t2: "3+ Deals", t3: "VIP Ambassador", t1d: "Bonus on first closed deal", t2d: "Increased bonus for active partners", t3d: "Percentage of every deal + exclusive perks", how: "How It Works", s1: "Send us the lead", s2: "We handle everything", s3: "Deal closes", s4: "You get your bonus", cta: "Want to Join?", ctaD: "Talk to us and we'll explain everything", btn: "Contact Us", perks: "Ambassador Perks", p1: "Early access to opportunities", p2: "Monthly market reports", p3: "Networking events", p4: "Higher partner commission" },
    fr: { title: "Programme de parrainage", sub: "Gagnez sur chaque recommandation", t1: "Premier parrainage", t2: "3+ transactions", t3: "Ambassadeur VIP", t1d: "Bonus sur la premiere transaction", t2d: "Bonus augmente pour les partenaires actifs", t3d: "Pourcentage + avantages exclusifs", how: "Comment ca marche", s1: "Envoyez le contact", s2: "Nous gerons tout", s3: "Transaction conclue", s4: "Vous recevez le bonus", cta: "Rejoindre ?", ctaD: "Contactez-nous pour les details", btn: "Contactez-nous", perks: "Avantages Ambassadeur", p1: "Acces anticipe", p2: "Rapports mensuels", p3: "Evenements networking", p4: "Commission elevee" },
    es: { title: "Programa de referidos", sub: "Gane por cada referido que cierre un trato", t1: "Primera referencia", t2: "3+ tratos", t3: "Embajador VIP", t1d: "Bono por primer trato cerrado", t2d: "Bono aumentado para socios activos", t3d: "Porcentaje + beneficios exclusivos", how: "Como funciona", s1: "Envie el contacto", s2: "Nos encargamos", s3: "Trato cerrado", s4: "Recibe su bono", cta: "Quiere unirse?", ctaD: "Hablemos y le explicamos todo", btn: "Contactenos", perks: "Beneficios Embajador", p1: "Acceso anticipado", p2: "Reportes mensuales", p3: "Eventos networking", p4: "Comision elevada" },
    ru: { title: "Реферальная программа", sub: "Зарабатывайте на каждой рекомендации", t1: "Первый реферал", t2: "3+ сделки", t3: "VIP Посол", t1d: "Бонус за первую закрытую сделку", t2d: "Повышенный бонус для активных партнеров", t3d: "Процент от каждой сделки + эксклюзивные привилегии", how: "Как это работает", s1: "Отправьте контакт", s2: "Мы все сделаем", s3: "Сделка закрыта", s4: "Вы получаете бонус", cta: "Хотите присоединиться?", ctaD: "Свяжитесь с нами", btn: "Связаться", perks: "Привилегии Посла", p1: "Ранний доступ", p2: "Ежемесячные отчеты", p3: "Нетворкинг", p4: "Высокая комиссия" },
  };
  const t = lb[l] || lb.en;

  const tiers = [
    { icon: Gift, title: t.t1, desc: t.t1d, amount: "3,000", unit: "ILS", color: "border-green-400 bg-green-50" },
    { icon: Star, title: t.t2, desc: t.t2d, amount: "5,000", unit: "ILS", color: "border-[#B8860B] bg-[#B8860B]/10" },
    { icon: Crown, title: t.t3, desc: t.t3d, amount: "0.5%", unit: "", color: "border-purple-400 bg-purple-50" },
  ];

  const steps = [t.s1, t.s2, t.s3, t.s4];
  const perks = [t.p1, t.p2, t.p3, t.p4];

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
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {tiers.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <div key={i} className={`quantum-card p-8 text-center border-2 ${tier.color}`}>
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon className="w-7 h-7 text-[#B8860B]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A3E] mb-2">{tier.title}</h3>
                  <div className="text-3xl font-bold text-[#B8860B] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {tier.unit && "₪"}{tier.amount}
                  </div>
                  <p className="text-sm text-[#1A1A3E]/60">{tier.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="quantum-section-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>{t.how}</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#B8860B] text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">{i + 1}</div>
                <p className="text-sm font-medium text-[#1A1A3E]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quantum-section">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto quantum-card p-8">
            <h3 className="text-xl font-bold text-center mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              <Crown className="w-6 h-6 text-[#B8860B] inline-block mx-2" />
              {t.perks}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-[#1A1A3E]/80">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="quantum-section-navy text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{t.cta}</h2>
            <p className="text-white/60">{t.ctaD}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 quantum-btn-gold">
              <span>{t.btn}</span>
              {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferralProgram;
