import Container from "react-bootstrap/Container";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import CALL_URL from "~/api/CALL_URL";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

function Information() {
    const cookies = new Cookies();
    const idUser = cookies.get("user").idUser;
    const notify = () => toast();
    const navigate = useNavigate();
    const [infoUser, setInfoUser] = useState([]);

    // Check login
    useEffect(() => {
        if (cookies.get("user") === undefined) {
            navigate("/requiredlogin");
        }
    }, []);

    useEffect(() => {
        if (cookies.get("user")) {
            setInfoUser(cookies.get("user"));
        } else {
            setInfoUser("empty");
        }
        console.log(cookies.get("user"));
    }, []);

    // useEffect(() => {
    //     axios
    //         .post(`${CALL_URL.URL_getInformation}?idUser=${idUser}`)
    //         .then((response) => {
    //             setInformation(response.data[0]);
    //         });
    // }, []);

    const handleChangeFullname = (e) => {
        setInfoUser({
            ...infoUser,
            fullname: e.target.value,
        });
    };
    const handleChangeEmail = (e) => {
        setInfoUser({
            ...infoUser,
            email: e.target.value,
        });
    };
    const handleChangePhone = (e) => {
        setInfoUser({
            ...infoUser,
            phone: e.target.value,
        });
    };
    const handleChangeAddress = (e) => {
        setInfoUser({
            ...infoUser,
            address: e.target.value,
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

    const handleSubmitChangeInfor = (e) => {
        e.preventDefault();
        let data = {
            ...infoUser,
            user_token: cookies.get("user_token"),
        };
        axios.post(CALL_URL.URL_setInfor, data).then((response) => {
            if (response.data === null) {
                handleToastifyError("Cập nhật nhất bại");
            } else {
                document.cookie = "user" + "=; Max-Age=0;";
                cookies.set("user", data, {});
                handleToastifySucces("Cập nhật thành công");
            }
            console.log(response.data);
        });
    };

    return (
        <>
            <Header />
            <Container className="container-infor">
                <h3 className="sec-infor">Chỉnh Sửa Thông Tin Cá Nhân</h3>
                <Row className="row-infor">
                    <Col col-md={4} className="col-4-infor">
                        <div className="avatar-infor">
                            <img
                                className="avatar"
                                src="https://cdn.vectorstock.com/i/750p/74/53/orange-user-icon-vector-42797453.avif"
                                alt="Avatar"
                            />
                        </div>
                        <div className="decs-infor">
                            <p className="fullname-infor">
                                Họ tên: {infoUser.fullname}
                            </p>
                            <p className="email-infor">
                                Email: {infoUser.email}
                            </p>
                            <p className="phone-infor">
                                Số điện thoại: {infoUser.phone}
                            </p>
                            <p className="address-infor">
                                Địa chỉ: {infoUser.address}
                            </p>
                        </div>
                    </Col>

                    <Col col-md={8} className="col-8-infor">
                        <form
                            className="information-form"
                            onSubmit={handleSubmitChangeInfor}
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
                                onChange={handleChangeFullname}
                                defaultValue={infoUser.fullname}
                            />

                            <label
                                htmlFor="email"
                                className="information-label"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                disabled
                                id="email"
                                className="information-input"
                                placeholder="Nhập Email của bạn..."
                                autoComplete="off"
                                onChange={handleChangeEmail}
                                defaultValue={infoUser.email}
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
                                defaultValue={infoUser.phone}
                                onChange={handleChangePhone}
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
                                defaultValue={infoUser.address}
                                onChange={handleChangeAddress}
                            />
                            <button
                                onClick={notify}
                                className="information-submit"
                            >
                                Lưu Thay Đổi
                            </button>
                            <ToastContainer />
                        </form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Information;
