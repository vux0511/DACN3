import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "../../api/CALL_URL";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");
    const [fullname, setFullname] = useState("");
    const navigate = useNavigate();
    const notify = () => toast();

    const handleChangeUsername = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleChangeRePassword = (e) => {
        setRePassword(e.target.value);
    };
    const handleChangeFullname = (e) => {
        setFullname(e.target.value);
    };

    const handleToastifyError = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const handleToastifySucces = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            fullname: fullname,
            password: password,
        };
        console.log(data);

        if (password === "" || email === "") {
            handleToastifyError(
                "Không được để trống trường tài khoản hoặc mật khẩu!"
            );
        } else if (password.length < 6 || email.length < 6) {
            handleToastifyError("Độ dài của các trường phải lớn hơn 6 ký tự!");
        } else if (password !== repassword) {
            handleToastifyError("Vui lòng nhập mật khẩu trùng nhau!");
        } else {
            axios.post(CALL_URL.URL_setNewUser, data).then((response) => {
                console.log(response.data);
                if (response.data === true) {
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
        <>
            <Header />
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
                        <label htmlFor="fullname" className="register-label">
                            Họ và Tên *
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            className="register-input"
                            placeholder="Nhập tên của bạn.."
                            autoComplete="off"
                            onChange={handleChangeFullname}
                            required
                        />
                        <label htmlFor="username" className="register-label">
                            Email *
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="register-input"
                            placeholder="Nhập email của bạn..."
                            autoComplete="off"
                            onChange={handleChangeUsername}
                            required
                        />

                        <label htmlFor="password" className="register-label">
                            Password *
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="register-input"
                            placeholder="Nhập mật khẩu của bạn..."
                            autoComplete="off"
                            required
                            onChange={handleChangePassword}
                        />
                        <label htmlFor="repassword" className="register-label">
                            Password *
                        </label>
                        <input
                            type="password"
                            id="repassword"
                            className="register-input"
                            placeholder="Nhập lại mật khẩu của bạn..."
                            autoComplete="off"
                            onChange={handleChangeRePassword}
                            required
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
            <Footer />
        </>
    );
}

export default Register;
