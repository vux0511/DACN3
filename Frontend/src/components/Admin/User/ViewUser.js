import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CALL_URL from "~/api/CALL_URL";

function User() {
    const [user, setUser] = useState([]);
    const notify = () => toast();

    useEffect(() => {
        axios.get(CALL_URL.URL_getUserAdmin).then((response) => {
            setUser(response.data);
            console.log(response.data);
        });
    }, []);

    const handleDeleteUser = (e) => {
        e.preventDefault();
        var data = {
            idUser: e.target.value,
        };
        axios.post(CALL_URL.URL_deleteUser, data).then((response) => {
            const updatedUser = user.filter((item) => {
                if (item.idUser === data.idUser) {
                    toast.success("Xoá thành công", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
                return item.idUser !== data.idUser;
            });
            setUser(updatedUser);
        });
    };

    const handleChangeRole = (e) => {
        let idUser = e.target.className.split(" ");
        var data = {
            role: e.target.value,
            idUser: idUser[1],
        };

        axios.post(CALL_URL.URL_editRole, data).then((response) => {
            console.log(response.data);
        });
    };

    return (
        <div className="main-container">
            <Sidebar />
            <div className="listProducts">
                <div className="title-products-list">
                    <h3>Danh Sách Người Dùng</h3>
                </div>
                <div className="product-list">
                    <table>
                        <thead>
                            <tr>
                                <th className="th-id-order">#</th>
                                <th className="th-username-users">Username</th>
                                <th className="th-fullname-users">Họ Tên</th>
                                <th className="th-phone-users">SĐT</th>
                                <th className="th-email-users">Email</th>
                                <th className="th-address-users">Địa Chỉ</th>
                                <th className="th-role-users">Cấp Bậc</th>
                                <th className="th-act-users">Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.fullname}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address}</td>
                                    <td>
                                        <select
                                            onChange={handleChangeRole}
                                            name="select-role"
                                            id="select-category"
                                            className={`select-order ${user.idUser}`}
                                        >
                                            <option
                                                value="1"
                                                selected={user.role === "1"}
                                            >
                                                Admin
                                            </option>
                                            <option
                                                value="0"
                                                selected={user.role === "0"}
                                            >
                                                User
                                            </option>
                                        </select>
                                    </td>
                                    <td>
                                        {/* <Link
                                            to={`/admin/order/edit/${user.idUser}`}
                                        >
                                            <button className="delete-item-product-btn">
                                                Xem
                                            </button>
                                        </Link>{" "}
                                        -{" "} */}
                                        <a href="">
                                            <button
                                                className="delete-item-product-btn"
                                                value={user.idUser}
                                                onClick={handleDeleteUser}
                                            >
                                                Xoá
                                            </button>
                                            <ToastContainer />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default User;
