import { Router } from "express";
import {
    getAllToolsController,
    getToolByToolProfileIdController,
    getToolByToolIdController,
    postTool, getToolByToolCategoryIdController
} from './tool.controller';
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {toolValidator} from "./tool.validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from "express-validator";
import {checkSchema} from "express-validator";

export const Toolrouter = Router();

Toolrouter.route('/:toolId').get( asyncValidatorController([
    check('toolId', 'please provide a valid toolId').isUUID()
]), getToolByToolIdController)

Toolrouter.route('/toolCategoryId/:toolCategoryId').get( asyncValidatorController([
    check('toolCategoryId', 'please provide a valid toolCategoryId').isUUID()
]), getToolByToolCategoryIdController)

Toolrouter.route('/toolProfileId/:toolProfileId').get(asyncValidatorController([
    check('toolProfileId', 'please provide a valid toolId').isUUID()
]), getToolByToolProfileIdController)


Toolrouter.route('/')
    .get( getAllToolsController )
    .post(isLoggedIn, asyncValidatorController(checkSchema(toolValidator)), postTool);
    // .
