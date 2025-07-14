import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Catalog from "./pages/catalog/catalog";
import Autopart from "./pages/product/autopart";


export const router = createBrowserRouter([
  {
    path: '/',
    element: < App />
  },
  {
    path: '/catalogo',
    element: < Catalog />
  },
    {
    path: '/autoparte',
    element: < Autopart />
  }
])