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

// Creare un array di rotte per ogni chiave in imagepar
const dynamicRoutes = Object.keys(imagepar).map(key => {
  console.log(key)
    return {
        path: `/${key}`,
        element: <ProductsPage1 product={key} />
    };
});

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/tegole",
      element: <Tegole />,
    },
    {
      path: "/preventivo",
      element: <Preventivo/>
    },
    {
      path: "/poliuree",
      element: <Poliuree/>
    },
    ...dynamicRoutes // Aggiungi le rotte dinamiche qui
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
