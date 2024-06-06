import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "~/api/CALL_URL";

function EditProduct() {
    const { idOrder } = useParams();
    const [status, setStatus] = useState([]);
    const [detailOrder, setDetailOrder] = useState([]);

    const handleViewOrder = (e) => {
        e.preventDefault();
        let data = status;
        data.id = idOrder;

        axios.post(CALL_URL.URL_editOrder, data).then((response) => {
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
            .get(`${CALL_URL.URL_getInformation}?idorder=${idOrder}`)
            .then((response) => {
                setDetailOrder(response.data);
            });
    }, []);

    return (
        <div className="main-container">
            <Sidebar />
            <div className="listProducts">
                <div className="title-products-list">
                    <h3>Quản Lý Đơn Hàng</h3>
                    <div className="row">
                        <div className="col-75">
                            <div className="container">
                                <form onSubmit={handleViewOrder}>
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

                                    <button className="save-btn">
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
