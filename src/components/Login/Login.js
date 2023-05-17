import "./Login.scss";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Popup from "../Popup/Popup";
import PopupWrong from "../PopupWrong/PopupWrong";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [buttonPopup, setButtonPopup] = useState(false);
    const [popWrong, setPopWrong] = useState(false);
    const cookies = new Cookies();

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        let data = {
            username: username,
            password: password,
        };
        axios
            .post("http://localhost/DACN1_API/api/getUser.php", data)
            .then((response) => {
                if (response.data.user === null) {
                    console.log("Sai tài khoản hoặc mật khẩu");
                    setPopWrong(true);
                } else {
                    cookies.set("user", response.data.user, {
                        // path: "/",
                    });
                    setButtonPopup(true);
                }
            });
    };

    return (
        <div className="login-container">
            <div className="login">
                <h1 className="login-heading">Đăng Nhập</h1>
                <button className="login-social">
                    <FcGoogle className="login-social-icon" />
                    <span className="login-social-text">
                        Đăng Nhập Với Tài Khoản Google
                    </span>
                </button>
                <div className="login-or">
                    <span>hoặc</span>
                </div>
                <form className="login-form" onSubmit={handleLogin}>
                    <label htmlFor="username" className="login-label">
                        User name
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="login-input"
                        placeholder="Nhập tài khoản..."
                        autoComplete="off"
                        onChange={handleChangeUsername}
                    />

                    <label htmlFor="password" className="login-label">
                        Password
                    </label>
                    <input
                        type="text"
                        id="password"
                        className="login-input"
                        placeholder="Nhập mật khẩu..."
                        autoComplete="off"
                        onChange={handleChangePassword}
                    />
                    <button type="submit" className="login-submit">
                        Đăng Nhập
                    </button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <h3 className="title-thanks">Thành Công!</h3>
                        <p className="decs-thanks">Đăng nhập thành công!</p>
                    </Popup>
                    <PopupWrong trigger={popWrong} setTrigger={setPopWrong}>
                        <h3 className="title-thanks">Thất Bại!</h3>
                        <p className="decs-thanks">
                            Đăng nhập thất bại. Vui lòng thử lại!
                        </p>
                    </PopupWrong>
                </form>
                <p className="login-resetpass">
                    <span>Bạn chưa có tài khoản ? </span>
                    <a href="/register" className="register-link">
                        {" "}
                        Đăng ký
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
