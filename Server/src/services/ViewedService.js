import ViewedModel from "../models/ViewedModel";

let addNew = (idUser, idProduct, productName) => {
    return new Promise(async (resolve, reject) => {
        let item = {
            userId: idUser,
            productId: idProduct,
            productName: productName,
        };
        let result = await ViewedModel.getViewedPost(item);
        if (!result) {
            await ViewedModel.createNew(item);
        } else {
            item.view = result.view + 1;
            await ViewedModel.updateViewed(item);
        }
        resolve(true);
    });
};

export default {
    addNew: addNew,
};
