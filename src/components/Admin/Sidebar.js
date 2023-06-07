import { GiConverseShoe } from "react-icons/gi";
import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

import "../../scss/Admin.scss";
import "boxicons";

function Sidebar() {
    return (
        <section id="sidebar">
            <a href="#" className="brand">
                <box-icon className="bx" name="smile" type="solid"></box-icon>
                <span className="text">AdminHub</span>
            </a>
            <ul className="side-menu top">
                <li className="active">
                    <a href="#">
                        <box-icon
                            className="bx"
                            name="dashboard"
                            type="solid"
                        ></box-icon>
                        <span className="text">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <box-icon
                            className="bx"
                            name="product-hunt"
                            type="logo"
                        ></box-icon>
                        <span className="text">Products</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <box-icon className="bx" name="category"></box-icon>
                        <span className="text">Category</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <box-icon className="bx" name="cart"></box-icon>
                        <span className="text">Order</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <box-icon className="bx" name="cart"></box-icon>
                        <span className="text">Member</span>
                    </a>
                </li>
            </ul>
            <ul className="side-menu">
                {/* <li>
                    <a href="#">
                        <i className="bx bxs-cog" />
                        <span className="text">Settings</span>
                    </a>
                </li> */}
                <li>
                    <a href="#" className="logout">
                        <i className="bx bxs-log-out-circle" />
                        <span className="text">Logout</span>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Sidebar;
