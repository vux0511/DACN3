import "./Home.scss";
import Bannner from "./Banner/Banner";
import Products from "../Products/Products";
function Home() {
    return (
        <div className="container-home">
            <div className="layout">
                <Bannner />
                <Products tittle_header={"Tất Cả Sản Phẩm"} />
            </div>
        </div>
    );
}

export default Home;
