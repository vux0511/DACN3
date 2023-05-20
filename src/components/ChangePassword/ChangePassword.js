import "./ChangePassword.scss";
import Container from "react-bootstrap/Container";
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

        if (information.newPass !== information.reNewPass) {
            handleToastifyError("Mật khẩu mới phải trùng nhau");
        } else if (information.newPass.length < 6) {
            handleToastifyError("Mật khẩu phải có độ dài lớn hơn 6 ký tự");
        } else {
            axios
                .post(
                    `http://localhost/DACN1_API/api/setNewPass.php?idUser=${idUser}`,
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
        <Container className="container-infor">
            <Row className="row-infor">
                <Col col-md={6} className="col-8-infor">
                    <form
                        className="information-form"
                        onSubmit={handleSubmitChangePass}
                    >
                        <label
                            htmlFor="currentPassword"
                            className="information-label"
                        >
                            Mật khẩu hiện tại
                        </label>
                        <input
                            type="password"
                            id="currentPassword"
                            className="information-input"
                            placeholder="Nhập mật khẩu hiện tại của bạn..."
                            autoComplete="off"
                            onChange={handleChangeCurrentPassword}
                        />

                        <label
                            htmlFor="newPassword"
                            className="information-label"
                        >
                            Mật khẩu mới
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            className="information-input"
                            placeholder="Nhập mật khẩu mới của bạn..."
                            autoComplete="off"
                            onChange={handleChangeNewPassword}
                            // defaultValue={information.email}
                        />
                        <label
                            htmlFor="reNewPassword"
                            className="information-label"
                        >
                            Nhập lại mật khẩu mới
                        </label>
                        <input
                            type="password"
                            id="reNewPassword"
                            className="information-input"
                            placeholder="Nhập lại mật khẩu mới của bạn..."
                            autoComplete="off"
                            // defaultValue={information.phone}
                            onChange={handleChangeReNewPassword}
                        />

                        <button onClick={notify} className="information-submit">
                            Đổi mật khẩu
                        </button>
                        <ToastContainer />
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Information;
