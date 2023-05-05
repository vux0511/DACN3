import "./Category.scss";
import { useState } from "react";

import $ from "jquery";
import { FiChevronDown } from "react-icons/fi";

function Category() {
    const [activeCategoryId, setActiveCategoryId] = useState("allCategory");

    const handleClick = (id) => {
        setActiveCategoryId(id);
    };
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category">
                    <button
                        id="allCategory"
                        className={
                            activeCategoryId === "allCategory" ? "active" : ""
                        }
                        onClick={() => handleClick("allCategory")}
                    >
                        Tất Cả Sản Phẩm
                    </button>
                    <button
                        id="button1"
                        className={
                            activeCategoryId === "button1" ? "active" : ""
                        }
                        onClick={() => handleClick("button1")}
                    >
                        Nike
                    </button>
                    <button
                        id="button2"
                        className={
                            activeCategoryId === "button2" ? "active" : ""
                        }
                        onClick={() => handleClick("button2")}
                    >
                        Adidas
                    </button>
                    <button
                        id="button3"
                        className={
                            activeCategoryId === "button3" ? "active" : ""
                        }
                        onClick={() => handleClick("button3")}
                    >
                        MLB
                    </button>
                    <button
                        id="button4"
                        className={
                            activeCategoryId === "button4" ? "active" : ""
                        }
                        onClick={() => handleClick("button4")}
                    >
                        Balenciaga
                    </button>
                    <button
                        id="button5"
                        className={
                            activeCategoryId === "button5" ? "active" : ""
                        }
                        onClick={() => handleClick("button5")}
                    >
                        Converse
                    </button>
                    <div className="sort">
                        <ul className="nav">
                            <li className="button-dropdown">
                                <a
                                    href="javascript:void(0)"
                                    className="dropdown-toggle sort-by"
                                >
                                    Sắp Xếp <FiChevronDown />
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="">Giá thấp đến cao</a>
                                    </li>
                                    <li>
                                        <a href="">Giá cao đến thấp</a>
                                    </li>
                                    <li>
                                        <a href="">Dưới 500.000đ</a>
                                    </li>
                                    <li>
                                        <a href="">
                                            Khoảng 500.000đ - 1.000.000đ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            Khoảng 1.000.000đ - 2.000.000đ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">Trên 2.000.000đ</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;

$(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut();
        });
    }
    e(".dropdown-toggle").click(function () {
        var t = e(this)
            .parents(".button-dropdown")
            .children(".dropdown-menu")
            .is(":hidden");
        e(".button-dropdown .dropdown-menu").hide();
        e(".button-dropdown .dropdown-toggle").removeClass("active");
        if (t) {
            e(this)
                .parents(".button-dropdown")
                .children(".dropdown-menu")
                .toggle()
                .parents(".button-dropdown")
                .children(".dropdown-toggle")
                .addClass("active");
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown"))
            e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown"))
            e(".button-dropdown .dropdown-toggle").removeClass("active");
    });
});
