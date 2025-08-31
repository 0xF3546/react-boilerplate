import { useLanguage } from "../contexts/languageContext";

export const LanguageChanger = () => {
    const lang = useLanguage();
    return (
        <div className="flex gap-2">
            <button
                className={`px-4 py-2 rounded-lg shadow font-semibold border transition-colors duration-200
                    bg-indigo-700 border-indigo-500 text-white
                    hover:bg-indigo-600 hover:border-indigo-400
                    focus:outline-none focus:ring-2 focus:ring-indigo-400
                    ${lang.language === "en" ? "ring-2 ring-indigo-300" : "opacity-80"}`}
                onClick={() => lang.setLanguage("en")}
            >
                English
            </button>
            <button
                className={`px-4 py-2 rounded-lg shadow font-semibold border transition-colors duration-200
                    bg-gray-800 border-gray-600 text-indigo-200
                    hover:bg-indigo-900 hover:border-indigo-500 hover:text-white
                    focus:outline-none focus:ring-2 focus:ring-indigo-400
                    ${lang.language === "de" ? "ring-2 ring-indigo-300" : "opacity-80"}`}
                onClick={() => lang.setLanguage("de")}
            >
                Deutsch
            </button>
        </div>
    );
};
