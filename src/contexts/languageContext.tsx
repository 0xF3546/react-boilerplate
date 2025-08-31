import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
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
  const [language, setLanguage] = useState<string>("en");
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);

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