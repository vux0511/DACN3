import Product from "./Product/Product";
import Category from "../Category/Category";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import CALL_URL from "../../api/CALL_URL";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function Products({ headingText }) {
    let { search } = useLocation();

    const query = new URLSearchParams(search);
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const [visible, setVisible] = useState(8);
    var { categoryId } = useParams(1);
    const idCategory = useParams();
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    };

    if (categoryId === undefined) {
        categoryId = "allProduct";
    }

    useEffect(() => {
        axios.get(CALL_URL.URL_getProductCategory).then((response) => {
            setProducts(response.data);
        });
    }, []);

    // Categories products
    useEffect(() => {
        if (categoryId !== "allProduct") {
            axios
                .get(`${CALL_URL.URL_getProduct}?idcategory=${categoryId}`)
                .then((response) => {
                    setProducts(response.data);
                });
        } else {
            axios.get(`${CALL_URL.URL_getProductCategory}`).then((response) => {
                setProducts(response.data);
            });
            console.log(`${CALL_URL.URL_getProductCategory}`);
        }
    }, [idCategory]);

    return (
        <>
            {location.pathname === "/" ? "" : <Header />}
            <div className="products-container">
                <div className="layout products-wrappper">
                    <div className="sec-heading">
                        {headingText ? headingText : "TẤT CẢ SẢN PHẨM"}
                    </div>
                    {headingText ? "" : <Category />}
                    <div className="products">
                        {products.length > 0 ? (
                            products
                                .slice(0, visible)
                                .map((itemProduct, index) => (
                                    <Product
                                        key={index}
                                        data={itemProduct}
                                        idCategory={itemProduct.idCategory}
                                        cart={itemProduct.idProduct}
                                    />
                                ))
                        ) : (
                            <div className="detail__title-error">
                                <p>Sản phẩm chưa có đánh giá!</p>
                            </div>
                        )}
                    </div>
                    <button
                        className="button button-loadmore"
                        onClick={showMoreItems}
                    >
                        Load More
                    </button>
                </div>
            </div>

            {location.pathname === "/" ? "" : <Footer />}
        </>
    );
}

export default Products;
