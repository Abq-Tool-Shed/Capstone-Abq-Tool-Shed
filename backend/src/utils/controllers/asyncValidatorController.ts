import {Result, Schema, Validation, ValidationChain, validationResult} from "express-validator";
import {Request, Response, NextFunction} from "express";

export const asyncValidatorController = (validadions : validation[]) => {
    return async (request: Request, response: Response, next: NextFunction) => {
        await Promise.all(validations.map((validation:ValidationChain): Promise<unknown> => validation.run(request)))

        const errors: Result = validationResult(request)

        if(errors.isEmpty()){
            return next()
        }
        return response.json({status: 418, data: null, message: errors.array()[0].msg});
    }
}