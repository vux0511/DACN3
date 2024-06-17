import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "~/api/CALL_URL";

function EditProduct() {
    const { idOrder } = useParams();
    const [status, setStatus] = useState([]);
    const [detailOrder, setDetailOrder] = useState({});
    const [subTotal, setSubTotal] = useState(0);

    const handleViewOrder = (e) => {
        e.preventDefault();
        let data = status;
        data.id = idOrder;
        console.log(CALL_URL.URL_editOrder);

        axios.post(CALL_URL.URL_editOrder, data).then((response) => {
            console.log(response.data);
            if (response.data.status === "success") {
                toast.success("Sửa thành công", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                toast.success("Sửa thất bại", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        });
    };

    // Get getDetailOrder
    useEffect(() => {
        axios
            .get(`${CALL_URL.URL_getDetailOrder}${idOrder}`)
            .then((response) => {
                setDetailOrder(response.data);
                console.log("detailOrder", detailOrder);
                var priceProduct = 0;
                response.data.productItems.map((itemInvoice, index) => {
                    priceProduct =
                        priceProduct +
                        itemInvoice.quantity * itemInvoice.unit_price;
                });
                setSubTotal(priceProduct);
            });
    }, []);

    return (
        <div className="main-container">
            <Sidebar />
            <div className="listProducts">
                <div className="title-products-list">
                    <h3>Quản Lý Đơn Hàng</h3>
                    <div className="row">
                        <div className="col-75">
                            <div className="container">
                                <form onSubmit={handleViewOrder}>
                                    <div className="row">
                                        <div className="col-50">
                                            <div className="product-list">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th className="th-name-product-order">
                                                                Tên Sản Phẩm
                                                            </th>
                                                            <th className="th-img-product-order">
                                                                Ảnh Sản Phẩm
                                                            </th>
                                                            <th className="th-price-product-order">
                                                                Đơn Giá
                                                            </th>
                                                            <th className="th-quantity-product-order">
                                                                Số Lượng
                                                            </th>
                                                            <th className="th-subtotal-product-order">
                                                                Thành Tiền
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {detailOrder.productItems
                                                            ? detailOrder.productItems.map(
                                                                  (
                                                                      detailOrder,
                                                                      index
                                                                  ) => (
                                                                      <tr
                                                                          key={
                                                                              index
                                                                          }
                                                                      >
                                                                          <td>
                                                                              <div>
                                                                                  <img
                                                                                      src={`http://localhost:5001/images/products/${detailOrder.imgProduct}`}
                                                                                      alt="Image Product"
                                                                                  />
                                                                              </div>
                                                                          </td>
                                                                          <td>
                                                                              {
                                                                                  detailOrder.nameProduct
                                                                              }
                                                                          </td>
                                                                          <td>
                                                                              {new Intl.NumberFormat(
                                                                                  "vn-VI",
                                                                                  {
                                                                                      style: "currency",
                                                                                      currency:
                                                                                          "VND",
                                                                                  }
                                                                              ).format(
                                                                                  detailOrder.unit_price
                                                                              )}
                                                                          </td>
                                                                          <td>
                                                                              {
                                                                                  detailOrder.quantity
                                                                              }
                                                                          </td>
                                                                          <td>
                                                                              {new Intl.NumberFormat(
                                                                                  "vn-VI",
                                                                                  {
                                                                                      style: "currency",
                                                                                      currency:
                                                                                          "VND",
                                                                                  }
                                                                              ).format(
                                                                                  detailOrder.unit_price *
                                                                                      detailOrder.quantity
                                                                              )}
                                                                          </td>
                                                                      </tr>
                                                                  )
                                                              )
                                                            : "k"}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-list"></div>
            </div>
        </div>
    );
}

export default EditProduct;
