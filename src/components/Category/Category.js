import "./Category.scss";
import { useState, useEffect } from "react";
import axios from "axios";

import $ from "jquery";
import { FiChevronDown } from "react-icons/fi";
import CALL_URL from "../../api/CALL_URL";

function Category() {
    const [activeCategoryId, setActiveCategoryId] = useState("allCategory");
    const [category, setCategory] = useState([]);

    const handleClick = (id) => {
        setActiveCategoryId(id);
    };

    useEffect(() => {
        axios.get(CALL_URL.URL_getCategory).then((res) => {
            setCategory(res.data);
        });
    }, []);

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category">
                    {/* Button All Category */}
                    <button
                        id="allCategory"
                        className={
                            activeCategoryId === "allCategory" ? "active" : ""
                        }
                        onClick={() => handleClick("allCategory")}
                    >
                        Tất Cả Sản Phẩm
                    </button>

                    {category.map((cate) => (
                        <button
                            key={cate.idCategory}
                            id={`button${cate.idCategory}`}
                            className={
                                activeCategoryId === `button${cate.idCategory}`
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                handleClick(`button${cate.idCategory}`)
                            }
                        >
                            {cate.nameCategory}
                        </button>
                    ))}

                    {/* Button Sort */}
                    <button className="btn-sort">
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
                    </button>
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
