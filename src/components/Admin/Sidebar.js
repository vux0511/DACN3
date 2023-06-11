import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { GiRubberBoot } from "react-icons/gi";
import { BiCategoryAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import LogoAdmin from "../../assets/logo-admin.png";

import { useNavigate, Link } from "react-router-dom";
import "../../scss/Admin.scss";

function Sidebar() {
    return (
        <section id="sidebar">
            <div className="brand-logo">
                <img src={LogoAdmin} alt="" />
                <p>Admin</p>
            </div>
            <ul className="side-menu top">
                <li>
                    <a href="/admin">
                        <p className="okkk">
                            <AiOutlineDashboard className="icon-home-admin" />
                            Dashboard
                        </p>
                    </a>
                </li>
                <li>
                    <a href="/admin/products">
                        <p className="okkk">
                            <GiRubberBoot className="icon-home-admin" />
                            Products
                        </p>
                    </a>
                </li>
                <li>
                    <a href="/admin/category">
                        <p className="okkk">
                            <BiCategoryAlt className="icon-home-admin" />
                            Category
                        </p>
                    </a>
                </li>
                <li>
                    <a href="/admin/order">
                        <p className="okkk">
                            <AiOutlineShoppingCart className="icon-home-admin" />
                            Order
                        </p>
                    </a>
                </li>
                <li>
                    <a href="/admin/user">
                        <p className="okkk">
                            <FiUsers className="icon-home-admin" />
                            Users
                        </p>
                    </a>
                </li>
            </ul>
            <ul className="side-menu">
                <li>
                    <a href="#" className="logout">
                        <p className="okkk">
                            <CgLogOut className="icon-home-admin" />
                            Logout
                        </p>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Sidebar;
