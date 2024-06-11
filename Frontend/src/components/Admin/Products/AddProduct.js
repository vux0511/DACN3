import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";
import CALL_URL from "~/api/CALL_URL";
import { Input } from "antd";
const { TextArea } = Input;

function AddProduct() {
    const navigate = useNavigate();
    const notify = () => toast();
    const [nameProduct, setNameProduct] = useState("");
    const [idCategory, setIdCategory] = useState([]);
    const [priceProduct, setPriceProduct] = useState("");
    const [descProduct, setDescProduct] = useState("");
    const [quantityProduct, setQuantityProduct] = useState("");
    const [idCate, setIdCate] = useState("1");
    const [imageFormData1, setImageFormData1] = useState("");
    const [imageFormData2, setImageFormData2] = useState("");
    const [imageFormData3, setImageFormData3] = useState("");
    const [imageFormData4, setImageFormData4] = useState("");
    const cookies = new Cookies();

    const handleChangeNameProduct = (e) => {
        setNameProduct(e.target.value);
    };
    const handleChangePriceProduct = (e) => {
        setPriceProduct(e.target.value);
    };
    const handleChangeQuantityProduct = (e) => {
        setQuantityProduct(e.target.value);
    };
    const handleChangeDescProduct = (e) => {
        setDescProduct(e.target.value);
    };
    const handleChangeIdCate = (e) => {
        setIdCate(e.target.value);
    };

    const handleChangeImageCategory1 = (e) => {
        setImageFormData1(e.target.files[0]);
    };

    const handleChangeImageCategory2 = (e) => {
        setImageFormData2(e.target.files[0]);
    };

    const handleChangeImageCategory3 = (e) => {
        setImageFormData3(e.target.files[0]);
    };

    const handleChangeImageCategory4 = (e) => {
        setImageFormData4(e.target.files[0]);
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nameProduct", nameProduct);
        formData.append("idCategory", idCate);
        formData.append("price", priceProduct);
        formData.append("quantity", quantityProduct);
        formData.append("description", descProduct);
        formData.append("imgProduct1", imageFormData1);
        formData.append("imgProduct2", imageFormData2);
        formData.append("imgProduct3", imageFormData3);
        formData.append("imgProduct4", imageFormData4);
        formData.append("user_token", cookies.get("usertoken"));

        const config = {
            headers: {
                "Content-Type": false,
            },
        };
        axios
            .post(CALL_URL.URL_addNewProduct, formData, config)
            .then((response) => {
                if (response.data) {
                    toast.success("Thêm thành công", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setNameProduct("");
                    setPriceProduct("");
                    setDescProduct("");
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
                    <form
                        className="admin__product-wrapper"
                        onSubmit={handleAddProduct}
                    >
                        {/* Row 1 */}
                        <div className="admin__product-row">
                            <div className="admin__product-left">
                                <div className="detail__rating-form-double">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="detail__rating-form-label"
                                        >
                                            Tên sản phẩm
                                        </label>
                                        <input
                                            required
                                            id="name"
                                            type="text"
                                            placeholder="Nhập tên sản phẩm (bắt buộc)"
                                            className="detail__rating-form-input"
                                            onChange={handleChangeNameProduct}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="detail__rating-form-label"
                                        >
                                            Giá sản phẩm
                                        </label>
                                        <input
                                            id="phone"
                                            onChange={handleChangePriceProduct}
                                            type="number"
                                            required
                                            placeholder="Giá sản phẩm (bắt buộc)"
                                            className="detail__rating-form-input"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="admin__product-right">
                                <div className="detail__rating-form-double">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="detail__rating-form-label"
                                        >
                                            Danh mục
                                        </label>
                                        <select
                                            onChange={handleChangeIdCate}
                                            name="select-category"
                                            id="select-category"
                                            className="detail__rating-form-input"
                                        >
                                            {idCategory.map((idCategory) => (
                                                <option
                                                    value={
                                                        idCategory.idCategory
                                                    }
                                                    key={idCategory.idCategory}
                                                >
                                                    {idCategory.nameCategory}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="detail__rating-form-label"
                                        >
                                            Số lượng
                                        </label>
                                        <input
                                            id="phone"
                                            required
                                            type="number"
                                            placeholder="Số lượng (bắt buộc)"
                                            className="detail__rating-form-input"
                                            onChange={
                                                handleChangeQuantityProduct
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Row 2 */}
                        <div className="admin__product-row">
                            <div className="admin__product-left">
                                <div className="detail__rating-form-double">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="detail__rating-form-label"
                                        >
                                            Ảnh sản phẩm
                                        </label>
                                        <input
                                            id="name"
                                            required
                                            type="file"
                                            placeholder="Ảnh sản phẩm"
                                            onChange={
                                                handleChangeImageCategory1
                                            }
                                            className="detail__rating-form-input"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="detail__rating-form-label"
                                        >
                                            Ảnh sản phẩm
                                        </label>
                                        <input
                                            id="name"
                                            required
                                            type="file"
                                            placeholder="Ảnh sản phẩm"
                                            onChange={
                                                handleChangeImageCategory2
                                            }
                                            className="detail__rating-form-input"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="admin__product-right">
                                <div className="detail__rating-form-double">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="detail__rating-form-label"
                                        >
                                            Ảnh sản phẩm
                                        </label>
                                        <input
                                            id="name"
                                            type="file"
                                            required
                                            placeholder="Ảnh sản phẩm"
                                            className="detail__rating-form-input"
                                            onChange={
                                                handleChangeImageCategory3
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="detail__rating-form-label"
                                        >
                                            Ảnh sản phẩm
                                        </label>
                                        <input
                                            id="name"
                                            required
                                            type="file"
                                            placeholder="Ảnh sản phẩm"
                                            onChange={
                                                handleChangeImageCategory4
                                            }
                                            className="detail__rating-form-input"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="admin__product-row-textarea">
                            <label
                                htmlFor="name"
                                className="detail__rating-form-label"
                            >
                                Mô tả sản phẩm
                            </label>
                            <TextArea
                                id="comment"
                                placeholder="Mô tả sản phẩm"
                                required
                                style={{
                                    width: "100%",
                                    padding: "10px 20px",
                                    outline: "none",
                                    border: "1px solid #dfdddd",
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "15px",
                                }}
                                onChange={handleChangeDescProduct}
                                autoSize={{
                                    minRows: 3,
                                }}
                            />
                        </div>
                        <button className="button-rating">Thêm sản phẩm</button>
                        <ToastContainer />
                    </form>
                </div>
                <div className="product-list"></div>
            </div>
        </div>
    );
}

export default AddProduct;
