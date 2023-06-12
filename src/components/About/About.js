import "./About.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BsTelephone, BsInstagram } from "react-icons/bs";
import { AiFillGithub, AiOutlinePhone } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

function About() {
    return (
        <>
            <Header />
            <div className="wrapper-about">
                <div className="layout">
                    <div className="container-about">
                        <div className="row-about">
                            <div className="flex-about">
                                <h2>THÔNG TIN VỀ CỬA HÀNG CỦA CHÚNG TÔI</h2>
                                <p>
                                    VuxStore ra đời với tất cả niềm đam mê
                                    thương mại điện tử và giày dép của những
                                    người sáng lập. Chúng tôi mong muốn mang đến
                                    cho khách hàng những đôi giày tốt nhất, giúp
                                    khách hàng luôn cảm thấy tự tin vững bước
                                    theo đuổi niềm đam mê của bản thân để thành
                                    công vượt trội.
                                </p>
                                <p>
                                    VuxStore là website bán giày chính hãng từ
                                    các thương hiệu hàng đầu thế giới như: Nike,
                                    adidas, Converse, New balance, Ascis,... Tất
                                    cả các sản phẩm đều có nguồn gốc xuất sứ rõ
                                    ràng chính hãng.VuxStore nói không với hàng
                                    fake, hàng gia công chất lượng kém. Khi mua
                                    hàng tại VuxStore khách hàng sẽ luôn có được
                                    sản phẩm tốt nhất với mức giá cực kỳ hấp dẫn
                                    mà khó có thể tìm được ở nơi khác.
                                </p>
                                <p>
                                    Địa chỉ: Huỳnh Lắm, Hoà Hải, Ngũ Hành Sơn,
                                    Đà Nẵng{" "}
                                </p>
                                <div className="social-link-about">
                                    <a href="">
                                        <BsTelephone />
                                    </a>
                                    <a href="">
                                        <GrLocation />
                                    </a>
                                    <a href="">
                                        <FaFacebook />
                                    </a>
                                    <a href="">
                                        <BsInstagram />
                                    </a>
                                    <a href="">
                                        <MdOutlineMailOutline />
                                    </a>
                                </div>
                            </div>
                            <div className="flex-about">
                                <img
                                    src="https://media.gq-magazine.co.uk/photos/643676155a5350ccaaa4cdaa/1:1/w_1157,h_1157,c_limit/Screenshot%202023-04-12%20at%2010.12.38.png"
                                    alt="Img About"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
