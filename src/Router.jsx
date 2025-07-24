import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Catalog from "./pages/catalog/catalog";
import Autopart from "./pages/product/autopart";
import About from "./components/layout/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/repuestos",
    element: <Catalog />,
  },
  {
    path: "/autoparte",
    element: <Autopart />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
