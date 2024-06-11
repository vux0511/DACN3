import mongoose from "mongoose";

let Schema = mongoose.Schema;

let CategorySchema = new Schema({
    nameCategory: { type: String, default: null },
    idUser: { type: String, default: null },
    imageCategory: { type: String, defautl: "default-category.png" },
    createAt: { type: Number, default: Date.now },
    updateAt: { type: Number, default: Date.now },
    deleteAt: { type: Number, default: null },
});

CategorySchema.statics = {
    createNew(item) {
        return this.create(item);
    },
    getCategoryById(id) {
        return this.findOne({ _id: id }).exec();
    },
    getCategoryByName(nameCategory) {
        return this.findOne({ nameCategory: nameCategory }).exec();
    },
    getNormalCategoies() {
        return this.find().exec();
    },
    removeCategory(idUser, idCategory) {
        return this.deleteOne({
            $and: [{ idUser: idUser }, { _id: idCategory }],
        }).exec();
    },
};

export default mongoose.model("category", CategorySchema);
