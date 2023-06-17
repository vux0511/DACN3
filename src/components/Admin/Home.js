import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiBoots } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";

import ImgUser from "../../assets/avatar_user.webp";
import axios from "axios";
import { useEffect, useState } from "react";
import CALL_URL from "~/api/CALL_URL";

function Home() {
    const [countProducts, setCountProducts] = useState(0);
    const [countOrders, setCountOrders] = useState(0);
    const [countUsers, setCountUsers] = useState(0);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(CALL_URL.URL_getHomeAdmin).then((response) => {
            setCountProducts(response.data.countProducts);
            setCountOrders(response.data.countOrders);
            setCountUsers(response.data.countUsers);
        });
    }, []);

    useEffect(() => {
        axios.get(CALL_URL.URL_getOrder).then((response) => {
            setOrders(response.data);
        });
    }, []);

    return (
        <section id="content">
            <main>
                <div className="head-title">
                    <div className="left">
                        <h1>Dashboard</h1>
                    </div>
                    <a href="#" className="btn-download">
                        <i className="bx bxs-cloud-download" />
                        <span className="text">Download PDF</span>
                    </a>
                </div>
                <ul className="box-info">
                    <li>
                        <div className="icon-home icon-cart-home">
                            <AiOutlineShoppingCart />
                        </div>
                        <span className="text">
                            <h3>{countOrders}</h3>
                            <p>Order</p>
                        </span>
                    </li>
                    <li>
                        <div className="icon-home icon-products-home">
                            <GiBoots />
                        </div>
                        <span className="text">
                            <h3>{countProducts}</h3>
                            <p>Products</p>
                        </span>
                    </li>
                    <li>
                        <div className="icon-home icon-users-home">
                            <FiUsers />
                        </div>
                        <span className="text">
                            <h3>{countUsers}</h3>
                            <p>Users</p>
                        </span>
                    </li>
                </ul>
                <div className="table-data">
                    <div className="order">
                        <div className="head">
                            <h3>Đơn hàng gần đây</h3>
                            <i className="bx bx-search" />
                            <i className="bx bx-filter" />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Username</th>
                                    <th>Date Order</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={index}>
                                        <td>
                                            <p>{order.idOrder}</p>
                                        </td>
                                        <td>
                                            <p>{order.fullname}</p>
                                        </td>
                                        <td>{order.dateOrder}</td>
                                        <td>
                                            <span className="status completed">
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="product-home-admin">
                        <div className="head">
                            <h3>Products</h3>
                        </div>
                        <ul className="products-list">
                            <li className="product-list">
                                <img src={ImgUser} alt="" />
                                <p>Product Name</p>
                                <p>2.000.000 đ</p>
                            </li>
                            <li className="product-list">
                                <img src={ImgUser} alt="" />
                                <p>Product Name</p>
                                <p>2.000.000 đ</p>
                            </li>
                            <li className="product-list">
                                <img src={ImgUser} alt="" />
                                <p>Product Name</p>
                                <p>2.000.000 đ</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Home;
