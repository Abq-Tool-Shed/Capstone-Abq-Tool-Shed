import {Schema} from "express-validator"

export const profileValidator : Schema = {
    profileId: {
        isUUID: {
            errorMessage: 'please provide a valid profileId'
        }
    },
    profileHandle: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileHandle must be between seven and thirty two characters',
            options: {min:7, max:32}
        }
    },

    profileName: {
        escape: true,
        trim: true,
        isEmpty: true, //we wanted to require a name, so I added this validation (mz)
        isLength: {
            errorMessage: 'profileName must be between 1 and thirty two characters ',
            options: {min:1, max:32}
        }
    },

    profilePhoneNumber: {
        isMobilePhone: {
            errorMessage: 'please provide a valid phone number'
        },
    },

    profileEmail: {
        isEmail: {
            errorMessage: 'please provide a valid email'
        },
        trim: true
    },

    profileProfileImage: {
        optional: {
            options: {
                nullable: true
            }
        },
        isURL: {
            errorMessage: 'profile picture url is malformed please upload a new image.'
        }
    },
    }



