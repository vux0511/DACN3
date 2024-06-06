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

function AddProduct() {
    const navigate = useNavigate();
    const notify = () => toast();
    const [nameProduct, setNameProduct] = useState("");
    const [idCategory, setIdCategory] = useState([]);
    const [idCate, setIdCate] = useState("1");
    const [priceProduct, setPriceProduct] = useState("");
    const [descriptionProduct, setDescriptionProduct] = useState("");
    const [viewProduct, setViewProduct] = useState("");
    const [size37, setSize37] = useState("");
    const [size38, setSize38] = useState("");
    const [size39, setSize39] = useState("");
    const [size40, setSize40] = useState("");
    const [size41, setSize41] = useState("");
    const [size42, setSize42] = useState("");
    const [size43, setSize43] = useState("");
    const [size44, setSize44] = useState("");
    const [size45, setSize45] = useState("");
    const [imageProduct_1, setImageProduct_1] = useState("");
    const [imageProduct_2, setImageProduct_2] = useState("");
    const [imageProduct_3, setImageProduct_3] = useState("");
    const [imageProduct_4, setImageProduct_4] = useState("");

    const handleChangeNameProduct = (e) => {
        setNameProduct(e.target.value);
    };
    const handleChangeIdCate = (e) => {
        setIdCate(e.target.value);
    };
    const handleChangePriceProduct = (e) => {
        setPriceProduct(e.target.value);
    };
    const handleChangeDescriptionProduct = (e) => {
        setDescriptionProduct(e.target.value);
    };
    const handleChangeViewProduct = (e) => {
        setViewProduct(e.target.value);
    };
    const handleChangeSize37 = (e) => {
        setSize37(e.target.value);
    };
    const handleChangeSize38 = (e) => {
        setSize38(e.target.value);
    };
    const handleChangeSize39 = (e) => {
        setSize39(e.target.value);
    };
    const handleChangeSize40 = (e) => {
        setSize40(e.target.value);
    };
    const handleChangeSize41 = (e) => {
        setSize41(e.target.value);
    };
    const handleChangeSize42 = (e) => {
        setSize42(e.target.value);
    };
    const handleChangeSize43 = (e) => {
        setSize43(e.target.value);
    };
    const handleChangeSize44 = (e) => {
        setSize44(e.target.value);
    };
    const handleChangeSize45 = (e) => {
        setSize45(e.target.value);
    };
    const handleChangeImageProduct_1 = (e) => {
        setImageProduct_1(e.target.value);
    };
    const handleChangeImageProduct_2 = (e) => {
        setImageProduct_2(e.target.value);
    };
    const handleChangeImageProduct_3 = (e) => {
        setImageProduct_3(e.target.value);
    };
    const handleChangeImageProduct_4 = (e) => {
        setImageProduct_4(e.target.value);
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        let data = {
            nameProduct: nameProduct,
            idCate: idCate,
            priceProduct: priceProduct,
            descriptionProduct: descriptionProduct,
            viewProduct: viewProduct,
            size37: size37,
            size38: size38,
            size39: size39,
            size40: size40,
            size41: size41,
            size42: size42,
            size43: size43,
            size44: size44,
            size45: size45,
            imageProduct_1: imageProduct_1,
            imageProduct_2: imageProduct_2,
            imageProduct_3: imageProduct_3,
            imageProduct_4: imageProduct_4,
        };

        axios.post(CALL_URL.URL_addNewProduct, data).then((response) => {
            // console.log(response.data.status);
            if (response.data.status === "success") {
                toast.success("Thêm sản phẩm thành công", {
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
                toast.error("Thêm sản phẩm thất bại", {
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

    useEffect(() => {
        axios.get(CALL_URL.URL_getCategory).then((response) => {
            setIdCategory(response.data);
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
                                        Thêm sản phẩm
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

export default AddProduct;
