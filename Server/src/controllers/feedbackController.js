import _ from "lodash";
import { feedback } from "../services/index";

let createNew = async (req, res) => {
    if (_.isEmpty(req.body)) {
        res.send(false);
    } else {
        let result = await feedback.createNew(req.body);
        if (result) res.status(200).send(result);
        else res.send(false);
    }
};

let getFeedback = async (req, res) => {
    if (req.params.page && req.params.idProduct) {
        let result = await feedback.getfeedback(
            req.params.page,
            req.params.idProduct
        );
        if (result) {
            res.status(200).send(result);
        } else {
            res.send([]);
        }
    }
};

let getStatiFeedBackByIdProduct = async (req, res) => {
    if (req.params.idProduct) {
        let result = await feedback.getStatiFeedBackByIdProduct(
            req.params.idProduct
        );
        if (result) {
            res.status(200).send(result);
        } else {
            res.send({ result: true, message: transError.error_data });
        }
    }
};

export default {
    createNew,
    getFeedback,
    getStatiFeedBackByIdProduct,
};
