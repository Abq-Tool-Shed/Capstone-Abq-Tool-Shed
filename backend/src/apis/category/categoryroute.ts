import { Router } from 'express';
import {
    getAllCategoriesController,
    getCategoryByCategoryId,
    getCategoryByCategoryToolId,
    getInsertCategory
} from './categorycontroller';
import { asyncValidatorController } from "../../utils/controllers/asyncValidatorController";
import { check } from "express-validator";
import { checkSchema } from "express-validator";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";



export const CategoryRouter = Router();

CategoryRouter.route("/allCategory").get( asyncValidatorController([
    check("allCategory", "Please Search For Category").isUUID()
]), getAllCategoriesController)

CategoryRouter.route("/:categoryId").get(  asyncValidatorController([
    check("categoryId", "Please try another Category Name").isUUID()
    ]), getCategoryByCategoryId)

CategoryRouter.route("/categoryToolId/:categoryToolId").get( asyncValidatorController([
    check("categoryToolId", "Please Provide A Valid categoryToolId").isUUID()
]), getCategoryByCategoryToolId)

CategoryRouter.route("/category").get( asyncValidatorController([
    check("category", "Please Provide A Valid Category").isUUID()
]), getInsertCategory)


