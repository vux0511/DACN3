import Product from "./Product/Product";
import Category from "../Category/Category";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import CALL_URL from "../../api/CALL_URL";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function Products({ headingText }) {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(8);
    var { categoryId } = useParams(1);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    };

    if (categoryId === undefined) {
        categoryId = "allProduct";
    }

    useEffect(() => {
        axios.get(CALL_URL.URL_getProduct).then((response) => {
            setProducts(response.data);
        });
    }, []);

    // Categories
    useEffect(() => {
        axios
            .get(CALL_URL.URL_getProductCategory, {
                params: { idcategory: categoryId },
            })
            .then((response) => {
                setProducts(response.data);
            });
    }, [categoryId]);

    return (
        <>
            {location.pathname === "/" ? "" : <Header />}
            <div className="products-container">
                <div className="layout">
                    <div className="sec-heading">
                        {headingText ? headingText : "TẤT CẢ SẢN PHẨM"}
                    </div>
                    {headingText ? "" : <Category />}
                    <div className="products">
                        {products.slice(0, visible).map((itemProduct) => (
                            <Product
                                key={itemProduct.idProduct}
                                data={itemProduct}
                                idCategory={itemProduct.idCategory}
                                cart={itemProduct.idProduct}
                            />
                        ))}
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
