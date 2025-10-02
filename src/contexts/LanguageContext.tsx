import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Language, translations, Translations } from "../locales/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 저장된 언어 가져오기
const getSavedLanguage = (): Language => {
  if (typeof window === "undefined") return "ko";
  
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage === "ko" || savedLanguage === "en") {
    return savedLanguage;
  }
  
  // 브라우저 언어 확인
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("ko")) {
    return "ko";
  }
  
  return "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getSavedLanguage);

  // 언어 변경시 저장
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
