import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import ProtectedRoute from "../routes/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import NotFound from "../pages/errors/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "", element: <Home /> },
            { path: "about", element: <About /> },
        ],
    },

    {
        path: "/admin",
        element: (
            <ProtectedRoute>
                <AdminLayout />
            </ProtectedRoute>
        ),
        children: [
            { path: "", element: <Dashboard /> },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);