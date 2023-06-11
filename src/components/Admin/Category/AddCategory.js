import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../scss/AddProduct.scss";

function AddCategory() {
    const notify = () => toast();
    const [nameCategory, setNameCategory] = useState("");

    const handleChangeNameCategory = (e) => {
        setNameCategory(e.target.value);
    };

    const handleAddCategory = (e) => {
        e.preventDefault();
        let data = {
            nameCategory: nameCategory,
        };

        axios
            .post("http://localhost/DACN1_API/api/addNewCategory.php", data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === "success") {
                    toast.success("Thêm danh mục thành công", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setNameCategory("");
                } else {
                    toast.error("Thêm danh mục thất bại", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            });
    };

    return (
        <div className="main-container">
            <Sidebar />
            <div className="listProducts">
                <div className="title-products-list">
                    <h3>Thêm Danh Mục</h3>
                    <div className="row">
                        <div className="col-75">
                            <div className="container">
                                <form onSubmit={handleAddCategory}>
                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="nameprod">
                                                <i className="fa fa-user" /> Tên
                                                danh mục
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                id="nameprod"
                                                name="nameprod"
                                                placeholder="Nhập tên danh mục"
                                                value={nameCategory}
                                                onChange={
                                                    handleChangeNameCategory
                                                }
                                            />
                                        </div>
                                        <div className="col-50">
                                            <div className="row"></div>
                                        </div>
                                    </div>

                                    <button className="save-btn">
                                        Thêm danh mục
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

export default AddCategory;
