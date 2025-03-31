import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FAQ from "./FAQ";
import Authentication from "./pages/Authentication";
import SellerDash from "./components/Dashboard/sellerDash";
import AddListingPage from "./pages/addListing"; // Make sure this name matches

const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/sellerDash",
    element: <SellerDash />,
  },
  {
    path: "/addListing",
    element: <AddListingPage />, // Use the updated name here as well
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
