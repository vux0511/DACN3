import "./Products.scss";
import Product from "./Product/Product";
import Category from "../Category/Category";
import { useState, useRef, useEffect } from "react";

function Products({ tittle_header, category }) {
    console.log(category);
    return (
        <>
            <h3 className="sec-heading">{tittle_header}</h3>
            <Category />
            <div className="products-container">
                <div className="card-products">
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
        </>
    );
}

export default Products;
