import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FAQ from "./FAQ";
import Authentication from "./pages/Authentication";
import ForgotPassword from "./components/ForgotPass/ForgotPassword.jsx";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Authentication />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "seller",
        element: (
          <ProtectedRoute>
            <div>My Listings</div>
          </ProtectedRoute>
        ),
      },
      {
        path: "buyer",
        element: (
          <ProtectedRoute>
            <div>My Purchases</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
