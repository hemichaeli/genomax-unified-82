import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export const Footer = () => {
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
            <p className="text-white/60 text-sm leading-relaxed">
              משרד תיווך בוטיק לפינוי-בינוי.
              <br />
              מח חד. הבנה עמוקה. גישה לנכסים שאחרים לא יודעים שקיימים.
            </p>
            <div className="quantum-gold-line" style={{ width: 40, height: 2, background: 'linear-gradient(90deg, #B8860B, #D4A020)' }} />
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-[#B8860B] mb-4 text-sm tracking-wider">
              ניווט
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/sellers", label: "למוכרים" },
                { to: "/buyers", label: "לקונים" },
                { to: "/neighborhoods", label: "שכונות ומתחמים" },
                { to: "/community", label: "אסטרטגיית שכנות" },
                { to: "/about", label: "אודות QUANTUM" },
              ].map((link) => (
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
              צור קשר
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-white/60">
                <Phone className="w-4 h-4 text-[#B8860B]" />
                <span dir="ltr">+972-XX-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <MessageCircle className="w-4 h-4 text-[#B8860B]" />
                <a
                  href="https://wa.me/972XXXXXXXXX"
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
                <span>ישראל</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-[#B8860B] mb-4 text-sm tracking-wider">
              מידע משפטי
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-white/60 hover:text-[#B8860B] transition-colors"
                >
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-white/60 hover:text-[#B8860B] transition-colors"
                >
                  תנאי שימוש
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white/60 hover:text-[#B8860B] transition-colors"
                >
                  שאלות נפוצות
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>
            &copy; {new Date().getFullYear()} QUANTUM Real Estate. כל הזכויות
            שמורות.
          </p>
          <p className="mt-2 text-xs">
            ב-QUANTUM, אתה לא עוד לקוח. אתה הלקוח היחיד.
          </p>
        </div>
      </div>
    </footer>
  );
};
