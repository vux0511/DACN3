import { MdOutlinePayment, MdOutlineClear } from "react-icons/md";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "../../api/CALL_URL";
import { Rate } from "antd";
import { Input } from "antd";
const { TextArea } = Input;

function Payment() {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const notify = () => toast();
    const [itemCarts, setItemCarts] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [infoUser, setInfoUser] = useState([]);
    const [fullname, setFullname] = useState(infoUser.fullname);
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

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
    const handleChangeMessage = (e) => {
        setMessage(e.target.value);
    };

    // Check login
    useEffect(() => {
        if (cookies.get("user") === undefined) {
            navigate("/requiredlogin");
        }
    }, []);

    useEffect(() => {
        if (cookies.get("user")) {
            setInfoUser(cookies.get("user"));
            setFullname(cookies.get("user").fullname);
            setPhone(cookies.get("user").phone);
            setEmail(cookies.get("user").email);
            setAddress(cookies.get("user").address);
        } else {
            setInfoUser("empty");
        }
    }, []);

    const numberFormat = (number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(number);
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

    const handleOrder = (e) => {
        e.preventDefault();

        if (fullname === "" || phone === "" || address === "" || email === "") {
            toast.error("Không được để trống các trường", {
                position: "bottom-right",
                autoClose: 4000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            var data = {
                cartItems: itemCarts,
                shippintInfor: {
                    namedReceiver: fullname,
                    phoneReceiver: phone,
                    addressReceiver: address,
                    email: email,
                    status: "Chờ vận chuyển",
                    payment: "COD",
                    totalPrice: subTotal,
                    message: message,
                },
                user_token: cookies.get("user_token"),
            };
            axios.post(CALL_URL.URL_setOrder, data).then((response) => {
                console.log(response);
                toast.success("Đặt hàng thành công", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
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
                    <div className="layout payment-wrapper">
                        <h3 className="sec-cart">thanh toán đơn hàng</h3>
                        <div className="row-payment">
                            <div className="col-2-payment col-left">
                                <div className="payment-title">
                                    Thông tin khách hàng
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
                                        defaultValue={infoUser.fullname}
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
                                        defaultValue={infoUser.phone}
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
                                        defaultValue={infoUser.address}
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
                                        defaultValue={infoUser.email}
                                        autoComplete="off"
                                        onChange={handleChangeEmail}
                                    />
                                    <label
                                        htmlFor="email"
                                        className="payment-label"
                                    >
                                        Lưu ý đơn hàng
                                    </label>
                                    <TextArea
                                        id="comment"
                                        onChange={handleChangeMessage}
                                        placeholder="Lưu ý đơn hàng"
                                        style={{
                                            width: "100%",
                                            padding: "10px 20px",
                                            outline: "none",
                                            border: "1px solid #dfdddd",
                                            fontFamily: "Inter, sans-serif",
                                            fontSize: "15px",
                                        }}
                                        autoSize={{
                                            minRows: 2,
                                        }}
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
                                        Giỏ hàng
                                    </div>
                                    <div className="product-items">
                                        {itemCarts.map((itemCart, index) => (
                                            <div
                                                className="row-product-payment"
                                                key={index}
                                            >
                                                <div className="col-2-items-payment">
                                                    {/* <img
                                                        id="imgProduct"
                                                        src={`http://localhost:5001/images/products/${itemCart.imgProduct}`}
                                                        alt="Image Product"
                                                    /> */}
                                                    <p className="name-product-payment">
                                                        {itemCart.nameProduct}
                                                    </p>
                                                    <p>
                                                        Giá:{" "}
                                                        {numberFormat(
                                                            itemCart.unit_price
                                                        )}{" "}
                                                        - Số lượng:
                                                        {itemCart.quantity}
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
                                                            itemCart.unit_price *
                                                                itemCart.quantity
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
