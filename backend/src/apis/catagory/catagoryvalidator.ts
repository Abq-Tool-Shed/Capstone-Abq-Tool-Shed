import {Schema} from "express-validator";

export const catagoryValidator : Schema = {
    categoryId: {
        isUUID: {
            errorMessage: 'Please Type In Valid Category'
        }
    },
    categoryToolId: {
        isUUID{
            errorMessage: 'This Is Not A Valid Tool Category'
        }
    },
    category: {
        isUUID{
            errorMessage: 'Category Does Not Exist'
        }
    }

};