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
        path: "*",
        element: <NotFound />,
    },
]);