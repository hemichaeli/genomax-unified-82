import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    { path: "/science", label: "Science" },
    { path: "/maximo", label: "MAXimo\u00B2" },
    { path: "/maxima", label: "MAXima\u00B2" },
    { path: "/pricing", label: "Pricing" },
    { path: "/compare", label: "Compare" },
    { path: "/shop", label: "Shop" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#05070A]/95 backdrop-blur-md shadow-lg shadow-black/20 h-16"
            : "bg-[#05070A] h-20"
        } border-b border-[#1A2030]`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-1 group">
              <span
                className={`font-bold tracking-tight transition-all duration-300 ${
                  isScrolled ? "text-xl" : "text-2xl"
                }`}
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                <span className="text-white">Geno</span>
                <span className="text-[#FF1F23]">MAX</span>
                <span className="sup2 text-[#FF1F23]">2</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-[#FF1F23] bg-[#FF1F23]/10"
                      : "text-[#6B7A90] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/assessment"
                className="px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition-all duration-200 hover:translate-y-[-1px]"
                style={{
                  background: "linear-gradient(135deg, #FF1F23, #E6191D)",
                  boxShadow: "0 4px 16px rgba(255, 31, 35, 0.25)",
                }}
              >
                Initialize Protocol
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-16 z-50 bg-[#05070A] animate-fade-in overflow-y-auto">
              <div className="container mx-auto px-6 py-8 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all ${
                      isActive(link.path)
                        ? "text-[#FF1F23] bg-[#FF1F23]/10"
                        : "text-[#6B7A90] hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/about"
                  className="block px-4 py-3 text-lg font-medium rounded-lg text-[#6B7A90] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/referral-program"
                  className="block px-4 py-3 text-lg font-medium rounded-lg text-[#6B7A90] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Referral Program
                </Link>
                <div className="pt-6 border-t border-[#1A2030]">
                  <Link
                    to="/assessment"
                    className="block w-full py-3 px-6 rounded-lg text-white font-semibold text-center"
                    style={{
                      background: "linear-gradient(135deg, #FF1F23, #E6191D)",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Initialize Protocol
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Bottom Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#05070A]/95 backdrop-blur-md border-t border-[#1A2030] p-3">
        <Link
          to="/assessment"
          className="block w-full py-3 rounded-lg text-white font-semibold text-sm text-center"
          style={{
            background: "linear-gradient(135deg, #FF1F23, #E6191D)",
            boxShadow: "0 4px 16px rgba(255, 31, 35, 0.25)",
          }}
        >
          Initialize Your Protocol
        </Link>
      </div>
    </>
  );
};
