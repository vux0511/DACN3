import "./Register.scss";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");
    const navigate = useNavigate();
    const notify = () => toast();

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleChangeRePassword = (e) => {
        setRePassword(e.target.value);
    };

    const handleToastifyError = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
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

    const handleRegister = (e) => {
        e.preventDefault();
        let data = {
            username: username,
            password: password,
        };

        if (password === "" || username === "") {
            handleToastifyError(
                "Không được để trống trường tài khoản hoặc mật khẩu!"
            );
        } else if (password.length < 6 || username.length < 6) {
            handleToastifyError("Độ dài của các trường phải lớn hơn 6 ký tự!");
        } else if (password !== repassword) {
            handleToastifyError("Vui lòng nhập mật khẩu trùng nhau!");
        } else {
            axios
                .post("http://localhost/DACN1_API/api/setNewUser.php", data)
                .then((response) => {
                    console.log(response.data);
                    if (response.data.message === "success") {
                        handleToastifySucces(
                            "Đăng ký thành công! Vui lòng đăng nhập lại "
                        );
                        setTimeout(() => {
                            navigate("/login");
                        }, 3000);
                    } else {
                        handleToastifyError(response.data.message);
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
                    <button className="register-submit" onClick={notify}>
                        Đăng Ký
                    </button>
                    <ToastContainer />
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
