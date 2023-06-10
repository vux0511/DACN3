import { useState, useEffect } from "react";
import "./Product.scss";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Cookies from "universal-cookie";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { type } from "@testing-library/user-event/dist/type";

function NewProduct({ newProduct }) {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    // const notify = () => toast("Wow so easy!");

    useEffect(() => {
        if (cookies.get("user")) {
            setUsername(cookies.get("user").username);
        }
    }, []);

    return (
        <>
            <div className="products-container">
                <div className="layout">
                    <div className="sec-heading">Sản phẩm mới nhất</div>
                    <div className="products">
                        {newProduct.map((newProduct, index) => (
                            <div className="product-card" key={index}>
                                <div
                                    className="thumbnail"
                                    onClick={() =>
                                        navigate(
                                            `/product/${newProduct.idProduct}`,
                                            {
                                                idProduct: newProduct,
                                            }
                                        )
                                    }
                                >
                                    <img
                                        src={newProduct.imageProduct_1}
                                        alt="Image Product"
                                    />
                                </div>
                                <div className="product-detail">
                                    {/* <a href="/product/1" className="clear"> */}
                                    <div
                                        className="name"
                                        onClick={() =>
                                            navigate(
                                                `/product/${newProduct.idProduct}`,
                                                {
                                                    idProduct: newProduct,
                                                }
                                            )
                                        }
                                    >
                                        {newProduct.nameProduct}
                                    </div>
                                    {/* </a> */}
                                    <div
                                        className="product-bottom"
                                        onClick={() =>
                                            navigate(
                                                `/product/${newProduct.idProduct}`,
                                                {
                                                    idProduct: newProduct,
                                                }
                                            )
                                        }
                                    >
                                        {/* <a href="/product/1" className="clear"> */}
                                        <div className="price-star">
                                            <span className="star">
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarFill />
                                                <BsStarHalf />
                                            </span>
                                            <span
                                                className="price"
                                                onClick={() =>
                                                    navigate(
                                                        `/product/${newProduct.idProduct}`,
                                                        {
                                                            idProduct:
                                                                newProduct,
                                                        }
                                                    )
                                                }
                                            >
                                                {newProduct.priceProduct}đ
                                            </span>
                                        </div>
                                        {/* </a> */}
                                        <div className="add-cart-btn">
                                            <button
                                                className="add-to-cart-btn"
                                                id={newProduct.idProduct}
                                                onClick={() =>
                                                    navigate(
                                                        `/product/${newProduct.idProduct}`,
                                                        {
                                                            idProduct:
                                                                newProduct,
                                                        }
                                                    )
                                                }
                                            >
                                                Thêm giỏ hàng
                                            </button>
                                            <ToastContainer />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewProduct;
