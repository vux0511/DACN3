import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { GiRubberBoot } from "react-icons/gi";

import { useNavigate, Link } from "react-router-dom";
import "../../scss/Admin.scss";

function Sidebar() {
    return (
        <section id="sidebar">
            <a href="#" className="brand">
                <span className="text-brand">ADMIN</span>
            </a>
            <ul className="side-menu top">
                <li>
                    <a href="/admin">
                        {/* <box-icon
                            className="bx"
                            name="dashboard"
                            type="solid"
                        ></box-icon> */}
                        <AiOutlineDashboard />
                        <span className="text text-sidebar">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/products">
                        {/* <box-icon
                            className="bx"
                            name="product-hunt"
                            type="logo"
                        ></box-icon> */}
                        <GiRubberBoot />
                        <span className="text text-sidebar">
                            {/* <Link to={"/admin/products"}></Link> */}
                            Products
                        </span>
                    </a>
                </li>
                <li>
                    <a href="/admin/category">
                        <box-icon className="bx" name="category"></box-icon>
                        <span className="text text-sidebar">
                            {/* <Link to={"/admin/category"}></Link> */}
                            Category
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <box-icon className="bx" name="cart"></box-icon>
                        <span className="text text-sidebar">Order</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <box-icon name="group"></box-icon>
                        <span className="text text-sidebar">Member</span>
                    </a>
                </li>
            </ul>
            <ul className="side-menu">
                <li>
                    <a href="#" className="logout">
                        <box-icon name="log-out"></box-icon>
                        <span className="text text-sidebar">Logout</span>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Sidebar;
