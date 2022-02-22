import {Schema} from "express-validator";

export const signupValidator: Schema = {
    profileHandle: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'ProfileHandle must be between seven and thirty two characters',
            options: {min: 7, max: 32}
        }
    },
    profileName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileName must be between 1 and thirty two characters ',
            options: {min:1, max:32}
        }
    },

    profilePhoneNumber: {
        isMobilePhone: {
            errorMessage: 'please provide a valid phone number'
        },
        optional: {
            options: {
                nullable: true
            }
        }
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
        // normalizeEmail: true,
        trim: true
    },
    profilePassword: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },
    profilePasswordConfirm: {
        isLength: {
            errorMessage: 'Confirm password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },
    }


