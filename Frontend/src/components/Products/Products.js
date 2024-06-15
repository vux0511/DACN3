import Product from "./Product/Product";
import Category from "../Category/Category";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import CALL_URL from "../../api/CALL_URL";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function Products({ headingText }) {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const [products, setProducts] = useState([]);
    const [originalProducts, setOriginalProducts] = useState([]);
    const location = useLocation();
    const [visible, setVisible] = useState(4);
    let { categoryId } = useParams();
    const idCategory = useParams();
    const [sortBy, setSortBy] = useState("default");
    const [priceFilter, setPriceFilter] = useState("default");

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 4);
    };

    if (categoryId === undefined) {
        categoryId = "allProduct";
    }

    useEffect(() => {
        axios.get(CALL_URL.URL_getProductCategory).then((response) => {
            setProducts(response.data);
            setOriginalProducts(response.data);
        });
    }, []);

    useEffect(() => {
        if (categoryId !== "allProduct") {
            axios
                .get(`${CALL_URL.URL_getProduct}?idcategory=${categoryId}`)
                .then((response) => {
                    setProducts(response.data);
                    setOriginalProducts(response.data);
                });
        } else {
            axios.get(CALL_URL.URL_getProductCategory).then((response) => {
                setProducts(response.data);
                setOriginalProducts(response.data);
            });
        }
    }, [categoryId]);

    useEffect(() => {
        applyFilters();
    }, [sortBy, priceFilter, originalProducts, categoryId]);

    const applyFilters = () => {
        let filteredProducts = [...originalProducts];

        switch (priceFilter) {
            case "under-500":
                filteredProducts = filteredProducts.filter(
                    (product) => product.price < 500
                );
                break;
            case "501-2000":
                filteredProducts = filteredProducts.filter(
                    (product) => product.price >= 501 && product.price <= 2000
                );
                break;
            case "2001-5000":
                filteredProducts = filteredProducts.filter(
                    (product) => product.price >= 2001 && product.price <= 5000
                );
                break;
            case "above-5000":
                filteredProducts = filteredProducts.filter(
                    (product) => product.price > 5000
                );
                break;
            default:
                filteredProducts = [...originalProducts];
                break;
        }

        switch (sortBy) {
            case "price-low-to-high":
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case "price-high-to-low":
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        setProducts(filteredProducts);
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };
    const handlePriceFilterChange = (event) => {
        setPriceFilter(event.target.value);
    };
    const handleResetFilters = () => {
        setSortBy("default");
        setPriceFilter("default");
        setVisible(4);
        setProducts(originalProducts);
    };

    return (
        <>
            {location.pathname === "/" ? "" : <Header />}
            <div className="products-container">
                <div className="layout products-wrappper">
                    <div className="sec-heading">
                        {headingText ? headingText : "TẤT CẢ SẢN PHẨM"}
                    </div>
                    {headingText ? "" : <Category />}
                    <select
                        className="product__select-wrapper"
                        value={sortBy}
                        onChange={handleSortChange}
                    >
                        <option
                            className="product__select-item"
                            value="default"
                        >
                            Mặc định
                        </option>
                        <option
                            className="product__select-item"
                            value="price-low-to-high"
                        >
                            Giá tăng dần
                        </option>
                        <option
                            className="product__select-item"
                            value="price-high-to-low"
                        >
                            Giá giảm dần
                        </option>
                    </select>
                    <select
                        className="product__select-wrapper"
                        value={priceFilter}
                        onChange={handlePriceFilterChange}
                    >
                        <option
                            className="product__select-item"
                            value="default"
                        >
                            Mặc định
                        </option>
                        <option
                            className="product__select-item"
                            value="under-500"
                        >
                            Giá dưới 500
                        </option>
                        <option
                            className="product__select-item"
                            value="501-2000"
                        >
                            501 - 2000
                        </option>
                        <option
                            className="product__select-item"
                            value="2001-5000"
                        >
                            2001 - 5000
                        </option>
                        <option
                            className="product__select-item"
                            value="above-5000"
                        >
                            Giá trên 5000
                        </option>
                    </select>
                    <button
                        className="product__select-wrapper"
                        onClick={handleResetFilters}
                    >
                        Đặt lại
                    </button>
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
                                <p>Không có sản phẩm phù hợp!</p>
                            </div>
                        )}
                    </div>

                    {visible < products.length && (
                        <button
                            className="button button-loadmore"
                            onClick={showMoreItems}
                        >
                            Xem thêm
                        </button>
                    )}
                </div>
            </div>
            {location.pathname === "/" ? "" : <Footer />}
        </>
    );
}

export default Products;
