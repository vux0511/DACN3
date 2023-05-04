import "./Products.scss";
import Product from "./Product/Product";

function Products() {
    return (
        <div className="products-container">
            {/* <div className="sec-heading">Favote Products</div> */}
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
    );
}

export default Products;
