import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const ViewedSchema = new Schema({
    userId: String,
    productId: String,
    productName: String,
    view: { type: Number, default: 1 },
    creatAt: { type: Number, default: Date.now },
    updateAt: { type: Number, default: Date.now },
});

ViewedSchema.statics = {
    createNew(data) {
        return this.create(data);
    },
    updateViewed(item) {
        return this.updateOne(
            {
                $and: [{ userId: item.userId }, { productId: item.productId }],
            },
            {
                view: item.view,
                updateAt: Date.now(),
            }
        ).exec();
    },
    getViewedPost(item) {
        return this.findOne({
            $and: [{ productId: item.productId, userId: item.userId }],
        }).exec();
    },
    removeByIdUser(idUser, idPost) {
        return this.deleteOne({
            $and: [{ productId: idPost, userId: idUser }],
        }).exec();
    },
    getViewedByUser(userId) {
        return this.find({ userId: userId }, " _id  productId productName")
            .sort({ creatAt: -1 })
            .limit(5)
            .exec();
    },

    getAllViewed() {
        return this.find().exec();
    },
    getQuanityViewed(idPost) {
        return this.count({ productId: idPost }).exec();
    },
    checkViewed(idPost, idUser) {
        return this.count({
            $and: [{ productId: idPost, userId: idUser }],
        }).exec();
    },

    getTopViewIdProduct() {
        return this.aggregate([
            {
                $project: {
                    _id: 0,
                    productId: 1,
                },
            },
            {
                $sort: {
                    view: -1,
                },
            },
        ])
        .exec();
    },
};

export default mongoose.model("viewed", ViewedSchema);
