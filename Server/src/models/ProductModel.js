import mongoose from "mongoose";

let Schema = mongoose.Schema;

let ProductSchema = new Schema({
    nameProduct: { type: String, default: null },
    idUser: { type: String, default: null },
    idCategory: { type: String, default: null },
    image: {
        img1: { type: String, default: null },
        img2: { type: String, default: null },
        img3: { type: String, default: null },
        img4: { type: String, default: null },
    },
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    description: { type: String, default: null },
    createAt: { type: Number, default: Date.now },
    updateAt: { type: Number, default: Date.now },
});

ProductSchema.statics = {
    createNew(item) {
        return this.create(item);
    },

    findProductById(idProduct) {
        return this.findById(idProduct).exec();
    },

    findAllProduct(skipNumber, product_limit, filter, sort) {
        return this.find(filter)
            .sort(sort)
            .skip(skipNumber)
            .limit(product_limit)
            .exec();
    },
    findAllDataRecommend() {
        return (
            this.aggregate([
                {
                    $project: {
                        _id: 0,

                        id: { $toString: "$_id" },
                        content: "$nameProduct",
                    },
                },
                {
                    $sort: {
                        createAt: -1,
                    },
                },
            ])
                // .find({}, "_id, nameProduct")
                // .sort({ createAt: -1 })
                .exec()
        );
    },
    getCountProduct(filter = {}) {
        return this.where(filter).count();
    },

    updateProduct(idUser, idProduct, item) {
        return this.findOneAndUpdate(
            { $and: [{ _id: idProduct, idUser: idUser }] },
            item
        ).exec();
    },
    // searchProduct(search){
    //     return this.find({nameProduct: {"$regex": new RegExp(search, "i")}},'_id nameProduct idSeller idCategory imageProduct price updateAt' ).exec();
    // },
    getProductByIdCategory(idCategory) {
        return this.find({ idCategory: idCategory }).exec();
    },

    getQuantityById(idProduct) {
        return this.findOne({ _id: idProduct }, "quantity").exec();
    },

    updateQuantity(idProduct, dataUpdate) {
        return this.findOneAndUpdate({ _id: idProduct }, dataUpdate).exec();
    },
    removeProduct(idUser, idProduct) {
        return this.deleteOne({
            $and: [{ idUser: idUser }, { _id: idProduct }],
        }).exec();
    },
    findProductbyIds(ids) {
        return this.find({
            _id: { $in: ids },
        }).exec();
    },
};

export default mongoose.model("product", ProductSchema);
