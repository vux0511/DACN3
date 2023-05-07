import "./Register.scss";
import { FcGoogle } from "react-icons/fc";

function Register() {
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
                <form action="#" className="register-form">
                    <label htmlFor="username" className="register-label">
                        User name
                    </label>
                    <input
                        type="text"
                        id="username"
                        className="register-input"
                        placeholder="Nhập tài khoản của bạn..."
                        autoComplete="off"
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
                    />
                    <label htmlFor="password" className="register-label">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="register-input"
                        placeholder="Nhập lại mật khẩu của bạn..."
                        autoComplete="off"
                    />
                    <button className="register-submit">Đăng Ký</button>
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
