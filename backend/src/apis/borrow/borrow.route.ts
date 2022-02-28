import { Router } from "express";
import {
    getBorrowByBorrowProfileIdController,
    getBorrowByBorrowIdController,
    putBorrowController, postBorrow
} from './borrow.controller';
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {borrowValidator} from "./borrow.validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from "express-validator";
import {checkSchema} from "express-validator";
import {insertBorrow} from "../../utils/borrow/insertBorrow";

export const BorrowRoute: Router = Router();

BorrowRoute.route('/:borrowId').get( asyncValidatorController([
    check('borrowId', 'please provide a valid borrowId').isUUID()
]), getBorrowByBorrowIdController)

BorrowRoute.route('/:borrowProfileId').get(asyncValidatorController([
    check('borrowProfileId', 'please provide a valid borrowId').isUUID()
]), getBorrowByBorrowProfileIdController)


BorrowRoute.route('/')
    .get( putBorrowController )
    .post(isLoggedIn, asyncValidatorController(checkSchema(borrowValidator)), postBorrow);
// .
// export default router;