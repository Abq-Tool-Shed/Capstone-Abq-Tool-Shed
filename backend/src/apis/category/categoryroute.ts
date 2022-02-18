import { Router } from 'express';
import {
    getAllCategoriesController,
    getCategoryByCategoryId,
    getCategoryByCategoryToolId,
    getInsertCategory
} from './categorycontroller';
import { validatorcategory } from "../../utils/controllers/validatorcategory";
import { check } from "express-validator";
import { checkSchema } from "express-validator";



export const CategoryRouter = Router();

CategoryRouter.route("/allCategorys").get( validatorcategory([
    check("allCategorys", "Please Search For Categorys").isUUID()
]), getAllCategoriesController)

CategoryRouter.route("/:categoryId").get(  validatorcategory([
    check("categoryId", "Please try another Category Name").isUUID()
    ]), getCategoryByCategoryId)

CategoryRouter.route("/categoryToolId/:categoryToolId").get( validatorcategory([
    check("categoryToolId", "Please Provide A Valid categoryToolId").isUUID()
]), getCategoryByCategoryToolId)

CategoryRouter.route("/category").get( validatorcategory([
    check("category", "Please Provide A Valid Category").isUUID()
]), getInsertCategory)


