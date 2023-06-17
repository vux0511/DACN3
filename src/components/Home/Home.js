import "./Home.scss";
import Bannner from "./Banner/Banner";
import BannerProduct from "./Banner/BannerProduct";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import TopProducts from "../Products/Product/TopProducts";
import NewProduct from "../Products/Product/NewProduct";
import { useState, useEffect } from "react";
import axios from "axios";
import CALL_URL from "../../api/CALL_URL";
import { useNavigate, useParams } from "react-router-dom";

function Home({ setCartCount, cartCount }) {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [topProduct, setTopProduct] = useState([]);
    const [newProduct, setNewProduct] = useState([]);
    const navigate = useNavigate();
    const { categoryId } = useParams();

    useEffect(() => {
        axios.get(CALL_URL.URL_getProduct).then((response) => {
            setProducts(response.data);
        });
    }, []);

    // Top Products
    useEffect(() => {
        axios.get(CALL_URL.URL_getTopProduct).then((response) => {
            setTopProduct(response.data);
        });
    }, []);

    // New Products
    useEffect(() => {
        axios.get(CALL_URL.URL_getNewProduct).then((response) => {
            setNewProduct(response.data);
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
            <Header />
            <Bannner />
            <div className="main-content">
                <div className="layout">
                    <TopProducts topProduct={topProduct} />
                    <BannerProduct />
                    <NewProduct newProduct={newProduct} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
