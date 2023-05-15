import "./Products.scss";
import Product from "./Product/Product";
import Category from "../Category/Category";
import { useState, useEffect } from "react";
import axios from "axios";
import CALL_URL from "../../api/CALL_URL";
import { useNavigate, useParams } from "react-router-dom";

function Products({ headingText }) {
    const [products, setProducts] = useState([]);
    const [idCategory, setIdCatgory] = useState([]);
    const navigate = useNavigate();
    const { categoryId } = useParams();

    useEffect(() => {
        axios.get(CALL_URL.URL_getProduct).then((response) => {
            setProducts(response.data);
        });
    }, []);

    // Categories
    useEffect(() => {
        axios
            .get(
                `http://localhost/DACN1_API/api/getProductCategory.php?idcategory=${categoryId}`
            )
            .then((response) => {
                setProducts(response.data);
            });
    }, [categoryId]);

    return (
        <div className="products-container">
            <div className="layout">
                <div className="sec-heading">
                    {headingText ? headingText : "TẤT CẢ SẢN PHẨM"}
                </div>
                {headingText ? "" : <Category />}
                <div className="products">
                    {products.map((itemProduct) => (
                        <Product
                            key={itemProduct.idProduct}
                            data={itemProduct}
                            idCategory={itemProduct.idCategory}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
