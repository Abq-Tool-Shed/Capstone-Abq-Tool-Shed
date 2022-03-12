import {NextFunction, Request, Response} from "express";
import {uploadToCloudinary} from "../../utils/cloudinary.utils";

export async function imageUploaderController(request: Request, response: Response, nextFunction: NextFunction) {
    try{
        const message : string = await uploadToCloudinary(request)
        // const message : string = "http://placekitten.com/150/150"
        return response.json({status: 200, data: null, message: message})
    }catch (error: any) {
        console.log(error)
        return response.json({status:500, message: error.message, data: null})
    }
}