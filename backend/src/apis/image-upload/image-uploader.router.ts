import { Router } from 'express';
import {imageUploader} from "../../utils/controllers/multer.controller";
import {imageUploaderController} from "./image-uploader.controller";


export const ImageUploaderRouter = Router();

ImageUploaderRouter.route('/')
    .post(imageUploader, imageUploaderController);