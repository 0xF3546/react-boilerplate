import i18n from "../utils/i18n";
import { createContext, useContext, useEffect, useState } from "react";
import LanguageData from '../utils/locales/LanguageData.json';

interface LanguageContextType {
  language: string;
  setLanguage: (language: keyof typeof LanguageData) => void;
}

export const languageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(languageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string>(localStorage.getItem("language") || "en");

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language]);

  const values = {
    language,
    setLanguage
  }

  return (
    <languageContext.Provider value={values}>
      {children}
    </languageContext.Provider>
  );
}