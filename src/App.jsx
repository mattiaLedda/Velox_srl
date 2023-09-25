import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import Home from "./Home"; // Assumendo che "Home" sia il componente per il percorso "home"
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
  ]);

function App(){
    return(
        <RouterProvider router={router} />
    )
}
export default App