import OrderModel from "../models/OrderModel";
import productService from "./productService";
import cartService from "./cartService";
let orderCart = (item) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await OrderModel.createNew(item);
            if (result) {
                item.productItems.map((value) => {
                    cartService.removeCart(item.idUser, value.idProduct);
                    productService.updateQuantity(
                        value.idProduct,
                        value.quantity
                    );
                });
                resolve(result);
            } else {
                resolve(false);
                resolve(true);
            }
        } catch (error) {
            reject(error);
        }
    });
};

let getOrderByIdUser = (idUser) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await OrderModel.getOrderByIdUser(idUser);
            if (result) {
                resolve(result);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};

let getOrderById = (idOrder) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await OrderModel.getOrderById(idOrder);
            if (result) {
                resolve(result);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};

// get list order by idShop
let getListOrderByIdShop = (idShop) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await OrderModel.getListOrderByIdShop(idShop);
            if (result) {
                resolve(result);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};

let changeStatus = (idOrder, statusChange) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await OrderModel.updateStatus(idOrder, statusChange);
            if (result.matchedCount > 0) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};

let getStatisticalOrderByIdShop = (idShop) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await OrderModel.getStatisticalOrderByIdShop(idShop);
            if (result) {
                let result_ = {
                    idShop: idShop,
                    totalPrice: 0,
                    quanityOrder: result.length,
                    total: [],
                };

                let total = [];

                result.map((item) => {
                    let date = new Date(item.createAt);
                    let month = date.getMonth() + 1;
                    let year = date.getFullYear();

                    let item_total = {
                        time: `${year}-${month}`,
                        price: Number(item.totalPrice),
                    };

                    if (total.length < 1) {
                        total.push(item_total);
                    } else {
                        let checkk = 0; // 0 chưa xác định , 1 ko trùng năm , 2 là trùng năm
                        total = total.map((item1) => {
                            if (
                                item1.time.toString() !=
                                item_total.time.toString()
                            ) {
                                checkk = 1;
                                return {
                                    time: item1.time.toString(),
                                    price: Number(item1.price),
                                };
                            } else {
                                return {
                                    time: `${year}-${month}`,
                                    price: Number(
                                        item1.price + item_total.price
                                    ),
                                };
                            }
                        });
                        if (checkk === 1) {
                            total.push(item_total);
                        }

                        result_.total = total;
                    }

                    // result_.total = total;
                    result_.totalPrice =
                        Number(result_.totalPrice) + Number(item.totalPrice);
                });

                resolve(result_);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};

let checkOrder = (idUser, idProduct) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await OrderModel.checkOrder(idUser, idProduct);
            result.length > 0 ? resolve(true) : resolve(false);
        } catch (error) {
            console.log(error);
            resolve(false);
        }
    });
};

export default {
    orderCart,
    getOrderByIdUser,
    getOrderById,
    changeStatus,
    getStatisticalOrderByIdShop,
    getListOrderByIdShop,
    checkOrder,
};
