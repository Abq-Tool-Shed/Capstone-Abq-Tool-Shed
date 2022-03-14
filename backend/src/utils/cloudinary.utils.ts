import express, { Request } from 'express'
import {v2 as cloudinaryUtils, UploadStream} from 'cloudinary'
import {Readable} from "stream";

/**
 * helper function that handles uploading images to cloudinary
 *
 * @param { Request} request express request object that contains a file with a buffer
 * @return {string} a string containing a secure_url returned from cloudinaryUtils.
 */
export const uploadToCloudinary = (request : Request) : Promise<string> => {
    cloudinaryUtils.config({
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        cloud_name: "abqtoolshed"
    })
    return new Promise((resolve, reject):void => {
        let cld_upload_stream: UploadStream = cloudinaryUtils.uploader.upload_stream(
            (error: Error, cloudinaryResult: any) => {
                if (cloudinaryResult) {
                    resolve(cloudinaryResult.secure_url);
                } else {
                    reject(error);
                }
            }
        );

        const readable: Readable = new Readable()
        readable._read = () => {}
        // @ts-ignore
        readable.push(request.file.buffer)
        readable.push(null)
         readable.pipe(cld_upload_stream)
    });
}


