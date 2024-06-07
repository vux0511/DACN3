import mongoose from "mongoose";

let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: String,
    fullname: String,
    password: String,
    email: String,
    gender: { type: String, default: "male" },
    phone: { type: Number, default: null },
    address: { type: String, default: null },
    avatar: { type: String, default: "avatar-default.jpg" },
    role: { type: String, default: "user" }, //  // user, seller, admin
    createAt: { type: Number, default: Date.now },
    updateAt: { type: Number, default: Date.now },
});

userSchema.statics = {
    createNew(item) {
        return this.create(item);
    },

    findByEmail(emailUser) {
        return this.findOne({ email: emailUser }).exec();
    },

    updateInfor(idUser, item) {
        return this.findByIdAndUpdate(idUser, item).exec();
    },
    findUserById(idUser) {
        return this.findById(idUser).exec();
    },
    getListUser() {
        return this.find(
            {},
            "_id  username  fullname  email  gender  phone  address  avatar  role createAt  updateAt"
        ).exec();
    },
    getQuanity() {
        return this.count({}).exec();
    },
};
export default mongoose.model("user", userSchema);
