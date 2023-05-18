import Popup from "../Popup/Popup";
import "./Register.scss";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import PopupWrong from "../PopupWrong/PopupWrong";
import axios from "axios";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");
    const [popWrong, setPopWrong] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [messageRegister, setMessageRegister] = useState("");

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleChangeRePassword = (e) => {
        setRePassword(e.target.value);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        let data = {
            username: username,
            password: password,
        };

        if (password === "" || username === "") {
            setMessageRegister(
                "Không được để trống trường tài khoản hoặc mật khẩu!"
            );
            setPopWrong(true);
        } else if (password.length < 6 || username.length < 6) {
            setMessageRegister("Độ dài của các trường phải lớn hơn 6 ký tự!");
            setPopWrong(true);
        } else if (password !== repassword) {
            setMessageRegister("Vui lòng nhập mật khẩu trùng nhau!");
            setPopWrong(true);
        } else {
            axios
                .post("http://localhost/DACN1_API/api/setNewUser.php", data)
                .then((response) => {
                    if (response.data.message === "success") {
                        setButtonPopup(true);
                    } else {
                        setMessageRegister(response.data.message);
                        setPopWrong(true);
                    }
                });
        }
    };

    return (
        <div className="register-container">
            <div className="register">
                <h1 className="register-heading">Đăng Ký</h1>
                <button className="register-social">
                    <FcGoogle className="register-social-icon" />
                    <span className="register-social-text">
                        Đăng Ký Với Tài Khoản Google
                    </span>
                </button>
                <div className="register-or">
                    <span>hoặc</span>
                </div>
                <form className="register-form" onSubmit={handleRegister}>
                    <label htmlFor="username" className="register-label">
                        User name
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="register-input"
                        placeholder="Nhập tài khoản của bạn..."
                        autoComplete="off"
                        onChange={handleChangeUsername}
                    />

                    <label htmlFor="password" className="register-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="register-input"
                        placeholder="Nhập mật khẩu của bạn..."
                        autoComplete="off"
                        onChange={handleChangePassword}
                    />
                    <label htmlFor="repassword" className="register-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="repassword"
                        className="register-input"
                        placeholder="Nhập lại mật khẩu của bạn..."
                        autoComplete="off"
                        onChange={handleChangeRePassword}
                    />
                    <button
                        className="register-submit"
                        // onClick={() => setButtonPopup(true)}
                    >
                        Đăng Ký
                    </button>
                    <Popup
                        trigger={buttonPopup}
                        setTrigger={setButtonPopup}
                        setNavigate={"/login"}
                    >
                        <h3 className="title-thanks">Thành Công!</h3>
                        <p className="decs-thanks">
                            Đăng ký tài khoản thành công!
                        </p>
                        <p>Vui lòng đăng nhập để sử dụng dịch vụ!</p>
                    </Popup>
                    <PopupWrong trigger={popWrong} setTrigger={setPopWrong}>
                        <h3 className="title-thanks">Thất Bại!</h3>
                        <p className="decs-thanks">{messageRegister}</p>
                    </PopupWrong>
                </form>
                <p className="register-resetpass">
                    <span>Bạn đã có tài khoản ? </span>
                    <a href="/login" className="register-link">
                        {" "}
                        Đăng nhập
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;
