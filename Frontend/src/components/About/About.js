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
                                    Chào mừng bạn đến với VuxStore – điểm đến lý
                                    tưởng cho mọi tín đồ công nghệ!
                                </p>
                                <p>
                                    VuxStore là website bán hàng trực tuyến hàng
                                    đầu Việt Nam, chuyên cung cấp các sản phẩm
                                    công nghệ cao cấp từ các thương hiệu nổi
                                    tiếng trên thế giới. Chúng tôi cam kết mang
                                    đến cho khách hàng những sản phẩm chất
                                    lượng, chính hãng với mức giá cạnh tranh
                                    nhất trên thị trường.
                                </p>
                                <p>
                                    Tại VuxStore, bạn có thể dễ dàng tìm thấy
                                    mọi thứ mình cần, từ điện thoại thông minh,
                                    máy tính bảng, laptop, đến các phụ kiện công
                                    nghệ như tai nghe, bàn phím, chuột, và thiết
                                    bị lưu trữ. Chúng tôi liên tục cập nhật
                                    những sản phẩm mới nhất, đáp ứng mọi nhu cầu
                                    của bạn về công nghệ.
                                </p>
                                <p>
                                    Với đội ngũ nhân viên giàu kinh nghiệm và
                                    nhiệt tình, chúng tôi luôn sẵn sàng tư vấn,
                                    hỗ trợ khách hàng trong suốt quá trình mua
                                    sắm. Chế độ bảo hành dài hạn và chính sách
                                    đổi trả linh hoạt giúp bạn hoàn toàn yên tâm
                                    khi mua sắm tại VuxStore.
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
                                    src="https://t4.ftcdn.net/jpg/06/01/14/23/360_F_601142328_VnY6DMf1sC0RULodemaCSrvXSlFhO1lA.jpg"
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
