import "./Cart.scss";
import { useState } from "react";
import { MdOutlineClear } from "react-icons/md";

function Cart() {
    const [quantityCart, setQuantityCart] = useState(1);
    const [isDisable, setDisable] = useState(true);

    const handleTru = () => {
        setQuantityCart((prew) => quantityCart - 1);
        if (quantityCart === 2) {
            setQuantityCart(1);
            setDisable(true);
        }
    };

    const handleCong = () => {
        setQuantityCart((prew) => quantityCart + 1);
        setDisable(false);
    };
    return (
        <div>
            <div className="small-container cart-page">
                <h3 className="sec-cart">Giỏ hàng của bạn</h3>
                <table>
                    <tr>
                        <th className="th_product">Sản Phẩm</th>
                        <th className="th_quantity">Số Lượng</th>
                        <th className="th_price">Giá</th>
                        <th className="delete">Xoá</th>
                    </tr>
                    {/* Product */}
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img
                                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3a34d4b-7c78-4fe2-bd56-a491a861ce8e/air-force-1-react-shoes-mm8pv3.png"
                                    alt=""
                                />
                                <div>
                                    <p>Nike Air Force 1</p>
                                    <div className="small">2,981,299₫</div>
                                </div>
                            </div>
                        </td>
                        <td className="css__input">
                            <span>
                                <button
                                    className="tru"
                                    onClick={handleTru}
                                    disabled={isDisable}
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={quantityCart}
                                    className="input__cart"
                                />
                                <button className="cong" onClick={handleCong}>
                                    +
                                </button>
                            </span>
                        </td>
                        <td className="price">2.000.000đ</td>
                        <td>
                            <a href="">
                                <MdOutlineClear />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img
                                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d5410b82-214b-4628-a06f-e0753795782f/air-huarache-craft-shoes-Xf0QhN.png"
                                    alt=""
                                />
                                <div>
                                    <p>Nike Air Huarache Craft</p>
                                    <div className="small">2,680,299₫</div>
                                </div>
                            </div>
                        </td>
                        <td className="css__input">
                            <span>
                                <button
                                    className="tru"
                                    onClick={handleTru}
                                    disabled={isDisable}
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={quantityCart}
                                    className="input__cart"
                                />
                                <button className="cong" onClick={handleCong}>
                                    +
                                </button>
                            </span>
                        </td>
                        <td className="price">2.000.000đ</td>
                        <td>
                            <a href="">
                                <MdOutlineClear />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img
                                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/34daf410-4fec-46c4-8ce4-47721a8b66f9/af-1-shadow-shoes-MjtPWr.png"
                                    alt=""
                                />
                                <div>
                                    <p>Nike AF-1 Shadow</p>
                                    <div className="small">3,254,649₫</div>
                                </div>
                            </div>
                        </td>
                        <td className="css__input">
                            <span>
                                <button
                                    className="tru"
                                    onClick={handleTru}
                                    disabled={isDisable}
                                >
                                    -
                                </button>
                                <input
                                    type="text"
                                    value={quantityCart}
                                    className="input__cart"
                                />
                                <button className="cong" onClick={handleCong}>
                                    +
                                </button>
                            </span>
                        </td>
                        <td className="price">2.000.000đ</td>
                        <td>
                            <a href="">
                                <MdOutlineClear />
                            </a>
                        </td>
                    </tr>
                </table>
                <div className="total-price">
                    <table>
                        <tr>
                            <td>Tổng giá</td>
                            <td>20.000.000đ</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <a href="/payment">
                                    <button>Đặt Hàng</button>
                                </a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Cart;
