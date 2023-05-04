import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
// import Footer from "~/components/Layout/DefaultLayout/Footer";
import Category from "./components/Category";
import Product from "./components/Products/Products";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppContext from "./utils/context";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<Product />} />
                </Routes>
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
