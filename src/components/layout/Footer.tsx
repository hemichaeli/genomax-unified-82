import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-foreground">Geno</span>
              <span className="text-accent">MAX²</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Gender-Optimized Biological Operating Systems
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/upload" className="text-muted-foreground hover:text-foreground transition-colors">
                  Upload Blood Work
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="text-muted-foreground hover:text-foreground transition-colors">
                  Assessment
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/maxync" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="text-[#FF2A2A]">MAX</span>ync²
                </Link>
              </li>
              <li>
                <Link to="/maxima" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="text-[#FF2A2A]">MAX</span>ima² (Female)
                </Link>
              </li>
              <li>
                <Link to="/maximo" className="text-muted-foreground hover:text-foreground transition-colors">
                  <span className="text-[#FF2A2A]">MAX</span>imo² (Male)
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/science" className="text-muted-foreground hover:text-foreground transition-colors">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-muted-foreground hover:text-foreground transition-colors">
                  Compare
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/referral-program" className="text-muted-foreground hover:text-foreground transition-colors">
                  Referral Program
                </Link>
              </li>
              <li>
                <Link to="/organizations" className="text-muted-foreground hover:text-foreground transition-colors">
                  For Organizations
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-foreground">Geno</span><span className="text-accent">MAX²</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
