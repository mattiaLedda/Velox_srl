import * as React from "react";
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./Home";
import Poliuree from "./Poliuree";
import Preventivo from "./Preventivo";
import Tegole from "./Tegole";
import ProductsPage1 from "./ProductsPage1";
import Loader from './Loader';

import imagepar from "../imagepar";

const dynamicRoutes = Object.keys(imagepar).map(key => {
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
    ...dynamicRoutes
]);

function AppContent() {
    const [loading, setLoading] = React.useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true); 
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [location.pathname]); 

    return (
        <>
            {loading ? <Loader /> : null}
            {/* Qui vanno gli altri componenti e rotte */}
        </>
    );
}