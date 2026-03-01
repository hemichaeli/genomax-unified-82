import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP_NUMBER = "972547669985";
const PHONE_DISPLAY = "+972-54-766-9985";

export const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { to: "/sellers", label: t("nav_sellers") },
    { to: "/buyers", label: t("nav_buyers") },
    { to: "/services", label: t("nav_services") },
    { to: "/neighborhoods", label: t("nav_neighborhoods") },
    { to: "/community", label: t("nav_community") },
    { to: "/about", label: t("nav_about") },
    { to: "/assessment", label: t("assessment_title") },
  ];

  return (
    <footer className="bg-[#1A1A3E] text-white pb-20 lg:pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div>
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                QUANTUM
              </span>
              <div className="text-[10px] font-medium tracking-[0.2em] text-[#B8860B] uppercase mt-1">
                Real Estate
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
              {t("footer_tagline")}
            </p>
            <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg, #B8860B, #D4A020)' }} />
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-[#B8860B] mb-4 text-sm tracking-wider">
              {t("footer_nav")}
            </h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 hover:text-[#B8860B] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-[#B8860B] mb-4 text-sm tracking-wider">
              {t("footer_contact")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-4 h-4 text-[#B8860B]" />
                <a href={`tel:${WHATSAPP_NUMBER}`} className="hover:text-[#B8860B] transition-colors" dir="ltr">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <MessageCircle className="w-4 h-4 text-[#B8860B]" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B8860B] transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-4 h-4 text-[#B8860B]" />
                <a
                  href="mailto:info@quantum-re.co.il"
                  className="hover:text-[#B8860B] transition-colors"
                >
                  info@quantum-re.co.il
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <MapPin className="w-4 h-4 text-[#B8860B]" />
                <span>Israel</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-[#B8860B] mb-4 text-sm tracking-wider">
              {t("footer_legal")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-white/60 hover:text-[#B8860B] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-white/60 hover:text-[#B8860B] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white/60 hover:text-[#B8860B] transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>
            &copy; {new Date().getFullYear()} {t("footer_rights")}
          </p>
          <p className="mt-2 text-xs italic">
            {t("footer_only_client")}
          </p>
        </div>
      </div>
    </footer>
  );
};
