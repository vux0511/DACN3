import "./Home.scss";
import Bannner from "./Banner/Banner";
import Products from "../Products/Products";

function Home({ setCartCount, cartCount }) {
    return (
        <div className="container-home">
            <div className="layout">
                <Bannner />
                <Products
                    tittle_header={"SẢN PHẨM NỔI BẬT"}
                    setCartCount={setCartCount}
                    cartCount={cartCount}
                />
            </div>
        </div>
    );
}

export default Home;
