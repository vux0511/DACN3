import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Search.scss";

import { MdClose } from "react-icons/md";

function Search({ setShowSearch }) {
    const [query, setQuery] = useState("");
    const [productSearch, setProductSearch] = useState([]);
    const navigate = useNavigate();

    const onChangeSearch = (e) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        axios
            .get(
                `http://localhost/DACN1_API/api/searchProduct.php?key=${query}`
            )
            .then((response) => {
                setProductSearch(response.data);
            });
    }, [query]);

    // const handleClickSearch = () => {
    //     navigate(`/product/${productSearch.idProduct}`);
    //     // setShowSearch(false);
    // };

    return (
        <div className="search-model">
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder="Nhập tên sản phẩm cần tìm..."
                    value={query}
                    onChange={onChangeSearch}
                />
                <MdClose
                    className="close-search-btn"
                    onClick={() => setShowSearch(false)}
                />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    {productSearch.map((productSearch) => (
                        <div
                            key={productSearch.idProduct}
                            className="search-result-item"
                            onClick={() => {
                                navigate(`/product/${productSearch.idProduct}`);
                                setShowSearch(false);
                            }}
                        >
                            <div className="img-container">
                                <img src={productSearch.imageProduct_1} />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {productSearch.nameProduct}
                                </span>
                                <span className="decs">
                                    {productSearch.priceProduct}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Search;
