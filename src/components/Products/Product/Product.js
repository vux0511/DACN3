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
        <div className="product-card" key={data.idProduct}>
            <div
                className="thumbnail"
                onClick={() =>
                    navigate(`/product/${data.idProduct}`, {
                        idProduct: data,
                    })
                }
            >
                <img src={data.imageProduct_1} alt="" />
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
                        <span className="price">{data.priceProduct}đ</span>
                        <button
                            className="add-to-cart-btn"
                            id={data.idProduct}
                            onClick={handleAddToCart}
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
