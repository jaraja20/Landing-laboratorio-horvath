import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

const getInitial = () => {
  const saved = typeof window !== "undefined" && window.localStorage.getItem("horvath_lang");
  return saved === "en" || saved === "es" ? saved : "es";
};

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitial);

  const setLang = useCallback((l) => {
    setLangState(l);
    try { window.localStorage.setItem("horvath_lang", l); } catch (e) {}
    document.documentElement.lang = l === "en" ? "en" : "es-PY";
  }, []);

  const toggle = useCallback(() => setLang(lang === "es" ? "en" : "es"), [lang, setLang]);

  const value = useMemo(
    () => ({ lang, setLang, toggle, t: translations[lang] }),
    [lang, setLang, toggle]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
