import "./Login.scss";
import { FcGoogle } from "react-icons/fc";

function Login() {
    return (
        <div className="login-container">
            <div className="login">
                <h1 className="login-heading">Đăng Nhập</h1>
                <button className="login-social">
                    <FcGoogle className="login-social-icon" />
                    <span className="login-social-text">
                        Đăng Nhập Với Google
                    </span>
                </button>
                <div className="login-or">
                    <span>hoặc</span>
                </div>
                <form action="#" className="login-form">
                    <label htmlFor="username" className="login-label">
                        User name
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="login-input"
                        placeholder="Tài khoản của bạn"
                    />

                    <label htmlFor="password" className="login-label">
                        Password
                    </label>
                    <input
                        type="text"
                        id="password"
                        className="login-input"
                        placeholder="Tài khoản của bạn"
                    />
                    <button className="login-submit">Đăng Nhập</button>
                </form>
                <p className="login-resetpass">
                    <span>Đăng ký tài khoản ? </span>
                    <a href="register" className="register-link">
                        {" "}
                        Tại đây
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Login;
