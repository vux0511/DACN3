import "./ChangePassword.scss";
import Container from "react-bootstrap/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CALL_URL from "~/api/CALL_URL";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

function Information() {
    const cookies = new Cookies();
    const [information, setInformation] = useState({});
    var idUser = cookies.get("user").idUser;
    const notify = () => toast();

    // useEffect(() => {
    //     axios
    //         .post(
    //             `http://localhost/DACN1_API/api/setNewPass.php?idUser=${idUser}`
    //         )
    //         .then((response) => {
    //             setInformation(response.data[0]);
    //         });
    // }, []);

    const handleChangeCurrentPassword = (e) => {
        setInformation({
            ...information,
            currentPass: e.target.value,
        });
    };
    const handleChangeNewPassword = (e) => {
        setInformation({
            ...information,
            newPass: e.target.value,
        });
    };
    const handleChangeReNewPassword = (e) => {
        setInformation({
            ...information,
            reNewPass: e.target.value,
        });
    };

    const handleToastifyError = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const handleToastifySucces = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const handleSubmitChangePass = (e) => {
        e.preventDefault();

        if (information.newPass.length < 6) {
            handleToastifyError("Mật khẩu phải có độ dài lớn hơn 6  ký tự");
        } else if (information.newPass !== information.reNewPass) {
            handleToastifyError("Mật khẩu mới phải trùng nhau");
        } else {
            axios
                .post(
                    // `http://localhost/DACN1_API/api/setNewPass.php?idUser=${idUser}`
                    `${CALL_URL.URL_setNewPass}?idUser=${idUser}`,
                    information
                )
                .then((response) => {
                    if (response.data.status === "fail") {
                        handleToastifyError(response.data.message);
                    } else {
                        handleToastifySucces(response.data.message);
                    }
                });
        }
    };

    return (
        <>
            <Header />
            <div className="row-pass">
                <div className="changepass-container">
                    <div className="changepass">
                        <h1 className="sec-changepass">Chỉnh Sửa Mật Khẩu</h1>
                        <form
                            className="changepass-form"
                            onSubmit={handleSubmitChangePass}
                        >
                            <label
                                htmlFor="currentPassword"
                                className="changepass-label"
                            >
                                Mật khẩu hiện tại
                            </label>
                            <input
                                type="password"
                                id="currentPassword"
                                className="changepass-input"
                                placeholder="Nhập mật khẩu hiện tại của bạn..."
                                autoComplete="off"
                                onChange={handleChangeCurrentPassword}
                            />

                            <label
                                htmlFor="password"
                                className="changepass-label"
                            >
                                Mật khẩu mới
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="changepass-input"
                                placeholder="Nhập mật khẩu mới của bạn..."
                                autoComplete="off"
                                onChange={handleChangeNewPassword}
                            />
                            <label
                                htmlFor="repassword"
                                className="changepass-label"
                            >
                                Nhập lại mật khẩu mới
                            </label>
                            <input
                                type="password"
                                id="repassword"
                                className="changepass-input"
                                placeholder="Nhập lại mật khẩu mới của bạn..."
                                autoComplete="off"
                                onChange={handleChangeReNewPassword}
                            />
                            <button
                                onClick={notify}
                                className="changepass-submit"
                            >
                                Đổi mật khẩu
                            </button>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
            {/* <Container className="container-changepass">
                <Row className="row-changepass">
                    <Col col-md={6} className="col-8-changepass">
                        <h3 className="sec-changepass">Chỉnh Sửa Mật Khẩu</h3>
                        <form
                            className="changepass-form"
                            onSubmit={handleSubmitChangePass}
                        >
                            <label
                                htmlFor="currentPassword"
                                className="changepass-label"
                            >
                                Mật khẩu hiện tại
                            </label>
                            <input
                                type="password"
                                id="currentPassword"
                                className="changepass-input"
                                placeholder="Nhập mật khẩu hiện tại của bạn..."
                                autoComplete="off"
                                onChange={handleChangeCurrentPassword}
                            />

                            <label
                                htmlFor="newPassword"
                                className="changepass-label"
                            >
                                Mật khẩu mới
                            </label>
                            <input
                                type="password"
                                id="newPassword"
                                className="changepass-input"
                                placeholder="Nhập mật khẩu mới của bạn..."
                                autoComplete="off"
                                onChange={handleChangeNewPassword}
                                // defaultValue={changepass.email}
                            />
                            <label
                                htmlFor="reNewPassword"
                                className="changepass-label"
                            >
                                Nhập lại mật khẩu mới
                            </label>
                            <input
                                type="password"
                                id="reNewPassword"
                                className="changepass-input"
                                placeholder="Nhập lại mật khẩu mới của bạn..."
                                autoComplete="off"
                                // defaultValue={changepass.phone}
                                onChange={handleChangeReNewPassword}
                            />

                            <button
                                onClick={notify}
                                className="changepass-submit"
                            >
                                Đổi mật khẩu
                            </button>
                            <ToastContainer />
                        </form>
                    </Col>
                </Row>
            </Container> */}
            <Footer />
        </>
    );
}

export default Information;
