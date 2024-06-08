import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LogoInvoice from "../../assets/logo.png";
import Signature from "../../assets/signature.png";
import ProductInvoice from "../../assets/mobile.jpg";
import CALL_URL from "../../api/CALL_URL";
import { Cookies, useCookies } from "react-cookie";

function Invoice() {
    const [detailOrder, setDetailOrder] = useState([]);
    const [clientOrder, setClientOrder] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const { idOrder } = useParams();
    const navigate = useNavigate();
    const cookies = new Cookies();

    // Check login
    useEffect(() => {
        if (cookies.get("user") === undefined) {
            navigate("/login");
        }
    }, []);

    useEffect(() => {
        axios
            .get(`${CALL_URL.URL_getDetailOrder}?idorder=${idOrder}`)
            .then((response) => {
                setDetailOrder(response.data);

                var priceProduct = 0;
                response.data.map((itemCart, index) => {
                    priceProduct =
                        priceProduct +
                        itemCart.quantityProduct * itemCart.priceProduct;
                });
                setSubTotal(priceProduct);
            });
    }, []);

    // Select Clients
    useEffect(() => {
        axios
            .get(`${CALL_URL.URL_getClientOrder}?idorder=${idOrder}`)
            .then((response) => {
                setClientOrder(response.data);
            });
    }, []);

    return (
        <>
            <Header />
            <div className="my-5 page" size="A4">
                <div className="p-5">
                    <section className="top-content bb d-flex justify-content-between">
                        <div className="logo">
                            <img
                                src={LogoInvoice}
                                alt=""
                                className="img-fluid"
                            />
                        </div>
                    </section>
                    <section className="store-user mt-5">
                        <div className="col-10">
                            <div className=" row row-invoice bb pb-3">
                                <div className="col-5">
                                    <p>Cửa hàng,</p>
                                    <h2>Vux Store</h2>
                                    <p className="address">
                                        {" "}
                                        Huỳnh Lắm, <br /> Ngũ Hành Sơn, <br />
                                        Đà Nẵng{" "}
                                    </p>
                                    <div className="txn mt-2">
                                        Phone: 0842.88.0123
                                    </div>
                                    <div className="txn mt-2">
                                        Email: vux.0511@gmail.com
                                    </div>
                                </div>
                                <div className="col-5">
                                    {clientOrder.map((client, index) => (
                                        <div key={index}>
                                            <p>Khách hàng,</p>
                                            <h2>{client.fullname}</h2>
                                            <p className="address">
                                                {client.address}
                                            </p>
                                            <div className="txn mt-2">
                                                {client.phone}
                                            </div>
                                            <div className="txn mt-2">
                                                {client.email}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="row row-invoice extra-info pt-3">
                                <div className="col-7">
                                    <p>
                                        Phương thức thanh toán: <span>COD</span>
                                    </p>
                                    <p>
                                        Số hoá đơn: <span>#{idOrder}</span>
                                    </p>
                                </div>
                                <div className="col-5">
                                    {clientOrder.map((client, index) => (
                                        <p key={index}>
                                            Ngày đặt hàng:{" "}
                                            <span>{client.dateOrder}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="product-area mt-4">
                        <table className="table table-hover">
                            <thead className="invoice">
                                <tr>
                                    <td>Sản Phẩm</td>
                                    <td>Đơn Giá</td>
                                    <td>Size</td>
                                    <td>Số Lượng</td>
                                    <td>Thành Tiền</td>
                                </tr>
                            </thead>
                            <tbody>
                                {detailOrder.map((detailOrder, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="media">
                                                <img
                                                    className="mr-3 img-fluid"
                                                    src={
                                                        detailOrder.imageProduct_1
                                                    }
                                                    alt="Product"
                                                />
                                                <div className="media-body">
                                                    <p className="mt-0 title">
                                                        {
                                                            detailOrder.nameProduct
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {new Intl.NumberFormat("vn-VI", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(detailOrder.priceProduct)}
                                        </td>
                                        <td>{detailOrder.size}</td>
                                        <td>{detailOrder.quantityProduct}</td>
                                        <td>
                                            {new Intl.NumberFormat("vn-VI", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(
                                                detailOrder.priceProduct *
                                                    detailOrder.quantityProduct
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                    <section className="balance-info">
                        <div className="row">
                            <div className="col-7">
                                <p className="m-0 font-weight-bold"> Lưu ý: </p>
                                <p>
                                    Miễn phí vận chuyển khi mua hàng tại
                                    VuxStore. Miễn phí đổi trả hàng khi không
                                    hài lòng về sản phẩm. Mọi thắc mắc vui lòng
                                    liên hệ hotline của chúng tôi
                                </p>
                                <p>Cảm ơn bạn đã mua sắm tại Vux Store</p>
                            </div>
                            <div className="col-5 col-total">
                                <table className="table border-0 table-hover">
                                    <tbody></tbody>
                                    <tfoot>
                                        <tr>
                                            <td>Tổng tiền:</td>
                                            <td>
                                                {new Intl.NumberFormat(
                                                    "vn-VI",
                                                    {
                                                        style: "currency",
                                                        currency: "VND",
                                                    }
                                                ).format(subTotal)}
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className="col-12">
                                    <img
                                        src={Signature}
                                        className="img-fluid"
                                        alt=""
                                    />
                                    <p className="text-center m-0 signature">
                                        {" "}
                                        Vux Store{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Cart BG */}
                    {/* <img src={CartImg} className="img-fluid cart-bg" alt="" /> */}
                    {/* <footer className="footer-invoice">
                        <hr />
                        <p className="m-0 text-center">
                            View THis Invoice Online At -{" "}
                            <a href="#!"> invoice/saburbd.com/#868 </a>
                        </p>
                        <div className="social pt-3">
                            <span className="pr-2">
                                <i className="fas fa-mobile-alt" />
                                <span>0123456789</span>
                            </span>
                            <span className="pr-2">
                                <i className="fas fa-envelope" />
                                <span>me@saburali.com</span>
                            </span>
                            <span className="pr-2">
                                <i className="fab fa-facebook-f" />
                                <span>/sabur.7264</span>
                            </span>
                            <span className="pr-2">
                                <i className="fab fa-youtube" />
                                <span>/abdussabur</span>
                            </span>
                            <span className="pr-2">
                                <i className="fab fa-github" />
                                <span>/example</span>
                            </span>
                        </div>
                    </footer> */}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Invoice;
