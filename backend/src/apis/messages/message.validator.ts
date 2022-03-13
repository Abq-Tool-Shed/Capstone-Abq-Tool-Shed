import {Schema} from "express-validator";

export const messageValidator: Schema = {

    messageName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileName must be between 1 and thirty two characters ',
            options: {min:1, max:32}
        }
    },

    messageSubject: {
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
    messageMessage: {
        isLength: {
            errorMessage: 'Password must be at least eight characters',
            options: { min: 8 }
        },
        trim: true,
        escape: true
    },

}
