import { TbSearch } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import avatarUser from "../../assets/avatar_user.webp";

import "./Header.scss";
import { useEffect, useState } from "react";
import Search from "./Search/Search";
import Tippy from "@tippyjs/react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

function Header({ cartCount }) {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [user, setUser] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setUser(true);
        } else {
            console.log("ok");
        }
    }, []);

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

    // const handleNavigateLogin = () => {
    //     // nếu chưa login
    //     if () {
    //         navigate("/login");
    //     }
    // }

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
                            {/* <input
                                type="text"
                                placeholder="Tìm kiếm sản phẩm ..."
                            /> */}
                            <button className="search-btn">
                                <TbSearch onClick={() => setShowSearch(true)} />
                            </button>
                        </div>
                        <div className="favourite">
                            {/* <button className="search-btn"> */}
                            <MdOutlineFavoriteBorder />
                            {/* </button> */}
                        </div>
                        {user ? (
                            <a href="/cart">
                                <span className="cart-icon">
                                    <CgShoppingCart />
                                    <span>{cartCount}</span>
                                </span>
                            </a>
                        ) : (
                            <a href="/login">
                                <span className="cart-icon">
                                    <CgShoppingCart />
                                    <span>{cartCount}</span>
                                </span>
                            </a>
                        )}

                        <Tippy content="OK">
                            <span
                                className="account"
                                // onClick={handleNavigateLogin}
                            >
                                <img
                                    className="avatarUser"
                                    src={avatarUser}
                                    alt="Avatar"
                                />
                                <div className="userName">
                                    {username !== ""
                                        ? "Hi " + username
                                        : "Account"}
                                </div>
                            </span>
                        </Tippy>
                    </div>
                </div>
            </header>
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
}

export default Header;
