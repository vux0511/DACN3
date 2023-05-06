import { FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import "./Footer.scss";
import Newsletter from "./Newsletter/Newsletter";
import Payment from "../../assets/payments.png";

function Footer() {
    return (
        <>
            <Newsletter />
            <footer className="footer">
                <div className="footer-content">
                    <div className="col">
                        <div className="title">About</div>
                        <div className="text">PROGRAMMED BY VUX</div>
                    </div>
                    <div className="col">
                        <div className="title">Contact</div>
                        <div className="c-item">
                            <FaLocationArrow />
                            <div className="text">
                                26 Huỳnh Văn Nghệ, Hoà Hải, Ngũ Hành Sơn, Đà
                                Nẵng
                            </div>
                        </div>
                        <div className="c-item">
                            <FaMobileAlt />
                            <div className="text">Phone: 0842.88.0123</div>
                        </div>
                        <div className="c-item">
                            <HiOutlineMail />
                            <div className="text">
                                Email: vux.0511@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">Categorys</div>
                        <span className="text">Nike</span>
                        <span className="text">Adidas</span>
                        <span className="text">MLB</span>
                        <span className="text">Gucci</span>
                        <span className="text">Puma</span>
                        <span className="text"> New Balance</span>
                    </div>
                    <div className="col">
                        <div className="title">Pages</div>
                        <span className="text">Trang Chủ</span>
                        <span className="text">Giới Thiệu</span>
                        <span className="text">Điều Khoản</span>
                        <span className="text">Chính Sách</span>
                        <span className="text">Liên Hệ</span>
                    </div>
                </div>
                {/* <div className="bottom">
                    <div className="bottom-content">
                        <div className="text">VUXSTORE PROGRAMMED BY VUX </div>
                        <img className="image" src={Payment} alt="Payment" />
                    </div>
                </div> */}
            </footer>
        </>
    );
}

export default Footer;
