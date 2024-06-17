import { useState, useEffect } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Recommend({ recommend }) {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [visible, setVisible] = useState(8);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 8);
    };
    useEffect(() => {
        if (cookies.get("user")) {
            setUsername(cookies.get("user").username);
        }
    }, []);
    const numberFormat = (number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(number);
    };

    return (
        <>
            <div className="products-container">
                <div className="layout">
                    <div className="sec-heading">Sản phẩm đề xuất</div>
                    <div className="products">
                        {recommend
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
                        {visible < recommend.length && (
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

export default Recommend;
