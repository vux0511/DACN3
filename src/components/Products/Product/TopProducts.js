import { useState, useEffect } from "react";
import "./Product.scss";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Cookies from "universal-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "../../../api/CALL_URL";

function TopProducts({ topProduct }) {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    useEffect(() => {
        if (cookies.get("user")) {
            setUsername(cookies.get("user").username);
        }
    }, []);

    const handleAddToCart = (e) => {
        if (username === "") {
            toast.error(
                "Bạn phải đăng nhập trước khi thêm sản phẩm vào giỏ hàng",
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                }
            );
        } else {
            var data = {
                idUser: cookies.get("user").idUser,
                idProduct: e.target.id,
            };
            console.log(data);
            axios.post(CALL_URL.URL_setCart, data).then((response) => {
                console.log(response.data);
            });
        }
    };

    return (
        <>
            <div className="products-container">
                <div className="layout">
                    <div className="sec-heading">Sản phẩm nổi bật</div>
                    <div className="products">
                        {topProduct.map((topProduct, index) => (
                            <div className="product-card" key={index}>
                                <div
                                    className="thumbnail"
                                    onClick={() =>
                                        navigate(
                                            `/product/${topProduct.idProduct}`,
                                            {
                                                idProduct: topProduct,
                                            }
                                        )
                                    }
                                >
                                    <img
                                        src={topProduct.imageProduct_1}
                                        alt="Image Product"
                                    />
                                </div>
                                <div className="product-detail">
                                    <div
                                        className="name"
                                        onClick={() =>
                                            navigate(
                                                `/product/${topProduct.idProduct}`,
                                                {
                                                    idProduct: topProduct,
                                                }
                                            )
                                        }
                                    >
                                        {topProduct.nameProduct}
                                    </div>
                                    <div
                                        className="product-bottom"
                                        onClick={() =>
                                            navigate(
                                                `/product/${topProduct.idProduct}`,
                                                {
                                                    idProduct: topProduct,
                                                }
                                            )
                                        }
                                    >
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
                                                        `/product/${topProduct.idProduct}`,
                                                        {
                                                            idProduct:
                                                                topProduct,
                                                        }
                                                    )
                                                }
                                            >
                                                {topProduct.priceProduct}đ
                                            </span>
                                        </div>
                                        <div className="add-cart-btn">
                                            <button
                                                className="add-to-cart-btn"
                                                id={topProduct.idProduct}
                                                onClick={() =>
                                                    navigate(
                                                        `/product/${topProduct.idProduct}`,
                                                        {
                                                            idProduct:
                                                                topProduct,
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

export default TopProducts;
