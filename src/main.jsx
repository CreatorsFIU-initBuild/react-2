import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FAQ from "./FAQ";
import Authentication from "./pages/Authentication";
import Dashboard from "./layouts/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import SellerDash from "./components/Dashboard/sellerDash";
import Favorites from "./pages/Dashboard/Favorites";
import Cart from "./pages/Dashboard/Cart";
import ManageProfile from "./pages/Dashboard/ManageProfile";
import PurchaseHistory from "./pages/Dashboard/PurchaseHistory";

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
    element: <Dashboard />,
    children: [
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "profile",
        element: <ManageProfile />,
      },
      {
        path: "history",
        element: <PurchaseHistory />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
