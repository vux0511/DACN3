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

    useEffect(() => {
        if (cookies.get("user")) {
            setUsername(cookies.get("user").username);
        }
    }, []);

    return (
        <>
            <div className="products-container">
                <div className="layout">
                    <div className="sec-heading">Sản phẩm đề xuất</div>
                    <div className="products">
                        {recommend.map((newProduct, index) => (
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
                                        </div>
                                        <ToastContainer />
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

export default Recommend;
