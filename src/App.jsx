import * as React from "react";
import { Link } from "react-router-dom";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import Home from "./Home";
import Poliuree from "./Poliuree";
import Preventivo from "./Preventivo";
import Tegole from "./Tegole";
import ProductsPage1 from "./ProductsPage1"; // Assumendo che il tuo file sia chiamato "ProductsPage1"

// Importa l'oggetto imagepar per creare dinamicamente le rotte
import imagepar from "../imagepar";
import ContactForm from "./Contatti";
import ScrollToTop from "./ScrollToTop";

// Creare un array di rotte per ogni chiave in imagepar


function App() {



  const dynamicRoutes = Object.keys(imagepar).map(key => {
    console.log(key)
    return {
      path: `/${key}`,
      element: <ScrollToTop><ProductsPage1 product={key} /></ScrollToTop>
    };
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ScrollToTop><Home /></ScrollToTop>,
    },
    {
      path: "/tegole",
      element: <ScrollToTop><Tegole /></ScrollToTop>,
    },
    {
      path: "/preventivo",
      element: <ScrollToTop><Preventivo /></ScrollToTop>
    },
    {
      path: "/contatti",
      element: <ScrollToTop><ContactForm /></ScrollToTop>
    },
    {
      path: "/poliuree",
      element: <ScrollToTop><Poliuree /></ScrollToTop>
    },
    ...dynamicRoutes // Aggiungi le rotte dinamiche qui
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;
