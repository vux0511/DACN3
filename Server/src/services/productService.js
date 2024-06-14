import ProductModel from "../models/ProductModel";
import { app } from "../config/app";
import fs from "fs-extra";
import { transError, transSuccess } from "../../lang/vi";

let product_limit = app.limit_product;

let addNewProduct = (newItem) => {
    return new Promise(async (resolve, reject) => {
        let result = await ProductModel.createNew(newItem);
        if (result) {
            resolve(true);
        } else {
            resolve(false);
        }
    });
};

let getProductById = (idProduct) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await ProductModel.findProductById(idProduct);
            if (result) {
                resolve(result);
            } else resolve(false);
        } catch (error) {
            resolve(false);
        }
    });
};

let getAllProduct = (
    page,
    key_search,
    filter_price,
    key_idCategory = "",
    sort_price,
    sort_createAt
) => {
    return new Promise(async (resolve, reject) => {
        try {
            let filter = {
                nameProduct: { $regex: new RegExp(key_search, "i") },
                ...filter_price,
            };
            let sort = {};
            if (sort_price !== 0) sort.price = Number(sort_price);
            if (sort_createAt !== 0) sort.createAt = Number(sort_createAt);
            if (key_idCategory !== "") filter.idCategory = key_idCategory;
            let count_product = await ProductModel.getCountProduct(filter);
            if (count_product == 0) {
                // nếu ko tìm tháy sản phẩmphẩm
                resolve([]);
            } else if (page == "all") {
                let result = await ProductModel.findAllProduct(
                    1,
                    count_product,
                    filter,
                    sort
                );

                resolve(result);
            } else if (!isNaN(page)) {
                let current_page = page;
                if (count_product) {
                    let total_page = Math.ceil(count_product / product_limit);
                    if (current_page > total_page) {
                        resolve({ result: [], message: transError.not_page }); // nếu page hiện tại vượt quá tổng page
                    } else if (current_page < 1) {
                        current_page = 1;
                    }

                    let skipNumber = (current_page - 1) * product_limit;
                    let result = await ProductModel.findAllProduct(
                        skipNumber,
                        product_limit,
                        filter,
                        sort
                    );
                    if (result) {
                        resolve(result);
                    } else {
                        resolve([]);
                    }
                } else {
                    resolve(false);
                }
            } else {
                resolve(false);
            }
        } catch (error) {
            console.log(error);
            resolve(false);
        }
    });
};

let updateProduct = (idUser, idProduct, item, fileImage) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await ProductModel.findProductById(idProduct);
            console.log(product);
            let data_update = {
                nameProduct: item.nameProduct,
                image: {
                    img1: fileImage.imgProduct1
                        ? fileImage.imgProduct1[0].filename
                        : product.image.img1,
                    img2: fileImage.imgProduct2
                        ? fileImage.imgProduct2[0].filename
                        : product.image.img2,
                    img3: fileImage.imgProduct3
                        ? fileImage.imgProduct3[0].filename
                        : product.image.img3,
                    img4: fileImage.imgProduct4
                        ? fileImage.imgProduct4[0].filename
                        : product.image.img4,
                },
                idCategory: item.idCategory,
                price: item.price,
                quantity: item.quantity,
                description: item.description,
                updateAt: Date.now(),
            };
            let result = await ProductModel.updateProduct(
                idUser,
                idProduct,
                data_update
            );
            if (result) {
                if (fileImage.imgProduct1)
                    await fs.remove(
                        `${app.image_product_directory}/${product.image.img1}`
                    );
                if (fileImage.imgProduct2)
                    await fs.remove(
                        `${app.image_product_directory}/${product.image.img2}`
                    );
                if (fileImage.imgProduct3)
                    await fs.remove(
                        `${app.image_product_directory}/${product.image.img3}`
                    );
                if (fileImage.imgProduct4)
                    await fs.remove(
                        `${app.image_product_directory}/${product.image.img4}`
                    );

                resolve(true);
            } else resolve(false);
        } catch (error) {
            console.log(error);
            console.log("qqqq ");
            resolve(false);
        }
    });
};

let updateImage = (idProduct, nameImage) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data_update = {
                imageProduct: nameImage,
            };
            let inforProduct = await ProductModel.findProductById(idProduct);

            await fs.remove(
                `${app.image_product_directory}/${inforProduct.imageProduct}`
            );

            let result = await ProductModel.updateProduct(
                idProduct,
                data_update
            );
            if (result.matchedCount == 1) resolve(true);
            else reject(false);
        } catch (error) {
            resolve(false);
        }
    });
};
let getQuantityAllProduct = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let count_product = await ProductModel.getCountProduct();
            let total_page = Math.ceil(count_product / product_limit);
            let result = {
                quantity: count_product,
                total_page: total_page,
            };
            resolve(result);
        } catch (error) {
            resolve(false);
        }
    });
};

// let searchProduct = (search) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let result = await ProductModel.searchProduct(search) ;
//             resolve(result) ;

//         } catch (error) {
//             reject(false);
//         }

//     }); }

let getProductByIdCategory = (idCategory) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await ProductModel.getProductByIdCategory(idCategory);
            resolve(result);
        } catch (error) {
            reject(false);
        }
    });
};

/**
 * update quantity when user order product
 * @param {*} quantity  quantity: the number of products that the user buys
 * @param {*} idProduct
 * @returns
 *
 */
let updateQuantity = (idProduct, quantity) => {
    return new Promise(async (resolve, reject) => {
        try {
            let quantiyProduct = await ProductModel.getQuantityById(idProduct);
            console.log("số lượng sản phẩm hiện tại");
            console.log(quantiyProduct.quantity);
            let changed_quantity =
                Number(quantiyProduct.quantity) - Number(quantity);
            let data_update = {
                quantity: changed_quantity,
                updateAt: Date.now(),
            };
            let result = await ProductModel.updateQuantity(
                idProduct,
                data_update
            );
            console.log("Kết quả cập nhật sản phẩm số lượng sản phẩm");
            console.log(result);
            if (result.matchedCount == 1) resolve(true);
            else resolve(false);
        } catch (error) {}
    });
};

let checkQuanity = (idProduct, quanity) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("product service");
            console.log(idProduct);
            console.log(quanity);
            let result = await ProductModel.getQuantityById(idProduct);
            console.log(result.quantity);
            if (result.quantity > quanity) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(false);
        }
    });
};

let removeProduct = (idUser, idProduct) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await ProductModel.findProductById(idProduct);

            let result = await ProductModel.removeProduct(idUser, idProduct);
            if (result) {
                await fs.remove(
                    `${app.image_product_directory}/${product.image.img1}`
                );
                await fs.remove(
                    `${app.image_product_directory}/${product.image.img2}`
                );
                await fs.remove(
                    `${app.image_product_directory}/${product.image.img3}`
                );
                await fs.remove(
                    `${app.image_product_directory}/${product.image.img4}`
                );
                resolve(result);
            } else {
                resolve(false);
            }
        } catch (error) {
            console.log(error);

            resolve(false);
        }
    });
};

export default {
    addNewProduct,
    getProductById,
    getAllProduct,
    updateProduct,
    updateImage,
    getQuantityAllProduct,
    // searchProduct ,
    getProductByIdCategory,
    // checkProductSoldOut,
    // checkListProductSoldOut,
    updateQuantity,
    checkQuanity,
    removeProduct,
};
