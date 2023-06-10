import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CategoryAdmin() {
    const [itemCategory, setItemCategory] = useState([]);
    const notify = () => toast();

    useEffect(() => {
        axios
            .get(`http://localhost/DACN1_API/api/getCategory.php`)
            .then((response) => {
                setItemCategory(response.data);
            });
    }, []);

    const handleDeleteCategory = (e) => {
        e.preventDefault();
        var data = {
            idCategory: e.target.value,
        };
        axios
            .post("http://localhost/DACN1_API/api/deleteCategory.php", data)
            .then((response) => {
                const updatedItemsCategory = itemCategory.filter((item) => {
                    if (item.idCategory === data.idCategory) {
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
                    return item.idCategory !== data.idCategory;
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
                        <button className="add-product-admin">
                            Thêm danh mục
                        </button>
                    </a>
                </div>
                <div className="product-list">
                    <table>
                        <thead>
                            <tr>
                                <th className="th-id-product">#</th>
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
                                    <td>{item.nameCategory}</td>

                                    <td>
                                        <Link
                                            to={`/admin/category/edit/${item.idCategory}`}
                                        >
                                            <button className="delete-item-product-btn">
                                                Sửa
                                            </button>
                                        </Link>{" "}
                                        -{" "}
                                        <a href="">
                                            <button
                                                className="delete-item-product-btn"
                                                value={item.idCategory}
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
