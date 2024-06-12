import _ from "lodash";
import jwt from "jsonwebtoken";

import { cart } from "../services/index";

let addItemCart = async (req, res) => {
    if (!_.isEmpty(req.body)) {
        let req_user = jwt.verify(req.body.user_token, process.env.JWT_KEY);

        let data = {
            idUser: req_user.idUser,
            idProduct: req.body.idProduct,
            nameProduct: req.body.nameProduct,
            imgProduct: req.body.imgProduct,
            unit_price: req.body.unit_price,
        };
        let result = await cart.addItemCart(data);
        if (result) {
            res.status(200).send(true);
        } else {
            res.send(false);
        }
    }
};
let decreaseCart = async (req, res) => {
    if (!_.isEmpty(req.body)) {
        let req_user = jwt.verify(req.body.user_token, process.env.JWT_KEY);

        let data = {
            idUser: req_user.idUser,
            idProduct: req.body.idProduct,
        };
        let result = await cart.decreaseCart(data);
        if (result) {
            res.status(200).send(true);
        } else {
            res.send(false);
        }
    }
};
let getItemCartByIdUser = async (req, res) => {
    if (req.params.user_token) {
        let req_user = jwt.verify(req.params.user_token, process.env.JWT_KEY);

        let idUser = req_user.idUser;
        let result = await cart.getItemCartByIdUser(idUser);
        if (result) {
            res.status(200).send(result);
        } else {
            res.send(false);
        }
    }
};
let removeCart = async (req, res) => {
    if (!_.isEmpty(req.body)) {
        let req_user = jwt.verify(req.body.user_token, process.env.JWT_KEY);

        let idUser = req_user.idUser;
        let idProduct = req.body.idProduct;
        console.log(idProduct);
        console.log(idUser);
        let result = await cart.removeCart(idUser, idProduct);
        if (result) {
            res.status(200).send(true);
        } else {
            res.send(false);
        }
    }
};

export default {
    addItemCart,
    decreaseCart,
    getItemCartByIdUser,
    removeCart,
};
