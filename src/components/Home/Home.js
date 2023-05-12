import "./Home.scss";
import Bannner from "./Banner/Banner";
import Products from "../Products/Products";
// import ImgCategory from "./ImgCategory/ImgCategory";
import { useState, useEffect } from "react";
import axios from "axios";

function Home({ setCartCount, cartCount }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Gửi yêu cầu lấy danh sách sản phẩm từ backend
        axios
            .get("http://localhost/DACN1_API/api/getProduct.php")
            .then((response) => {
                setProducts(response.data);
            });
    }, []);

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
                        products={products}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
