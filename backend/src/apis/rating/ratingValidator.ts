import {Schema} from "express-validator";
import {insertRating} from "../../utils/rating/insertRating";

export const ratingValidator : Schema = {
    ratingProfileId: {
        isUUID: {
            errorMessage: "Please Provide A Valid Rating Profile Id"
        }

    },

    ratingBorrowerProfileId: {
        isUUID: {
            errorMessage: "Please Provide A Valid Rating Borrower Id"
        }
    },

    ratingLenderProfileId: {
       isUUID: {
           errorMessage: "Please Provide A Valid Rating Lender Id"
       }

    }


}