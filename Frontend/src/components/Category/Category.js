import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import CALL_URL from "../../api/CALL_URL";

function Category() {
    const [activeCategoryId, setActiveCategoryId] = useState("allCategory");
    const [category, setCategory] = useState([]);
    const [nameCategory, setNameCategory] = useState("");
    const navigate = useNavigate();

    const handleClick = (id, idCategory) => {
        setActiveCategoryId(id);
        navigate(`/product/category/${idCategory}`);
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
                        onClick={() => handleClick("allCategory", "allProduct")}
                    >
                        Tất Cả Sản Phẩm
                    </button>
                    {/* Map */}
                    {category.map((cate, index) => (
                        <button
                            key={index}
                            id={`button${cate._id}`}
                            className={
                                activeCategoryId === `button${cate._id}`
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                handleClick(`button${cate._id}`, cate._id)
                            }
                        >
                            {cate.nameCategory}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Category;
