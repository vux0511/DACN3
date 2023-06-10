import { useState, useEffect } from "react";
import "./Product.scss";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Cookies from "universal-cookie";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ setCartCount, cartCount, idProduct, data, productRelated }) {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    // const notify = () => toast("Wow so easy!");

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
            axios
                .post("http://localhost/DACN1_API/api/setCart.php", data)
                .then((response) => {
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
                            <span className="price">{data.priceProduct}đ</span>
                        </div>
                    </a>
                    <div className="add-cart-btn">
                        <button
                            className="add-to-cart-btn"
                            id={data.idProduct}
                            onClick={handleAddToCart}
                        >
                            Thêm giỏ hàng
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
