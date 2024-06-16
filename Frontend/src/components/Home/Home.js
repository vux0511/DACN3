import Bannner from "./Banner/Banner";
import CategoryHome from "../Category/CategoryHome";
import BannerProduct from "./Banner/BannerProduct";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Products from "../Products/Products";
import TopProducts from "../Products/Product/TopProducts";
import { useState, useEffect, CSSProperties } from "react";
import axios from "axios";
import CALL_URL from "../../api/CALL_URL";
import { useNavigate, useParams } from "react-router-dom";
import Recommend from "../Products/Product/Recommend";
import Cookies from "universal-cookie";

function Home({ setCartCount, cartCount }) {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [topProduct, setTopProduct] = useState([]);
    const [recommend, setRecommend] = useState([]);
    const navigate = useNavigate();
    const { categoryId } = useParams();
    const cookies = new Cookies();

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

    // Recommend Products

    useEffect(() => {
        if (cookies.get("user_token")) {
            axios
                .get(
                    `${CALL_URL.URL_getRecommend}?user_token=${cookies.get(
                        "user_token"
                    )}`
                )
                .then((response) => {
                    setRecommend(response.data);
                });
        } else {
            axios.get(CALL_URL.URL_getTopProduct).then((response) => {
                setRecommend(response.data);
            });
        }
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
                    <CategoryHome />
                    <BannerProduct />
                    <Recommend recommend={recommend} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
