import "./Home.scss";
import Bannner from "./Banner/Banner";
import Products from "../Products/Products";
import { useState, useEffect } from "react";
import axios from "axios";
import CALL_URL from "../../api/CALL_URL";

function Home({ setCartCount, cartCount }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(CALL_URL.URL_getProduct).then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div>
            <Bannner />
            <div className="main-content">
                <div className="layout">
                    <Products
                        headingText="SẢN PHẨM NỔI BẬT"
                        setCartCount={setCartCount}
                        cartCount={cartCount}
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
