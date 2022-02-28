import { Router } from 'express';
import {imageUploader} from "../../utils/cloudinary.utils"
import {imageUploaderController} from "./image-uploader.controller";


export const ImageUploaderRouter = Router();

ImageUploaderRouter.route('/')
    .post(imageUploader, imageUploaderController);