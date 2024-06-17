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
    const [visible, setVisible] = useState(8);
    let { categoryId } = useParams();
    const idCategory = useParams();
    const [sortBy, setSortBy] = useState("default");
    const [priceFilter, setPriceFilter] = useState("default");

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 8);
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
                    (product) => product.price < 500000
                );
                break;
            case "500-1000":
                filteredProducts = filteredProducts.filter(
                    (product) =>
                        product.price >= 500000 && product.price <= 1000000
                );
                break;
            case "1000-2000":
                filteredProducts = filteredProducts.filter(
                    (product) =>
                        product.price >= 1000000 && product.price <= 2000000
                );
                break;
            case "2000-5000":
                filteredProducts = filteredProducts.filter(
                    (product) =>
                        product.price >= 2000000 && product.price <= 5000000
                );
                break;
            case "5000-10000":
                filteredProducts = filteredProducts.filter(
                    (product) =>
                        product.price >= 5000000 && product.price <= 10000000
                );
                break;
            case "above-10000":
                filteredProducts = filteredProducts.filter(
                    (product) => product.price > 10000000
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
                            Sắp xếp theo giá
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
                            Khoảng giá
                        </option>
                        <option
                            className="product__select-item"
                            value="under-500"
                        >
                            Dưới 500k
                        </option>
                        <option
                            className="product__select-item"
                            value="500-1000"
                        >
                            Khoảng 500k - 1tr
                        </option>
                        <option
                            className="product__select-item"
                            value="1000-2000"
                        >
                            Khoảng 1tr - 2tr
                        </option>
                        <option
                            className="product__select-item"
                            value="2000-5000"
                        >
                            Khoảng 2tr - 5tr
                        </option>
                        <option
                            className="product__select-item"
                            value="5000-10000"
                        >
                            Khoảng 5tr - 10tr
                        </option>
                        <option
                            className="product__select-item"
                            value="above-10000"
                        >
                            Trên 10tr
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
