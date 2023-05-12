import "./Product.scss";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function Product({ setCartCount, cartCount, key, idProduct, data }) {
    // const [cart, setCart] = useState(0);
    // const handlerAddCart = () => {
    //     setCart((prew) => prew + 1);
    // };
    const setCount = () => {
        setCartCount((prew) => cartCount + 1);
    };

    return (
        <div className="product-card">
            <a href={`/product/${data.idProduct}`} className="clear">
                <div className="thumbnail">
                    <img src={data.imageProduct_1} alt="" />
                </div>
            </a>
            <div className="product-detail">
                <a href="/product/1" className="clear">
                    <div className="name">{data.nameProduct}</div>
                </a>
                <div className="product-bottom">
                    <a href="/product/1" className="clear">
                        <div className="price-star">
                            <span className="star">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </span>
                            <span className="price">{data.priceProduct}đ</span>
                        </div>
                    </a>
                    <div className="add-cart-btn">
                        <button onClick={setCount}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
