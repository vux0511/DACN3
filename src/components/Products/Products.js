import "./Products.scss";
import Product from "./Product/Product";
import { useState, useRef, useEffect } from "react";

import { FiChevronDown } from "react-icons/fi";

function Products({ tittle_header }) {
    const [activeCategoryId, setActiveCategoryId] = useState("allCategory");

    const handleClick = (id) => {
        setActiveCategoryId(id);
    };

    return (
        <>
            <h3 className="sec-heading">{tittle_header}</h3>
            <div className="category">
                <button
                    id="allCategory"
                    className={
                        activeCategoryId === "allCategory" ? "active" : ""
                    }
                    onClick={() => handleClick("allCategory")}
                >
                    Tất Cả Sản Phẩm
                </button>
                <button
                    id="button1"
                    className={activeCategoryId === "button1" ? "active" : ""}
                    onClick={() => handleClick("button1")}
                >
                    Nike
                </button>
                <button
                    id="button2"
                    className={activeCategoryId === "button2" ? "active" : ""}
                    onClick={() => handleClick("button2")}
                >
                    Adidas
                </button>
                <button
                    id="button3"
                    className={activeCategoryId === "button3" ? "active" : ""}
                    onClick={() => handleClick("button3")}
                >
                    MLB
                </button>
                <button
                    id="button4"
                    className={activeCategoryId === "button4" ? "active" : ""}
                    onClick={() => handleClick("button4")}
                >
                    Balenciaga
                </button>
                <button
                    id="button5"
                    className={activeCategoryId === "button5" ? "active" : ""}
                    onClick={() => handleClick("button5")}
                >
                    Converse
                </button>
                <button className="sort">
                    Sắp Xếp <FiChevronDown />
                </button>
            </div>
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
