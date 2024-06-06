import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "~/api/CALL_URL";

function EditProduct() {
    const { idCategory } = useParams();
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

        axios.post(CALL_URL.URL_editCategory, data).then((response) => {
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
            .get(`${CALL_URL.URL_getCategoryEdit}?idcategory=${idCategory}`)
            .then((response) => {
                setItemCategoryEdit(response.data[0]);
            });
    }, []);

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
                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="namecate">
                                                <i className="fa fa-user" /> Tên
                                                danh mục
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                id="namecate"
                                                name="namecate"
                                                placeholder="Nhập tên danh mục"
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
