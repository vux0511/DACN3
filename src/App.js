import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
// import Product from "./components/Products/Products";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DetailProduct from "./components/DetailProduct/DetailProduct";
// import AppContext from "./utils/context";
import Cart from "./components/Cart/Cart";
import Payment from "./components/Payment/Payment";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Information from "./components/Information/Information";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import NotFound from "./components/NotFound/NotFound";

import { useState } from "react";

function App() {
    const [cartCount, setCartCount] = useState(1);

    return (
        <BrowserRouter>
            {/* <AppContext> */}
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
                <Route path="/product/" element={<Products />} />
                <Route
                    path="/product/category/:categoryId"
                    element={<Products />}
                />
                <Route path="/product/:productId" element={<DetailProduct />} />
                <Route path="/cart/" element={<Cart />} />
                <Route path="/payment/" element={<Payment />} />
                <Route path="/login/" element={<Login />} />
                <Route path="/register/" element={<Register />} />
                <Route path="/about/" element={<About />} />
                <Route path="/information/" element={<Information />} />
                <Route path="/changepass/" element={<ChangePassword />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            {/* </AppContext> */}
        </BrowserRouter>
    );
}

export default App;
