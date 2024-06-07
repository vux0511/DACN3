import express from "express";
import { user } from "../controllers/index";

let router = express.Router();

let initRouter = (app) => {
    router.get("/", function (req, res) {
        res.send("hello");
    });
    router.post("/user/register", user.regissterUser);
    router.post("/user/login-user", user.loginUser);
    router.post("/user/update-user", user.updateUser);
    router.post("/user/update-image-user/:idUser", user.updateImgUser);
    router.post("/user/check-pass-user/:idUser", user.checkPassUser);
    router.get("/user/get-normal-user/:idUser", user.getNormalUser);
    router.post("/user/active-email", user.verifyEmail);
    router.get("/user/getQuanityUser", user.getQuanity);
    router.get("/user/get-list-user", user.getListUser);

    return app.use("/", router);
};
export default initRouter;
