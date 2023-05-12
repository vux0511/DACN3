import { MdOutlinePayment } from "react-icons/md";

import Popup from "../Popup/Popup";
import { useState } from "react";
import "./Payment.scss";

function Payment() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <div className="main-content">
                <div className="layout">
                    <div className="payment-heading">
                        <h3 className="title-payment">
                            <MdOutlinePayment /> Thanh Toán
                        </h3>
                        <p>Vui lòng kiểm tra thông tin trước khi thanh toán</p>
                    </div>
                    <div className="row-payment">
                        <div className="col-2 col-left">
                            <div className="payment-title">
                                <h3>
                                    <u>Thông tin khách hàng</u>
                                </h3>
                            </div>
                            {/* <form action="#" className="payment-form"> */}
                            <label htmlFor="fullname" className="payment-label">
                                Họ tên
                            </label>
                            <input
                                type="text"
                                id="fullname"
                                className="payment-input"
                                placeholder="Nhập tên của bạn..."
                                autoComplete="off"
                            />

                            <label htmlFor="phone" className="payment-label">
                                Số điện thoại
                            </label>
                            <input
                                type="number"
                                id="phone"
                                className="payment-input"
                                placeholder="Nhập số điện thoại của bạn..."
                                autoComplete="off"
                            />

                            <label htmlFor="address" className="payment-label">
                                Địa chỉ
                            </label>
                            <input
                                type="text"
                                id="address"
                                className="payment-input"
                                placeholder="Nhập địa chỉ của bạn..."
                                autoComplete="off"
                            />

                            <label htmlFor="email" className="payment-label">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                className="payment-input"
                                placeholder="Nhập email của bạn..."
                                autoComplete="off"
                            />

                            <div className="type-payment">
                                <p className="title-type-payment">
                                    Hình thức thanh toán
                                </p>
                                <input
                                    checked
                                    type="radio"
                                    id="shipCod"
                                    name="shipCod"
                                    value="shipCod"
                                />
                                <label for="shipCod"> Ship COD</label>
                            </div>
                            <button
                                onClick={() => setButtonPopup(true)}
                                className="payment-submit"
                            >
                                Đặt Hàng
                            </button>
                            <Popup
                                trigger={buttonPopup}
                                setTrigger={setButtonPopup}
                            >
                                <h3 className="title-thanks">Thành Công!</h3>
                                <p className="decs-thanks">
                                    Đặt hàng thành công!
                                </p>
                                <p>Cảm ơn bạn đã đặt hàng!</p>
                            </Popup>
                            {/* </form> */}
                        </div>
                        <div className="col-2 col-right">
                            <div className="payment-title-cart">
                                <div className="payment-title">
                                    <h3>Giỏ hàng</h3>
                                </div>
                                <div className="product-items">
                                    <div className="row-product-payment">
                                        <div className="col-2">
                                            <div className="name-product">
                                                Nike Court Vision Low
                                            </div>
                                            <div className="quantity-price-product">
                                                <p> 2,069,000₫ x 2</p>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="total-price-product">
                                                2,069,000₫
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-product-payment">
                                        <div className="col-2">
                                            <div className="name-product">
                                                Nike Court Vision Low
                                            </div>
                                            <div className="quantity-price-product">
                                                <p> 2,069,000₫ x 2</p>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="total-price-product">
                                                2,069,000₫
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-product-payment">
                                        <div className="col-2">
                                            <div className="name-product">
                                                Nike Court Vision Low
                                            </div>
                                            <div className="quantity-price-product">
                                                <p> 2,069,000₫ x 2</p>
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="total-price-product">
                                                2,069,000₫
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-total-payment">
                                        <div className="col-2">
                                            <div className="title-subtotal-product">
                                                Tổng thành tiền
                                            </div>
                                        </div>
                                        <div className="col-2">
                                            <div className="subtotal-product">
                                                20,069,000₫
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
