import { Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {signInValidator} from "./sign-in.validator";

import {checkSchema} from "express-validator";
import {signInController} from "./sign-in.controller";

export const SignInRouter: Router = Router();

SignInRouter.route('/')
.post(asyncValidatorController(checkSchema(signInValidator)), signInController);