import { Router } from "express";
import {
    getAllToolsController,
    getToolByToolProfileIdController,
    getToolByToolIdController,
    postTool
} from './tool.controller';
import {asyncValidatorController}  from ''
import {toolValidator} from "./tool.validator";
import { isLoggedIn } from '';
import {check} from "express-validator";
import {checkSchema} from "express-validator";

const router = Router();

router.route('/:toolId').get( asyncValidatorController([
    check('toolId', 'please provide a valid toolId').isUUID()
]), getToolByToolIdController)

router.route('/toolProfileId/:toolProfileId').get(asyncValidatorController([
    check('toolProfileId', 'please provide a valid toolId').isUUID()
]), getToolByToolProfileIdController)


router.route('/')
    .get( getAllToolsController )
    .post(isLoggedIn, asyncValidatorController(checkSchema(toolValidator)), postTool);
    // .
export default router;