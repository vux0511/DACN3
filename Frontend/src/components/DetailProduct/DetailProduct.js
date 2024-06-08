import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { GoEye } from "react-icons/go";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CALL_URL from "../../api/CALL_URL";
import { useRef, useEffect, useState } from "react";
import Product from "../Products/Product/Product";
import axios from "axios";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function DetailProduct(data) {
    const [productRelated, setProductRelated] = useState([]);
    const [detailProduct, setDetailProduct] = useState([]);
    const [checked, setChecked] = useState();
    const cookies = new Cookies();
    const [username, setUsername] = useState("");
    const { productId } = useParams();

    useEffect(() => {
        if (cookies.get("user")) {
            setUsername(cookies.get("user").username);
        }
    }, []);

    // Chi tiết SP
    useEffect(() => {
        axios
            .get(`${CALL_URL.URL_getProductDetail}?idproduct=${productId}`)
            .then((response) => {
                setDetailProduct(response.data);
            });
    }, [productId]);

    // View Product
    useEffect(() => {
        axios
            .get(`${CALL_URL.URL_setViewProduct}?idproduct=${productId}`)
            .then((response) => {});
    }, []);

    // SP liên quan
    useEffect(() => {
        axios
            .get(`${CALL_URL.URL_getProductRelated}?idproduct=${productId}`)
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

            axios.post(CALL_URL.URL_setCart, data).then((response) => {
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
                        <h4 className="price">
                            {new Intl.NumberFormat("vn-VI", {
                                style: "currency",
                                currency: "VND",
                            }).format(detail.priceProduct)}
                        </h4>
                        <p className="about1">
                            Sản phẩm ở VuxStore có giá tốt nhất thị trường
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
