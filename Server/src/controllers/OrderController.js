import _ from "lodash";
import jwt from "jsonwebtoken";

import { transError, transSuccess, transValidation } from "../../lang/vi";
import { order, product } from "../services/index";

let orderCart = async (req, res) => {
    try {
        if (!_.isEmpty(req.body)) {
            let req_user = jwt.verify(req.body.user_token, process.env.JWT_KEY);

            let cartUser = req.body.shippintInfor;
            cartUser.productItems = req.body.cartItems;
            cartUser.idUser = req_user.idUser;
            let result = await order.orderCart(cartUser);
            if (result) {
                res.status(200).send(result);
            } else {
                res.send(false);
            }
        } else {
            res.send(false);
        }
    } catch (error) {
        console.log(error);
        res.send(false);
    }
};

let getOrderByIdUser = async (req, res) => {
    if (req.params.idUser) {
        let result = await order.getOrderByIdUser(req.params.idUser);
        if (result) {
            res.status(200).send(result);
        } else {
            res.send([]);
        }
    } else {
        res.send([]);
    }
};

let getOrderById = async (req, res) => {
    if (req.params.idOrder) {
        let result = await order.getOrderById(req.params.idOrder);
        if (result) {
            res.status(200).send(result);
        } else {
            res.send([]);
        }
    } else {
        res.send([]);
    }
};

let changeStatus = async (req, res) => {
    if (_.isEmpty(req.body)) {
        res.send(false);
    } else {
        let idOrder = req.body.idOrder;
        let status = req.body.statusOrder;

        let result = await order.changeStatus(idOrder, status);
        if (result) {
            res.status(200).send(true);
        } else {
            res.send(false);
        }
    }
};

let checkOrder = async (req, res) => {
    if (_.isEmpty(req.body)) {
        res.send(false);
    } else {
        try {
            let req_user = jwt.verify(req.body.user_token, process.env.JWT_KEY);
            let resultCheck = await order.checkOrder(
                req_user.idUser,
                req.body.idProduct
            );
            resultCheck ? res.send(true) : res.send(false);
        } catch (error) {
            console.log(error);
            res.send(false);
        }
    }
};

let getListOrder = async (req, res) => {
    let result = await order.getListOrder();
    if (result) {
        res.status(200).send(result);
    } else {
        res.send(false);
    }
};

let getStatisticOrder = async (req, res) => {
    let result = await order.getListOrder();
    let totalPrice = 0;
    let totalProduct = 0;

    result.map((value) => {
        totalPrice = totalPrice + Number(value.totalPrice);
        value.productItems.map((value1) => {
            totalProduct = totalProduct + value1.quantity;
        });
    });

    if (result) {
        res.status(200).send({
            totalPrice: totalPrice,
            totalProduct: totalProduct,
        });
    } else {
        res.send(false);
    }
};
export default {
    orderCart,
    getOrderByIdUser,
    getOrderById,
    changeStatus,
    checkOrder,
    getListOrder,
    getStatisticOrder,
};
