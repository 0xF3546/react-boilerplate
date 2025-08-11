import { JSX, useContext, useMemo } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { authContext } from "./contexts/authContext";
import NotFoundPage from "./pages/NotFound";
import DashboardPage from "./pages/Dashboard";
import BaseLayout from "./layouts/BaseLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import { IFunctionRoute } from "./types/IFunctionRoute";
import { RouteConfig } from "./types/RouteConfig";

interface AuthContextType {
  currentUser: { id: string } | null;
}

export const AppRoutes = {
  HOME: {
    path: "/",
    element: <HomePage />,
    auth: false,
    layout: <BaseLayout />,
  },
  LOGIN: {
    path: "/login",
    element: <LoginPage />,
    auth: false,
    layout: <BaseLayout />,
  },
  REGISTER: {
    path: "/register",
    element: <RegisterPage />,
    auth: false,
    layout: <BaseLayout />,
  },
  DASHBOARD: {
    path: "/dashboard",
    element: <DashboardPage />,
    auth: true,
    layout: <DashboardLayout />,
  },
  NOT_FOUND: {
    path: "*",
    element: <NotFoundPage />,
    auth: false,
    layout: <BaseLayout />,
  },
};

export default function AppRouter(): JSX.Element {
  const renderRoutes = useMemo((): JSX.Element[] => {
    const routesByLayout = new Map<JSX.Element, RouteConfig[]>();

    Object.values(AppRoutes).forEach(route => {
      const layout = route.layout ?? <></>;
      if (!routesByLayout.has(layout)) routesByLayout.set(layout, []);
      routesByLayout.get(layout)!.push(route);
    });

    return Array.from(routesByLayout.entries()).map(([layout, routes], i) => (
      <Route
        key={`layout-${i}`}
        element={
          routes.some(route => route.auth) ? (
            <AuthRoutes redirectTo="/auth/login">
              {layout}
            </AuthRoutes>
          ) : (
            layout
          )
        }
      >
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    ));
  }, []);

  return (
    <BrowserRouter>
      <Routes>{renderRoutes}</Routes>
    </BrowserRouter>
  );
}

const AuthRoutes = ({ redirectTo = "/auth/login", children }: IFunctionRoute & { children?: React.ReactNode }) => {
  const { currentUser } = useContext(authContext) as AuthContextType;
  return currentUser ? <>{children ? children : <Outlet />}</> : <Navigate to={redirectTo} replace />;
};
