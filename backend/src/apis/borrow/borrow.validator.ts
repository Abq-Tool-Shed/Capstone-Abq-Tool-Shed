import {Schema} from "express-validator";

export const borrowValidator : Schema = {
    borrowProfileId : {
        isUUID: {
            errorMessage: 'Please provide a valid borrowProfileId'
        }
    },
    borrowDateTime: {
        toDate: true
    },
    borrowReturnedDateTime: {
        toDate: true
    },
    borrowCompleted: {
        isLength: {
            errorMessage: 'A borrow completion statement cannot be longer than 20 characters.',
            options: {max: 20}
        },
        trim: true,
        escape: true
    }
};