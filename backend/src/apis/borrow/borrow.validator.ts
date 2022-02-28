import {Schema} from "express-validator";

export const borrowValidator : Schema = {
    borrowProfileId : {
        isUUID: {
            errorMessage: 'Please provide a valid borrowProfileId'
        }
    },

    borrowCompleted: {
            // Custom validators
            custom: {
                options: (value : string) => {
                    const options: Array<string> = ["requested", "approved", "completed"]
                    if (options.includes(value) !== true) {
                        throw new Error("Please provide a valid option for borrow is completed.")
                    }
                    return true
                }
            },
        trim: true,
        escape: true
    }
};