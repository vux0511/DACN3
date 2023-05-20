import "./Cart.scss";
import { useState, useEffect } from "react";
import { MdOutlineClear } from "react-icons/md";
import Cookies from "universal-cookie";
import axios from "axios";

function Cart() {
    const cookies = new Cookies();
    const [username, setUsername] = useState("");
    const [itemCarts, setItemCarts] = useState([]);
    const [isDisable, setDisable] = useState(true);
    const [subTotal, setSubTotal] = useState(0);
    const [quantityCart, setQuantityCart] = useState({
        idProduct: 12,
        quantity: 12,
    });

    useEffect(() => {
        if (cookies.get("user")) {
            setUsername(cookies.get("user").username);
        }
    }, []);

    useEffect(() => {
        var data = {
            idUser: cookies.get("user").idUser,
        };
        axios
            .post("http://localhost/DACN1_API/api/getCart.php", data)
            .then((response) => {
                setItemCarts(response.data);
                console.log(itemCarts);
            });
    }, []);

    const handleDecrease = (e) => {
        setQuantityCart((prew) => quantityCart - 1);
        if (quantityCart === 2) {
            setQuantityCart(1);
            setDisable(true);
        }
    };

    const handleIncrease = (e) => {
        // console.log(e.target.id);
        // var tempCarts = itemCarts;
        // tempCarts[e.target.id] = {
        //     ...tempCarts[e.target.id],
        //     quantityProductCart: tempCarts[e.target.id].quantityProductCart + 1,
        // };
        // setItemCarts(tempCarts);
    };

    return (
        <div>
            <div className="small-container cart-page">
                <h3 className="sec-cart">Giỏ hàng của bạn</h3>
                <table>
                    <thead>
                        <tr>
                            <th className="th_product">Sản Phẩm</th>
                            <th className="th_quantity">Số Lượng</th>
                            <th className="th_price">Giá</th>
                            <th className="delete">Xoá</th>
                        </tr>
                    </thead>
                    {/* Product */}
                    <tbody>
                        {itemCarts.map((itemCart, index) => (
                            <tr key={itemCart.idProduct}>
                                <td>
                                    <div className="cart-info">
                                        <img
                                            src={itemCart.imageProduct_1}
                                            alt=""
                                        />
                                        <div>
                                            <p className="name-product-cart">
                                                {itemCart.nameProduct}
                                            </p>
                                            <div className="small">
                                                {itemCart.priceProduct}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="css__input">
                                    <span>
                                        {/* <button
                                            className="tru"
                                            onClick={handleDecrease}
                                            disabled={isDisable}
                                        >
                                            -
                                        </button> */}
                                        <input
                                            type="number"
                                            className="input__cart"
                                            defaultValue={
                                                itemCart.quantityProductCart
                                            }
                                        />
                                        {/* <button
                                            id={index}
                                            className="cong"
                                            onClick={handleIncrease}
                                        >
                                            +
                                        </button> */}
                                    </span>
                                </td>
                                <td className="price">
                                    {itemCart.quantityProductCart *
                                        itemCart.priceProduct}
                                </td>
                                <td>
                                    <a href="">
                                        <MdOutlineClear />
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="total-price">
                    <table>
                        <thead>
                            <tr>
                                <td>Tổng giá</td>
                                <td>20.000.000đ</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <a href="/payment">
                                        <button className="">Đặt Hàng</button>
                                    </a>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Cart;
