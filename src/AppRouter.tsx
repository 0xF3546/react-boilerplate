import { JSX, useContext, useMemo } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
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

export const AppRoutes: Record<string, RouteConfig> = {
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
            <AuthRoutes redirectTo="/login" />
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

const AuthRoutes = ({ redirectTo = "/login" }: IFunctionRoute) => {
  const { currentUser } = useContext(authContext) as AuthContextType;
  const location = useLocation();

  if (currentUser) {
    return <Outlet />;
  }

  const redirectParam = encodeURIComponent(location.pathname + location.search);
  const redirectPath = `${redirectTo}?redirect=${redirectParam}`;

  return <Navigate to={redirectPath} replace />;
};