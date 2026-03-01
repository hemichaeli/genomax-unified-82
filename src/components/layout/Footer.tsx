import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#05070A] border-t border-[#1A2030] pb-20 lg:pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4 md:col-span-1">
            <div>
              <span className="text-2xl font-bold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                <span className="text-white">Geno</span>
                <span className="text-[#FF1F23]">MAX</span>
                <span className="sup2 text-[#FF1F23]">2</span>
              </span>
              <div className="text-xs text-[#6B7A90] mt-2 uppercase tracking-widest">Biological Operating System</div>
            </div>
            <p className="text-[#6B7A90] text-sm leading-relaxed">Your blood speaks. We listen. Your protocol follows.</p>
            <div style={{ width: 40, height: 2, background: '#FF1F23' }} />
          </div>

          <div>
            <h3 className="font-semibold text-[#FF1F23] mb-4 text-xs tracking-wider uppercase">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/science" className="text-[#6B7A90] hover:text-white transition-colors">Science</Link></li>
              <li><Link to="/maximo" className="text-[#6B7A90] hover:text-white transition-colors">MAXimo&#178;</Link></li>
              <li><Link to="/maxima" className="text-[#6B7A90] hover:text-white transition-colors">MAXima&#178;</Link></li>
              <li><Link to="/maxync" className="text-[#6B7A90] hover:text-white transition-colors">MAXync&#178;</Link></li>
              <li><Link to="/pricing" className="text-[#6B7A90] hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/compare" className="text-[#6B7A90] hover:text-white transition-colors">Compare</Link></li>
              <li><Link to="/shop" className="text-[#6B7A90] hover:text-white transition-colors">Shop</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#FF1F23] mb-4 text-xs tracking-wider uppercase">Learn</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-[#6B7A90] hover:text-white transition-colors">About</Link></li>
              <li><Link to="/referral-program" className="text-[#6B7A90] hover:text-white transition-colors">Referral Program</Link></li>
              <li><Link to="/organizations" className="text-[#6B7A90] hover:text-white transition-colors">Organizations</Link></li>
              <li><Link to="/faq" className="text-[#6B7A90] hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#FF1F23] mb-4 text-xs tracking-wider uppercase">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy" className="text-[#6B7A90] hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-[#6B7A90] hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="text-[#6B7A90] hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link to="/contact" className="text-[#6B7A90] hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1A2030] text-center text-sm text-[#6B7A90]/60">
          <p>&copy; {new Date().getFullYear()} GenoMAX&#178;. All rights reserved.</p>
          <p className="mt-2 text-xs">Blood does not negotiate.</p>
        </div>
      </div>
    </footer>
  );
};
