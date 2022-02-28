import {Schema} from "express-validator";

export const categoryValidator : Schema = {
    categoryId: {
        isUUID: {
            errorMessage: 'Please use a valid category Id'
        }
    },
    categoryName: {
        isLength:{
            errorMessage: 'Category Does Not Exist',
            options: { max:140 }
        },
        trim: true,
        escape: true
    }

};