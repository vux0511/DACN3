import "./Products.scss";
import Product from "./Product/Product";
import Category from "../Category/Category";
import { useState, useEffect } from "react";
import axios from "axios";
import CALL_URL from "../../api/CALL_URL";

function Products({ headingText }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(CALL_URL.URL_getProduct).then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div className="products-container">
            <div className="layout">
                <div className="sec-heading">{headingText}</div>
                {/* <Category /> */}
                <div className="products">
                    {products.map((itemProduct) => (
                        <Product
                            key={itemProduct.idProduct}
                            data={itemProduct}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
