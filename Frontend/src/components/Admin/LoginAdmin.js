import axios from "axios";
import { useState } from "react";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "~/api/CALL_URL";

function LoginAdmin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const cookies = new Cookies();
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
            username: username,
            password: password,
        };
        axios.post(CALL_URL.URL_getIdAdmin, data).then((response) => {
            if (response.data.idAdmin === null) {
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
                cookies.set("idAdmin", response.data.idAdmin, {});
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
                window.location.reload();
            }
        });
    };
    return (
        <>
            <div className="login-container login-admin">
                <div className="login">
                    <h1 className="login-heading">LOGIN ADMIN</h1>
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
                </div>
            </div>
        </>
    );
}

export default LoginAdmin;
