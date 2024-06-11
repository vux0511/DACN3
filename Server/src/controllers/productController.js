import multer from "multer";
import _ from "lodash";
import jwt from "jsonwebtoken";

import { product } from "../services/index";
import { transError, transSuccess, transValidation } from "../../lang/vi";
import { app } from "../config/app";

let storageImageProduct = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, app.image_product_directory);
    },
    filename: (req, file, cb) => {
        try {
            let math = app.image_type;
            if (math.indexOf(file.mimetype) === -1) {
                return cb("lỗi chọn file", null);
            }
            let imageName = `${Date.now()}-${file.originalname}`;
            return cb(null, imageName);
        } catch (error) {
            return cb("lỗi chọn file", null);
        }
    },
});

let ImgProductUploadFile = multer({
    storage: storageImageProduct,
}).fields([
    { name: "imgProduct1", maxCount: 1 },
    { name: "imgProduct2", maxCount: 1 },
    { name: "imgProduct3", maxCount: 1 },
    { name: "imgProduct4", maxCount: 1 },
]);

let createNewProduct = (req, res) => {
    ImgProductUploadFile(req, res, async (error) => {
        if (error instanceof multer.MulterError) {
            return res.send("lỗi multer");
        } else if (error) {
            console.log(error);
            return res.send(transError.upImage);
        } else {
            let req_user = jwt.verify(req.body.user_token, process.env.JWT_KEY);
            let newItem = {
                nameProduct: req.body.nameProduct,
                idUser: req_user.idUser,
                idCategory: req.body.idCategory,
                image: {
                    img1: req.files.imgProduct1[0].filename,
                    img2: req.files.imgProduct2[0].filename,
                    img3: req.files.imgProduct3[0].filename,
                    img4: req.files.imgProduct4[0].filename,
                },
                price: req.body.price,
                quantity: req.body.quantity,
                description: req.body.description,
            };

            let result = await product.addNewProduct(newItem);
            if (result) {
                res.status(200).send(true);
            } else {
                res.send(false);
            }
        }
    });
};

let getProductById = async (req, res) => {
    if (req.query.idProduct) {
        try {
            let result = await product.getProductById(req.query.idProduct);
            if (result) {
                res.status(200).send(result);
            } else {
                res.send(false);
            }
        } catch (error) {
            res.send(false);
        }
    }
};

let getAllProduct = async (req, res) => {
    if (req.params.page) {
        let key_search = "";
        if (req.query.search) key_search = req.query.search;
        if (req.query.idcategory) key_idCategory = req.query.idcategory;
        let result = await product.getAllProduct(req.params.page, key_search);
        if (result) {
            res.status(200).send(result);
        } else {
            res.send(false);
        }
    }
};

let updateProduct = async (req, res) => {
    console.log("update product");
    if (_.isEmpty(req.body)) {
        res.send(transValidation.data_empty);
    } else {
        console.log(req.body);
        let result = await product.updateProduct(
            req.params.idproduct,
            req.body
        );
        if (result) {
            res.status(200).send(true);
        } else {
            res.send(false);
        }
    }
};

let updateImage = async (req, res) => {
    ImgProductUploadFile(req, res, async (error) => {
        if (error) {
            res.status(500).send("lỗi");
        } else {
            let nameImage = req.file.filename;
            let idProduct = req.params.idproduct;
            let result = await product.updateImage(idProduct, nameImage);
            if (result) res.status(200).send(true);
            else res.send({ result: false, message: transError.upImage });
        }
    });
};

let countProduct = async (req, res) => {
    let result = await product.getQuantityAllProduct();
    if (result) {
        res.status(200).send(result);
    }
};

// let searchProduct = async(req, res) => {
//     console.log(req.query);
//     if(req.query.search){
//         let result = await product.searchProduct(req.query.search);
//         res.status(200).send(result) ;
//     }else{
//         res.send(transValidation.search_empty);

//     }
// }

let getProductByIdCategory = async (req, res) => {
    if (req.params.idCategory) {
        let idCategory = req.params.idCategory;
        let result = await product.getProductByIdCategory(idCategory);
        if (!_.isEmpty(result)) {
            res.status(200).send(result);
        } else {
            res.send(false);
        }
    } else {
        res.send(false);
    }
};
let removeProduct = async (req, res) => {
    try {
        if (!_.isEmpty(req.body)) {
            let req_user = jwt.verify(req.body.user_token, process.env.JWT_KEY);

            let idUser = req_user.idUser;
            let idProduct = req.body.idProduct;
            let result = await product.removeProduct(idUser, idProduct);
            if (result) {
                res.status(200).send(true);
            } else {
                res.send(false);
            }
        }
    } catch (error) {
        console.log(error);
        res.send(false);
    }
};

export default {
    createNewProduct,
    getProductById,
    getAllProduct,
    updateProduct,
    updateImage,
    countProduct,
    // searchProduct,
    getProductByIdCategory,
    removeProduct,
};
