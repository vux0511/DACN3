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
                        <div className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Facere reiciendis, tempora dignissimos eius,
                            placeat ipsum voluptas magnam nobis velit, natus
                            sunt quidem nulla enim architecto vitae voluptate
                            esse beatae repellendus.
                        </div>
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
                        <div className="text">Nike</div>
                        <div className="text">Adidas</div>
                        <div className="text">MLB</div>
                        <div className="text">Gucci</div>
                        <div className="text">Puma</div>
                        <div className="text"> New Balance</div>
                    </div>
                    <div className="col">
                        <div className="title">Pages</div>
                        <div className="text">Trang Chủ</div>
                        <div className="text">Giới Thiệu</div>
                        <div className="text">Điều Khoản</div>
                        <div className="text">Chính Sách</div>
                        <div className="text">Liên Hệ</div>
                    </div>
                    <div className="bottom">
                        <div className="bottom-content">
                            <div className="text">
                                VUXSTORE PROGRAMMED BY VUX{" "}
                            </div>
                            <img src={Payment} alt="Payment" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
