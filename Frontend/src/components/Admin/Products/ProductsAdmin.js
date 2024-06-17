import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "~/api/CALL_URL";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import Cookies from "universal-cookie";
import Table from "react-bootstrap/Table";

function ProductAdmin() {
    const [itemProducts, setItemProducts] = useState([]);
    const cookies = new Cookies();
    const notify = () => toast();

    useEffect(() => {
        axios.get(CALL_URL.URL_getProduct).then((response) => {
            setItemProducts(response.data);
            console.log(response.data);
        });
    }, []);

    const numberFormat = (number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(number);
    };

    const handleDeleteProduct = (e) => {
        e.preventDefault();
        var data = {
            idProduct: e.target.value,
            user_token: cookies.get("user_token"),
        };

        axios.post(CALL_URL.URL_deleteProduct, data).then((response) => {
            const updatedItemsProducts = itemProducts.filter((item) => {
                if (item._id === data.idProduct) {
                    toast.success("Xoá thành công", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
                return item._id !== data.idProduct;
            });
            setItemProducts(updatedItemsProducts);
        });
    };

    return (
        <div className="main-container">
            <Sidebar />
            <div className="listProducts">
                <div className="title-products-list">
                    <div class="admin__heading">Danh sách sản phẩm</div>
                    <a href="/admin/product/add">
                        <button className="save-btn">Thêm sản phẩm</button>
                    </a>
                </div>
                <div className="product-list">
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Ảnh </th>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemProducts.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img
                                            src={`http://localhost:5001/images/products/${item.image.img1}`}
                                            alt="Image Product"
                                        />
                                    </td>
                                    <td>{item.nameProduct}</td>
                                    <td>{numberFormat(item.price)}</td>
                                    <td>
                                        <div className="desc-product-admin">
                                            {item.quantity}
                                        </div>
                                    </td>
                                    <td>
                                        <Link
                                            to={`/admin/product/edit/${item._id}`}
                                        >
                                            <button className="delete-item-product-btn">
                                                Sửa
                                            </button>
                                        </Link>
                                        {""} - {""}
                                        <a href="">
                                            <button
                                                className="delete-item-product-btn"
                                                value={item._id}
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
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default ProductAdmin;
