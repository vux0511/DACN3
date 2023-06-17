import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import EmptyCart from "../../assets/emptyCart.png";
import { useState, useEffect } from "react";
import { MdOutlineClear } from "react-icons/md";
import Cookies from "universal-cookie";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import CALL_URL from "../../api/CALL_URL";
import "./Order.scss";

function Order() {
    const [username, setUsername] = useState("");
    const [itemCarts, setItemCarts] = useState([]);
    const [order, setOrder] = useState([]);
    const [isDisable, setDisable] = useState(true);
    const [subTotal, setSubTotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [size, setSize] = useState(0);
    const navigate = useNavigate();
    const cookies = new Cookies();

    // Check login
    useEffect(() => {
        if (cookies.get("user") === undefined) {
            navigate("/login");
        }
    }, []);

    useEffect(() => {
        if (cookies.get("user")) {
            setUsername(cookies.get("user").username);
        }
    }, []);

    useEffect(() => {
        var data = {
            idUser: cookies.get("user").idUser,
        };
        setItemCarts([]);
        axios.post(CALL_URL.URL_getOrderByUser, data).then((response) => {
            setOrder(response.data);
        });
    }, []);

    const handleViewOrder = (e) => {
        e.preventDefault();
        var data = {
            idOrder: e.target.value,
        };
    };

    return (
        <div>
            <Header />
            <div className="small-container cart-page order-page">
                {order !== null ? (
                    <h3 className="sec-cart">Đơn hàng của bạn</h3>
                ) : null}
                <table>
                    {order !== null ? (
                        <>
                            <thead>
                                <tr className="tr-order">
                                    <th className="th_id_order">#</th>
                                    <th className="th_fullname_order">
                                        Họ tên
                                    </th>
                                    <th className="th_phone_order">SĐT</th>
                                    <th className="th_address_order">
                                        Địa chỉ
                                    </th>
                                    <th className="th_total_order">
                                        Tổng tiền
                                    </th>
                                    <th className="th_status_order">
                                        Trạng thái
                                    </th>
                                    <th className="th_view-btn_order">
                                        Chi tiết
                                    </th>
                                </tr>
                            </thead>
                        </>
                    ) : (
                        ""
                    )}
                    {/* Product */}
                    <tbody>
                        {!Array.isArray(order) || order.length == 0 ? (
                            <tr>
                                <td colSpan={7} className="tdTanTu">
                                    <div className="empty_cart">
                                        <img
                                            src={EmptyCart}
                                            alt="Giỏ hàng trống"
                                        />
                                        <p className="title_empty_cart">
                                            Bạn chưa đặt đơn hàng nào
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            order.map((order, index) => (
                                <tr className="tr-order" key={index}>
                                    <td className="td-order">{index + 1}</td>
                                    <td className="td-order">
                                        {order.fullname}
                                    </td>
                                    <td className="td-order">{order.phone}</td>
                                    <td className="td-order">
                                        <div className="td-address">
                                            {order.address}
                                        </div>
                                    </td>
                                    <td className="td-order">
                                        {new Intl.NumberFormat("vn-VI", {
                                            style: "currency",
                                            currency: "VND",
                                        }).format(order.totalPrice)}
                                    </td>
                                    <td className="td-order">{order.status}</td>
                                    <td className="td-order">
                                        <a
                                            href={`/order/invoice/${order.idOrder}`}
                                        >
                                            {/* <button
                                                className="view-invoice"
                                                onClick={handleViewOrder}
                                                value={order.idOrder}
                                            > */}
                                            {/* <MdOutlineClear /> */} Xem
                                            {/* </button> */}
                                        </a>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default Order;
