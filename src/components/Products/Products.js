import "./Products.scss";
import Product from "./Product/Product";
import Category from "../Category/Category";
import { useState, useEffect } from "react";
import axios from "axios";

function Products({ headingText, products }) {
    return (
        <div className="products-container">
            <div className="layout">
                <div className="sec-heading">{headingText}</div>
                <Category />
                <div className="products">
                    {products.map((itemProduct) => (
                        <Product
                            key={itemProduct.idProduct}
                            idProduct={itemProduct.idProduct}
                            data={itemProduct}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
