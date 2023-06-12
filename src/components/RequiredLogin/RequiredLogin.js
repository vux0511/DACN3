import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import RequiredLoginImg from "../../assets/requiredlogin.png";
import "./RequiredLogin.scss";

function RequiredLogin() {
    const navigate = useNavigate();
    const cookies = new Cookies();

    // Check login
    useEffect(() => {
        if (cookies.get("user") === undefined) {
            navigate("/requiredlogin");
        }
    }, []);

    return (
        <div>
            <Header />
            <div className="small-container cart-page">
                <table>
                    <tbody>
                        <tr>
                            <td colSpan={4} className="tdTanTu">
                                <div className="empty_cart required-login">
                                    <img
                                        src={RequiredLoginImg}
                                        alt="Required login"
                                    />
                                    <p className="title-required-login">
                                        Bạn phải đăng nhập để sử dụng tính năng
                                        này!{" "}
                                    </p>
                                    <a href="" className="required-login-a">
                                        Đăng nhập ngay?
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
}

export default RequiredLogin;
