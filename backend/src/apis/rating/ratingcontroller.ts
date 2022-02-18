import {NextFunction, Request, Response} from 'express';



import {Status} from "../../utils/interfaces/Status"
import {Profile} from "../../utils/interfaces/Profile"
import {insertRating} from "../../utils/rating/insertRating";
import {selectRatingByRatingProfileId} from "../../utils/rating/selectRatingByRatingProfileId";
import {selectRatingProfileIdByRatingLenderProfileId} from "../../utils/rating/selectRatingProfileIdbyRatingLenderProfileId";
import {selectRatingProfileIdByRatingBorrowProfileId} from "../../utils/rating/selectRatingProfileIdByRatingBorrowProfileId";
import {selectRatingLenderProfileIdByProfileId} from "../../utils/rating/selectRatingLenderProfileIdByProfileId"
import {selectRatingProfileIdByBorrowerId} from "../../utils/rating/selectRatingProfileIdByBorrowerId"





export async function getRatingByRatingProfileIdController(request: Request, response: Response, nextFunction: NextFunction) {

    try{
        const {ratingProfileId} = request.params
        const data = await selectRatingByRatingProfileId(ratingProfileId)
        return response.json({status: 200, message: null,data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data:null
        })
    }
}

export async function getRatingProfileIdByRatingBorrowProfileIdController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        const {ratingborrowProfileId} = request.params
        const data = await selectRatingProfileIdByRatingBorrowProfileId(ratingborrowProfileId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}


