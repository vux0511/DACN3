import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function ProductAdmin() {
    const [itemProducts, setItemProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost/DACN1_API/api/getProduct.php`)
            .then((response) => {
                setItemProducts(response.data);
            });
    }, []);

    return (
        <div className="main-container">
            <Sidebar />
            <div className="listProducts">
                <div className="title-products-list">
                    <h3>Danh Sách Sản Phẩm</h3>
                    <a href="/admin/product/add">
                        <button className="add-product-admin">
                            Thêm sản phẩm
                        </button>
                    </a>
                </div>
                <div className="product-list">
                    <table>
                        <thead>
                            <tr>
                                <th className="th-id-product">ID</th>
                                <th className="th-name-product">Tên</th>
                                <th className="th-image-product">Ảnh</th>
                                <th className="th-price-product">Giá</th>
                                <th className="th-decs-product">Thông Tin</th>
                                <th className="th-act-product">Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itemProducts.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.nameProduct}</td>
                                    <td>
                                        <img
                                            src={item.imageProduct_1}
                                            alt="Image Product"
                                        />
                                    </td>
                                    <td>{item.priceProduct}</td>
                                    <td>
                                        <div className="desc-product-admin">
                                            {item.descriptionProduct}
                                        </div>
                                    </td>
                                    <td>
                                        {/* <a href="/admin/product/edit/">
                                            <button>Sửa</button>
                                        </a>{" "}
                                        -{" "}
                                        <a href="">
                                            <button>Xoá</button>
                                        </a> */}
                                        <Link
                                            to={`/admin/product/edit/${item.idProduct}`}
                                        >
                                            Sửa
                                        </Link>{" "}
                                        -{" "}
                                        <Link
                                            to={`/admin/product/delete/${item.idProduct}`}
                                        >
                                            Xoá
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductAdmin;
