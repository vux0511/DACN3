import "./Products.scss";
import Product from "./Product/Product";
import Category from "../Category/Category";
import { useState, useRef, useEffect } from "react";

function Products({ headingText }) {
    return (
        <div className="products-container">
            <div className="layout">
                <div className="sec-heading">{headingText}</div>
                <Category />
                <div className="products">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default Products;
