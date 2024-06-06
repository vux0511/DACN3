import { Link } from "react-router-dom";

function CategoryCard() {
    return (
        <Link to={"/"}>
            <div className="category__card">
                <img
                    src="https://help.apple.com/assets/656F5187C78760B7A301D631/656F518AB828D2E11F0D8D96/vi_VN/accdb09369ceff709d4fc42f5c8e1ddf.png"
                    alt=""
                    className="category__card-img"
                />
                <div className="category__card-name">Laptop </div>
            </div>
        </Link>
    );
}

export default CategoryCard;
