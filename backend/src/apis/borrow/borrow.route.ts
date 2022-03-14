import { Router } from "express";
import {
    getBorrowByBorrowProfileIdController,
    getBorrowByBorrowIdController,
    putBorrowController, postBorrow, getBorrowByBorrowToolIdController
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
    check('borrowProfileId', 'please provide a valid borrowProfileId').isUUID()
]), getBorrowByBorrowProfileIdController)


BorrowRoute.route('/')
    .get( putBorrowController )
    .post(isLoggedIn, asyncValidatorController(checkSchema(borrowValidator)), postBorrow);

BorrowRoute.route('/borrowToolId/:borrowToolId').get(asyncValidatorController([
    check('borrowToolId', 'please provide a valid borrowToolId').isUUID()
]), getBorrowByBorrowToolIdController)


// .
// export default router;