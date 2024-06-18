import express from "express";
import {
    user,
    product,
    cart,
    category,
    feedback,
    order,
    viewed,
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
    router.get("/auth/verifyEmail/:token_verify", user.verifyEmail);
    router.post("/auth/request-active-Email", user.sendAcitveEmail);
    router.get("/user/getQuanityUser", user.getQuanity);
    router.get("/user/get-list-user", user.getListUser);

    // category ---------
    router.get("/category/get-list", category.getNormalCategoies);
    router.post("/category/add-new", category.createNewCategory);
    router.post("/category/remove-by-idCategory", category.removeCategoryById);
    router.post("/category/update", category.updateCategory);
    // router.get("/category/get-by-id/:idCategory", category.getCategoryById());

    //product -------
    router.post("/product/add-new", product.createNewProduct);
    router.get("/product/detail", product.getProductById);
    router.get("/product/get-all/:page", product.getAllProduct);
    router.post("/product/updae-image/:idproduct", product.updateImage); // cập nhật hình ảnh sản phẩm
    router.post("/product/update-infor", product.updateProduct); // cập nhật thông tin sản phẩm
    router.get("/product/count-all-product", product.countProduct);
    // router.get("/product-search/", product.searchProduct);
    router.get(
        "/product/get-by-idcategory/:idCategory",
        product.getProductByIdCategory
    );
    router.post("/product/remove-by-idProduct", product.removeProduct);
    router.get("/product/get-recommend", product.getProductByRecommend);
    router.get(
        "/product/get-recommend-by-idProduct",
        product.getRecommendByIdProduct
    );

    // Cart ----------
    router.post("/cart/add-new", cart.addItemCart); // thêm một sản phẩm vào trong giỏ hàng
    router.post("/cart/update-quantity-cart", cart.updateQuantity);
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
    router.post("/order/check-order", order.checkOrder);
    router.get("/order/get-list", order.getListOrder);

    router.post("/viewed/add-new", viewed.createNew);

    router.get("/images/:path/:name_image", getFileImage); // lấy ảnh từ server

    return app.use("/", router);
};
export default initRouter;
