import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
// import Product from "./components/Products/Products";
import DetailProduct from "./components/DetailProduct/DetailProduct";
// import AppContext from "./utils/context";
import Cart from "./components/Cart/Cart";
import Payment from "./components/Payment/Payment";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Information from "./components/Information/Information";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import OrderUser from "./components/Order/Order";
import Invoice from "./components/Order/Invoice";
import NotFound from "./components/NotFound/NotFound";
import RequiredLogin from "./components/RequiredLogin/RequiredLogin";
import AdminPage from "./components/Admin/Admin";
import ProductsAdmin from "./components/Admin/Products/ProductsAdmin";
import EditProduct from "./components/Admin/Products/EditProduct";
import AddProduct from "./components/Admin/Products/AddProduct";
import CategoryAdmin from "./components/Admin/Category/Category";
import EditCategory from "./components/Admin/Category/EditCategory";
import AddCategory from "./components/Admin/Category/AddCategory";
import Order from "./components/Admin/Order/Order";
import ViewDetailOrder from "./components/Admin/Order/ViewDetailOrder";
import User from "./components/Admin/User/ViewUser";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useState } from "react";

function App() {
    const [cartCount, setCartCount] = useState(1);

    return (
        <BrowserRouter>
            {/* <AppContext> */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            setCartCount={setCartCount}
                            cartCount={cartCount}
                        />
                    }
                />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/product/" element={<Products />} />
                <Route
                    path="/product/category/:categoryId"
                    element={<Products />}
                />
                <Route path="/product/:productId" element={<DetailProduct />} />
                <Route path="/cart/" element={<Cart />} />
                <Route path="/payment/" element={<Payment />} />
                <Route path="/login/" element={<Login />} />
                <Route path="/register/" element={<Register />} />
                <Route path="/about/" element={<About />} />
                <Route path="/information/" element={<Information />} />
                <Route path="/changepass/" element={<ChangePassword />} />
                <Route path="/order/" element={<OrderUser />} />
                <Route path="/order/invoice/:idOrder" element={<Invoice />} />
                <Route path="/admin/" element={<AdminPage />} />
                <Route path="/admin/products" element={<ProductsAdmin />} />
                <Route
                    path="/admin/product/edit/:idProduct"
                    element={<EditProduct />}
                />
                <Route path="/admin/product/add" element={<AddProduct />} />

                <Route path="/admin/category" element={<CategoryAdmin />} />
                <Route path="/admin/category/add" element={<AddCategory />} />
                <Route
                    path="/admin/category/edit/:idCategory"
                    element={<EditCategory />}
                />

                <Route path="/admin/order" element={<Order />} />
                <Route
                    path="/admin/order/edit/:idOrder"
                    element={<ViewDetailOrder />}
                />
                <Route path="*" element={<NotFound />} />

                <Route path="/admin/user" element={<User />} />
                <Route path="/requiredlogin" element={<RequiredLogin />} />
            </Routes>
            {/* </AppContext> */}
        </BrowserRouter>
    );
}

export default App;
