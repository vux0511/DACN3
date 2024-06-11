import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Cookies from "universal-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "../../api/CALL_URL";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const cookies = new Cookies();
    const navigate = useNavigate();
    const notify = () => toast();

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleLogin = (e) => {
        e.preventDefault();
        let data = {
            email: username,
            password: password,
        };
        console.log(data);

        try {
            axios.post(CALL_URL.URL_getUser, data).then((response) => {
                console.log("res", response.data);
                if (response.data === false) {
                    toast.error(
                        "Tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại",
                        {
                            position: "top-right",
                            autoClose: 4000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        }
                    );
                } else {
                    cookies.set("user", response.data.user, {});
                    cookies.set("user_token", response.data.usrer_token, {});
                    toast.success("Đăng nhập thành công! Chuyển hướng sau 3s", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setTimeout(() => {
                        navigate("/");
                    }, 3000);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header />
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
                            Email
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
                            type="password"
                            id="password"
                            className="login-input"
                            placeholder="Nhập mật khẩu..."
                            autoComplete="off"
                            onChange={handleChangePassword}
                        />
                        <button onClick={notify} className="login-submit">
                            Đăng Nhập
                        </button>
                        <ToastContainer />
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
            <Footer />
        </>
    );
}

export default Login;
