import {NextFunction, Request, Response} from "express";
import {uploadToCloudinary} from "../../utils/cloudinary.utils";

export async function imageUploaderController(request: Request, response: Response, nextFunction: NextFunction) {
    try{
        //const message : string = await uploardToCloudinary(request)
        const message : string = "http://placekitten.com/150/150"
        return response.json({status: 200, data: null, message: message})
    }catch (error: any) {
        return response.json({status:400, message: error.message, data: null})
    }
}