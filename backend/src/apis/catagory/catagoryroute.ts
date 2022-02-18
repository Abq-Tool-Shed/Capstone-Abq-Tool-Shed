import { Router } from 'express';
import {
    getAllCategorysController,
    getCategoryByCategoryId,
    getCategoryByCategoryToolId,
    getInsertCategory
} from './catagorycontroller';
import { check } from "express-validator";
import { checkSchema } from "express-validator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";




const router = Router();

router.route("/allCategorys").get( asyncValidatorController([
    check("allCategorys", "Please Search For Categorys").isUUID()
]), getAllCategorysController)

router.route("/:categoryId").get(  asyncValidatorController([
    check("categoryId", "Please try another Category Name").isUUID()
    ]), getCategoryByCategoryId)

router.route("/categoryToolId/:categoryToolId").get( asyncValidatorController([
    check("categoryToolId", "Please Provide A Valid categoryToolId").isUUID()
]), getCategoryByCategoryToolId)

router.route("/category").get( asyncValidatorController([
    check("category", "Please Provide A Valid Category").isUUID()
]), getInsertCategory)

export default router;
