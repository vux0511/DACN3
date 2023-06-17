import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import EmptyCart from "../../assets/emptyCart.png";
import "./Cart.scss";
import { useState, useEffect } from "react";
import { MdOutlineClear } from "react-icons/md";
import Cookies from "universal-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import CALL_URL from "../../api/CALL_URL";

function Cart() {
    const cookies = new Cookies();
    const [username, setUsername] = useState("");
    const [itemCarts, setItemCarts] = useState([]);
    const [isDisable, setDisable] = useState(true);
    const [subTotal, setSubTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [size, setSize] = useState(0);
    const navigate = useNavigate();

    // Check login
    useEffect(() => {
        if (cookies.get("user") === undefined) {
            navigate("/requiredlogin");
        }
    }, []);

    useEffect(() => {
        if (cookies.get("user")) {
            setUsername(cookies.get("user").username);
        }
    }, []);

    const handlerQuantity = (e) => {
        var data = {
            idCart: e.target.id,
            quantityProductCart: e.target.value,
        };
        axios.post(CALL_URL.URL_updateCart, data).then((response) => {
            var tongTien = 0;
            const updatedCartItems = itemCarts.map((item) => {
                if (item.idCart === data.idCart) {
                    tongTien = tongTien + e.target.value * item.priceProduct;
                    return {
                        ...item,
                        price: e.target.value * item.priceProduct,
                    };
                } else {
                    tongTien =
                        tongTien + item.quantityProductCart * item.priceProduct;
                    return item;
                }
            });
            setSubTotal(tongTien);
            setItemCarts(updatedCartItems);
        });
    };

    const handleDeleteItemCart = (e) => {
        e.preventDefault();
        var data = {
            idCart: e.target.value,
        };
        axios.post(CALL_URL.URL_deleteCart, data).then((response) => {
            const updatedCartItems = itemCarts.filter((item) => {
                if (item.idCart === data.idCart) {
                    setSubTotal(
                        subTotal - item.quantityProductCart * item.priceProduct
                    );
                }
                return item.idCart !== data.idCart;
            });
            setItemCarts(updatedCartItems);
        });
    };

    useEffect(() => {
        var data = {
            idUser: cookies.get("user").idUser,
        };
        setItemCarts([]);
        axios.post(CALL_URL.URL_getCart, data).then((response) => {
            setItemCarts(response.data);
            var totalCart = 0;
            response.data.map((itemCart, index) => {
                totalCart =
                    totalCart +
                    itemCart.quantityProductCart * itemCart.priceProduct;
            });
            setSubTotal(totalCart);
        });
    }, []);

    return (
        <div>
            <Header />
            <div className="small-container cart-page">
                {subTotal !== 0 ? (
                    <h3 className="sec-cart">Giỏ hàng của bạn</h3>
                ) : null}
                <table>
                    {subTotal !== 0 ? (
                        <>
                            <thead>
                                <tr>
                                    <th className="th_product">Sản Phẩm</th>
                                    <th className="th_quantity">Số Lượng</th>
                                    <th className="th_price">Giá</th>
                                    <th className="delete">Xoá</th>
                                </tr>
                            </thead>
                        </>
                    ) : (
                        ""
                    )}
                    {/* Product */}
                    <tbody>
                        {!Array.isArray(itemCarts) || itemCarts.length == 0 ? (
                            <tr>
                                <td colSpan={4} className="tdTanTu">
                                    <div className="empty_cart">
                                        <img
                                            src={EmptyCart}
                                            alt="Giỏ hàng trống"
                                        />
                                        <p className="title_empty_cart">
                                            Không có sản phẩm trong giỏ hàng
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            itemCarts.map((itemCart, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="cart-info">
                                            <img
                                                src={itemCart.imageProduct_1}
                                                alt="Image Product"
                                            />
                                            <div>
                                                <p className="name-product-cart">
                                                    {itemCart.nameProduct}
                                                </p>
                                                <div className="small-price">
                                                    {new Intl.NumberFormat(
                                                        "vn-VI",
                                                        {
                                                            style: "currency",
                                                            currency: "VND",
                                                        }
                                                    ).format(
                                                        itemCart.priceProduct
                                                    )}{" "}
                                                    - Size {itemCart.size}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="css__input">
                                        <input
                                            id={itemCart.idCart}
                                            type="number"
                                            className="input__cart"
                                            defaultValue={
                                                itemCart.quantityProductCart
                                            }
                                            min={1}
                                            onChange={handlerQuantity}
                                        />
                                    </td>
                                    <td className="price">
                                        {new Intl.NumberFormat("vn-VI", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(itemCart.price)}
                                    </td>
                                    <td>
                                        <button
                                            className="delete-item-cart-btn"
                                            onClick={handleDeleteItemCart}
                                            value={itemCart.idCart}
                                        >
                                            {/* <MdOutlineClear /> */} x
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                <div className="total-price">
                    <table>
                        <thead>
                            {subTotal !== 0 ? (
                                <>
                                    <tr>
                                        <td>Tổng giá</td>
                                        <td>
                                            {new Intl.NumberFormat("vn-VI", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(subTotal)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <a href="/payment">
                                                <button className="buy-btn">
                                                    Đặt Hàng
                                                </button>
                                            </a>
                                        </td>
                                    </tr>
                                </>
                            ) : null}
                        </thead>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Cart;
