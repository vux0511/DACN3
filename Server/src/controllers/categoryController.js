import multer from "multer";
import _ from "lodash";
import jwt from "jsonwebtoken";

import { transError, transSuccess, transValidation } from "../../lang/vi";
import { category } from "../services/index";
import { app } from "../config/app";

let storageAvatar = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, app.image_category_directory);
    },
    filename: (req, file, cb) => {
        try {
            let math = app.image_type;
            if (math.indexOf(file.mimetype) === -1) {
                return cb("lỗi chọn file", null);
            }
            let avatarName = `${Date.now()}-${Math.floor(
                Math.random() * 101
            )}-${file.originalname}`;
            cb(null, avatarName);
        } catch (error) {
            return cb("lỗi chọn file", null);
        }
    },
});

let avatarUploadFile = multer({
    storage: storageAvatar,
}).single("image_category");

let createNewCategory = (req, res) => {
    avatarUploadFile(req, res, async (error) => {
        if (error) {
            console.log(error);
            return res.send(transError.upImage);
        } else {
            let req_user = jwt.verify(req.body.user_token, process.env.JWT_KEY);

            let newItem = {
                nameCategory: req.body.nameCategory,
                imageCategory: req.file.filename,
                idUser: req_user.idUser,
            };
            let checkCategory = await category.getCategoryByName(
                newItem.nameCategory
            );
            if (checkCategory) {
                let result = await category.addNewCategory(newItem);
                if (result) {
                    return res
                        .status(200)
                        .send(
                            transSuccess.addNewCategory(newItem.nameCategory)
                        );
                } else {
                    return res.send(
                        transError.addNewCategory(newItem.nameCategory)
                    );
                }
            } else {
                return res.status(500).send(transValidation.category_exists);
            }
        }
    });
};

let getNormalCategoies = async (req, res) => {
    let item = await category.getNormalCategoies();
    if (item) {
        res.status(200).send(item);
    } else {
        res.send(transError.getCategory);
    }
};

export default { createNewCategory, getNormalCategoies };
