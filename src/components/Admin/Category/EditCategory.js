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
    const { idCategory } = useParams();
    // const [idCategory, setIdCategory] = useState([]);

    const [itemCategoryEdit, setItemCategoryEdit] = useState({});

    const handleChangeNameProduct = (e) => {
        setItemCategoryEdit({
            ...itemCategoryEdit,
            nameCategory: e.target.value,
        });
    };

    const handleAddCategory = (e) => {
        e.preventDefault();
        let data = itemCategoryEdit;
        data.idCategory = idCategory;

        axios
            .post("http://localhost/DACN1_API/api/editCategory.php", data)
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
                    toast.error("Sửa thất bại", {
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

    // Get Category
    useEffect(() => {
        axios
            .get(
                `http://localhost/DACN1_API/api/getCategoryEdit.php?idcategory=${idCategory}`
            )
            .then((response) => {
                setItemCategoryEdit(response.data[0]);
            });
    }, []);

    return (
        <div className="main-container">
            <Sidebar />
            <div className="listProducts">
                <div className="title-products-list">
                    <h3>Thêm Sản Phẩm</h3>
                    <div className="row">
                        <div className="col-75">
                            <div className="container">
                                <form onSubmit={handleAddCategory}>
                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="namecate">
                                                <i className="fa fa-user" /> Tên
                                                sản phẩm
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                id="namecate"
                                                name="namecate"
                                                placeholder="Nhập tên sản phẩm"
                                                defaultValue={
                                                    itemCategoryEdit.nameCategory
                                                }
                                                onChange={
                                                    handleChangeNameProduct
                                                }
                                            />
                                        </div>
                                        <div className="col-50"></div>
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
