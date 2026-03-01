import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const WHATSAPP_NUMBER = "972547669985";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: t("nav_home") },
    { path: "/sellers", label: t("nav_sellers") },
    { path: "/buyers", label: t("nav_buyers") },
    { path: "/services", label: t("nav_services") },
    { path: "/neighborhoods", label: t("nav_neighborhoods") },
    { path: "/community", label: t("nav_community") },
    { path: "/about", label: t("nav_about") },
    { path: "/contact", label: t("nav_contact") },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md h-16"
            : "bg-white h-20"
        } border-b border-[hsl(40,15%,88%)]`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex flex-col">
                <span
                  className={`font-bold tracking-tight transition-all duration-300 ${
                    isScrolled ? "text-xl" : "text-2xl"
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <span className="text-[#1A1A3E]">QUANTUM</span>
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#B8860B] uppercase">
                  Real Estate
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-[#B8860B] bg-[#B8860B]/5"
                      : "text-[#1A1A3E]/70 hover:text-[#1A1A3E] hover:bg-[#1A1A3E]/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs + Language */}
            <div className="hidden lg:flex items-center gap-2">
              <LanguageSwitcher />
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-lg border-2 border-[#1A1A3E] text-[#1A1A3E] font-semibold text-sm hover:bg-[#1A1A3E] hover:text-white transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:translate-y-[-1px]"
                style={{
                  background: "linear-gradient(135deg, #B8860B 0%, #D4A020 100%)",
                  boxShadow: "0 4px 16px rgba(184, 134, 11, 0.2)",
                }}
              >
                <Phone className="w-4 h-4" />
                {t("nav_schedule")}
              </Link>
            </div>

            {/* Mobile: Language + Menu */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <button
                className="text-[#1A1A3E] p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-16 z-50 bg-white animate-fade-in overflow-y-auto">
              <div className="container mx-auto px-6 py-8 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all ${
                      isActive(link.path)
                        ? "text-[#B8860B] bg-[#B8860B]/5"
                        : "text-[#1A1A3E]/80 hover:bg-[#1A1A3E]/5"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Assessment link in mobile */}
                <Link
                  to="/assessment"
                  className="block px-4 py-3 text-lg font-medium rounded-lg text-[#B8860B] bg-[#B8860B]/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t("assessment_title")}
                </Link>

                <div className="pt-6 space-y-3 border-t border-[hsl(40,15%,88%)]">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg border-2 border-[#1A1A3E] text-[#1A1A3E] font-semibold"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg text-white font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #B8860B 0%, #D4A020 100%)",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone className="w-5 h-5" />
                    {t("nav_schedule")}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Bottom CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[hsl(40,15%,88%)] p-3">
        <div className="flex gap-2">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-[#1A1A3E] text-[#1A1A3E] font-semibold text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <Link
            to="/contact"
            className="flex-[1.3] flex items-center justify-center gap-2 py-3 rounded-lg text-white font-semibold text-sm"
            style={{
              background: "linear-gradient(135deg, #B8860B 0%, #D4A020 100%)",
            }}
          >
            <Phone className="w-4 h-4" />
            {t("nav_schedule")}
          </Link>
        </div>
      </div>
    </>
  );
};
