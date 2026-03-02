import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { path: "/science", label: "Science" },
  { path: "/learn", label: "Learn" },
  { path: "/maximo", label: "MAXimo\u00B2" },
  { path: "/maxima", label: "MAXima\u00B2" },
  { path: "/pricing", label: "Pricing" },
  { path: "/compare", label: "Compare" },
  { path: "/about", label: "About" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(5, 7, 10, 0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-1">
            <span className="text-white font-bold text-xl" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Geno</span>
            <span className="text-[#FF1F23] font-bold text-xl" style={{ fontFamily: "'Inter Tight', sans-serif" }}>MAX</span>
            <span className="text-white font-bold text-sm align-super">2</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${location.pathname === link.path || (link.path === "/learn" && location.pathname.startsWith("/learn")) ? "text-white font-medium" : "text-[#6B7A90] hover:text-white"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/assessment" className="gx-btn-primary text-sm flex items-center gap-2">
              Initialize Protocol <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10" style={{ background: "rgba(5, 7, 10, 0.98)" }}>
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-sm py-2 ${location.pathname === link.path || (link.path === "/learn" && location.pathname.startsWith("/learn")) ? "text-white font-medium" : "text-[#6B7A90]"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/assessment" onClick={() => setIsOpen(false)} className="gx-btn-primary text-sm flex items-center gap-2 justify-center mt-4">
              Initialize Protocol <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
