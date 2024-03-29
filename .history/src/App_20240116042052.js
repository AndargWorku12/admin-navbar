import Analytics from "./pages/Analytics";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import ShopCard from "./pages/ShopCard";
import CustemerReview from "./pages/CustemerReview";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
    return ( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < Dashboard / > }
        />{" "} <
        Route path = "/analytics"
        element = { < Analytics / > }
        />{" "} <
        Route path = "/login"
        element = { < Login / > }
        />{" "} <
        Route path = "/signup"
        element = { < Signup / > }
        />{" "} <
        Route path = "/category"
        element = { < Category / > }
        />{" "} <
        Route path = "/reviews"
        element = { < CustemerReview / > }
        />{" "} <
        Route path = "/orders"
        element = { < Orders / > }
        />{" "} <
        Route path = "/product"
        element = { < Product / > }
        />{" "} <
        Route path = "/shop"
        element = { < ShopCard / > }
        />{" "} <
        /Routes>{" "} <
        /BrowserRouter>
    );
}

export default App;