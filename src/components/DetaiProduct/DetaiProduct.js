import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";

import "./DetaiProduct.scss";
import { useRef, useEffect, useState } from "react";
import Products from "../Products/Products";

function DetaiProduct() {
    const [quantity, setQuantity] = useState(1);
    const [isDisable, setDisable] = useState(true);

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
    useEffect(() => {
        const ProductImg = ref.current;
        var SmallImg = document.getElementsByClassName("small-img");

        SmallImg[0].onclick = function () {
            ProductImg.src = SmallImg[0].src;
        };

        SmallImg[1].onclick = function () {
            ProductImg.src = SmallImg[1].src;
        };

        SmallImg[2].onclick = function () {
            ProductImg.src = SmallImg[2].src;
        };

        SmallImg[3].onclick = function () {
            ProductImg.src = SmallImg[3].src;
        };
    }, []);

    return (
        <>
            <div className="small-container single-product">
                <div className="row">
                    <div className="col-2">
                        <img
                            id="imgProduct"
                            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55eccda1-e687-4b28-affe-b3763f35da1c/court-vision-low-shoes-5RDlNK.png"
                            alt="Image Product"
                            ref={ref}
                        />
                        <div className="small-img-row">
                            <div className="small-img-col">
                                <img
                                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/661d9634-4dc8-4b41-aaec-90b2c56ed64c/court-vision-low-shoes-5RDlNK.png"
                                    alt=""
                                    className="small-img"
                                />
                            </div>
                            <div className="small-img-col">
                                <img
                                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55eccda1-e687-4b28-affe-b3763f35da1c/court-vision-low-shoes-5RDlNK.png"
                                    alt=""
                                    className="small-img"
                                />
                            </div>
                            <div className="small-img-col">
                                <img
                                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d74fea1f-9443-4b02-95a1-e9639326ff74/court-vision-low-shoes-5RDlNK.png"
                                    alt=""
                                    className="small-img"
                                />
                            </div>
                            <div className="small-img-col">
                                <img
                                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f191f2e1-3558-47ee-aa9b-73053ba20a7e/court-vision-low-shoes-5RDlNK.png"
                                    alt=""
                                    className="small-img"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-2 margin_top">
                        <h1>Nike Court Vision Low</h1>
                        <p className="about-product">
                            The Nike Air Force 1 Shadow puts a playful twist on
                            a classic b-ball design.Using a layered approach,
                            doubling the branding and exaggerating the midsole,
                            it highlights AF-1 DNA with a bold, new look.
                        </p>
                        <h4 className="price">2,069,000₫</h4>
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
                                12 sản phẩm
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
            </div>
            <Products tittle_header={"SẢN PHẨM LIÊN QUAN"} />
        </>
    );
}

export default DetaiProduct;
