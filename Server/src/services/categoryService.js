import categoryModel from "../models/CategoryModel";
import fs from "fs-extra";
import { app } from "../config/app";

let addNewCategory = (newItem) => {
    console.log("category service ");

    return new Promise(async (resolve, reject) => {
        try {
            let result = await categoryModel.createNew(newItem);
            if (result) {
                resolve(true);
            } else {
                reject(false);
            }
        } catch (error) {
            reject(false);
        }
    });
};

let getCategoryByName = (nameCategory) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await categoryModel.getCategoryByName(nameCategory);
            if (result) {
                resolve(false);
            } else {
                resolve(true);
            }
        } catch (error) {
            resolve(false);
        }
    });
};

let getNormalCategoies = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await categoryModel.getNormalCategoies();
            resolve(result);
        } catch (error) {
            reject(false);
        }
    });
};

let removeCategory = (idUser, idCategory) => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = await categoryModel.getCategoryById(idCategory);

            let result = await categoryModel.removeCategory(idUser, idCategory);
            if (result) {
                await fs.remove(
                    `${app.image_category_directory}/${category.imageCategory}`
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
    addNewCategory,
    getNormalCategoies,
    getCategoryByName,
    removeCategory,
};
