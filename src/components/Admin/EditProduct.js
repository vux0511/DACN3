import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function EditProduct() {
    var { idProduct } = useParams();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const cookies = new Cookies();
    // const navigate = useNavigate();
    // const notify = () => toast();

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    return (
        <div className="main-container">
            <Sidebar />
            <div className="listProducts">
                <div className="title-products-list">
                    <h3>Sửa Sản Phẩm</h3>
                </div>
                <div className="product-edit">
                    <Container className="container-infor">
                        <Row className="row-infor">
                            <Col col-md={4} className="col-4-infor">
                                <div className="avatar-infor">
                                    <img
                                        className="avatar"
                                        // src={information.avatar}
                                        alt="Avatar"
                                    />
                                </div>
                                <div className="decs-infor">
                                    <p className="fullname-infor">
                                        Hoàng Văn VŨ`ũ`
                                    </p>
                                    <p className="email-infor">ok</p>
                                    <p className="phone-infor">ok</p>
                                    <p className="address-infor">ok</p>
                                </div>
                            </Col>

                            <Col col-md={8} className="col-8-infor">
                                <form
                                    className="information-form"
                                    // onSubmit={handleSubmitChangeInfor}
                                >
                                    <label
                                        htmlFor="fullname"
                                        className="information-label"
                                    >
                                        Họ tên
                                    </label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        className="information-input"
                                        placeholder="Nhập họ tên của bạn..."
                                        autoComplete="off"
                                        // onChange={handleChangeFullname}
                                        // defaultValue={information.fullname}
                                    />

                                    <label
                                        htmlFor="email"
                                        className="information-label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        className="information-input"
                                        placeholder="Nhập Email của bạn..."
                                        autoComplete="off"
                                        // onChange={handleChangeEmail}
                                        // defaultValue={information.email}
                                    />
                                    <label
                                        htmlFor="phone"
                                        className="information-label"
                                    >
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        className="information-input"
                                        placeholder="Nhập số điện thoại của bạn..."
                                        autoComplete="off"
                                        // defaultValue={information.phone}
                                        // onChange={handleChangePhone}
                                    />
                                    <label
                                        htmlFor="address"
                                        className="information-label"
                                    >
                                        Địa chỉ
                                    </label>
                                    <input
                                        type="text"
                                        id="address"
                                        className="information-input"
                                        placeholder="Nhập địa chỉ của bạn..."
                                        autoComplete="off"
                                        // defaultValue={information.address}
                                        // onChange={handleChangeAddress}
                                    />
                                    <button
                                        // onClick={notify}
                                        className="information-submit"
                                    >
                                        Lưu Thay Đổi
                                    </button>
                                    {/* <ToastContainer /> */}
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;
