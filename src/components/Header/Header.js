import { TbSearch } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";

import { Context } from "~/utils/context";
import Cart from "~/components/Cart/Cart";
import "./Header.scss";
import { useEffect, useState } from "react";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [totalCart, setTotalCart] = useState(1);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    // Cart
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [totalCart]);

    useEffect(() => {
        console.log("Giỏ hàng có : ", totalCart);
    }, [totalCart]);

    return (
        <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
            <div className="header-content">
                <div className="left">VUXSTORE.</div>
                <ul className="center">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
                <div className="right">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Tìm kiếm sản phẩm ..."
                        />
                        <button className="search-btn">
                            <TbSearch />
                        </button>
                    </div>
                    <span className="cart-icon">
                        <CgShoppingCart />
                        <span>{totalCart}</span>
                    </span>
                    <FiUser />
                </div>
            </div>
        </header>
    );
}

export default Header;
