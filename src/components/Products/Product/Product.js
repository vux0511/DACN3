import "./Product.scss";
// import "./test.scss";
import ProductImg from "../../../assets/product/earbuds-prod-1.webp";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { CgHello } from "react-icons/cg";

function Product() {
    return (
        <div className="product">
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
                        <button>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
