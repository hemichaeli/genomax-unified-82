import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, languages, translations } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("quantum-lang");
    return (saved as Language) || "he";
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("quantum-lang", newLang);
  };

  const t = (key: string): string => {
    const trans = translations[lang];
    return (trans as any)[key] || key;
  };

  const dir = languages[lang].dir;
  const isRTL = dir === "rtl";

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
    document.body.style.fontFamily = languages[lang].fontFamily;
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
