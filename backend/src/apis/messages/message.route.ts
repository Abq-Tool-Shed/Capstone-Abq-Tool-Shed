import {Router} from "express";

import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {param} from "express-validator"
import {messageController} from "./message.controller";
import {messageValidator} from "./message.validator";

const { checkSchema } = require('express-validator')

const router: Router = Router()

router.route('/')
    .post(
        asyncValidatorController(checkSchema(messageValidator)),
        messageController
    )


export default router