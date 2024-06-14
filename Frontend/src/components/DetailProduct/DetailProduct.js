import { FaRegEye } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CALL_URL from "../../api/CALL_URL";
import { useRef, useEffect, useState } from "react";
import Product from "../Products/Product/Product";
import axios from "axios";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { TbTruckDelivery } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiAlarmWarningLine } from "react-icons/ri";
import { Rate } from "antd";
import { Input } from "antd";
const { TextArea } = Input;

function DetailProduct(data) {
    const [productRelated, setProductRelated] = useState([]);
    const [detailProduct, setDetailProduct] = useState([]);
    const [checked, setChecked] = useState();
    const [checkOrder, setCheckOrder] = useState();
    const [feedBack, setFeedBack] = useState("");
    const [averageRating, setAverageRating] = useState();
    const [listFeedBack, setListFeedBack] = useState([]);
    const [rate, setRate] = useState(5);
    const cookies = new Cookies();
    const [userName, setUsername] = useState("");
    const { productId } = useParams();

    const handleChangeRating = (value) => {
        setRate(value);
    };

    const handleChangeFeedback = (e) => {
        setFeedBack(e.target.value);
    };

    useEffect(() => {
        if (cookies.get("user")) {
            setUsername(cookies.get("user").email);
        } else {
            setUsername("empty");
        }
        // console.log(cookies.get("user_token"));
    }, []);

    // Chi tiết SP
    useEffect(() => {
        axios
            .get(`${CALL_URL.URL_getProductDetail}/?idProduct=${productId}`)
            .then((response) => {
                setDetailProduct(response.data);
            });
    }, [productId]);

    // Check đã mua hàng chưa
    useEffect(() => {
        var data = {
            user_token: cookies.get("user_token"),
            idProduct: productId,
        };
        axios.post(CALL_URL.URL_checkOrdered, data).then((response) => {
            setCheckOrder(response.data);
        });
    }, []);

    // Đánh giá
    const handleSetFeedBack = (e) => {
        e.preventDefault();
        var data = {
            user_token: cookies.get("user_token"),
            idProduct: productId,
            rate: rate,
            comment: feedBack,
        };
        if (data.comment !== "") {
            axios.post(CALL_URL.URL_setFeedback, data).then((response) => {
                toast.success("Đánh giá thành công", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
        } else {
            toast.warning("Bạn phải điền đủ các trường", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                // draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    const numberFormat = (number) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(number);
    };

    // Get feedback
    useEffect(() => {
        var data = {
            idProduct: productId,
        };
        axios
            .get(`${CALL_URL.URL_getFeedbackByIdProduct}${productId}/1`)
            .then((response) => {
                setListFeedBack(response.data);
                const ratings = response.data.map((rate) => rate.rate);
                const totalRating = ratings.reduce(
                    (acc, rate) => acc + rate,
                    0
                );
                setAverageRating(
                    ratings.length > 0
                        ? (totalRating / ratings.length).toFixed(2)
                        : 0
                );
            });
    }, []);

    // SP liên quan
    // useEffect(() => {
    //     axios
    //         .get(`${CALL_URL.URL_getProductRelated}?idproduct=${productId}`)
    //         .then((response) => {
    //             setProductRelated(response.data);
    //         });
    // }, [productId]);

    const handleAddToCartDetail = (e) => {
        e.preventDefault();
        if (userName === "empty") {
            toast.error(
                "Bạn phải đăng nhập trước khi thêm sản phẩm vào giỏ hàng",
                {
                    position: "top-right",
                    autoClose: 5000,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                }
            );
        } else {
            var data = {
                user_token: cookies.get("user_token"),
                idProduct: detailProduct._id,
                nameProduct: detailProduct.nameProduct,
                imgProduct: detailProduct.image.img1,
                quantity: 1,
                unit_price: detailProduct.price,
            };

            axios.post(CALL_URL.URL_setCart, data).then((response) => {
                toast.info("Thêm thành công", {
                    position: "bottom-right",
                    autoClose: 5000,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
        }
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
            <div className="small-container detail__wrapper">
                <div className="detail__wrapper-image">
                    <img
                        id="imgProduct"
                        src={`http://localhost:5001/images/products/${detailProduct.image?.img1}`}
                        alt="Image Product"
                        ref={ref}
                    />
                    <div className="small-img-row">
                        <div className="small-img-col">
                            <img
                                src={`http://localhost:5001/images/products/${detailProduct.image?.img1}`}
                                alt=""
                                className="small-img1"
                                onClick={handleImage}
                            />
                        </div>
                        <div className="small-img-col">
                            <img
                                src={`http://localhost:5001/images/products/${detailProduct.image?.img2}`}
                                alt=""
                                className="small-img2"
                                onClick={handleImage}
                            />
                        </div>
                        <div className="small-img-col">
                            <img
                                src={`http://localhost:5001/images/products/${detailProduct.image?.img3}`}
                                alt=""
                                className="small-img3"
                                onClick={handleImage}
                            />
                        </div>
                        <div className="small-img-col">
                            <img
                                src={`http://localhost:5001/images/products/${detailProduct.image?.img4}`}
                                alt=""
                                className="small-img4"
                                onClick={handleImage}
                            />
                        </div>
                    </div>
                </div>
                <div className="detail__wrapper-content">
                    <div className="detail__wrapper-name">
                        {detailProduct.nameProduct}
                    </div>
                    <p className="detail__wrapper-about">
                        {detailProduct.description}
                    </p>
                    <h4 className="detail__wrapper-price">
                        {numberFormat(detailProduct.price)}
                    </h4>
                    <p className="detail__wrapper-quantity">
                        <p>Kho hàng còn {detailProduct.quantity} sản phẩm</p>
                        <p>
                            <FaRegEye className="detail__wrapper-icon" /> 100
                        </p>
                    </p>
                    <div className="btn-detail">
                        <a href="/payment" className="btn-buy-detail buy-now">
                            <button
                                className="buy-now-detail-btn"
                                onClick={handleAddToCartDetail}
                            >
                                Mua Ngay
                            </button>
                        </a>
                        <a href="#" className="btn-buy-detail add-to-cart">
                            <button
                                className="add-to-cart-detail-btn"
                                id={detailProduct._id}
                                onClick={handleAddToCartDetail}
                            >
                                Thêm Giỏ Hàng
                            </button>
                        </a>
                        <ToastContainer />
                    </div>
                    <div className="detail__wrapper-feature">
                        <div className="detail__wrapper-feature-title">
                            ƯU ĐÃI ĐI KÈM
                        </div>
                        <div className="detail__wrapper-feature-wrapper">
                            <div className="detail__wrapper-feature-items">
                                <TbTruckDelivery />
                                Giao hàng tiết kiệm
                            </div>
                            <div className="detail__wrapper-feature-items">
                                <GiMoneyStack />
                                Sản phẩm luôn có giá tốt nhất
                            </div>
                            <div className="detail__wrapper-feature-items">
                                <AiOutlineSafetyCertificate />
                                Bảo hành 12 tháng tại trung tâm bảo hành Chính
                                hãng.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail__rating">
                <div className="detail__rating-wrapper">
                    <div className="detail__rating-view">
                        <div className="detail__rating-view-wrapper">
                            <div className="detail__rating-view-score">
                                {averageRating ? averageRating : "loading"}
                                <span>/5</span>
                            </div>
                            <Rate
                                allowHalf
                                value={
                                    averageRating ? averageRating : "loading"
                                }
                                disabled
                                className="detail__rating-view-star"
                            />
                            <div className="detail__rating-view-total">
                                điểm đánh giá trung bình
                            </div>
                        </div>
                    </div>
                    <form
                        className="detail__rating-form"
                        onSubmit={handleSetFeedBack}
                    >
                        <div className="detail__rating-form-heading">
                            Đánh giá sản phẩm
                        </div>
                        <label
                            htmlFor="star"
                            className="detail__rating-form-label"
                        >
                            Điểm đánh giá
                        </label>
                        <Rate
                            id="star"
                            defaultValue={5}
                            onChange={handleChangeRating}
                            style={{
                                size: "30px",
                            }}
                            className="detail__rating-form-star"
                        />
                        <label
                            htmlFor="comment"
                            className="detail__rating-form-label"
                        >
                            Đánh giá
                        </label>
                        <TextArea
                            id="comment"
                            placeholder="Đánh giá sản phẩm"
                            onChange={handleChangeFeedback}
                            style={{
                                width: "100%",
                                padding: "10px 20px",
                                outline: "none",
                                border: "1px solid #dfdddd",
                                fontFamily: "Inter, sans-serif",
                                fontSize: "15px",
                            }}
                            autoSize={{
                                minRows: 3,
                            }}
                        />
                        {checkOrder === true ? (
                            <button className="button-rating">Đánh giá</button>
                        ) : (
                            <div className="detail__title-error">
                                <RiAlarmWarningLine />{" "}
                                <p>Bạn phải mua sản phẩm trước khi đánh giá!</p>
                            </div>
                        )}
                    </form>
                </div>
                <div className="detail__rating-list">
                    <div className="detail__rating-list-heading">
                        Danh sách đánh giá
                    </div>
                    <div className="detail__rating-list-wrapper">
                        {listFeedBack.length > 0 ? (
                            listFeedBack.map((list, index) => (
                                <div
                                    className="detail__rating-list-items"
                                    key={index}
                                >
                                    <div className="detail__rating-list-user">
                                        <img
                                            src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                                            alt=""
                                            className="detail__rating-user-avatar"
                                        />
                                        <div>
                                            <div className="detail__rating-list-user-right">
                                                <div className="detail__rating-list-user-name">
                                                    {list.user.email}
                                                </div>
                                                <div className="detail__rating-list-user-time">
                                                    <AiOutlineClockCircle />
                                                    16/5/2024 <span>14:28</span>
                                                </div>
                                            </div>
                                            <div className="detail__rating-list-star">
                                                <Rate
                                                    allowHalf
                                                    value={list.rate}
                                                    disabled
                                                    style={{
                                                        fontSize: "15px",
                                                    }}
                                                    className="detail__rating-view-star"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detail__rating-list-review">
                                        {list.comment}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="detail__title-error">
                                <RiAlarmWarningLine />{" "}
                                <p>Sản phẩm chưa có đánh giá!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
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
