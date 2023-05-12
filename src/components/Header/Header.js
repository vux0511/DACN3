import { TbSearch } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import { Context } from "~/utils/context";
import Cart from "~/components/Cart/Cart";
import "./Header.scss";
import { useEffect, useState } from "react";
import Search from "./Search/Search";

function Header({ cartCount }) {
    const [scrolled, setScrolled] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    // const [totalCart, setTotalCart] = useState(1);
    const [user, setUser] = useState(true);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
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

                        <a href="/login">
                            <span className="account">
                                <FiUser className="icon-account" />{" "}
                                {user ? "Hi Vux." : "Account"}
                            </span>
                        </a>
                    </div>
                </div>
            </header>
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
}

export default Header;
