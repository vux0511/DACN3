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
    const [idCategory, setIdCategory] = useState([]);
    const [order, setOrder] = useState([]);
    const [detailOrder, setDetailOrder] = useState([]);

    const [itemProductEdit, setItemProductEdit] = useState({});

    const handleChangeNameProduct = (e) => {
        setItemProductEdit({ ...itemProductEdit, nameProduct: e.target.value });
    };
    const handleChangeIdCate = (e) => {
        setItemProductEdit({ ...itemProductEdit, idCategory: e.target.value });
    };
    const handleChangePriceProduct = (e) => {
        setItemProductEdit({
            ...itemProductEdit,
            priceProduct: e.target.value,
        });
    };
    const handleChangeDescriptionProduct = (e) => {
        setItemProductEdit({
            ...itemProductEdit,
            descriptionProduct: e.target.value,
        });
    };
    const handleChangeViewProduct = (e) => {
        setItemProductEdit({ ...itemProductEdit, viewProduct: e.target.value });
    };
    const handleChangeSize37 = (e) => {
        setItemProductEdit({ ...itemProductEdit, siz37: e.target.value });
    };
    const handleChangeSize38 = (e) => {
        setItemProductEdit({ ...itemProductEdit, siz38: e.target.value });
    };
    const handleChangeSize39 = (e) => {
        setItemProductEdit({ ...itemProductEdit, siz39: e.target.value });
    };
    const handleChangeSize40 = (e) => {
        setItemProductEdit({ ...itemProductEdit, siz40: e.target.value });
    };
    const handleChangeSize41 = (e) => {
        setItemProductEdit({ ...itemProductEdit, siz41: e.target.value });
    };
    const handleChangeSize42 = (e) => {
        setItemProductEdit({ ...itemProductEdit, siz42: e.target.value });
    };
    const handleChangeSize43 = (e) => {
        setItemProductEdit({ ...itemProductEdit, siz43: e.target.value });
    };
    const handleChangeSize44 = (e) => {
        setItemProductEdit({ ...itemProductEdit, siz44: e.target.value });
    };
    const handleChangeSize45 = (e) => {
        setItemProductEdit({ ...itemProductEdit, size45: e.target.value });
    };
    const handleChangeImageProduct_1 = (e) => {
        setItemProductEdit({
            ...itemProductEdit,
            imageProduct_1: e.target.value,
        });
    };
    const handleChangeImageProduct_2 = (e) => {
        setItemProductEdit({
            ...itemProductEdit,
            imageProduct_2: e.target.value,
        });
    };
    const handleChangeImageProduct_3 = (e) => {
        setItemProductEdit({
            ...itemProductEdit,
            imageProduct_3: e.target.value,
        });
    };
    const handleChangeImageProduct_4 = (e) => {
        setItemProductEdit({
            ...itemProductEdit,
            imageProduct_4: e.target.value,
        });
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        let data = itemProductEdit;
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

    // Get Detail Order
    // useEffect(() => {
    //     axios
    //         .get("http://localhost/DACN1_API/api/getDetailOrder.php")
    //         .then((response) => {
    //             setIdCategory(response.data);
    //         });
    // }, []);

    // Get Product
    useEffect(() => {
        axios
            .get(
                `http://localhost/DACN1_API/api/getDetailOrder.php?idorder=${idOrder}`
            )
            .then((response) => {
                setDetailOrder(response.data);
                console.log(detailOrder);
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
                                                        {order.map(
                                                            (order, index) => (
                                                                <tr key={index}>
                                                                    <td>
                                                                        {index +
                                                                            1}
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            order.nameProduct
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            order.fullname
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        {
                                                                            order.phone
                                                                        }
                                                                    </td>
                                                                    <td>
                                                                        <div className="address-order-admin">
                                                                            {
                                                                                order.address
                                                                            }
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

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
