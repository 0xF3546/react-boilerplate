import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/languageContext";

export const LanguageChanger = () => {
    const lang = useLanguage();
    
    return (
        <div>
            <button onClick={() => lang.setLanguage("en")}>English</button>
            <button onClick={() => lang.setLanguage("de")}>Deutsch</button>
        </div>
    );
};
