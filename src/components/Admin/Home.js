import { AiOutlineShoppingCart } from "react-icons/ai";
import ImgUser from "../../assets/avatar_user.webp";

function Home() {
    return (
        <section id="content">
            {/* NAVBAR */}
            <nav>
                <i className="bx bx-menu" />
                <a href="#" className="nav-link">
                    Categories
                </a>
                <form action="#">
                    <div className="form-input">
                        <input type="search" placeholder="Search..." />
                        <button type="submit" className="search-btn">
                            <box-icon name="search"></box-icon>
                        </button>
                    </div>
                </form>
                <input type="checkbox" id="switch-mode" hidden />
                <label htmlFor="switch-mode" className="switch-mode" />
                <a href="#" className="notification">
                    <i className="bx bxs-bell" />
                    <span className="num">8</span>
                </a>
                <a href="#" className="profile">
                    <img src={ImgUser} />
                </a>
            </nav>
            {/* NAVBAR */}
            {/* MAIN */}
            <main>
                <div className="head-title">
                    <div className="left">
                        <h1>Dashboard</h1>
                        <ul className="breadcrumb">
                            <li>
                                <a href="#">Dashboard</a>
                            </li>
                            <li>
                                <i className="bx bx-chevron-right" />
                            </li>
                            <li>
                                <a className="active" href="#">
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="btn-download">
                        <i className="bx bxs-cloud-download" />
                        <span className="text">Download PDF</span>
                    </a>
                </div>
                <ul className="box-info">
                    <li>
                        <box-icon name="calendar-check" type="solid"></box-icon>
                        <span className="text">
                            <h3>1020</h3>
                            <p>New Order</p>
                        </span>
                    </li>
                    <li>
                        <box-icon name="group"></box-icon>
                        <span className="text">
                            <h3>2834</h3>
                            <p>Visitors</p>
                        </span>
                    </li>
                    <li>
                        <box-icon name="dollar-circle"></box-icon>
                        <span className="text">
                            <h3>$2543</h3>
                            <p>Total Sales</p>
                        </span>
                    </li>
                </ul>
                <div className="table-data">
                    <div className="order">
                        <div className="head">
                            <h3>Recent Orders</h3>
                            <i className="bx bx-search" />
                            <i className="bx bx-filter" />
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Date Order</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={ImgUser} alt="" srcset="" />
                                        <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td>
                                        <span className="status completed">
                                            Completed
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ImgUser} alt="" srcset="" />
                                        <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td>
                                        <span className="status pending">
                                            Pending
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ImgUser} alt="" srcset="" />
                                        <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td>
                                        <span className="status process">
                                            Process
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ImgUser} alt="" srcset="" />
                                        <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td>
                                        <span className="status pending">
                                            Pending
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={ImgUser} alt="" srcset="" />
                                        <p>John Doe</p>
                                    </td>
                                    <td>01-10-2021</td>
                                    <td>
                                        <span className="status completed">
                                            Completed
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="todo">
                        <div className="head">
                            <h3>Todos</h3>
                            <i className="bx bx-plus" />
                            <i className="bx bx-filter" />
                        </div>
                        <ul className="todo-list">
                            <li className="completed">
                                <p>Todo List</p>
                                <i className="bx bx-dots-vertical-rounded" />
                            </li>
                            <li className="completed">
                                <p>Todo List</p>
                                <i className="bx bx-dots-vertical-rounded" />
                            </li>
                            <li className="not-completed">
                                <p>Todo List</p>
                                <i className="bx bx-dots-vertical-rounded" />
                            </li>
                            <li className="completed">
                                <p>Todo List</p>
                                <i className="bx bx-dots-vertical-rounded" />
                            </li>
                            <li className="not-completed">
                                <p>Todo List</p>
                                <i className="bx bx-dots-vertical-rounded" />
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            {/* MAIN */}
        </section>
    );
}

export default Home;
