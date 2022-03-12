import { Router } from 'express';
import {imageUploader} from "../../utils/controllers/multer.controller";
import {imageUploaderController} from "./image-uploader.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";


export const ImageUploaderRouter = Router();

ImageUploaderRouter.route('/')
    .post(isLoggedIn, imageUploader, imageUploaderController);