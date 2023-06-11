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
    const { idProduct } = useParams();
    const [idCategory, setIdCategory] = useState([]);

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
        data.id = idProduct;

        axios
            .post("http://localhost/DACN1_API/api/editProduct.php", data)
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

    // Get Category
    useEffect(() => {
        axios
            .get("http://localhost/DACN1_API/api/getCategory.php")
            .then((response) => {
                setIdCategory(response.data);
            });
    }, []);

    // Get Product
    useEffect(() => {
        axios
            .get(
                `http://localhost/DACN1_API/api/getProductDetail.php?idproduct=${idProduct}`
            )
            .then((response) => {
                setItemProductEdit(response.data[0]);
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
                                <form onSubmit={handleAddProduct}>
                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="nameprod">
                                                <i className="fa fa-user" /> Tên
                                                sản phẩm
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                id="nameprod"
                                                name="nameprod"
                                                placeholder="Nhập tên sản phẩm"
                                                defaultValue={
                                                    itemProductEdit.nameProduct
                                                }
                                                onChange={
                                                    handleChangeNameProduct
                                                }
                                            />

                                            <div className="row">
                                                <div className="col-50">
                                                    <label htmlFor="price">
                                                        Giá
                                                    </label>
                                                    <input
                                                        defaultValue={
                                                            itemProductEdit.priceProduct
                                                        }
                                                        required
                                                        type="number"
                                                        id="price"
                                                        name="price"
                                                        placeholder="VD: 2.000.000 đ"
                                                        onChange={
                                                            handleChangePriceProduct
                                                        }
                                                    />
                                                </div>
                                                <div className="col-50">
                                                    <label htmlFor="size37">
                                                        Số lượng Size 37
                                                    </label>
                                                    <input
                                                        defaultValue={
                                                            itemProductEdit.size37
                                                        }
                                                        type="number"
                                                        required
                                                        id="size37"
                                                        name="size37"
                                                        placeholder="VD: 10"
                                                        onChange={
                                                            handleChangeSize37
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-50">
                                                    <label htmlFor="size38">
                                                        Số lượng Size 38
                                                    </label>
                                                    <input
                                                        defaultValue={
                                                            itemProductEdit.size38
                                                        }
                                                        type="number"
                                                        required
                                                        id="size38"
                                                        name="size38"
                                                        placeholder="VD: 10"
                                                        onChange={
                                                            handleChangeSize38
                                                        }
                                                    />
                                                </div>
                                                <div className="col-50">
                                                    <label htmlFor="size39">
                                                        Số lượng Size 39
                                                    </label>
                                                    <input
                                                        defaultValue={
                                                            itemProductEdit.size39
                                                        }
                                                        type="number"
                                                        required
                                                        id="size39"
                                                        name="size39"
                                                        placeholder="VD: 10"
                                                        onChange={
                                                            handleChangeSize39
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-50">
                                                    <label htmlFor="size40">
                                                        Số lượng Size 40
                                                    </label>
                                                    <input
                                                        defaultValue={
                                                            itemProductEdit.size40
                                                        }
                                                        type="number"
                                                        required
                                                        id="size40"
                                                        name="size40"
                                                        placeholder="VD: 10"
                                                        onChange={
                                                            handleChangeSize40
                                                        }
                                                    />
                                                </div>
                                                <div className="col-50">
                                                    <label htmlFor="size41">
                                                        Số lượng Size 41
                                                    </label>
                                                    <input
                                                        defaultValue={
                                                            itemProductEdit.size41
                                                        }
                                                        type="number"
                                                        required
                                                        id="size41"
                                                        name="size41"
                                                        placeholder="VD: 10"
                                                        onChange={
                                                            handleChangeSize41
                                                        }
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-50">
                                                    <label htmlFor="size42">
                                                        Số lượng Size 42
                                                    </label>
                                                    <input
                                                        defaultValue={
                                                            itemProductEdit.size42
                                                        }
                                                        type="number"
                                                        required
                                                        id="size42"
                                                        name="size42"
                                                        onChange={
                                                            handleChangeSize42
                                                        }
                                                        placeholder="VD: 10"
                                                    />
                                                </div>
                                                <div className="col-50">
                                                    <label htmlFor="size43">
                                                        Số lượng Size 43
                                                    </label>
                                                    <input
                                                        defaultValue={
                                                            itemProductEdit.size43
                                                        }
                                                        type="number"
                                                        required
                                                        id="size43"
                                                        name="size43"
                                                        onChange={
                                                            handleChangeSize43
                                                        }
                                                        placeholder="VD: 10"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-50">
                                                    <label htmlFor="size44">
                                                        Số lượng Size 44
                                                    </label>
                                                    <input
                                                        defaultValue={
                                                            itemProductEdit.size44
                                                        }
                                                        type="number"
                                                        required
                                                        id="size44"
                                                        name="size44"
                                                        onChange={
                                                            handleChangeSize44
                                                        }
                                                        placeholder="VD: 10"
                                                    />
                                                </div>
                                                <div className="col-50">
                                                    <label htmlFor="size45">
                                                        Số lượng Size 45
                                                    </label>
                                                    <input
                                                        defaultValue={
                                                            itemProductEdit.size45
                                                        }
                                                        type="number"
                                                        required
                                                        id="size45"
                                                        name="size45"
                                                        onChange={
                                                            handleChangeSize45
                                                        }
                                                        placeholder="VD: 10"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-50">
                                            <div className="row">
                                                <div className="col-50">
                                                    <label htmlFor="select-category">
                                                        Danh mục
                                                    </label>
                                                    <select
                                                        onChange={
                                                            handleChangeIdCate
                                                        }
                                                        name="select-category"
                                                        id="select-category"
                                                        className="select-category"
                                                        value={
                                                            itemProductEdit.idCategory
                                                        }
                                                    >
                                                        {idCategory.map(
                                                            (idCategory) => (
                                                                <option
                                                                    value={
                                                                        idCategory.idCategory
                                                                    }
                                                                    key={
                                                                        idCategory.idCategory
                                                                    }
                                                                >
                                                                    {
                                                                        idCategory.nameCategory
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                                <div className="col-50">
                                                    <label htmlFor="view">
                                                        Số lượt xem
                                                    </label>
                                                    <input
                                                        defaultValue={
                                                            itemProductEdit.viewProduct
                                                        }
                                                        onChange={
                                                            handleChangeViewProduct
                                                        }
                                                        type="number"
                                                        required
                                                        id="view"
                                                        name="view"
                                                        placeholder="VD: 100"
                                                    />
                                                </div>
                                            </div>
                                            <label htmlFor="link-1">
                                                <i className="fa fa-user" />{" "}
                                                Link ảnh 1
                                            </label>
                                            <input
                                                defaultValue={
                                                    itemProductEdit.imageProduct_1
                                                }
                                                required
                                                type="text"
                                                id="link-1"
                                                name="link-1"
                                                placeholder="Nhập đường dẫn ảnh sản phẩm..."
                                                onChange={
                                                    handleChangeImageProduct_1
                                                }
                                            />
                                            <label htmlFor="link-2">
                                                <i className="fa fa-envelope" />{" "}
                                                Link ảnh 2
                                            </label>
                                            <input
                                                defaultValue={
                                                    itemProductEdit.imageProduct_2
                                                }
                                                required
                                                type="text"
                                                id="link-2"
                                                name="link-2"
                                                placeholder="Nhập đường dẫn ảnh sản phẩm..."
                                                onChange={
                                                    handleChangeImageProduct_2
                                                }
                                            />
                                            <label htmlFor="link-3">
                                                <i className="fa fa-address-card-o" />{" "}
                                                Link ảnh 3
                                            </label>
                                            <input
                                                defaultValue={
                                                    itemProductEdit.imageProduct_3
                                                }
                                                required
                                                type="text"
                                                id="link-3"
                                                name="link-1"
                                                placeholder="Nhập đường dẫn ảnh sản phẩm..."
                                                onChange={
                                                    handleChangeImageProduct_3
                                                }
                                            />
                                            <label htmlFor="link-4">
                                                <i className="fa fa-institution" />{" "}
                                                Link ảnh 4
                                            </label>
                                            <input
                                                defaultValue={
                                                    itemProductEdit.imageProduct_4
                                                }
                                                required
                                                type="text"
                                                id="link-4"
                                                name="link-4"
                                                placeholder="Nhập đường dẫn ảnh sản phẩm..."
                                                onChange={
                                                    handleChangeImageProduct_4
                                                }
                                            />

                                            <label htmlFor="city">
                                                <i className="fa fa-institution" />{" "}
                                                Mô tả
                                            </label>
                                            <input
                                                defaultValue={
                                                    itemProductEdit.descriptionProduct
                                                }
                                                required
                                                type="text"
                                                id="city"
                                                name="city"
                                                placeholder="Nhập mô tả sản phẩm..."
                                                onChange={
                                                    handleChangeDescriptionProduct
                                                }
                                            />
                                        </div>
                                    </div>

                                    <button className="save-btn">
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
