import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

function Newsletter() {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="big-text">
                    Đăng Ký Để Nhận Thông Tin Mới Nhất
                </span>
                <div className="form">
                    <input type="text" placeholder="Nhập Email của bạn ..." />
                    <button>Đăng Ký</button>
                </div>
                <div className="social-icon">
                    <div className="icon">
                        <BsFacebook />
                    </div>
                    <div className="icon">
                        <BsInstagram />
                    </div>
                    <div className="icon">
                        <BsGithub />
                    </div>
                    <div className="icon">
                        <CgMail />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
