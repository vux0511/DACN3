import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import EmptyCart from "../../assets/emptyCart.png";
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
    const [priceOfProduct, setPriceOfProduct] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [storage, setStorage] = useState();
    const navigate = useNavigate();

    // Check login
    useEffect(() => {
        if (cookies.get("user") === undefined) {
            navigate("/login");
        }
    }, []);

    useEffect(() => {
        if (cookies.get("user")) {
            setUsername(cookies.get("user").email);
        } else {
            setUsername("empty");
        }
    }, []);

    // useEffect(() => {
    //     if (cookies.get("user")) {
    //         setUsername(cookies.get("user").username);
    //     }
    // }, []);

    const numberFormat = (number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(number);
    };

    // Update product quantity
    const handlerQuantity = (e) => {
        var data = {
            idProduct: e.target.id,
            user_token: cookies.get("user_token"),
            quantity: e.target.value,
        };

        axios.post(CALL_URL.URL_updateCart, data).then((response) => {
            var tongTien = 0;
            const updatedCartItems = itemCarts.map((item) => {
                if (item.idProduct === data.idProduct) {
                    tongTien = tongTien + e.target.value * item.unit_price;
                    return {
                        ...item,
                        quantity: e.target.value,
                        price: e.target.value * item.unit_price,
                    };
                } else {
                    tongTien = tongTien + item.quantity * item.unit_price;
                    return item;
                }
            });
            setSubTotal(tongTien);
            console.log(updatedCartItems);
            setItemCarts(updatedCartItems);
        });
    };

    const handleDeleteItemCart = (e) => {
        e.preventDefault();
        var data = {
            idProduct: e.target.value,
            user_token: cookies.get("user_token"),
        };
        axios.post(CALL_URL.URL_deleteCart, data).then((response) => {
            const updatedCartItems = itemCarts.filter((item) => {
                if (item.idProduct === data.idProduct) {
                    setSubTotal(subTotal - item.quantity * item.unit_price);
                }
                return item.idProduct !== data.idProduct;
            });
            setItemCarts(updatedCartItems);
        });
    };

    useEffect(() => {
        var data = {
            user_token: cookies.get("user_token"),
        };
        setItemCarts([]);
        axios
            .get(`${CALL_URL.URL_getCart}${data.user_token}`, data)
            .then((response) => {
                setItemCarts(response.data);
                var totalCart = 0;
                response.data.map((itemCart, index) => {
                    totalCart =
                        totalCart + itemCart.quantity * itemCart.unit_price;
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
                                                src={`http://localhost:5001/images/products/${itemCart.imgProduct}`}
                                                alt="Image Product"
                                            />

                                            <div>
                                                <p className="name-product-cart">
                                                    {itemCart.nameProduct}
                                                </p>
                                                <div className="small-price">
                                                    {numberFormat(
                                                        itemCart.unit_price
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="css__input">
                                        <input
                                            id={itemCart.idProduct}
                                            type="number"
                                            className="input__cart"
                                            defaultValue={itemCart.quantity}
                                            min={1}
                                            onChange={handlerQuantity}
                                        />
                                    </td>
                                    <td className="price">
                                        {numberFormat(
                                            itemCart.quantity *
                                                itemCart.unit_price
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            className="delete-item-cart-btn"
                                            onClick={handleDeleteItemCart}
                                            value={itemCart.idProduct}
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
                                        <td>{numberFormat(subTotal)}</td>
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
