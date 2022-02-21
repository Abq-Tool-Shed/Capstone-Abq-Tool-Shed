import { Router } from "express";
import {
    getBorrowByBorrowProfileIdController,
    getBorrowByBorrowIdController,
    toggleBorrowController
} from './borrow.controller';
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {borrowValidator} from "./borrow.validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {check} from "express-validator";
import {checkSchema} from "express-validator";
import {insertBorrow} from "../../utils/borrow/insertBorrow";

const BorrowRouter = Router();

BorrowRouter.route('/:borrowId').get( asyncValidatorController([
    check('borrowId', 'please provide a valid borrowId').isUUID()
]), getBorrowByBorrowIdController)

BorrowRouter.route('/borrowProfileId/:borrowProfileId').get(asyncValidatorController([
    check('borrowProfileId', 'please provide a valid borrowId').isUUID()
]), getBorrowByBorrowProfileIdController)


BorrowRouter.route('/')
    .get( toggleBorrowController )
    .post(isLoggedIn, asyncValidatorController(checkSchema(borrowValidator)), insertBorrow);
// .
// export default router;