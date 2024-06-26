import { Link } from "react-router-dom";
import BannerImg from "../../../assets/banner/macbook.png";

function Bannner() {
    return (
        <div className="banner">
            <div className="content">
                <div className="content__top">Limited offer 25% OFF</div>
                <div className="content__main">
                    Use the product as soon as possible
                </div>
                <div className="content__bottom">
                    Save 10% when you buy at our store
                </div>

                <Link to="/product" className="button__shopnow">
                    Shop Now
                </Link>
            </div>
            <div className="image">
                <img src={BannerImg} />
            </div>
        </div>
    );
}

export default Bannner;
