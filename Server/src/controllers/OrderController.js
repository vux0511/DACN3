import _ from "lodash";

import { transError, transSuccess, transValidation } from "../../lang/vi";
import { order, product } from "../services/index";

let orderCart = async (req, res) => {
    if (!_.isEmpty(req.body)) {
        let cartUser = req.body.shippintInfor;
        cartUser.productItems = req.body.cartItems;
        let result = await order.orderCart(cartUser);
        if (result) {
            res.status(200).send(result);
        } else {
            res.send(false);
        }
    } else {
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
        res.send(transValidation.data_empty);
    } else {
        let idOrder = req.body.idOrder;
        let status = Number(req.body.statusOrder);
        let result = await order.changeStatus(idOrder, status);
        if (result) {
            res.status(200).send(transSuccess.changeStatus);
        } else {
            res.send(transError.changeStatus);
        }
    }
};

export default {
    orderCart,
    getOrderByIdUser,
    getOrderById,
    changeStatus,
};
