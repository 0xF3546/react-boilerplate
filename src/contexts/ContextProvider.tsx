import { AuthProvider } from "./authContext";
import { LanguageProvider } from "./languageContext";

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <LanguageProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </LanguageProvider>
    );
}