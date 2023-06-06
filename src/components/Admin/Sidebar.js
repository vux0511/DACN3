import { GiConverseShoe } from "react-icons/gi";
import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";

function Sidebar() {
    return (
        <>
            <div className="container-admin">
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <a href="" className="link-sidebar">
                                <span>
                                    <AiOutlineDashboard />
                                </span>{" "}
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="" className="link-sidebar">
                                <span>
                                    <GiConverseShoe />
                                </span>{" "}
                                Product
                            </a>
                        </li>
                        <li>
                            <a href="" className="link-sidebar">
                                <span>
                                    <BiCategory />
                                </span>{" "}
                                Category
                            </a>
                        </li>
                        <li>
                            <a href="" className="link-sidebar">
                                <span>
                                    <AiOutlineShoppingCart />
                                </span>{" "}
                                Order
                            </a>
                        </li>
                        <li>
                            <a href="" className="link-sidebar">
                                <span>
                                    <FiUsers />
                                </span>{" "}
                                Member
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
