import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";

import "./DetailProduct.scss";
import { useRef, useEffect, useState } from "react";
import Products from "../Products/Products";
import Product from "../Products/Product/Product";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function DetaiProduct(data) {
    const [quantity, setQuantity] = useState(1);
    const [isDisable, setDisable] = useState(true);
    const [productRelated, setProductRelated] = useState([]);
    const [detailProduct, setDetailProduct] = useState([]);

    const navigate = useNavigate();
    const { productId } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost/DACN1_API/api/getProduct.php`)
            .then((response) => {
                setProductRelated(response.data);
            });
    }, []);

    useEffect(() => {
        axios
            .get(
                `http://localhost/DACN1_API/api/getProductDetail.php?idproduct=${productId}`
            )
            .then((response) => {
                setDetailProduct(response.data);
            });
    }, [productId]);

    const handleTru = () => {
        setQuantity((prew) => quantity - 1);
        if (quantity === 2) {
            setQuantity(1);
            setDisable(true);
        }
    };

    const handleCong = () => {
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
            {detailProduct.map((detail) => (
                <div className="small-container single-product">
                    <div className="col-2">
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
                    <div className="col-2 margin_top">
                        <h1>{detail.nameProduct}</h1>
                        <p className="about-product">
                            {detail.descriptionProduct}
                        </p>
                        <h4 className="price">{detail.priceProduct}₫</h4>
                        <p className="about-product about1">
                            Sản phẩm ở VuxStore có giá tốt nhất thị trường
                        </p>
                        <div className="size-quantity">
                            <span>
                                <select name="" id="" className="select">
                                    <option value="">SELECT SIZE</option>
                                    <option value="">36</option>
                                    <option value="">37</option>
                                    <option value="">38</option>
                                    <option value="">39</option>
                                    <option value="">40</option>
                                    <option value="">41</option>
                                    <option value="">42</option>
                                    <option value="">43</option>
                                </select>
                            </span>
                            <div className="input-quantity">
                                <button
                                    className="tru"
                                    onClick={handleTru}
                                    disabled={isDisable}
                                >
                                    -
                                </button>
                                <input
                                    className="input"
                                    type="text"
                                    value={quantity}
                                />
                                <button className="cong" onClick={handleCong}>
                                    +
                                </button>
                            </div>
                        </div>
                        <p className="about-product about1">
                            Chỉ còn{" "}
                            <span className="style-about-quantity">
                                {detail.quantityProduct} sản phẩm
                            </span>{" "}
                            trong kho hàng!
                        </p>
                        <div className="buy-btn">
                            <a href="/payment" className="btn buy-now">
                                Mua Ngay
                            </a>
                            <a href="" className="btn buy-now add-to-cart">
                                Thêm Giỏ Hàng
                            </a>
                        </div>
                        <div className="delivery">
                            <h3>
                                <FaShippingFast className="icon-ship" /> Free
                                Delivery
                            </h3>
                            <p>Miễn phí vận chuyển khi mua hàng tại VuxStore</p>
                        </div>
                        <div className="delivery d1">
                            <h3>
                                <TbTruckReturn className="icon-ship" /> Returns
                                Delivery
                            </h3>
                            <p>
                                Miễn phí đổi trả hàng khi không hài lòng về sản
                                phẩm
                            </p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="products-container">
                <div className="layout">
                    <div className="sec-heading">{}</div>
                    {/* <Category /> */}
                    <div className="products">
                        {productRelated.map((product) => (
                            <Product key={product.idProduct} data={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetaiProduct;
