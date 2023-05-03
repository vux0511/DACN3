import "./Banner.scss";
import BannerImg from "../../../assets/banner/jordan-dior-bannner.png";

function Bannner() {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>JORDAN DIOR</h1>
                    <div className="shopnow-btn">Shop Now</div>
                </div>
                <img
                    className="bannner-img"
                    src={BannerImg}
                    alt="banner-adidas"
                />
            </div>
        </div>
    );
}

export default Bannner;
