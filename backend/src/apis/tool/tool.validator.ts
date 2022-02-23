import {Schema} from "express-validator";

export const toolValidator : Schema = {
    toolProfileId : {
        isUUID: {
            errorMessage: 'Please provide a valid toolProfileId'
        }
    },
    toolCategoryId : {
        isUUID: {
            errorMessage: 'Please provide a valid toolCategoryId'
        }
    },
    toolName: {
        isLength: {
            errorMessage: 'A tool name cannot be longer than 32 characters',
            options: {max: 32}
        }
    },
    toolPostDate: {
        toDate: true
     },
    // toolLat: {
    //     isLatLong: true
    // },
    // toolLong: {
    //     isLatLong: true
    // },
//    toolLat and toolLong should be combined to toolLatLong
    toolDescription: {
        isLength: {
            errorMessage: 'A tool description cannot be longer than 500 characters.',
            options: {max: 500}
        },
        trim: true,
        escape: true
    },
    toolLendRules: {
        isLength: {
            errorMessage: 'A tools lend rules cannot be longer than 500 characters.',
            options: {max: 500}
        },
        trim: true,
        escape: true
    },

};