import { useState, useEffect } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Cookies from "universal-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "../../../api/CALL_URL";

function Product({ setCartCount, cartCount, idProduct, data, productRelated }) {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [userName, setUsername] = useState("");

    useEffect(() => {
        if (cookies.get("user")) {
            setUsername(cookies.get("user").email);
        } else {
            setUsername("empty");
        }
    }, []);

    const numberFormat = (number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(number);
    };

    return (
        <div className="product-card" key={data.idProduct}>
            <div
                className="thumbnail"
                onClick={() =>
                    navigate(`/product/${data._id}`, {
                        idProduct: data,
                    })
                }
            >
                <img
                    src={`http://localhost:5001/images/products/${data.image?.img1}`}
                    className="small-img1"
                />
            </div>
            <div className="product-detail">
                <a href="/product/1" className="clear">
                    <div className="name">{data.nameProduct}</div>
                </a>
                <div className="product-bottom">
                    <a href="/product/1" className="clear">
                        <div className="price-star">
                            <span className="star">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </span>
                        </div>
                    </a>
                    <div className="add-cart-btn">
                        <span className="price">
                            {numberFormat(data.price)}
                        </span>
                        <button
                            className="add-to-cart-btn"
                            // id={data.idProduct}
                            // onClick={handleAddToCart}
                            id={data._id}
                            onClick={() =>
                                navigate(`/product/${data._id}`, {
                                    idProduct: data,
                                })
                            }
                        >
                            Thêm giỏ hàng
                        </button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default Product;
