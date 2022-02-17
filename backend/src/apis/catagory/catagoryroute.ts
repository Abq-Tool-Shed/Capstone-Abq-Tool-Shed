import { Router } from 'express';
import {
    getAllCategorysController,
    getCategoryByCategoryId,
    getCategoryByCategoryToolId,
    getInsertCategory
} from './catagorycontroller';
import { validatorcategory } from "../../utils/controllers/validatorcategory";
import { check } from "express-validator";
import { checkSchema } from "express-validator";



const router = Router();

router.route("/allCategorys").get( validatorcategory([
    check("allCategorys", "Please Search For Categorys").isUUID()
]), getAllCategorysController)

router.route("/:categoryId").get(  validatorcategory([
    check("categoryId", "Please try another Category Name").isUUID()
    ]), getCategoryByCategoryId)

router.route("/categoryToolId/:categoryToolId").get( validatorcategory([
    check("categoryToolId", "Please Provide A Valid categoryToolId").isUUID()
]), getCategoryByCategoryToolId)

router.route("/category").get( validatorcategory([
    check("category", "Please Provide A Valid Category").isUUID()
]), getInsertCategory)

export default router;
