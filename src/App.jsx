import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import Home from "./Home"; // Assumendo che "Home" sia il componente per il percorso "home"
import Poliuree from "./Poliuree";
import Preventivo from "./Preventivo";
import Tegole from "./Tegole";

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
    }
  ]);

function App(){
    return(
        <RouterProvider router={router} />
    )
}
export default App