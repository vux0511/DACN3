import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Search from "./Search/Search";

import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "universal-cookie";
import "./Header.scss";

function Header({ cartCount }) {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [user, setUser] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        if (cookies.get("user")) {
            setUsername(cookies.get("user").username);
        }
    });

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const handleLogout = () => {
        document.cookie = "user" + "=; Max-Age=0;";
        navigate("/login");
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <div className="left">
                        <a href="/">VUXSTORE.</a>
                    </div>
                    <ul className="center">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/product">Product</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                    <div className="right">
                        <div className="search">
                            <button className="search-btn">
                                <TbSearch onClick={() => setShowSearch(true)} />
                            </button>
                        </div>
                        {username ? (
                            <a href="/cart">
                                <span className="cart-icon">
                                    <CgShoppingCart />
                                    <span>0</span>
                                </span>
                            </a>
                        ) : (
                            <a href="/login">
                                <span className="cart-icon">
                                    <CgShoppingCart />
                                    <span></span>
                                </span>
                            </a>
                        )}

                        <div className="dropdown">
                            <button className="dropbtn">
                                {username !== "" ? (
                                    <span className="account">
                                        <img
                                            className="avatarUser"
                                            src="https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg"
                                            alt="Avatar"
                                        />
                                        <div className="userName">
                                            {username !== ""
                                                ? "Hi " + username
                                                : "Login"}
                                        </div>
                                    </span>
                                ) : (
                                    <span
                                        className="account"
                                        onClick={() => navigate("/login")}
                                    >
                                        <img
                                            className="avatarUser"
                                            src="https://static.vecteezy.com/system/resources/previews/013/042/571/original/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg"
                                            alt="Avatar"
                                        />
                                        <div className="userName">
                                            {username !== ""
                                                ? "Hi " + username
                                                : "Log in"}
                                        </div>
                                    </span>
                                )}
                            </button>
                            {username !== "" ? (
                                <div className="dropdown-content">
                                    <Link
                                        className="dropdown-css"
                                        to={"/information"}
                                    >
                                        Cập nhật tài khoản
                                    </Link>
                                    <Link
                                        className="dropdown-css"
                                        to={"/order"}
                                    >
                                        Xem đơn hàng
                                    </Link>
                                    <Link
                                        className="dropdown-css"
                                        to={"/changepass"}
                                    >
                                        Đổi mật khẩu
                                    </Link>
                                    <a onClick={handleLogout}>Đăng xuất</a>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </header>
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
}

export default Header;
