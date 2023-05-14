import "./Product.scss";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";

function Product({ setCartCount, cartCount, idProduct, data }) {
    // const [cart, setCart] = useState(0);
    // const handlerAddCart = () => {
    //     setCart((prew) => prew + 1);
    // };
    const setCount = () => {
        setCartCount((prew) => cartCount + 1);
    };

    const navigate = useNavigate();

    return (
        <div className="product-card" key={data.idProduct}>
            {/* <a href={`/product/id=${data.idProduct}`} className="clear"> */}
            <div
                className="thumbnail"
                onClick={() =>
                    navigate(`/product/${data.idProduct}`, {
                        idProduct: data,
                    })
                }
            >
                <img src={data.imageProduct_1} alt="" />
            </div>
            {/* </a> */}
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
