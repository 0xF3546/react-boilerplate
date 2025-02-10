import { useContext } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { IFunctionRoute } from "./types/IFunctionRoute";
import { authContext } from './contexts/authContext';
import NotFoundPage from "./pages/NotFound";
import DashboardPage from "./pages/Dashboard";
import BaseLayout from "./layouts/BaseLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<BaseLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>

                <Route element={<AuthRoutes redirectTo="/login" />}>
                    <Route element={<DashboardLayout />}>
                        <Route path="/dashboard" element={<DashboardPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const AuthRoutes = ({ redirectTo }: IFunctionRoute) => {
    if (!redirectTo) {
        throw new Error("<AuthRoutes />: prop 'redirectTo' is required!");
    }

    const { currentUser }: any = useContext(authContext);
    return currentUser ? <Outlet /> : <Navigate to={redirectTo} />;
};
