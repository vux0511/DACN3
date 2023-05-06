import "./Cart.scss";
// import '../../assets/product/'

function Cart() {
    return (
        <div>
            <div className="small-container cart-page">
                <h3 className="sec-cart">Giỏ hàng của bạn</h3>
                <table>
                    <tr>
                        <th>Sản Phẩm</th>
                        <th>Số Lượng</th>
                        <th>Giá</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img
                                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3a34d4b-7c78-4fe2-bd56-a491a861ce8e/air-force-1-react-shoes-mm8pv3.png"
                                    alt=""
                                />
                                <div>
                                    <p>Nike Court Vision Low</p>
                                    <div className="small">2.000.000đ</div>
                                    <a href="">Xoá</a>
                                </div>
                            </div>
                        </td>

                        <td>
                            <input type="number" value={1} />
                        </td>
                        <td>2.000.000đ</td>
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
                                <button>Đặt Hàng</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Cart;
