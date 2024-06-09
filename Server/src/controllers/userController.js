import _ from "lodash";
import multer from "multer";

import { app } from "../config/app";
import { user } from "../services/index";
import { transSuccess, transValidation, transError } from "../../lang/vi";

import jwt from "jsonwebtoken";

let storageImageAvatar = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, app.image_user_directory);
    },
    filename: (req, file, cb) => {
        try {
            let math = app.image_type;
            if (math.indexOf(file.mimetype) === -1) {
                return cb("lỗi chọn file", null);
            }
            let imageName = `${Date.now()}-${Math.floor(Math.random() * 101)}-${
                file.originalname
            }`;
            cb(null, imageName);
        } catch (error) {
            return cb("lỗi chọn file", null);
        }
    },
});

let ImgAvatarUploadFile = multer({
    storage: storageImageAvatar,
}).single("avatarImg");

let regissterUser = async (req, res) => {
    if (_.isEmpty(req.body)) {
        res.status(400).send(transValidation.data_empty);
    } else {
        let result = await user.createNew(req.body);
        if (result) {
            res.status(200).send(true);
        } else {
            res.send(false);
        }
    }
};

let loginUser = async (req, res) => {
    if (_.isEmpty(req.body)) {
        res.status(400).send(transValidation.data_empty);
    } else {
        try {
            let result = await user.loginUser(req.body);
            if (result) {
                let token = jwt.sign(result, process.env.JWT_KEY, {
                    expiresIn: "5h",
                });
                res.status(200).send({ user: result, usrer_token: token });
            } else {
                res.send(false);
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

let getNormalUser = async (req, res) => {
    if (_.isEmpty(req.params)) {
        res.send("lỗi");
    } else {
        let result = await user.getNormalUser(req.params.idUser);
        if (result) {
            res.status(200).send(result);
        } else {
            res.send(false);
        }
    }
};

let updateImgUser = async (req, res) => {
    ImgAvatarUploadFile(req, res, async (error) => {
        if (error) {
            res.status(500).send("lỗi");
        } else {
            let idUser = req.params.idUser;
            let namImage = req.file.filename;
            let result = await user.updateImageUser(idUser, namImage);
            if (result)
                res.status(200).send({
                    result: true,
                    message: transSuccess.uploadImg,
                });
            else
                res.status(200).send({
                    result: true,
                    message: transError.upImage,
                });
        }
    });
};

let updateUser = async (req, res) => {
    if (_.isEmpty(req.body)) {
        res.send(transValidation.data_empty);
    } else {
        let req_user = jwt.verify(req.body.user_token, process.env.JWT_KEY);
        let result = await user.updateUser(req_user.idUser, req.body);
        if (result) {
            res.status(200).send(transSuccess.updateUser);
        } else {
            res.send(transError.updateUser);
        }
    }
};

let checkPassUser = async (req, res) => {
    if (req.params.idUser && req.body.password) {
        let idUser = req.params.idUser;
        let password = req.body.password;
        let result = await user.checkPassUser(idUser, password);
        if (result) {
            res.status(200).send(true);
        } else {
            res.send(false);
        }
    }
};

let verifyEmail = async (req, res) => {
    if (!_.isEmpty(req.body)) {
        let idUser = req.body.idUser;
        let result = await user.verifyEmail(idUser);
        res.send(result);
    }
    res.send(result);
};

let getListUser = async (req, res) => {
    let result = await user.getListUser();
    if (result) {
        res.status(200).send(result);
    } else {
        res.send([]);
    }
};
let getQuanity = async (req, res) => {
    let result = await user.getQuanity();
    if (result) {
        res.status(200).send({ result: result, message: null });
    } else {
        res.send({ result: false, message: "không tìm thấy dữ liệu" });
    }
};

export default {
    regissterUser,
    loginUser,
    updateUser,
    checkPassUser,
    updateImgUser,
    getNormalUser,
    verifyEmail,
    getListUser,
    getQuanity,
};
