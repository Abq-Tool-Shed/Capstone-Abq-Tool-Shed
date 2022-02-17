import {Router} from "express";
import {signUpProfileController} from "./sign-up.controller";
import  {signupValidator} from "./signup.validator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {activationController} from "./activation.controller";
import {param} from "express-validator";

const { checkSchema } = require('express-validator')

const router: Router = Router()

router.route('/')
    .post(
        asyncValidatorController(checkSchema(signupValidator)),
        signUpProfileController
    )

router.route('/activation/:activation')
    .get(
        asyncValidatorController([param('activation', 'invalid activation link').isHexadecimal().notEmpty()]),
        activationController
    )

export default router