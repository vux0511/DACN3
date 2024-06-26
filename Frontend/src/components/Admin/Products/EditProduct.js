import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";
import CALL_URL from "~/api/CALL_URL";
import { Input } from "antd";
const { TextArea } = Input;

function EditProduct() {
    const cookies = new Cookies();
    const idProduct = useParams();
    const [idCategory, setIdCategory] = useState([]);
    const [nameProduct, setNameProduct] = useState("");
    const [priceProduct, setPriceProduct] = useState("");
    const [descProduct, setDescProduct] = useState("");
    const [quantityProduct, setQuantityProduct] = useState("");
    const [itemProductEdit, setItemProductEdit] = useState({});
    const [imageFormData1, setImageFormData1] = useState("");
    const [imageFormData2, setImageFormData2] = useState("");
    const [imageFormData3, setImageFormData3] = useState("");
    const [imageFormData4, setImageFormData4] = useState("");

    const handleChangeNameProduct = (e) => {
        setItemProductEdit({ ...itemProductEdit, nameProduct: e.target.value });
    };
    const handleChangeIdCate = (e) => {
        setItemProductEdit({ ...itemProductEdit, idCategory: e.target.value });
        console.log(e.target.value);
    };
    const handleChangePriceProduct = (e) => {
        console.log(e.target.value);
        setPriceProduct(e.target.value);
    };
    const handleChangeQuantityProduct = (e) => {
        setQuantityProduct(e.target.value);
    };
    const handleChangeDescProduct = (e) => {
        setDescProduct(e.target.value);
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

    const handleEditProduct = (e) => {
        e.preventDefault();
        let data = itemProductEdit;
        data.idProduct = idProduct;
        const formData = new FormData();

        formData.append("idProduct", idProduct.idProduct);
        formData.append("nameProduct", itemProductEdit.nameProduct);
        formData.append("idCategory", itemProductEdit.idCategory);
        formData.append("price", priceProduct);
        formData.append("quantity", quantityProduct);
        formData.append("description", descProduct);
        formData.append("imgProduct1", imageFormData1);
        formData.append("imgProduct2", imageFormData2);
        formData.append("imgProduct3", imageFormData3);
        formData.append("imgProduct4", imageFormData4);
        formData.append("user_token", cookies.get("user_token"));

        console.log("idProduct", idProduct.idProduct);
        console.log("nameProduct", itemProductEdit.nameProduct);
        console.log("idCategory", itemProductEdit.idCategory);
        console.log("price", priceProduct);
        console.log("quantity", quantityProduct);
        console.log("description", descProduct);
        console.log("imgProduct1", imageFormData1);
        console.log("imgProduct2", imageFormData2);
        console.log("imgProduct3", imageFormData3);
        console.log("imgProduct4", imageFormData4);
        console.log("user_token", cookies.get("user_token"));

        const config = {
            headers: {
                "Content-Type": false,
            },
        };

        axios
            .post(CALL_URL.URL_editProduct, formData, config)
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

    // Get Category
    useEffect(() => {
        axios.get(CALL_URL.URL_getCategory).then((response) => {
            setIdCategory(response.data);
        });
    }, []);

    // Get Product
    useEffect(() => {
        axios
            .get(
                `${CALL_URL.URL_getProductDetail}/?idProduct=${idProduct.idProduct}`
            )
            .then((response) => {
                setItemProductEdit(response.data);
                setNameProduct(response.data.nameCategory);
                setDescProduct(response.data.description);
                setPriceProduct(response.data.price);
                setQuantityProduct(response.data.quantity);
                console.log(response.data);
            });
    }, []);

    return (
        <div className="main-container">
            <Sidebar />
            <div className="listProducts">
                <div className="title-products-list">
                    <h3>Sửa Sản Phẩm</h3>
                    <form
                        className="admin__product-wrapper"
                        onSubmit={handleEditProduct}
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
                                            defaultValue={
                                                itemProductEdit.nameProduct
                                            }
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
                                            defaultValue={itemProductEdit.price}
                                            min={0}
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
                                            {idCategory.map((value) => (
                                                <option
                                                    value={value._id}
                                                    key={value._id}
                                                    selected={
                                                        value._id ===
                                                        itemProductEdit.idCategory
                                                    }
                                                >
                                                    {value.nameCategory}
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
                                            min={0}
                                            defaultValue={
                                                itemProductEdit.quantity
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
                        {/* Row 3 */}
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
                                defaultValue={itemProductEdit.description}
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
                        <button className="button-rating">Sửa sản phẩm</button>
                        <ToastContainer />
                    </form>
                </div>
            </div>
            <div className="product-list"></div>
        </div>
    );
}

export default EditProduct;
