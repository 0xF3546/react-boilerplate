import { AuthProvider } from "./authContext";

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}