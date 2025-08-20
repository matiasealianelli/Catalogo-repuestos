import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Catalog from "./pages/catalog/catalog";
import AutopartDetail from "./pages/autopartDetail/autopartDetail.jsx";
import About from "./components/layout/about";
import Questions from "./components/layout/questions";
import Contact from "./components/layout/contact";

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
    path: "/repuestos/:ID",
    element: <AutopartDetail />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/preguntasfrecuentes",
    element: <Questions />,
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
]);
