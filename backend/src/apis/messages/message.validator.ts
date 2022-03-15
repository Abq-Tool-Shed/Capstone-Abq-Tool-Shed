import {Schema} from "express-validator";

export const messageValidator: Schema = {

    message: {
        isLength: {
            errorMessage: 'Please send a thoughtful message when requesting a tool.',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },

    borrowProfileId : {
        isUUID: {
            errorMessage: 'Please provide a valid borrowProfileId'
        }
    },

    toolId : {
        isUUID: {
            errorMessage: 'Please provide a valid toolId'
        }
    },

}
