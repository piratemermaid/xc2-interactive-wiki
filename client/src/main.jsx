import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.jsx";
import ErrorPage from "./routes/error.jsx";
import BladeListPage from "./routes/bladeList.jsx";
import BladePage from "./routes/blade.jsx";
import MyBlades from "./routes/my_blades.jsx";
import Signin from "./routes/signin.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/blades/:name",
                element: <BladePage />
            },
            {
                path: "/blades",
                element: <BladeListPage />
            }
        ]
    },
    {
        path: "/my_blades",
        element: <MyBlades />
    },
    {
        path: "/signin",
        element: <Signin />
    }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);
