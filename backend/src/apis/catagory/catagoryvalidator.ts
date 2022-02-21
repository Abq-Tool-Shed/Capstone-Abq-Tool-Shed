import {Schema} from "express-validator";


export const categoryValidator : Schema = {
    categoryId: {
        isUUID: {
            errorMessage: 'Please Type In Valid Category'
        }
    },

    categoryName: {
        isLength: {
            errorMessage: 'A Category Can Not Be Longer Than 255 characters ',
            options: {
                max: 255
            },
            trim: true,
            escape: true
        }
    }
};