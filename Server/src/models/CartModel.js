import mongoose from "mongoose";

let Schema = mongoose.Schema;

let CartSchema = new Schema({
    idUser: String,
    idProduct: String,
    nameProduct: String,
    imgProduct: String,
    quantity: { type: Number, default: 1 },
    unit_price: Number,
    createAt: { type: Number, default: Date.now },
    updateAt: { type: Number, default: null },
});

CartSchema.statics = {
    createNew(item) {
        return this.create(item);
    },
    getCartByIdUser(idUser) {
        return this.find({ idUser: idUser }).exec();
    },
    getOrderById(id) {
        return this.findById(id).exec();
    },
    getCartByIdUserAndIdProduct(idUser, idProduct) {
        return this.findOne({
            $and: [{ idUser: idUser }, { idProduct: idProduct }],
        }).exec();
    },
    updateQuantity(idUser, idProduct, quantity) {
        return this.findOneAndUpdate(
            {
                $and: [{ idUser: idUser }, { idProduct: idProduct }],
            },
            { quantity: quantity, updateAt: Date.now() }
        ).exec();
    },
    removeProduct(idUser, idProduct) {
        return this.deleteOne({
            $and: [{ idUser: idUser }, { idProduct: idProduct }],
        }).exec();
    },
};

export default mongoose.model("cart", CartSchema);
