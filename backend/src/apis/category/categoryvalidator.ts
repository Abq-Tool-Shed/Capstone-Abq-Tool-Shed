import {Schema} from "express-validator";

export const categoryvalidator : Schema = {
    categoryId: {
        isUUID: {
            errorMessage: 'Please use a valid category Id'
        }
    },
    categoryToolId: {
        isUUID: {
            errorMessage: 'This Is Not A Valid Tool Category'
        }
    },
    category: {
        isLength:{
            errorMessage: 'Category Does Not Exist',
            options: { max:140 }
        },
        trim: true,
        escape: true
    }

};