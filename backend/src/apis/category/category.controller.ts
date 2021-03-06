import {Request, Response, NextFunction} from "express";
import {Category} from "../../utils/interfaces/Category";
import {Status} from "../../utils/interfaces/Status"
import {insertCategory} from "../../utils/category/insertCategory";
import {selectAllCategory} from "../../utils/category/selectAllCategory";
import {selectCategoryByCategoryId} from "../../utils/category/selectCategoryByCategoryId";

export async function getAllCategoriesController(request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllCategory()
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        return response.json({
            status: 500,
            message: "Oh no didnt work - marty",
            data: []
        })
    }
}



export async function getCategoryByCategoryId (request: Request, response : Response, nextFunction : NextFunction): Promise<Response<Status>> {
    try {
        const {categoryId} = request.params
        const data = await selectCategoryByCategoryId(categoryId)
        return response.json({status: 200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function postCategory (request: Request, response : Response) : Promise<Response<Status>> {
    try {
        console.log("got here")


        const {categoryName} = request.body

        const category: Category = {
            categoryId: null,
            categoryName
        }
        const result = await insertCategory(category)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);
    } catch(error){
        return response.json({
            status:500,
            message: "Error finding category",
            data: null
        });
    }
}