import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t" style={{ background: "#05070A", borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-xl" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Geno</span>
              <span className="text-[#FF1F23] font-bold text-xl" style={{ fontFamily: "'Inter Tight', sans-serif" }}>MAX</span>
              <span className="text-white font-bold text-sm align-super">2</span>
            </div>
            <p className="text-sm text-[#6B7A90] leading-relaxed">
              Your blood speaks. We listen. Your protocol follows.
            </p>
            <p className="text-xs text-[#6B7A90]/60">
              Gender-Optimized Biological Operating System
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-4">Platform</h4>
            <div className="space-y-2">
              <Link to="/science" className="block text-sm text-[#6B7A90] hover:text-white transition-colors">Science</Link>
              <Link to="/maximo" className="block text-sm text-[#6B7A90] hover:text-white transition-colors">MAXimo&#178;</Link>
              <Link to="/maxima" className="block text-sm text-[#6B7A90] hover:text-white transition-colors">MAXima&#178;</Link>
              <Link to="/maxync" className="block text-sm text-[#6B7A90] hover:text-white transition-colors">MAXync&#178;</Link>
              <Link to="/compare" className="block text-sm text-[#6B7A90] hover:text-white transition-colors">Compare</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-4">Company</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-[#6B7A90] hover:text-white transition-colors">About</Link>
              <Link to="/pricing" className="block text-sm text-[#6B7A90] hover:text-white transition-colors">Pricing</Link>
              <Link to="/organizations" className="block text-sm text-[#6B7A90] hover:text-white transition-colors">Organizations</Link>
              <Link to="/referral" className="block text-sm text-[#6B7A90] hover:text-white transition-colors">Referral Program</Link>
              <Link to="/faq" className="block text-sm text-[#6B7A90] hover:text-white transition-colors">FAQ</Link>
              <Link to="/contact" className="block text-sm text-[#6B7A90] hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-white uppercase tracking-wider mb-4">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-sm text-[#6B7A90] hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="block text-sm text-[#6B7A90] hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/disclaimer" className="block text-sm text-[#6B7A90] hover:text-white transition-colors">Medical Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B7A90]/50">&copy; {new Date().getFullYear()} GenoMAX&#178;. All rights reserved.</p>
          <p className="text-xs text-[#6B7A90]/40 font-mono">Blood does not negotiate.</p>
        </div>
      </div>
    </footer>
  );
};
