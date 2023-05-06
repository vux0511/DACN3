import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import Footer from "~/components/Layout/DefaultLayout/Footer";
import Category from "./components/Category/Category";
import Product from "./components/Products/Products";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DetaiProduct from "./components/DetaiProduct/DetaiProduct";
import AppContext from "./utils/context";
import Cart from "./components/Cart/Cart";

import { useState } from "react";

function App() {
    const [cartCount, setCartCount] = useState(0);

    return (
        <BrowserRouter>
            <AppContext>
                <Header cartCount={cartCount} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                setCartCount={setCartCount}
                                cartCount={cartCount}
                            />
                        }
                    />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/" element={<Product />} />
                    <Route path="/product/:id" element={<DetaiProduct />} />
                    <Route path="/cart/" element={<Cart />} />
                </Routes>
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
