import { Link } from "react-router-dom";
import { Menu, X, Upload } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-50 w-full border-b border-border bg-card/50 backdrop-blur-lg transition-all duration-[280ms] ${isScrolled ? 'h-14' : 'h-16'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className={`font-bold transition-all duration-[280ms] ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
                <span className="text-foreground">Geno</span>
                <span className="text-accent transition-all duration-[280ms] group-hover:drop-shadow-[0_0_20px_rgba(255,42,42,0.6)]">MAX²</span>
              </div>
            </Link>

            {/* Desktop Navigation - Enhanced with MAXync² */}
            <nav className="hidden lg:flex items-center space-x-8 ml-12 flex-1">
              <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-[280ms]">
                Home
              </Link>
              <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-[280ms]">
                About
              </Link>
              <Link to="/science" className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-[280ms]">
                Science
              </Link>
              <Link 
                to="/maximo" 
                className="text-sm font-medium text-foreground hover:text-maximo transition-all duration-[280ms] group relative"
              >
                <span className="text-accent">MAX</span>imo²
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-maximo scale-x-0 group-hover:scale-x-100 transition-transform duration-[280ms] origin-left" />
              </Link>
              <Link 
                to="/maxima" 
                className="text-sm font-medium text-foreground hover:text-maxima transition-all duration-[280ms] group relative"
              >
                <span className="text-accent">MAX</span>ima²
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-maxima scale-x-0 group-hover:scale-x-100 transition-transform duration-[280ms] origin-left" />
              </Link>
              <Link 
                to="/maxync" 
                className="text-sm font-medium text-foreground hover:text-os-cyan transition-all duration-[280ms] group relative"
              >
                <span className="text-accent">MAX</span>ync²
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-os-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-[280ms] origin-left" />
              </Link>
            </nav>

            {/* CTA Buttons - New Hierarchy */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Secondary CTA - Start Assessment */}
              <Link to="/assessment">
                <button
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border-2 border-os-cyan bg-transparent text-foreground font-bold text-sm transition-all duration-[280ms] hover:translate-y-[-1px] hover:shadow-[0_0_20px_hsl(186_100%_64%/0.3)]"
                  style={{
                    minHeight: '44px',
                  }}
                >
                  Start Assessment
                </button>
              </Link>

              {/* Primary CTA - Upload Bloodwork (Enhanced) */}
              <Link to="/upload">
                <button
                  className={`upload-blood-work-cta inline-flex items-center justify-center gap-2 rounded-full font-bold text-white transition-all duration-[280ms] active:scale-[0.99] ${
                    isScrolled ? 'px-5 py-2 text-sm' : 'px-7 py-3 text-sm'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, hsl(186 100% 64%) 0%, hsl(213 100% 55%) 100%)',
                    boxShadow: isScrolled 
                      ? '0 2px 8px hsl(225 19% 2% / 0.28)' 
                      : '0 4px 12px hsl(225 19% 2% / 0.28)',
                    minHeight: '44px',
                  }}
                  aria-label="Upload your blood work for OS analysis"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 0 24px hsl(186 100% 64% / 0.4), 0 4px 16px hsl(225 19% 2% / 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = isScrolled 
                      ? '0 2px 8px hsl(225 19% 2% / 0.28)' 
                      : '0 4px 12px hsl(225 19% 2% / 0.28)';
                  }}
                >
                  <Upload className={`transition-all duration-[120ms] ${isScrolled ? 'w-4 h-4' : 'w-4 h-4'}`} />
                  Upload Bloodwork
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground hover:text-primary transition-colors duration-[280ms]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu - Enhanced Overlay */}
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-16 left-0 right-0 bottom-0 z-50 bg-card/98 backdrop-blur-xl border-t border-border animate-fade-in">
              <div className="container mx-auto px-4 py-8 space-y-6">
                <Link 
                  to="/" 
                  className="block text-lg font-medium text-foreground hover:text-primary transition-colors duration-[280ms]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="block text-lg font-medium text-foreground hover:text-primary transition-colors duration-[280ms]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/science" 
                  className="block text-lg font-medium text-foreground hover:text-primary transition-colors duration-[280ms]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Science
                </Link>
                <Link 
                  to="/maximo" 
                  className="block text-lg font-medium text-foreground hover:text-maximo transition-colors duration-[280ms]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-accent">MAX</span>imo²
                </Link>
                <Link 
                  to="/maxima" 
                  className="block text-lg font-medium text-foreground hover:text-maxima transition-colors duration-[280ms]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-accent">MAX</span>ima²
                </Link>
                <Link 
                  to="/maxync" 
                  className="block text-lg font-medium text-foreground hover:text-os-cyan transition-colors duration-[280ms]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-accent">MAX</span>ync²
                </Link>

                {/* Mobile CTAs */}
                <div className="pt-6 space-y-4 border-t border-border">
                  <Link to="/assessment" className="block" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full py-3 px-6 rounded-full border-2 border-os-cyan bg-transparent text-foreground font-bold text-sm transition-all duration-[280ms] hover:bg-os-cyan/10">
                      Start Assessment
                    </button>
                  </Link>
                  <Link to="/upload" className="block" onClick={() => setMobileMenuOpen(false)}>
                    <button 
                      className="w-full py-3 px-6 rounded-full font-bold text-white text-sm transition-all duration-[280ms] hover:opacity-90"
                      style={{
                        background: 'linear-gradient(135deg, hsl(186 100% 64%) 0%, hsl(213 100% 55%) 100%)',
                      }}
                    >
                      <Upload className="w-4 h-4 inline mr-2" />
                      Upload Bloodwork
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Bottom Sticky CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border p-4">
        <div className="flex gap-3">
          {/* Secondary CTA */}
          <Link to="/assessment" className="flex-1">
            <button
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border-2 border-os-cyan bg-transparent text-foreground font-bold text-sm transition-all duration-[280ms] active:scale-[0.98]"
              style={{ minHeight: '44px' }}
            >
              Start Assessment
            </button>
          </Link>
          
          {/* Primary CTA */}
          <Link to="/upload" className="flex-[1.3]">
            <button
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold text-white transition-all duration-[280ms] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #00C3FF 0%, #006AFB 100%)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.28)',
                minHeight: '44px',
              }}
              aria-label="Upload your blood work for OS analysis"
            >
              <Upload className="w-4 h-4" />
              Upload Blood Work
            </button>
          </Link>
        </div>
      </div>

      {/* CSS for Upload Button Animations */}
      <style>{`
        .upload-blood-work-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 25px rgba(255, 42, 42, 0.4), 0 6px 16px rgba(0,0,0,0.32);
        }

        .upload-blood-work-cta:hover svg {
          animation: icon-pulse 280ms cubic-bezier(0.24, 0.8, 0.44, 1);
        }

        @keyframes icon-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        /* Subtle 7-second pulse */
        @keyframes cta-pulse {
          0%, 100% { 
            opacity: 1;
            box-shadow: 0 4px 12px rgba(0,0,0,0.28), 0 0 0px rgba(0, 195, 255, 0);
          }
          50% { 
            opacity: 1;
            box-shadow: 0 4px 12px rgba(0,0,0,0.28), 0 0 18px rgba(0, 195, 255, 0.35);
          }
        }

        .upload-blood-work-cta {
          animation: cta-pulse 7s ease-in-out infinite;
        }

        .upload-blood-work-cta:hover svg {
          transform: scale(1.03);
        }
      `}</style>
    </>
  );
};
