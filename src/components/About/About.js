import "./About.scss";

import { BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiOutlinePhone } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

function About() {
    return (
        <div className="small-container about">
            <div className="row-about">
                <div className="col-2">
                    <img
                        src="https://media.gq-magazine.co.uk/photos/643676155a5350ccaaa4cdaa/1:1/w_1157,h_1157,c_limit/Screenshot%202023-04-12%20at%2010.12.38.png"
                        alt="Image About"
                    />
                </div>
                <div className="col-2">
                    <h1>THÔNG TIN VỀ CỬA HÀNG</h1>
                    <p className="about-decs">
                        We champion continual progress for athletes and sport by
                        taking action to help athletes reach their potential.
                        Every job at NIKE, Inc. is grounded in a team-first
                        mindset, cultivating a culture of innovation and a
                        shared purpose to leave an enduring impact.
                    </p>
                    <div className="contact">
                        <h3 className="contact-heading">
                            Liên Hệ Với Chúng Tôi{" "}
                        </h3>
                        <span className="contact-icon-title">
                            <a href="">
                                <AiOutlinePhone className="contact-icon" />{" "}
                                0842.88.0123
                            </a>
                        </span>
                        <span className="contact-icon-title">
                            <a href="">
                                <FaFacebook className="contact-icon" /> Hoàng
                                Văn Vũ
                            </a>
                        </span>
                        <span className="contact-icon-title">
                            <a href="">
                                {" "}
                                <GoLocation className="contact-icon" /> 26 Huỳnh
                                Văn Nghệ, Hoà Hải, Ngũ Hành Sơn, ĐN
                            </a>
                        </span>
                        <span className="contact-icon-title">
                            <a href="">
                                <FiMail className="contact-icon" />{" "}
                                vux.0511@gmail.com
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
