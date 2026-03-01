import { Link } from "react-router-dom";
import { MapPin, ChevronLeft, ChevronRight, CheckCircle, Flame, Sprout, Crown, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface CityData {
  name: string;
  nameEn: string;
  complexes: number;
  avgIAI: number;
  status: "hot" | "growing" | "premium";
  desc: Record<string, string>;
  highlights: Record<string, string[]>;
  mapX: number;
  mapY: number;
}

const cities: CityData[] = [
  { name: "בת ים", nameEn: "Bat Yam", complexes: 42, avgIAI: 78, status: "hot", mapX: 32, mapY: 45,
    desc: { he: "מוקד פינוי-בינוי מרכזי. פרויקטים בשלבים מתקדמים, ביקוש גבוה מקונים צרפתים.", en: "Central renewal hub. Advanced projects, high French buyer demand.", fr: "Centre de renouvellement. Forte demande francaise.", es: "Centro de renovacion. Alta demanda francesa.", ru: "Центральный район обновления. Высокий спрос от французов." },
    highlights: { he: ["42 מתחמים פעילים","ועדות מאשרות בקצב גבוה","ביקוש ממשפחות צרפתיות","קרבה לחוף ולתל אביב"], en: ["42 active complexes","High approval rate","Strong French demand","Near beach & Tel Aviv"], fr: ["42 complexes","Approbations rapides","Demande francaise","Proche plage"], es: ["42 complejos","Aprobaciones rapidas","Demanda francesa","Cerca playa"], ru: ["42 комплекса","Быстрые одобрения","Спрос от французов","Близость к пляжу"] },
  },
  { name: "חולון", nameEn: "Holon", complexes: 35, avgIAI: 74, status: "growing", mapX: 45, mapY: 48,
    desc: { he: "פוטנציאל עליית ערך משמעותי. מחירי כניסה נמוכים.", en: "Strong growth potential. Low entry prices.", fr: "Fort potentiel. Prix bas.", es: "Alto potencial. Precios bajos.", ru: "Высокий потенциал. Низкие цены." },
    highlights: { he: ["35 מתחמים","מחירי כניסה נמוכים","תוכניות חדשות","קרבה לרכבת"], en: ["35 complexes","Low prices","New plans","Near train"], fr: ["35 complexes","Prix bas","Plans neufs","Proche gare"], es: ["35 complejos","Precios bajos","Nuevos planes","Cerca tren"], ru: ["35 комплексов","Низкие цены","Новые планы","Рядом ж/д"] },
  },
  { name: "נתניה", nameEn: "Netanya", complexes: 28, avgIAI: 72, status: "growing", mapX: 35, mapY: 5,
    desc: { he: "ביקוש גבוה מקונים בינלאומיים, קרבה לים.", en: "High international demand, beachfront.", fr: "Forte demande internationale, bord de mer.", es: "Alta demanda internacional, playa.", ru: "Высокий международный спрос, пляж." },
    highlights: { he: ["28 מתחמים","קהילה אנגלו-סקסית","חוף ים","השקעה אטרקטיבית"], en: ["28 complexes","Anglo community","Beachfront","Great investment"], fr: ["28 complexes","Communaute anglo","Plage","Bon investissement"], es: ["28 complejos","Comunidad anglo","Playa","Buena inversion"], ru: ["28 комплексов","Англоязычная община","Пляж","Хорошая инвестиция"] },
  },
  { name: "פתח תקווה", nameEn: "Petah Tikva", complexes: 31, avgIAI: 76, status: "hot", mapX: 65, mapY: 25,
    desc: { he: "מתחמים גדולים עם אישורי ועדות טריים.", en: "Large complexes with fresh approvals.", fr: "Grands complexes avec approbations recentes.", es: "Grandes complejos con aprobaciones recientes.", ru: "Большие комплексы со свежими одобрениями." },
    highlights: { he: ["31 מתחמים","אישורי ועדות טריים","תשתיות חדשות","מתחמים גדולים"], en: ["31 complexes","Fresh approvals","New infra","Large sites"], fr: ["31 complexes","Approbations recentes","Nouvelles infra","Grands sites"], es: ["31 complejos","Aprobaciones recientes","Nueva infra","Sitios grandes"], ru: ["31 комплекс","Свежие одобрения","Новая инфра","Крупные объекты"] },
  },
  { name: "ראשון לציון", nameEn: "Rishon LeZion", complexes: 25, avgIAI: 71, status: "growing", mapX: 40, mapY: 58,
    desc: { he: "תוכניות מתאר חדשות. מחירים נגישים.", en: "New master plans. Accessible prices.", fr: "Nouveaux plans. Prix accessibles.", es: "Nuevos planes. Precios accesibles.", ru: "Новые генпланы. Доступные цены." },
    highlights: { he: ["25 מתחמים","תוכניות מתאר","מחירים נגישים","קרבה לת\"א"], en: ["25 complexes","Master plans","Accessible prices","Near TLV"], fr: ["25 complexes","Plans directeurs","Prix accessibles","Proche TLV"], es: ["25 complejos","Planes maestros","Precios accesibles","Cerca TLV"], ru: ["25 комплексов","Генпланы","Доступные цены","Близость к ТА"] },
  },
  { name: "גבעתיים", nameEn: "Givatayim", complexes: 18, avgIAI: 82, status: "premium", mapX: 42, mapY: 35,
    desc: { he: "מיקום פרימיום, ביקוש גבוה, מחירים עולים.", en: "Premium location, high demand, rising prices.", fr: "Emplacement premium, forte demande.", es: "Ubicacion premium, alta demanda.", ru: "Премиум локация, высокий спрос." },
    highlights: { he: ["18 מתחמים","מיקום פרימיום","ביקוש גבוה","תשואה יציבה"], en: ["18 complexes","Premium location","High demand","Stable returns"], fr: ["18 complexes","Premium","Forte demande","Rendements stables"], es: ["18 complejos","Premium","Alta demanda","Retornos estables"], ru: ["18 комплексов","Премиум","Высокий спрос","Стабильная доходность"] },
  },
  { name: "רמת גן", nameEn: "Ramat Gan", complexes: 22, avgIAI: 80, status: "premium", mapX: 52, mapY: 32,
    desc: { he: "מתחם הבורסה ומגמת פינוי-בינוי חזקה.", en: "Diamond Exchange area with strong renewal trend.", fr: "Zone de la Bourse avec forte tendance.", es: "Zona Diamond Exchange, fuerte tendencia.", ru: "Район Алмазной биржи с сильным трендом." },
    highlights: { he: ["22 מתחמים","מתחם הבורסה","נגישות תחבורתית","פרויקטים יוקרתיים"], en: ["22 complexes","Diamond Exchange","Transport access","Luxury projects"], fr: ["22 complexes","Bourse","Transport","Projets luxe"], es: ["22 complejos","Diamond Exchange","Transporte","Proyectos lujo"], ru: ["22 комплекса","Алмазная биржа","Транспорт","Люкс проекты"] },
  },
  { name: "הרצליה", nameEn: "Herzliya", complexes: 15, avgIAI: 85, status: "premium", mapX: 38, mapY: 18,
    desc: { he: "פרויקטים יוקרתיים עם תשואה גבוהה.", en: "Luxury projects with high returns.", fr: "Projets luxe avec rendements eleves.", es: "Proyectos lujo con altos retornos.", ru: "Люкс проекты с высокой доходностью." },
    highlights: { he: ["15 מתחמים","פרויקטים יוקרתיים","תשואה גבוהה","ביקוש מדר\"א"], en: ["15 complexes","Luxury projects","High returns","SA demand"], fr: ["15 complexes","Projets luxe","Rendements eleves","Demande SA"], es: ["15 complejos","Proyectos lujo","Altos retornos","Demanda SA"], ru: ["15 комплексов","Люкс","Высокая доходность","Спрос из ЮАР"] },
  },
];

const statusCfg = {
  hot: { icon: Flame, color: "text-red-600", bg: "bg-red-50", labels: { he: "חם", en: "Hot", fr: "Chaud", es: "Caliente", ru: "Горячий" } },
  growing: { icon: Sprout, color: "text-green-600", bg: "bg-green-50", labels: { he: "בצמיחה", en: "Growing", fr: "Croissance", es: "Crecimiento", ru: "Растущий" } },
  premium: { icon: Crown, color: "text-[#B8860B]", bg: "bg-[#B8860B]/10", labels: { he: "פרימיום", en: "Premium", fr: "Premium", es: "Premium", ru: "Премиум" } },
};

const Neighborhoods = () => {
  const [sel, setSel] = useState<CityData | null>(null);
  const { isRTL, lang } = useLanguage();
  const l = lang as string;

  const labels: Record<string, Record<string, string>> = {
    he: { title: "מפת ההזדמנויות", sub: "פינוי-בינוי בישראל", tracked: "מתחמים במעקב", cities: "ערים עיקריות", click: "לחצו על עיר", score: "ציון", cmplx: "מתחמים", cta: "דברו איתנו", ctaQ: "רוצים לדעת מה קורה במתחם שלכם?", ctaD: "ספרו לנו איפה אתם גרים ונגיד לכם מה קורה." },
    en: { title: "Opportunity Map", sub: "Israeli Urban Renewal", tracked: "Complexes tracked", cities: "Key Cities", click: "Click a city", score: "Score", cmplx: "Complexes", cta: "Talk to Us", ctaQ: "Want to know what's happening in your area?", ctaD: "Tell us where you live and we'll tell you everything." },
    fr: { title: "Carte des opportunites", sub: "Renouvellement urbain", tracked: "Complexes suivis", cities: "Villes principales", click: "Cliquez une ville", score: "Score", cmplx: "Complexes", cta: "Contactez-nous", ctaQ: "Envie de savoir ce qui se passe ?", ctaD: "Dites-nous ou vous habitez." },
    es: { title: "Mapa de oportunidades", sub: "Renovacion urbana", tracked: "Complejos monitoreados", cities: "Ciudades principales", click: "Haga clic en una ciudad", score: "Puntuacion", cmplx: "Complejos", cta: "Contactenos", ctaQ: "Quiere saber que pasa en su zona?", ctaD: "Diganos donde vive." },
    ru: { title: "Карта возможностей", sub: "Городское обновление", tracked: "Комплексов", cities: "Основные города", click: "Нажмите город", score: "Рейтинг", cmplx: "Комплексов", cta: "Свяжитесь", ctaQ: "Хотите знать что происходит?", ctaD: "Расскажите где вы живете." },
  };
  const lb = labels[l] || labels.en;

  return (
    <div className="min-h-screen">
      <section className="quantum-hero py-20 md:py-28">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="quantum-gold-line-center" />
            <h1 className="text-4xl md:text-5xl font-bold text-white font-display">{lb.title}<br /><span className="text-[#B8860B]">{lb.sub}</span></h1>
            <p className="text-lg text-white/60"><span className="text-[#B8860B] font-bold">696+</span> {lb.tracked}</p>
          </div>
        </div>
      </section>

      <section className="quantum-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 font-display">{lb.cities}</h2>
          <p className="text-center text-sm text-gray-500 mb-10">{lb.click}</p>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="quantum-card p-4 sticky top-24">
                <svg viewBox="0 0 100 80" className="w-full" style={{ minHeight: 380 }}>
                  <path d="M 20 0 L 75 0 L 80 20 L 78 40 L 75 60 L 60 80 L 25 80 L 15 60 L 10 40 L 15 20 Z" fill="hsl(225,40%,16%)" fillOpacity="0.05" stroke="hsl(225,40%,16%)" strokeOpacity="0.15" strokeWidth="0.5" />
                  <path d="M 22 0 C 20 15, 18 30, 20 45 C 22 55, 20 65, 22 80" fill="none" stroke="hsl(210,70%,70%)" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.5" />
                  {cities.map((c) => {
                    const isSel = sel?.name === c.name;
                    const dot = c.status === "premium" ? "#B8860B" : c.status === "hot" ? "#dc2626" : "#16a34a";
                    return (
                      <g key={c.name} className="cursor-pointer" onClick={() => setSel(c)}>
                        {isSel && <circle cx={c.mapX} cy={c.mapY} r="5" fill="none" stroke={dot} strokeWidth="0.5" opacity="0.4"><animate attributeName="r" from="3" to="8" dur="1.5s" repeatCount="indefinite" /><animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" /></circle>}
                        <circle cx={c.mapX} cy={c.mapY} r={isSel ? "3.5" : "2.5"} fill={dot} stroke="white" strokeWidth="1" />
                        <text x={c.mapX} y={c.mapY - 5} textAnchor="middle" fontSize={isSel ? "3.5" : "3"} fontWeight={isSel ? "bold" : "normal"} fill={isSel ? dot : "hsl(225,30%,30%)"}>{isRTL ? c.name : c.nameEn}</text>
                      </g>
                    );
                  })}
                </svg>
                <div className="flex justify-center gap-4 mt-2 text-xs text-gray-500">
                  {(["hot","growing","premium"] as const).map((k) => { const S = statusCfg[k]; const I = S.icon; return <div key={k} className="flex items-center gap-1"><I className={`w-3 h-3 ${S.color}`} /><span>{S.labels[l as keyof typeof S.labels] || S.labels.en}</span></div>; })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-4">
              {sel && (
                <div className="quantum-card p-6 border-2 border-[#B8860B]/30 bg-[#B8860B]/5 animate-fade-up mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{isRTL ? sel.name : sel.nameEn}</h3>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusCfg[sel.status].bg} ${statusCfg[sel.status].color}`}>{statusCfg[sel.status].labels[l as keyof typeof statusCfg["hot"]["labels"]] || statusCfg[sel.status].labels.en}</span>
                    </div>
                    <div className="text-right"><div className="text-3xl font-bold text-[#B8860B] font-display">{sel.avgIAI}</div><div className="text-xs text-gray-500">{lb.score}/100</div></div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{sel.desc[l] || sel.desc.en}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {(sel.highlights[l] || sel.highlights.en).map((h, i) => <div key={i} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /><span>{h}</span></div>)}
                  </div>
                  <Link to="/contact" className="quantum-btn-gold w-full mt-4 block text-center text-sm">{lb.cta}</Link>
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                {cities.map((c, i) => {
                  const cfg = statusCfg[c.status]; const I = cfg.icon; const isSel = sel?.name === c.name;
                  return (
                    <div key={i} onClick={() => setSel(c)} className={`quantum-card p-5 cursor-pointer transition-all ${isSel ? "ring-2 ring-[#B8860B] border-[#B8860B]" : ""}`}>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#B8860B]" /><h3 className="font-bold text-[#1A1A3E]">{isRTL ? c.name : c.nameEn}</h3></div>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1 ${cfg.bg} ${cfg.color}`}><I className="w-3 h-3" />{cfg.labels[l as keyof typeof cfg.labels] || cfg.labels.en}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3 line-clamp-2">{c.desc[l] || c.desc.en}</p>
                      <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-2">
                        <span className="text-gray-400">{lb.cmplx}: <span className="font-semibold text-gray-700">{c.complexes}</span></span>
                        <span className="text-gray-400">{lb.score}: <span className="font-bold text-[#B8860B]">{c.avgIAI}</span></span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quantum-section-navy text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-white font-display">{lb.ctaQ}</h2>
            <p className="text-white/60">{lb.ctaD}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 quantum-btn-gold"><span>{lb.cta}</span>{isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Neighborhoods;
