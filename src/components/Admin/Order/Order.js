import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Order() {
    const [order, setOrder] = useState([]);
    const notify = () => toast();

    useEffect(() => {
        axios
            .get(`http://localhost/DACN1_API/api/getOrder.php`)
            .then((response) => {
                setOrder(response.data);
            });
    }, []);

    const handleDeleteProduct = (e) => {
        e.preventDefault();
        var data = {
            idProduct: e.target.value,
        };
        axios
            .post("http://localhost/DACN1_API/api/deleteProduct.php", data)
            .then((response) => {
                const updatedItemsProducts = order.filter((item) => {
                    if (item.idProduct === data.idProduct) {
                        toast.success("Xoá thành công", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    }
                    return item.idProduct !== data.idProduct;
                });
                setOrder(updatedItemsProducts);
            });
    };

    const handleChangeStatus = (e) => {
        // e.preventDefault();

        let idOrder = e.target.className.split(" ");
        var data = {
            nameStatus: e.target.value,
            idOrder: idOrder[1],
        };

        axios
            .post("http://localhost/DACN1_API/api/editStatus.php", data)
            .then((response) => {
                console.log(response.data);
                // const updatedItemsProducts = order.filter((item) => {
                //     if (item.idProduct === data.idProduct) {
                //         toast.success("Xoá thành công", {
                //             position: "top-right",
                //             autoClose: 3000,
                //             hideProgressBar: false,
                //             closeOnClick: true,
                //             pauseOnHover: true,
                //             draggable: true,
                //             progress: undefined,
                //             theme: "colored",
                //         });
                //     }
                //     return item.idProduct !== data.idProduct;
                // });
                // setOrder(updatedItemsProducts);
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
                                <th className="th-id-user">ID KH</th>
                                <th className="th-fullname-order">Người đặt</th>
                                <th className="th-phone-order">SĐT</th>
                                <th className="th-address-order">Địa chỉ</th>
                                <th className="th-payment-order">Thanh toán</th>
                                <th className="th-status-order">Trạng thái</th>
                                <th className="th-act-order">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.map((order, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{order.idUser}</td>
                                    <td>{order.fullname}</td>
                                    <td>{order.phone}</td>
                                    <td>
                                        <div className="address-order-admin">
                                            {order.address}
                                        </div>
                                    </td>
                                    <td>{order.payment}</td>
                                    <td>
                                        <select
                                            onChange={handleChangeStatus}
                                            name="select-category"
                                            id="select-category"
                                            className={`select-order ${order.idOrder}`}
                                        >
                                            <option value={order.status}>
                                                {order.status}
                                            </option>
                                            <option value="Đang vận chuyển">
                                                Đang vận chuyển
                                            </option>
                                            <option value="Đã hoàn thành">
                                                Đã hoàn thành
                                            </option>
                                            <option value="Huỷ đơn hàng">
                                                Huỷ đơn hàng
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        <Link
                                            to={`/admin/order/edit/${order.idOrder}`}
                                        >
                                            <button className="delete-item-product-btn">
                                                Sửa
                                            </button>
                                        </Link>{" "}
                                        -{" "}
                                        <a href="">
                                            <button
                                                className="delete-item-product-btn"
                                                value={order.idOrder}
                                                onClick={handleDeleteProduct}
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
