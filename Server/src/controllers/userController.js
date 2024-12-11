import _ from "lodash";
import multer from "multer";

import { app } from "../config/app";
import { user } from "../services/index";
import sendMail from "../config/mailer";

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
    console.log("ai đó vừa kết nối");
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
                    expiresIn: "24h",
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

let sendAcitveEmail = async (req, res) => {
    if (_.isEmpty(req.body)) {
        res.send(false);
    } else {
        try {
            let result = jwt.verify(req.body.user_token, process.env.JWT_KEY);
            // kiểm tra email đã đc đk chưa hoặc tài khoản đã active chưa
            let result_update = await user.updateTokenVerify(result.email);
            console.log("xác minh");
            if (result_update.data && result_update.token) {
                sendMail(
                    result.email,
                    "VuxStore :Verify email ",
                    `<tbody><tr><td height="20"></td></tr>
        <tr><td height="10"></td></tr>
        <tr>
            <td>
                <table class="m_-3116258301937000145table1" width="800" align="center" border="0" cellspacing="0" cellpadding="0">
                    <tbody><tr>
                        <td bgcolor="#F7F7F7" style="padding:20px 0;border:1px solid #f2f2f2;border-radius:5px">
                            <table class="m_-3116258301937000145table1" width="750" align="center" border="0" cellspacing="0" cellpadding="0">
                                <tbody><tr>
                                    <td align="left" style="line-height:1.6;color:#282828;font-size:14px;font-weight:600;font-family:'Open Sans',Helvetica,sans-serif">
                                        <div><span><strong>Hello,</strong></span></div>
                                    </td>
                                </tr>
                                <tr><td height="8"></td></tr>
                                <tr>
                                    <td align="left" style="line-height:1.8;color:#282828;font-size:14px;font-weight:400;font-family:'Open Sans',Helvetica,sans-serif">
                                        <div><span>Welcome to our VuxStore website!<br>
                                            Please click the button below within 1 hour to verify your email.</span></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" class="m_-3116258301937000145center_content" style="padding-top:10px;padding-bottom:0px;line-height:1;font-size:14px;font-weight:400;font-family:'Open Sans',Helvetica,sans-serif">
                                        <div><span><a href="http://localhost:5000/auth/verifyEmail/${result_update.token}" target="_blank"><img src="https://ci6.googleusercontent.com/proxy/XKjtUPKTk2XF5CEExdJpneD8_KEYUu8r2nqWES_5LbjO0Ogcn5Y_BYJbXhUShHxIF-w=s0-d-e1-ft#https://i.imgur.com/VBBPAhW.png" alt="" title="Click here to activate account" class="CToWUd" data-bit="iit"></a></span></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left" style="line-height:1.8;color:#282828;font-size:14px;font-weight:400;font-family:'Open Sans',Helvetica,sans-serif">
                                        <div>
                                            <p>In case you cannot click the button, click on the following link to activate your account:<a href='http://localhost:5000/auth/verifyEmail/${result_update.token}' target="_blank">http://localhost:5000/auth/verifyEmail/${result_update.token}  </a> </p>
                                            <p>If you encounter any difficulties, please contact us immediately. We are always ready to assist.</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr><td height="20"></td></tr>
                                <tr>
                                    <td align="left" style="line-height:1.6;color:#282828;font-size:14px;font-weight:400;font-family:'Open Sans',Helvetica,sans-serif">
                                        <div><span><strong>Best regards,<br>
                                            VuxStore website team.</strong></span></div>
                                    </td>
                                </tr>
                                <tr><td height="5"></td></tr>
                            </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
            </td>
        </tr>

        <tr><td height="10"></td></tr>



        <tr><td height="20"></td></tr>


        <tr><td height="100"></td></tr>
        </tbody>`
                )
                    .then((success) => {
                        console.log("gửi mail thành công");
                        res.send(true);
                    })
                    .catch((error) => {
                        console.log(error);
                        console.log("gửi mail thất bại");
                        res.send(false);
                    });
            } else {
                res.send(false);
            }
        } catch (error) {
            console.log(error);
            res.send(false);
        }
    }
};

let verifyEmail = async (req, res) => {
    if (req.params.token_verify) {
        let result = await user.verifyEmail(req.params.token_verify);
        if (result)
            res.send(
                "<p>Please log in again to continue using <a href='http://localhost:3000/home'>go to home</a></p>"
            );
        else {
            res.send({ data: false, message: transError.aciveEmail });
        }
    }
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
    sendAcitveEmail,
};
