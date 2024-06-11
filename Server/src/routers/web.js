import express from "express";
import {
    user,
    product,
    cart,
    category,
    feedback,
    order,
} from "../controllers/index";
import getFileImage from "../helpers/getFile";

let router = express.Router();

let initRouter = (app) => {
    router.get("/", function (req, res) {
        res.send("hello");
    });
    //user ----------
    router.post("/user/register", user.regissterUser);
    router.post("/user/login-user", user.loginUser);
    router.post("/user/update-user", user.updateUser);
    router.post("/user/update-image-user/:idUser", user.updateImgUser);
    router.post("/user/check-pass-user/:idUser", user.checkPassUser);
    router.get("/user/get-normal-user/:idUser", user.getNormalUser);
    router.post("/user/active-email", user.verifyEmail);
    router.get("/user/getQuanityUser", user.getQuanity);
    router.get("/user/get-list-user", user.getListUser);

    // category ---------
    router.get("/category/get-list", category.getNormalCategoies);
    router.post("/category/add-new", category.createNewCategory);
    router.post("/category/remove-by-idCategory", category.removeCategoryById);

    //product -------
    router.post("/product/add-new", product.createNewProduct); // thêm sản phẩm
    router.get("/product/detail", product.getProductById); // lấy thông tin chi tiết một sản phẩm theo id
    router.get("/product/get-all/:page", product.getAllProduct); // lấy sản phẩm theo tìm kiếm hoặc ko và có phân trang
    router.post("/product/updae-image/:idproduct", product.updateImage); // cập nhật hình ảnh sản phẩm
    router.post("/product/update-infor/:idproduct", product.updateProduct); // cập nhật thông tin sản phẩm
    router.get("/product/count-all-product", product.countProduct); // đếm số lượng sản phẩm
    // router.get("/product-search/", product.searchProduct);
    router.get(
        "/product/get-by-idcategory/:idCategory",
        product.getProductByIdCategory
    ); // lấy danh sách sản phẩm theo id hàng hóa
    router.post("/product/remove-by-idProduct", product.removeProduct); // xóa một sản phẩm nào đó trong giỏ hàng

    // Cart ----------
    router.post("/cart/add-new", cart.addItemCart); // thêm một sản phẩm vào trong giỏ hàng
    router.get(
        "/cart/get-cart-by-idUser/:user_token",
        cart.getItemCartByIdUser
    ); // lấy danh sách giỏ hàng theo id người dùng
    router.post("/cart/remove-product-cart", cart.removeCart); // xóa một sản phẩm nào đó trong giỏ hàng
    // feedback ( comment, rate star)
    router.post("/feedback/add-new", feedback.createNew);
    router.get("/feedback/get-list/:idProduct/:page", feedback.getFeedback);
    router.get(
        "/feedback/get-statistical-idproduct/:idProduct",
        feedback.getStatiFeedBackByIdProduct
    );

    // Order
    router.post("/order/create-new", order.orderCart);
    router.get("/order/getall/:idUser", order.getOrderByIdUser);
    router.get("/order/get-id/:idOrder", order.getOrderById);
    router.post("/order/change-status-order", order.changeStatus);

    router.get("/images/:path/:name_image", getFileImage); // lấy ảnh từ server

    return app.use("/", router);
};
export default initRouter;
