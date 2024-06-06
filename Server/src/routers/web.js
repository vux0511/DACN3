import express from "express";

let router = express.Router();

let initRouter = (app) => {
    router.get("/", function (req, res) {
        res.send("hello");
    });

    return app.use("/", router);
};
export default initRouter;
