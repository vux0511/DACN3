import "./Information.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Information() {
    return (
        <Container className="container-infor">
            <Row className="row-infor">
                <Col col-md={4} className="col-4-infor">
                    <div className="avatar-infor">
                        <img
                            className="avatar"
                            src="https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                            alt="Avatar"
                        />
                    </div>
                    <div className="decs-infor">
                        <p className="fullname-infor">Hoàng Văn Vũ</p>
                        <p className="email-infor">john@example.com</p>
                        <p className="phone-infor">(239) 816-9029</p>
                        <p className="address-infor">
                            Bay Area, San Francisco, CA
                        </p>
                    </div>
                </Col>
                <Col col-md={8} className="col-8-infor">
                    <form className="information-form">
                        <label htmlFor="fullname" className="information-label">
                            Họ tên
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            className="information-input"
                            placeholder="Nhập họ tên của bạn..."
                            autoComplete="off"
                            // onChange={handleChangeUsername}
                        />

                        <label htmlFor="email" className="information-label">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="information-input"
                            placeholder="Nhập Email của bạn..."
                            autoComplete="off"
                            // onChange={handleChangePassword}
                        />
                        <label htmlFor="phone" className="information-label">
                            Số điện thoại
                        </label>
                        <input
                            type="text"
                            id="phone"
                            className="information-input"
                            placeholder="Nhập số điện thoại của bạn..."
                            autoComplete="off"
                            // onChange={handleChangeRePassword}
                        />
                        <label htmlFor="address" className="information-label">
                            Địa chỉ
                        </label>
                        <input
                            type="text"
                            id="address"
                            className="information-input"
                            placeholder="Nhập địa chỉ của bạn..."
                            autoComplete="off"
                            // onChange={handleChangeRePassword}
                        />
                        <button
                            className="information-submit"
                            // onClick={() => setButtonPopup(true)}
                        >
                            Lưu Thay Đổi
                        </button>
                        {/* <Popup
                        trigger={buttonPopup}
                        setTrigger={setButtonPopup}
                        setNavigate={"/login"}
                    >
                        <h3 className="title-thanks">Thành Công!</h3>
                        <p className="decs-thanks">
                            Đăng ký tài khoản thành công!
                        </p>
                        <p>Vui lòng đăng nhập để sử dụng dịch vụ!</p>
                    </Popup>
                    <PopupWrong trigger={popWrong} setTrigger={setPopWrong}>
                        <h3 className="title-thanks">Thất Bại!</h3>
                        <p className="decs-thanks">{messageRegister}</p>
                    </PopupWrong> */}
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Information;
