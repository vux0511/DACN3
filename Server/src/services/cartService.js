import CartModel from "../models/CartModel";

let addItemCart = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let cart = await CartModel.getCartByIdUserAndIdProduct(
                data.idUser,
                data.idProduct
            );
            if (cart) {
                let quantity = cart.quantity + 1;
                let result = await CartModel.updateQuantity(
                    data.idUser,
                    data.idProduct,
                    quantity
                );
                if (result) {
                    resolve(result);
                } else {
                    resolve(false);
                }
            } else {
                let result = await CartModel.createNew(data);
                if (result) {
                    resolve(result);
                } else {
                    resolve(false);
                }
            }
        } catch (error) {
            reject(false);
        }
    });
};

let decreaseCart = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let cart = await CartModel.getCartByIdUserAndIdProduct(
                data.idUser,
                data.idProduct
            );
            if (cart) {
                if (cart.quantity === 1) {
                    let resultRemove = await CartModel.removeProduct(
                        data.idUser,
                        data.idProduct
                    );
                    resultRemove ? resolve(true) : resolve(false);
                }

                let quantity = cart.quantity - 1;
                let result = await CartModel.updateQuantity(
                    data.idUser,
                    data.idProduct,
                    quantity
                );
                result ? resolve(true) : resolve(false);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(false);
        }
    });
};
let getItemCartByIdUser = (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await CartModel.getCartByIdUser(idUser);
            result ? resolve(result) : resolve(false);
        } catch (error) {
            reject(false);
        }
    });
};
let removeCart = (idUser, idProduct) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await CartModel.removeProduct(idUser, idProduct);
            result ? resolve(true) : resolve(false);
        } catch (error) {
            console.log(error);

            resolve(false);
        }
    });
};
export default {
    addItemCart,
    decreaseCart,
    getItemCartByIdUser,
    removeCart,
};
