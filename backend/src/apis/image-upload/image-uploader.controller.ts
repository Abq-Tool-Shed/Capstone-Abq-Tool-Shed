import {NextFunction, Request, Response} from "express";
import {uploadToCloudinary} from "../../utils/cloudinary.utils";

export async function imageUploaderController(request: Request, response: Response, nextFunction: NextFunction) {
    try{
        console.log(request.file)
        if (request.file === undefined)  {
            throw new Error("Please provide a valid file")
        }

        // @ts-ignore
        const message : string = await uploadToCloudinary(request.file)
        console.log(request.file)
        // const message : string = "http://placekitten.com/150/150"
        return response.json({status: 200, data: null, message: message})
    }catch (error: any) {
        console.log(error)
        return response.json({status:489, message: error.message, data: null})
    }
}