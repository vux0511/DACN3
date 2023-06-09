import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./DetailProduct.scss";
import { useRef, useEffect, useState } from "react";
import Products from "../Products/Products";
import Product from "../Products/Product/Product";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function DetailProduct(data) {
    const [quantity, setQuantity] = useState(1);
    const [isDisable, setDisable] = useState(true);
    const [productRelated, setProductRelated] = useState([]);
    const [detailProduct, setDetailProduct] = useState([]);
    const [checked, setChecked] = useState();

    const navigate = useNavigate();
    const { productId } = useParams();

    useEffect(() => {
        axios
            .get(
                `http://localhost/DACN1_API/api/getProductDetail.php?idproduct=${productId}`
            )
            .then((response) => {
                setDetailProduct(response.data);
            });
    }, [productId]);

    useEffect(() => {
        axios
            .get(
                `http://localhost/DACN1_API/api/getProductRelated.php?idproduct=${productId}`
            )
            .then((response) => {
                setProductRelated(response.data);
            });
    }, [productId]);

    const handleDecrease = () => {
        setQuantity((prew) => quantity - 1);
        if (quantity === 2) {
            setQuantity(1);
            setDisable(true);
        }
    };

    const handleIncrease = () => {
        setQuantity((prew) => quantity + 1);
        setDisable(false);
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
            {detailProduct.map((detail) => (
                <div className="small-container single-product">
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
                                    <input type="radio" name="checked" id="" />
                                    <span>Size 37</span>
                                </label>
                                <label>
                                    <input type="radio" name="checked" id="" />
                                    <span>Size 37</span>
                                </label>
                                <label>
                                    <input type="radio" name="checked" id="" />
                                    <span>Size 37</span>
                                </label>
                                <label>
                                    <input type="radio" name="checked" id="" />
                                    <span>Size 37</span>
                                </label>
                                <label>
                                    <input type="radio" name="checked" id="" />
                                    <span>Size 37</span>
                                </label>
                                <label>
                                    <input type="radio" name="checked" id="" />
                                    <span>Size 37</span>
                                </label>
                                <label>
                                    <input type="radio" name="checked" id="" />
                                    <span>Size 37</span>
                                </label>
                                <label>
                                    <input type="radio" name="checked" id="" />
                                    <span>Size 37</span>
                                </label>
                                <label>
                                    <input type="radio" name="checked" id="" />
                                    <span>Size 37</span>
                                </label>
                            </div>
                        </div>
                        <p className="about-product about1">
                            Chỉ còn{" "}
                            <span className="style-about-quantity">
                                {detail.quantityProduct} sản phẩm
                            </span>{" "}
                            trong kho hàng!
                        </p>
                        <div className="btn-detail">
                            <a
                                href="/payment"
                                className="btn-buy-detail buy-now"
                            >
                                Mua Ngay
                            </a>
                            <a href="" className="btn-buy-detail add-to-cart">
                                Thêm Giỏ Hàng
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
