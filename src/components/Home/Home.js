import "./Home.scss";
import Bannner from "./Banner/Banner";
import Products from "../Products/Products";
import { useState, useEffect } from "react";
import axios from "axios";
import CALL_URL from "../../api/CALL_URL";
import { useNavigate, useParams } from "react-router-dom";

function Home({ setCartCount, cartCount }) {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();
    const { categoryId } = useParams();

    useEffect(() => {
        axios.get(CALL_URL.URL_getProduct).then((response) => {
            setProducts(response.data);
        });
    }, []);

    // Get category list
    useEffect(() => {
        axios.get(CALL_URL.URL_getCategory).then((response) => {
            setCategory(response.data);
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
                    {category.map((category) => (
                        <Products
                            key={category.idCategory}
                            headingText={category.nameCategory}
                            setCartCount={setCartCount}
                            cartCount={cartCount}
                            products={products}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
