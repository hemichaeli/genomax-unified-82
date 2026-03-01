import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Home,
  Users,
  ShoppingCart,
  Building2,
  MapPin,
  Heart,
  Briefcase,
  Info,
  Phone,
  Calculator,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const Sidebar = ({ collapsed = false, onToggle }: SidebarProps) => {
  const { t, isRTL } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", icon: Home, label: t("nav_home") },
    { path: "/sellers", icon: Users, label: t("nav_sellers") },
    { path: "/buyers", icon: ShoppingCart, label: t("nav_buyers") },
    { path: "/services", icon: Briefcase, label: t("nav_services") },
    { path: "/assessment", icon: Calculator, label: t("assessment_title") },
    { divider: true },
    { path: "/neighborhoods", icon: MapPin, label: t("nav_neighborhoods") },
    { path: "/community", icon: Heart, label: t("nav_community") },
    { divider: true },
    { path: "/about", icon: Info, label: t("nav_about") },
    { path: "/contact", icon: Phone, label: t("nav_contact") },
    { path: "/faq", icon: HelpCircle, label: "FAQ" },
  ];

  const Chevron = isRTL ? ChevronRight : ChevronLeft;
  const ChevronOpen = isRTL ? ChevronLeft : ChevronRight;

  return (
    <aside
      className={`hidden xl:flex flex-col fixed top-20 bottom-0 z-40 bg-[hsl(225,40%,12%)] text-white transition-all duration-300 ${
        collapsed ? "w-16" : "w-56"
      } ${isRTL ? "right-0" : "left-0"}`}
    >
      {/* Toggle */}
      <button
        onClick={onToggle}
        className={`absolute top-4 ${
          isRTL ? "-left-3" : "-right-3"
        } w-6 h-6 bg-[hsl(38,76%,44%)] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md`}
      >
        {collapsed ? (
          <ChevronOpen className="w-3 h-3" />
        ) : (
          <Chevron className="w-3 h-3" />
        )}
      </button>

      {/* Nav Items */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-0.5 px-2">
          {navItems.map((item, i) => {
            if ("divider" in item && item.divider) {
              return (
                <li key={`div-${i}`} className="my-2">
                  <div className="h-px bg-white/10 mx-2" />
                </li>
              );
            }
            const Icon = item.icon!;
            const active = isActive(item.path!);
            return (
              <li key={item.path}>
                <Link
                  to={item.path!}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    active
                      ? "bg-[hsl(38,76%,44%)] text-white"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon className={`w-4.5 h-4.5 flex-shrink-0 ${active ? "text-white" : "text-white/50 group-hover:text-white"}`} />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom branding */}
      {!collapsed && (
        <div className="p-4 border-t border-white/10">
          <div className="text-center">
            <span
              className="text-sm font-bold text-white/80"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              QUANTUM
            </span>
            <p className="text-[10px] text-white/30 mt-1">v4.7.3</p>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
