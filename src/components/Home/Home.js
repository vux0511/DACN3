import "./Home.scss";
import Bannner from "./Banner/Banner";
import Products from "../Products/Products";
// import ImgCategory from "./ImgCategory/ImgCategory";

function Home({ setCartCount, cartCount }) {
    return (
        <div>
            <Bannner />
            <div className="main-content">
                <div className="layout">
                    {/* <ImgCategory /> */}
                    <Products
                        headingText="Popular Products"
                        tittle_header={"SẢN PHẨM NỔI BẬT"}
                        setCartCount={setCartCount}
                        cartCount={cartCount}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
