import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FAQ from "./FAQ";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import SellerDash from "./components/Dashboard/sellerDash";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Authentication />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/seller",
    element: <SellerDash />,
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
