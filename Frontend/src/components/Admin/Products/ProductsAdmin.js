import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "~/api/CALL_URL";

function ProductAdmin() {
    const [itemProducts, setItemProducts] = useState([]);
    const notify = () => toast();
    useEffect(() => {
        axios.get(CALL_URL.URL_getProduct).then((response) => {
            setItemProducts(response.data);
            console.log(itemProducts);
        });
    }, []);

    const handleDeleteProduct = (e) => {
        e.preventDefault();
        var data = {
            idProduct: e.target.value,
        };
        axios.post(CALL_URL.URL_deleteProduct, data).then((response) => {
            const updatedItemsProducts = itemProducts.filter((item) => {
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
            setItemProducts(updatedItemsProducts);
        });
    };

    return (
        <div className="main-container">
            <Sidebar />
            <div className="listProducts">
                <div className="title-products-list">
                    <h3>Danh Sách Sản Phẩm</h3>
                    <a href="/admin/product/add">
                        <button className="save-btn">Thêm sản phẩm</button>
                    </a>
                </div>
                <div className="product-list">
                    <table>
                        <thead>
                            <tr>
                                <th className="th-id-product">ID</th>
                                <th className="th-name-product">Tên</th>
                                <th className="th-image-product">Ảnh</th>
                                <th className="th-price-product">Giá</th>
                                <th className="th-decs-product">Số lượng</th>
                                <th className="th-act-product">Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemProducts.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.nameProduct}</td>
                                    <td>
                                        <img
                                            src={`http://localhost:5001/images/products/${item.image.img1}`}
                                            alt="Image Product"
                                        />
                                    </td>
                                    <td>{item.price}</td>
                                    <td>
                                        <div className="desc-product-admin">
                                            {item.quantity}
                                        </div>
                                    </td>
                                    <td>
                                        <Link
                                            to={`/admin/product/edit/${item.idProduct}`}
                                        >
                                            <button className="delete-item-product-btn">
                                                Sửa
                                            </button>
                                        </Link>{" "}
                                        -{" "}
                                        <a href="">
                                            <button
                                                className="delete-item-product-btn"
                                                value={item.idProduct}
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

export default ProductAdmin;
