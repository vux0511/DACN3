import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "~/api/CALL_URL";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Input } from "antd";
import Cookies from "universal-cookie";

function AddCategory() {
    const notify = () => toast();
    const [nameCategory, setNameCategory] = useState("");
    const [imageFormData, setImageFormData] = useState("");
    const cookies = new Cookies();

    const handleChangeNameCategory = (e) => {
        setNameCategory(e.target.value);
    };

    const handleChangeImageCategory = (e) => {
        setImageFormData(e.target.files[0]);
    };

    const handleAddCategory = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nameCategory", nameCategory);
        formData.append("user_token", cookies.get("usertoken"));
        formData.append("image_category", imageFormData);

        const config = {
            headers: {
                "Content-Type": false,
            },
        };
        axios
            .post(CALL_URL.URL_addNewCategory, formData, config)
            .then((response) => {
                console.log(response.data);
                if (response.data) {
                    toast.success("Thêm thành công", {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setNameCategory("");
                } else {
                    toast.error("Thêm thất bại", {
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
                                    <div className="admin__product-row">
                                        <div className="detail__rating-form-double">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="detail__rating-form-label"
                                                >
                                                    Tên danh mục
                                                </label>
                                                <input
                                                    id="name"
                                                    value={nameCategory}
                                                    type="text"
                                                    required
                                                    onChange={
                                                        handleChangeNameCategory
                                                    }
                                                    placeholder="Tên danh mục (bắt buộc)"
                                                    className="detail__rating-form-input"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="file"
                                                    className="detail__rating-form-label"
                                                >
                                                    Ảnh danh mục
                                                </label>
                                                <input
                                                    id="file"
                                                    // value={imageCategory}
                                                    type="file"
                                                    // required
                                                    onChange={
                                                        handleChangeImageCategory
                                                    }
                                                    className="detail__rating-form-input"
                                                />
                                            </div>
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
