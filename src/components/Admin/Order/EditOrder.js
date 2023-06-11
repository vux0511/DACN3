import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../scss/AddProduct.scss";

function EditProduct() {
    const navigate = useNavigate();
    const notify = () => toast();
    const { idOrder } = useParams();
    const [status, setStatus] = useState([]);
    const [detailOrder, setDetailOrder] = useState([]);

    const handleChangeStatus = (e) => {
        setStatus(e.target.value);
        console.log(status);
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        let data = status;
        data.id = idOrder;

        axios
            .post("http://localhost/DACN1_API/api/editOrder.php", data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    toast.success("Sửa thành công", {
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
                    toast.success("Sửa thất bại", {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            });
    };

    // Get getDetailOrder
    useEffect(() => {
        axios
            .get(
                `http://localhost/DACN1_API/api/getDetailOrder.php?idorder=${idOrder}`
            )
            .then((response) => {
                setDetailOrder(response.data);
            });
    }, []);

    // Get Status Order
    // useEffect(() => {
    //     axios
    //         .get(
    //             `http://localhost/DACN1_API/api/getStatusOrder.php?idorder=${idOrder}`
    //         )
    //         .then((response) => {
    //             setStatusOrder(response.data);
    //             console.log(response.data);
    //         });
    // }, []);

    return (
        <div className="main-container">
            <Sidebar />
            <div className="listProducts">
                <div className="title-products-list">
                    <h3>Quản Lý Đơn Hàng</h3>
                    <div className="row">
                        <div className="col-75">
                            <div className="container">
                                <form onSubmit={handleAddProduct}>
                                    <div className="row">
                                        <div className="col-50">
                                            <div className="product-list">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th className="th-id-order">
                                                                #
                                                            </th>
                                                            <th className="th-name-product-order">
                                                                Tên Sản Phẩm
                                                            </th>
                                                            <th className="th-img-product-order">
                                                                Ảnh Sản Phẩm
                                                            </th>
                                                            <th className="th-price-product-order">
                                                                Đơn Giá
                                                            </th>
                                                            <th className="th-size-product-order">
                                                                Size
                                                            </th>
                                                            <th className="th-quantity-product-order">
                                                                Số Lượng
                                                            </th>
                                                            <th className="th-subtotal-product-order">
                                                                Thành Tiền
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {detailOrder.map(
                                                            (
                                                                detailOrder,
                                                                index
                                                            ) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        {index +
                                                                            1}
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            detailOrder.nameProduct
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        <img
                                                                            src={
                                                                                detailOrder.imageProduct_1
                                                                            }
                                                                            alt="Image Product"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        {new Intl.NumberFormat(
                                                                            "vn-VI",
                                                                            {
                                                                                style: "currency",
                                                                                currency:
                                                                                    "VND",
                                                                            }
                                                                        ).format(
                                                                            detailOrder.priceProduct
                                                                        )}
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            detailOrder.size
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            detailOrder.quantityProduct
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {new Intl.NumberFormat(
                                                                            "vn-VI",
                                                                            {
                                                                                style: "currency",
                                                                                currency:
                                                                                    "VND",
                                                                            }
                                                                        ).format(
                                                                            detailOrder.priceProduct *
                                                                                detailOrder.quantityProduct
                                                                        )}
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <select
                                        onChange={handleChangeStatus}
                                        name="select-category"
                                        id="select-category"
                                        className="select-order"
                                    >
                                        {statusOrder.map((status, index) => (
                                            <>
                                                <option value="waitting">
                                                    {status.status}
                                                </option>
                                                <option value="shipping">
                                                    Đang vận chuyển
                                                </option>
                                                <option value="cancle">
                                                    Huỷ đơn hàng
                                                </option>
                                            </>
                                        ))}
                                    </select> */}
                                    <button className="add-pro-btn">
                                        Lưu thay đổi
                                    </button>
                                    <ToastContainer />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-list"></div>
            </div>
        </div>
    );
}

export default EditProduct;
