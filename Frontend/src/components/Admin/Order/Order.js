import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "~/api/CALL_URL";
import moment from "moment";

function Order() {
    const [order, setOrder] = useState([]);
    const notify = () => toast();

    const numberFormat = (number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(number);
    };

    const convertTimestampToDateTime = (timestamp) => {
        if (!timestamp) {
            return "";
        }
        return moment(Number(timestamp)).format("MMMM Do YYYY, h:mm:ss a");
    };

    useEffect(() => {
        axios.get(CALL_URL.URL_getOrder).then((response) => {
            setOrder(response.data);
            console.log(response.data);
        });
    }, []);

    const handleDeleteOrder = (e) => {
        e.preventDefault();
        var data = {
            idOrder: e.target.value,
        };
        axios.post(CALL_URL.URL_deleteOrder, data).then((response) => {
            const updatedOrder = order.filter((item) => {
                if (item.idOrder === data.idOrder) {
                    toast.success("Xoá thành công", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
                return item.idOrder !== data.idOrder;
            });
            setOrder(updatedOrder);
        });
    };

    const handleChangeStatus = (e) => {
        let idOrder = e.target.className.split(" ");
        var data = {
            statusOrder: e.target.value,
            idOrder: idOrder[1],
        };
        // console.log(data);

        axios.post(CALL_URL.URL_editStatus, data).then((response) => {
            console.log(response.data);
        });
    };

    return (
        <div className="main-container">
            <Sidebar />
            <div className="listProducts">
                <div className="title-products-list">
                    <h3>Danh Sách Đơn Hàng</h3>
                </div>
                <div className="product-list">
                    <table>
                        <thead>
                            <tr>
                                <th className="th-id-order">#</th>
                                <th className="th-fullname-order">Người đặt</th>
                                <th className="th-phone-order">SĐT</th>
                                <th className="th-address-order">Địa chỉ</th>
                                <th className="th-payment-order">Thanh toán</th>
                                <th className="th-status-order">Trạng thái</th>
                                <th className="th-date-order">Ngày đặt hàng</th>
                                <th className="th-total-order">Tổng tiền</th>
                                <th className="th-act-order">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.map((order, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{order.namedReceiver}</td>
                                    <td>{order.phoneReceiver}</td>
                                    <td>{order.addressReceiver}</td>
                                    <td>{order.payment}</td>
                                    <td>
                                        <select
                                            onChange={handleChangeStatus}
                                            name="select-category"
                                            id="select-category"
                                            className={`select-order ${order._id}`}
                                        >
                                            <option
                                                value="Chờ xác nhận"
                                                selected={
                                                    order.status ===
                                                    "Chờ xác nhận"
                                                }
                                            >
                                                Chờ xác nhận
                                            </option>
                                            <option
                                                value="Đang vận chuyển"
                                                selected={
                                                    order.status ===
                                                    "Đang vận chuyển"
                                                }
                                            >
                                                Đang vận chuyển
                                            </option>
                                            <option
                                                value="Đã hoàn thành"
                                                selected={
                                                    order.status ===
                                                    "Đã hoàn thành"
                                                }
                                            >
                                                Đã hoàn thành
                                            </option>
                                            <option
                                                value="Huỷ đơn hàng"
                                                selected={
                                                    order.status ===
                                                    "Huỷ đơn hàng"
                                                }
                                            >
                                                Huỷ đơn hàng
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        {convertTimestampToDateTime(
                                            order.createAt
                                        )}
                                    </td>
                                    <td>{numberFormat(order.totalPrice)}</td>
                                    <td>
                                        <Link
                                            to={`/admin/order/edit/${order._id}`}
                                        >
                                            <button className="delete-item-product-btn">
                                                Xem
                                            </button>
                                        </Link>{" "}
                                        -{" "}
                                        <a href="">
                                            <button
                                                className="delete-item-product-btn"
                                                value={order.idOrder}
                                                onClick={handleDeleteOrder}
                                            >
                                                Xoá
                                            </button>
                                            <ToastContainer />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Order;
