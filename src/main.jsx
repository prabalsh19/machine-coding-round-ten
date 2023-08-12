import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/app-context.jsx";
import { InventoryDashboard } from "./pages/InventoryDashboard/InventoryDashboard.jsx";
import { Department } from "./pages/Department/Department.jsx";
import { Products } from "./pages/Products/Products.jsx";
import { AddProduct } from "./pages/AddProduct/AddProduct.jsx";
import { Product } from "./pages/Product/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <InventoryDashboard /> },
      { path: "/department", element: <Department /> },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "add",
        element: <AddProduct />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
