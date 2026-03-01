import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Gift, Users, DollarSign, Star, ChevronLeft, ChevronRight, Trophy, Zap, Crown } from "lucide-react";

const ReferralProgram = () => {
  const { isRTL, lang } = useLanguage();
  const l = lang as string;

  const lb: Record<string, Record<string, string>> = {
    he: { title: "תוכנית שותפים", sub: "הפנו חברים ומשפחה ל-QUANTUM והרוויחו על כל עסקה שנסגרת", how: "איך זה עובד?", tiers: "רמות שותפות", stories: "סיפורי הצלחה", faq: "שאלות נפוצות", cta: "מוכנים להתחיל?", ctaSub: "הצטרפו לתוכנית השותפים שלנו היום", ctaBtn: "הצטרפו עכשיו", step1: "הפנו", step1d: "שלחו את הקישור שלכם לחברים שמחפשים לקנות או למכור נכס", step2: "אנחנו סוגרים", step2d: "הצוות שלנו מטפל בכל התהליך - מחיפוש ועד חתימה", step3: "אתם מרוויחים", step3d: "מקבלים עמלה על כל עסקה שנסגרת דרך ההפניה שלכם" },
    en: { title: "Referral Program", sub: "Refer friends and family to QUANTUM and earn on every closed deal", how: "How It Works", tiers: "Partnership Tiers", stories: "Success Stories", faq: "FAQ", cta: "Ready to Start?", ctaSub: "Join our referral program today", ctaBtn: "Join Now", step1: "Refer", step1d: "Send your link to friends looking to buy or sell property", step2: "We Close", step2d: "Our team handles the entire process from search to signing", step3: "You Earn", step3d: "Receive commission on every deal closed through your referral" },
    fr: { title: "Programme de Parrainage", sub: "Recommandez QUANTUM et gagnez sur chaque transaction", how: "Comment ca Marche", tiers: "Niveaux", stories: "Temoignages", faq: "FAQ", cta: "Pret a Commencer?", ctaSub: "Rejoignez notre programme de parrainage", ctaBtn: "Rejoindre", step1: "Recommandez", step1d: "Envoyez votre lien a vos proches", step2: "Nous Concluons", step2d: "Notre equipe gere tout le processus", step3: "Vous Gagnez", step3d: "Recevez une commission sur chaque transaction" },
    es: { title: "Programa de Referidos", sub: "Refiera amigos a QUANTUM y gane en cada transaccion", how: "Como Funciona", tiers: "Niveles", stories: "Testimonios", faq: "FAQ", cta: "Listo para Empezar?", ctaSub: "Unase a nuestro programa hoy", ctaBtn: "Unirse", step1: "Refiera", step1d: "Envie su enlace a amigos", step2: "Nosotros Cerramos", step2d: "Nuestro equipo maneja todo el proceso", step3: "Usted Gana", step3d: "Reciba comision por cada transaccion" },
    ru: { title: "Партнерская Программа", sub: "Рекомендуйте QUANTUM друзьям и зарабатывайте на каждой сделке", how: "Как Это Работает", tiers: "Уровни", stories: "Истории Успеха", faq: "FAQ", cta: "Готовы Начать?", ctaSub: "Присоединяйтесь к нашей программе", ctaBtn: "Присоединиться", step1: "Рекомендуйте", step1d: "Отправьте ссылку друзьям", step2: "Мы Закрываем", step2d: "Наша команда ведет весь процесс", step3: "Вы Зарабатываете", step3d: "Получайте комиссию за каждую сделку" },
  };
  const t = lb[l] || lb.en;

  const tiers = [
    { icon: Zap, color: "#B8860B", name: { he: "שותף", en: "Partner", fr: "Partenaire", es: "Socio", ru: "Партнер" }, reward: { he: "₪3,000", en: "₪3,000", fr: "3 000₪", es: "₪3,000", ru: "₪3,000" }, req: { he: "עסקה ראשונה", en: "First deal", fr: "Premiere transaction", es: "Primera transaccion", ru: "Первая сделка" }, perks: { he: ["עמלה קבועה לעסקה", "עדכונים על הזדמנויות", "תמיכה ייעודית"], en: ["Fixed commission per deal", "Opportunity updates", "Dedicated support"], fr: ["Commission fixe", "Mises a jour", "Support dedie"], es: ["Comision fija", "Actualizaciones", "Soporte dedicado"], ru: ["Фиксированная комиссия", "Обновления", "Поддержка"] } },
    { icon: Trophy, color: "#D4A020", name: { he: "שותף בכיר", en: "Senior Partner", fr: "Partenaire Senior", es: "Socio Senior", ru: "Старший Партнер" }, reward: { he: "₪5,000", en: "₪5,000", fr: "5 000₪", es: "₪5,000", ru: "₪5,000" }, req: { he: "3+ עסקאות", en: "3+ deals", fr: "3+ transactions", es: "3+ transacciones", ru: "3+ сделки" }, perks: { he: ["עמלה מוגדלת", "גישה מוקדמת לנכסים", "אירועי VIP", "כרטיס שותף"], en: ["Increased commission", "Early property access", "VIP events", "Partner card"], fr: ["Commission augmentee", "Acces anticipe", "Evenements VIP", "Carte partenaire"], es: ["Comision aumentada", "Acceso anticipado", "Eventos VIP", "Tarjeta socio"], ru: ["Повышенная комиссия", "Ранний доступ", "VIP мероприятия", "Карта партнера"] } },
    { icon: Crown, color: "#8B6914", name: { he: "שגריר", en: "Ambassador", fr: "Ambassadeur", es: "Embajador", ru: "Амбассадор" }, reward: { he: "0.5% מהעסקה", en: "0.5% of deal", fr: "0.5% de la transaction", es: "0.5% de la transaccion", ru: "0.5% от сделки" }, req: { he: "10+ עסקאות", en: "10+ deals", fr: "10+ transactions", es: "10+ transacciones", ru: "10+ сделок" }, perks: { he: ["אחוז מהעסקה", "עדיפות מוחלטת", "מנהל חשבון אישי", "הזמנות בלעדיות", "בונוס שנתי"], en: ["Percentage of deal", "Top priority", "Personal account manager", "Exclusive invitations", "Annual bonus"], fr: ["Pourcentage de la transaction", "Priorite absolue", "Gestionnaire personnel", "Invitations exclusives", "Bonus annuel"], es: ["Porcentaje de la transaccion", "Prioridad absoluta", "Gerente personal", "Invitaciones exclusivas", "Bono anual"], ru: ["Процент от сделки", "Абсолютный приоритет", "Персональный менеджер", "Эксклюзивные приглашения", "Годовой бонус"] } },
  ];

  const testimonials = [
    { name: { he: "דוד כ.", en: "David K." }, text: { he: "הפניתי את הגיסה שלי ותוך חודשיים היא מכרה את הדירה. קיבלתי 3,000 שקל בלי להזיז אצבע.", en: "I referred my sister-in-law and within two months she sold her apartment. I received ₪3,000 without lifting a finger." }, tier: { he: "שותף", en: "Partner" } },
    { name: { he: "מיכל ש.", en: "Michal S." }, text: { he: "אחרי 5 הפניות מוצלחות, קיבלתי מעמד שותף בכיר. עכשיו אני מקבלת גישה מוקדמת לנכסים חדשים.", en: "After 5 successful referrals, I got Senior Partner status. Now I get early access to new properties." }, tier: { he: "שותף בכיר", en: "Senior Partner" } },
  ];

  return (
    <div className="min-h-screen">
      <section className="quantum-hero py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto' }} />
            <Gift className="w-12 h-12 text-[#B8860B] mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{t.title}</h1>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">{t.sub}</p>
          </div>
        </div>
      </section>

      <section className="quantum-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #B8860B, #D4A020)', margin: '0 auto 24px' }} />
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{t.how}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[{ n: "1", icon: Users, title: t.step1, desc: t.step1d }, { n: "2", icon: DollarSign, title: t.step2, desc: t.step2d }, { n: "3", icon: Star, title: t.step3, desc: t.step3d }].map((s, i) => (
              <div key={i} className="quantum-card p-8 text-center space-y-4 relative">
                <div className="w-10 h-10 rounded-full bg-[#B8860B] text-white flex items-center justify-center mx-auto font-bold">{s.n}</div>
                <s.icon className="w-8 h-8 text-[#B8860B] mx-auto" />
                <h3 className="text-lg font-bold text-[#1A1A3E]">{s.title}</h3>
                <p className="text-sm text-[#1A1A3E]/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quantum-section-alt">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{t.tiers}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <div key={i} className="quantum-card p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: tier.color }} />
                <div className="text-center space-y-3">
                  <tier.icon className="w-10 h-10 mx-auto" style={{ color: tier.color }} />
                  <h3 className="text-xl font-bold text-[#1A1A3E]">{tier.name[l as keyof typeof tier.name] || tier.name.en}</h3>
                  <div className="text-3xl font-bold" style={{ color: tier.color, fontFamily: "'Playfair Display', serif" }}>{tier.reward[l as keyof typeof tier.reward] || tier.reward.en}</div>
                  <p className="text-xs text-[#1A1A3E]/40">{tier.req[l as keyof typeof tier.req] || tier.req.en}</p>
                </div>
                <ul className="space-y-2">
                  {(tier.perks[l as keyof typeof tier.perks] || tier.perks.en).map((perk: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#1A1A3E]/70"><div className="w-1.5 h-1.5 rounded-full" style={{ background: tier.color }} />{perk}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quantum-section">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8"><h2 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{t.stories}</h2></div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((tm, i) => (
              <div key={i} className="quantum-card p-6 space-y-4">
                <p className="text-sm text-[#1A1A3E]/70 italic leading-relaxed">"{tm.text[l as keyof typeof tm.text] || tm.text.en}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#1A1A3E] text-sm">{tm.name[l as keyof typeof tm.name] || tm.name.en}</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#B8860B]/10 text-[#B8860B] font-medium">{tm.tier[l as keyof typeof tm.tier] || tm.tier.en}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quantum-section-navy text-center">
        <div className="container mx-auto px-4 max-w-2xl space-y-6">
          <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{t.cta}</h2>
          <p className="text-white/60">{t.ctaSub}</p>
          <a href="https://wa.me/972547669985?text=Hi%20QUANTUM%2C%20I%20want%20to%20join%20the%20referral%20program" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 quantum-btn-gold">
            <span>{t.ctaBtn}</span>
            {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ReferralProgram;
