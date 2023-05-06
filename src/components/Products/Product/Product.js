import "./Product.scss";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function Product({ setCartCount, cartCount }) {
    // const [cart, setCart] = useState(0);
    // const handlerAddCart = () => {
    //     setCart((prew) => prew + 1);
    // };
    console.log(cartCount);
    const setCount = () => {
        setCartCount((prew) => cartCount + 1);
    };

    return (
        <div className="product">
            <a href="/product/1" className="clear">
                <div className="thumbnail">
                    <img
                        src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2a5710b8-70b8-4316-8078-4311dd01d025/court-vision-low-shoes-5RDlNK.png"
                        alt=""
                    />
                </div>
                <div className="product-detail">
                    <div className="name">Nike Court Vision Low</div>
                    <div className="product-bottom">
                        <div className="price-star">
                            <span className="star">
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarFill />
                                <BsStarHalf />
                            </span>
                            <span className="price">2,069,000₫</span>
                        </div>
                        <div className="add-cart-btn">
                            <button onClick={setCount}>Thêm giỏ hàng</button>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Product;
