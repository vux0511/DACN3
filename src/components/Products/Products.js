import "./Products.scss";
import Product from "./Product/Product";

function Products({ tittle_header }) {
    return (
        <>
            <h3 className="sec-heading">
                {tittle_header ? "SẢN PHẨM NỔI BẬT" : "TẤT CẢ SẢN PHẨM"}
            </h3>
            <div className="products-container">
                <div className="card-products">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </>
    );
}

export default Products;
