import "./Search.scss";

import { MdClose } from "react-icons/md";

function Search({ setShowSearch }) {
    return (
        <div className="search-model">
            <div className="form-field">
                <input
                    type="text"
                    autoFocus
                    placeholder="Nhập tên sản phẩm cần tìm..."
                />
                <MdClose
                    className="close-search-btn"
                    onClick={() => setShowSearch(false)}
                />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eef6690b-de27-4485-b89e-b8e5891e159e/air-jordan-1-low-older-shoes-xLzJc6.png" />
                        </div>
                        <div className="prod-details">
                            <span className="name">product name</span>
                            <span className="decs">product decs</span>
                        </div>
                    </div>
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eef6690b-de27-4485-b89e-b8e5891e159e/air-jordan-1-low-older-shoes-xLzJc6.png" />
                        </div>
                        <div className="prod-details">
                            <span className="name">product name</span>
                            <span className="decs">product decs</span>
                        </div>
                    </div>
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/eef6690b-de27-4485-b89e-b8e5891e159e/air-jordan-1-low-older-shoes-xLzJc6.png" />
                        </div>
                        <div className="prod-details">
                            <span className="name">product name</span>
                            <span className="decs">product decs</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
