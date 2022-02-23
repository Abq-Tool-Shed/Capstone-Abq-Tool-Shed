import {Schema} from "express-validator";

export const categoryValidator : Schema = {
    category: {
        isLength:{
            errorMessage: 'Category Does Not Exist',
            options: { max:140 }
        },
        trim: true,
        escape: true
    }

};