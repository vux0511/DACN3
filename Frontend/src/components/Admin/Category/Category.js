import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "~/api/CALL_URL";
import Cookies from "universal-cookie";

function CategoryAdmin() {
    const [itemCategory, setItemCategory] = useState([]);
    const notify = () => toast();
    const cookies = new Cookies();

    useEffect(() => {
        axios.get(CALL_URL.URL_getCategory).then((response) => {
            setItemCategory(response.data);
        });
        console.log(itemCategory);
    }, []);

    const handleDeleteCategory = (e) => {
        e.preventDefault();
        var data = {
            idCategory: e.target.value,
            user_token: cookies.get("usertoken"),
        };
        console.log(data);
        axios.post(CALL_URL.URL_deleteCategory, data).then((response) => {
            const updatedItemsCategory = itemCategory.filter((item) => {
                if (item._id === data.idCategory) {
                    toast.success("Xoá danh mục thành công", {
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
                return item._id !== data.idCategory;
            });
            setItemCategory(updatedItemsCategory);
        });
    };

    return (
        <div className="main-container">
            <Sidebar />
            <div className="listProducts">
                <div className="title-products-list">
                    <h3>Danh Sách Danh Mục</h3>
                    <a href="/admin/category/add">
                        <button className="save-btn">Thêm danh mục</button>
                    </a>
                </div>
                <div className="product-list">
                    <table>
                        <thead>
                            <tr>
                                <th className="th-id-product">#</th>
                                <th className="th-image-product">Ảnh</th>
                                <th className="th-name-product">
                                    Tên Danh Mục
                                </th>
                                <th className="th-image-product">Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemCategory.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img
                                            src={`http://localhost:5001/images/categories/${item.imageCategory}`}
                                            alt=""
                                            className="small-img1"
                                        />
                                    </td>
                                    <td>{item.nameCategory}</td>
                                    <td>
                                        <Link
                                            to={`/admin/category/edit/${item._id}`}
                                        >
                                            <button className="delete-item-product-btn">
                                                Sửa
                                            </button>
                                        </Link>{" "}
                                        -{" "}
                                        <a href="">
                                            <button
                                                className="delete-item-product-btn"
                                                value={item._id}
                                                onClick={handleDeleteCategory}
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

export default CategoryAdmin;
