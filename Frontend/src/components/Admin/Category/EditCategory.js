import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "~/api/CALL_URL";
import Cookies from "universal-cookie";

function EditProduct() {
    const { idCategory } = useParams();
    const [itemCategoryEdit, setItemCategoryEdit] = useState({});
    const cookies = new Cookies();
    const [image_category, setImageFormData1] = useState("");
    const [category, setCategory] = useState("");

    const handleChangeImageCategory1 = (e) => {
        setImageFormData1(e.target.files[0]);
    };
    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    const handleAddCategory = (e) => {
        e.preventDefault();
        let data = {
            idCategory: idCategory,
            user_token: cookies.get("user_token"),
            image_category: image_category,
            nameCategory: category,
        };
        const formData = new FormData();
        formData.append("idCategory", idCategory);
        formData.append("nameCategory", category);
        formData.append("image_category", image_category);
        formData.append("user_token", cookies.get("user_token"));

        console.log(data);
        const config = {
            headers: {
                "Content-Type": false,
            },
        };

        axios
            .post(CALL_URL.URL_editCategory, formData, config)
            .then((response) => {
                console.log(response.data);
                if (response.data) {
                    toast.success("Sửa thành công", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                } else {
                    toast.error("Sửa thất bại", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            });
    };

    // // Get Category
    // useEffect(() => {
    //     axios
    //         .get(`${CALL_URL.URL_getCategoryEdit}?idcategory=${idCategory}`)
    //         .then((response) => {
    //             setItemCategoryEdit(response.data[0]);
    //         });
    // }, []);

    return (
        <div className="main-container">
            <Sidebar />
            <div className="listProducts">
                <div className="title-products-list">
                    <h3>Sửa Danh Mục</h3>
                    <div className="row">
                        <div className="col-75">
                            <div className="container">
                                <form onSubmit={handleAddCategory}>
                                    <div className="row row-edit-category">
                                        <div className="col-50">
                                            <div>
                                                <label
                                                    htmlFor="phone"
                                                    className="detail__rating-form-label"
                                                >
                                                    Tên danh mục
                                                </label>
                                                <input
                                                    id="phone"
                                                    onChange={
                                                        handleChangeCategory
                                                    }
                                                    type="text"
                                                    required
                                                    placeholder="Tên danh mục (bắt buộc)"
                                                    className="detail__rating-form-input"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-50">
                                            <div>
                                                <label
                                                    htmlFor="name"
                                                    className="detail__rating-form-label"
                                                >
                                                    Ảnh danh mục
                                                </label>
                                                <input
                                                    id="name"
                                                    type="file"
                                                    placeholder="Ảnh sản phẩm"
                                                    onChange={
                                                        handleChangeImageCategory1
                                                    }
                                                    className="detail__rating-form-input"
                                                />
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
