import { MdOutlinePayment, MdOutlineClear } from "react-icons/md";

import Popup from "../Popup/Popup";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Payment.scss";
import Cookies from "universal-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Payment() {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const notify = () => toast();
    const [itemCarts, setItemCarts] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");

    // Check login
    useEffect(() => {
        if (cookies.get("user") === undefined) {
            navigate("/requiredlogin");
        }
    }, []);

    useEffect(() => {
        var data = {
            idUser: cookies.get("user").idUser,
        };
        setItemCarts([]);
        axios
            .post("http://localhost/DACN1_API/api/getCart.php", data)
            .then((response) => {
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

    const handleChangeFullname = (e) => {
        setFullname(e.target.value);
    };

    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleOrder = (e) => {
        e.preventDefault();

        if (fullname === "" || phone === "" || address === "" || email === "") {
            toast.error("Không được để trống các trường", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            var data = {
                idUser: cookies.get("user").idUser,
                fullname: fullname,
                phone: phone,
                address: address,
                email: email,
                status: "Chờ vận chuyển",
                payment: "COD",
                totalPrice: subTotal,
                products: itemCarts,
            };
            axios
                .post("http://localhost/DACN1_API/api/setOrder.php", data)
                .then((response) => {
                    toast.success(
                        "Đặt hàng thành công, chuyển hướng sau 3 giây",
                        {
                            position: "top-right",
                            autoClose: 4000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        }
                    );
                    setTimeout(() => {
                        navigate("/");
                    }, 3000);
                });
        }
    };

    return (
        <>
            <Header />
            <div>
                <div className="main-content">
                    <div className="layout">
                        <div className="payment-heading">
                            <h3 className="title-payment">
                                <MdOutlinePayment /> Thanh Toán
                            </h3>
                            <p>
                                Vui lòng kiểm tra thông tin trước khi thanh toán
                            </p>
                        </div>
                        <div className="row-payment">
                            <div className="col-2-payment col-left">
                                <div className="payment-title">
                                    <h3>
                                        <u>Thông tin khách hàng</u>
                                    </h3>
                                </div>
                                <form
                                    onSubmit={handleOrder}
                                    className="payment-form"
                                >
                                    <label
                                        htmlFor="fullname"
                                        className="payment-label"
                                    >
                                        Họ tên
                                    </label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        className="payment-input"
                                        placeholder="Nhập tên của bạn..."
                                        autoComplete="off"
                                        onChange={handleChangeFullname}
                                    />

                                    <label
                                        htmlFor="phone"
                                        className="payment-label"
                                    >
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="number"
                                        id="phone"
                                        className="payment-input"
                                        placeholder="Nhập số điện thoại của bạn..."
                                        autoComplete="off"
                                        onChange={handleChangePhone}
                                    />

                                    <label
                                        htmlFor="address"
                                        className="payment-label"
                                    >
                                        Địa chỉ
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        className="payment-input"
                                        placeholder="Nhập địa chỉ của bạn..."
                                        autoComplete="off"
                                        onChange={handleChangeAddress}
                                    />
                                    <label
                                        htmlFor="email"
                                        className="payment-label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        className="payment-input"
                                        placeholder="Nhập email của bạn..."
                                        autoComplete="off"
                                        onChange={handleChangeEmail}
                                    />

                                    <div className="type-payment">
                                        <p className="title-type-payment">
                                            Hình thức thanh toán
                                        </p>
                                        <input
                                            defaultChecked
                                            type="radio"
                                            id="shipCod"
                                            name="shipCod"
                                            defaultValue="shipCod"
                                        />
                                        <label htmlFor="shipCod">
                                            {"  "}
                                            Ship COD
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        onClick={notify}
                                        // onClick={() => setButtonPopup(true)}
                                        // onClick={handlOrder}
                                        className="payment-submit"
                                    >
                                        Đặt Hàng
                                    </button>
                                    <ToastContainer />
                                    {/* <Popup
                                trigger={buttonPopup}
                                setTrigger={setButtonPopup}
                            >
                                <h3 className="title-thanks">Thành Công!</h3>
                                <p className="decs-thanks">
                                    Đặt hàng thành công!
                                </p>
                                <p>Cảm ơn bạn đã đặt hàng!</p>
                            </Popup> */}
                                </form>
                            </div>
                            <div className="col-2-payment col-right">
                                <div className="payment-title-cart">
                                    <div className="payment-title">
                                        <h3>Giỏ hàng</h3>
                                    </div>
                                    <div className="product-items">
                                        {itemCarts.map((itemCart, index) => (
                                            <div
                                                className="row-product-payment"
                                                key={index}
                                            >
                                                <div className="col-2-items-payment">
                                                    <p className="name-product-payment">
                                                        {itemCart.nameProduct}
                                                    </p>
                                                    <p>
                                                        {new Intl.NumberFormat(
                                                            "vn-VI",
                                                            {
                                                                style: "currency",
                                                                currency: "VND",
                                                            }
                                                        ).format(
                                                            itemCart.priceProduct
                                                        )}{" "}
                                                        - SL
                                                        {
                                                            itemCart.quantityProductCart
                                                        }{" "}
                                                        - Size {itemCart.size}{" "}
                                                    </p>
                                                </div>
                                                <div className="col-2-items-payment">
                                                    <p className="totalprice">
                                                        {new Intl.NumberFormat(
                                                            "vn-VI",
                                                            {
                                                                style: "currency",
                                                                currency: "VND",
                                                            }
                                                        ).format(
                                                            itemCart.priceProduct *
                                                                itemCart.quantityProductCart
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}

                                        <div className="row-total-payment">
                                            <div className="col-2-checkout">
                                                <div className="title-subtotal-product">
                                                    Tổng thành tiền
                                                </div>
                                            </div>
                                            <div className="col-2-checkout">
                                                <div className="subtotal-product">
                                                    <p className="subTotal">
                                                        {new Intl.NumberFormat(
                                                            "vn-VI",
                                                            {
                                                                style: "currency",
                                                                currency: "VND",
                                                            }
                                                        ).format(subTotal)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Payment;
