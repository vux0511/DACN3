import "./Products.scss";
import Product from "./Product/Product";
import { useState } from "react";

import { FiChevronDown } from "react-icons/fi";

function Products({ tittle_header }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <>
            <h3 className="sec-heading">{tittle_header}</h3>
            <div className="category">
                <button className="all-prod">Tất Cả Sản Phẩm</button>
                <button
                    onClick={handleClick}
                    className={`unclicked ${clicked ? "clicked" : ""}`}
                >
                    Nike
                </button>
                <button>Adidas</button>
                <button>Guci</button>
                <button>MLB</button>
                <button>Balenciaga</button>
                <button>Puma</button>
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
