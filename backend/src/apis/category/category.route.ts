import { Router } from 'express';
import {
    getAllCategoriesController,
    getCategoryByCategoryId,
    postCategory
} from './category.controller';
import { asyncValidatorController } from "../../utils/controllers/asyncValidator.controller";
import { check } from "express-validator";
import { checkSchema } from "express-validator";
import {categoryValidator} from "./category.validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";



export const CategoryRouter = Router();

CategoryRouter.route("/").get(getAllCategoriesController)
    .post( isLoggedIn, asyncValidatorController(checkSchema(categoryValidator)), postCategory)

CategoryRouter.route("/:categoryId").get(  asyncValidatorController([
    check("categoryId", "Please try another Category Name").isUUID()
    ]), getCategoryByCategoryId)




