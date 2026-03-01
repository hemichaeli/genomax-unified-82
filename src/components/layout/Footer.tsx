import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WA = "972547669985";

export const Footer = () => {
  const { t } = useLanguage();
  const nav = [
    { to: "/sellers", label: t("nav_sellers") },
    { to: "/buyers", label: t("nav_buyers") },
    { to: "/services", label: t("nav_services") },
    { to: "/neighborhoods", label: t("nav_neighborhoods") },
    { to: "/about", label: t("nav_about") },
    { to: "/assessment", label: t("assessment_title") },
    { to: "/referral", label: "Referral" },
  ];

  return (
    <footer className="bg-[#1A1A3E] text-white pb-20 lg:pb-0">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <span className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>QUANTUM</span>
            <div className="text-[10px] tracking-[0.2em] text-[#B8860B] uppercase">Real Estate</div>
            <p className="text-white/60 text-sm">{t("footer_tagline")}</p>
          </div>
          <div>
            <h3 className="font-semibold text-[#B8860B] mb-4 text-sm">{t("footer_nav")}</h3>
            <ul className="space-y-3 text-sm">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/60 hover:text-[#B8860B]">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#B8860B] mb-4 text-sm">{t("footer_contact")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-4 h-4 text-[#B8860B]" />
                <a href={`tel:+${WA}`} dir="ltr">+972-54-766-9985</a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <MessageCircle className="w-4 h-4 text-[#B8860B]" />
                <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-4 h-4 text-[#B8860B]" />
                <a href="mailto:info@quantum-re.co.il">info@quantum-re.co.il</a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-[#B8860B]" />Israel
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#B8860B] mb-4 text-sm">{t("footer_legal")}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy" className="text-white/60 hover:text-[#B8860B]">Privacy</Link></li>
              <li><Link to="/terms" className="text-white/60 hover:text-[#B8860B]">Terms</Link></li>
              <li><Link to="/faq" className="text-white/60 hover:text-[#B8860B]">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} {t("footer_rights")}</p>
          <p className="mt-2 text-xs italic">{t("footer_only_client")}</p>
        </div>
      </div>
    </footer>
  );
};
