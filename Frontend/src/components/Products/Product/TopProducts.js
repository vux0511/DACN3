import { useState, useEffect } from "react";
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
    const [visible, setVisible] = useState(4);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 8);
    };

    useEffect(() => {
        if (cookies.get("user")) {
            setUsername(cookies.get("user").email);
        }
    }, []);

    const numberFormat = (number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(number);
    };

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
                idProduct: e.target._id,
            };
            axios.post(CALL_URL.URL_setCart, data).then((response) => {
                console.log(response.data);
            });
        }
    };

    return (
        <>
            <div className="products-container">
                <div className="layout">
                    <div className="sec-heading">Sản phẩm mới nhất</div>
                    <div className="products">
                        {topProduct
                            .slice(0, visible)
                            .map((topProduct, index) => (
                                <div className="product-card" key={index}>
                                    <div
                                        className="thumbnail"
                                        onClick={() =>
                                            navigate(
                                                `/product/${topProduct._id}`,
                                                {
                                                    idProduct: topProduct,
                                                }
                                            )
                                        }
                                    >
                                        <img
                                            src={`http://localhost:5001/images/products/${topProduct.image.img1}`}
                                            alt="Image Product"
                                        />
                                    </div>
                                    <div className="product-detail">
                                        <div
                                            className="name"
                                            onClick={() =>
                                                navigate(
                                                    `/product/${topProduct._id}`,
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
                                                    `/product/${topProduct._id}`,
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
                                            </div>
                                            <div className="add-cart-btn">
                                                <span
                                                    className="price"
                                                    onClick={() =>
                                                        navigate(
                                                            `/product/${topProduct._id}`,
                                                            {
                                                                idProduct:
                                                                    topProduct,
                                                            }
                                                        )
                                                    }
                                                >
                                                    {numberFormat(
                                                        topProduct.price
                                                    )}
                                                </span>
                                                <button
                                                    className="add-to-cart-btn"
                                                    id={topProduct._id}
                                                    onClick={() =>
                                                        navigate(
                                                            `/product/${topProduct._id}`,
                                                            {
                                                                idProduct:
                                                                    topProduct,
                                                            }
                                                        )
                                                    }
                                                >
                                                    Thêm giỏ hàng
                                                </button>
                                            </div>
                                            <ToastContainer />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        {visible < topProduct.length && (
                            <button
                                className="button button-loadmore"
                                onClick={showMoreItems}
                            >
                                Xem thêm
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopProducts;
