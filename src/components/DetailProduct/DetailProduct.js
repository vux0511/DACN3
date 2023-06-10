import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { GoEye } from "react-icons/go";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./DetailProduct.scss";
import { useRef, useEffect, useState } from "react";
import Products from "../Products/Products";
import Product from "../Products/Product/Product";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function DetailProduct(data) {
    const [quantity, setQuantity] = useState(1);
    const [isDisable, setDisable] = useState(true);
    const [productRelated, setProductRelated] = useState([]);
    const [detailProduct, setDetailProduct] = useState([]);
    const [checked, setChecked] = useState();
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const { productId } = useParams();
    const [sizeQuantity, setSizeQuantity] = useState(0);

    useEffect(() => {
        if (cookies.get("user")) {
            setUsername(cookies.get("user").username);
        }
    }, []);

    // Chi tiết SP
    useEffect(() => {
        axios
            .get(
                `http://localhost/DACN1_API/api/getProductDetail.php?idproduct=${productId}`
            )
            .then((response) => {
                setDetailProduct(response.data);
            });
    }, [productId]);

    // View Product
    useEffect(() => {
        axios
            .get(
                `http://localhost/DACN1_API/api/setViewProduct.php?idproduct=${productId}`
            )
            .then((response) => {});
    }, []);

    // SP liên quan
    useEffect(() => {
        axios
            .get(
                `http://localhost/DACN1_API/api/getProductRelated.php?idproduct=${productId}`
            )
            .then((response) => {
                setProductRelated(response.data);
            });
    }, [productId]);

    const handleAddToCartDetail = (e) => {
        e.preventDefault();
        if (username === "") {
            toast.error(
                "Bạn phải đăng nhập trước khi thêm sản phẩm vào giỏ hàng",
                {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                }
            );
        } else {
            var data = {
                idUser: cookies.get("user").idUser,
                idProduct: e.target.id,
                size: checked,
            };

            axios
                .post("http://localhost/DACN1_API/api/setCart.php", data)
                .then((response) => {
                    console.log(response.data);
                });
        }
    };

    const handleCheck = (e) => {
        console.log(e);
        setChecked(e);
    };

    const ref = useRef(null);

    const handleImage = (event) => {
        const ProductImg = ref.current;
        var SmallImg = document.getElementsByClassName(event.target.className);
        ProductImg.src = SmallImg[0].src;
    };

    return (
        <>
            <Header />
            {detailProduct.map((detail, index) => (
                <div className="small-container single-product" key={index}>
                    <div className="col-2-detail">
                        <img
                            id="imgProduct"
                            src={detail.imageProduct_1}
                            alt="Image Product"
                            ref={ref}
                        />
                        <div className="small-img-row">
                            <div className="small-img-col">
                                <img
                                    src={detail.imageProduct_1}
                                    alt=""
                                    className="small-img1"
                                    onClick={handleImage}
                                />
                            </div>
                            <div className="small-img-col">
                                <img
                                    src={detail.imageProduct_2}
                                    alt=""
                                    className="small-img2"
                                    onClick={handleImage}
                                />
                            </div>
                            <div className="small-img-col">
                                <img
                                    src={detail.imageProduct_3}
                                    alt=""
                                    className="small-img3"
                                    onClick={handleImage}
                                />
                            </div>
                            <div className="small-img-col">
                                <img
                                    src={detail.imageProduct_4}
                                    alt=""
                                    className="small-img4"
                                    onClick={handleImage}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-2-detail margin_top">
                        <h1 className="nameProduct">{detail.nameProduct}</h1>
                        <p className="about-product">
                            {detail.descriptionProduct}
                        </p>
                        <h4 className="price">{detail.priceProduct}₫</h4>
                        <p className="about-product about1">
                            Sản phẩm ở VuxStore có giá tốt nhất thị trường
                        </p>
                        <div className="title-select-size">
                            <p>Select Size</p>
                        </div>
                        <div className="select-size">
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        name="checked"
                                        quantity={detail.size37}
                                        onChange={handleCheck}
                                        disabled={detail.size37 === 0}
                                    />
                                    <span>
                                        Size 37{" "}
                                        <p className="quantity-product-detail">
                                            {detail.size37 === 0
                                                ? "Hết hàng"
                                                : "Còn " +
                                                  detail.size37 +
                                                  " sản phẩm"}
                                        </p>
                                    </span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="checked"
                                        id=""
                                        onChange={() => setChecked(38)}
                                        disabled={detail.size38 === 0}
                                    />
                                    <span>
                                        Size 38{" "}
                                        <p className="quantity-product-detail">
                                            {detail.size38 === 0
                                                ? "Hết hàng"
                                                : "Còn " +
                                                  detail.size38 +
                                                  " sản phẩm"}
                                        </p>
                                    </span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="checked"
                                        id=""
                                        onChange={() => setChecked(39)}
                                        disabled={detail.size39 === 0}
                                    />
                                    <span>
                                        Size 39{" "}
                                        <p className="quantity-product-detail">
                                            {detail.size39 === 0
                                                ? "Hết hàng"
                                                : "Còn " +
                                                  detail.size39 +
                                                  " sản phẩm"}
                                        </p>
                                    </span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="checked"
                                        id=""
                                        onChange={() => setChecked(40)}
                                        disabled={detail.size40 === 0}
                                    />
                                    <span>
                                        Size 40{" "}
                                        <p className="quantity-product-detail">
                                            {detail.size40 === 0
                                                ? "Hết hàng"
                                                : "Còn " +
                                                  detail.size40 +
                                                  " sản phẩm"}
                                        </p>
                                    </span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="checked"
                                        id=""
                                        onChange={() => setChecked(41)}
                                        disabled={detail.size41 === 0}
                                    />
                                    <span>
                                        Size 41{" "}
                                        <p className="quantity-product-detail">
                                            {detail.size41 === 0
                                                ? "Hết hàng"
                                                : "Còn " +
                                                  detail.size41 +
                                                  " sản phẩm"}
                                        </p>
                                    </span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="checked"
                                        id=""
                                        onChange={() => setChecked(42)}
                                        disabled={detail.size42 === 0}
                                    />
                                    <span>
                                        Size 42{" "}
                                        <p className="quantity-product-detail">
                                            {detail.size42 === 0
                                                ? "Hết hàng"
                                                : "Còn " +
                                                  detail.size42 +
                                                  " sản phẩm"}
                                        </p>
                                    </span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="checked"
                                        id=""
                                        onChange={() => setChecked(43)}
                                        disabled={detail.size43 === 0}
                                    />
                                    <span>
                                        Size 43{" "}
                                        <p className="quantity-product-detail">
                                            {detail.size43 === 0
                                                ? "Hết hàng"
                                                : "Còn " +
                                                  detail.size43 +
                                                  " sản phẩm"}
                                        </p>
                                    </span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="checked"
                                        id=""
                                        onChange={() => setChecked(44)}
                                        disabled={detail.size44 === 0}
                                    />
                                    <span>
                                        Size 44{" "}
                                        <p className="quantity-product-detail">
                                            {detail.size44 === 0
                                                ? "Hết hàng"
                                                : "Còn " +
                                                  detail.size44 +
                                                  " sản phẩm"}
                                        </p>
                                    </span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="checked"
                                        id=""
                                        onChange={() => setChecked(45)}
                                        disabled={detail.size45 === 0}
                                    />
                                    <span>
                                        Size 45{" "}
                                        <p className="quantity-product-detail">
                                            {detail.size45 === 0
                                                ? "Hết hàng"
                                                : "Còn " +
                                                  detail.size45 +
                                                  " sản phẩm"}
                                        </p>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <p className="about-product about1">
                            Vui lòng chọn{" "}
                            <span className="style-about-quantity">Size </span>{" "}
                            cho sản phẩm.{" "}
                            <span className="style-about-quantity view-product">
                                <GoEye /> {detail.viewProduct}{" "}
                            </span>
                        </p>
                        <div className="btn-detail">
                            <a
                                href="/payment"
                                className="btn-buy-detail buy-now"
                            >
                                <button
                                    className="buy-now-detail-btn"
                                    onClick={handleAddToCartDetail}
                                >
                                    Mua Ngay
                                </button>
                            </a>
                            <a href="" className="btn-buy-detail add-to-cart">
                                <button
                                    className="add-to-cart-detail-btn"
                                    id={detail.idProduct}
                                    onClick={handleAddToCartDetail}
                                >
                                    Thêm Giỏ Hàng
                                </button>
                            </a>
                        </div>
                        <div className="term-detail">
                            <div className="delivery">
                                <h3>
                                    <FaShippingFast className="icon-ship" />{" "}
                                    Free Delivery
                                </h3>
                                <p>
                                    Miễn phí vận chuyển khi mua hàng tại
                                    VuxStore
                                </p>
                            </div>
                            <div className="delivery d1">
                                <h3>
                                    <TbTruckReturn className="icon-ship" />{" "}
                                    Returns Delivery
                                </h3>
                                <p>
                                    Miễn phí đổi trả hàng khi không hài lòng về
                                    sản phẩm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="products-container">
                <div className="layout">
                    <div className="sec-heading">SẢN PHẨM LIÊN QUAN</div>
                    <div className="products">
                        {productRelated.map((product) => (
                            <Product key={product.idProduct} data={product} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default DetailProduct;
