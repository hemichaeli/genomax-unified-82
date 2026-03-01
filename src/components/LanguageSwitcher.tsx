import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { languages, Language } from "@/i18n/translations";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span>{languages[lang].flag}</span>
        <span className="hidden sm:inline">{languages[lang].label}</span>
      </button>

      {open && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 min-w-[160px] animate-fade-in">
          {(Object.keys(languages) as Language[]).map((code) => (
            <button
              key={code}
              onClick={() => {
                setLang(code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 ${
                lang === code
                  ? "bg-[hsl(225,40%,16%)] text-white hover:bg-[hsl(225,40%,20%)]"
                  : "text-gray-700"
              }`}
            >
              <span className="text-base">{languages[code].flag}</span>
              <span className="font-medium">{languages[code].label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
