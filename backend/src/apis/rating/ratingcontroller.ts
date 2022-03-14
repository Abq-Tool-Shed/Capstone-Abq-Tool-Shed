import {NextFunction, Request, Response} from 'express';


import {Rating} from "../../../src/utils/interfaces/Rating"
import {Status} from "../../utils/interfaces/Status"
import {Profile} from "../../utils/interfaces/Profile"
import {insertRating} from "../../utils/rating/insertRating";
import {selectRatingByRatingProfileId} from "../../utils/rating/selectRatingByRatingProfileId";
import {selectRatingProfileIdByRatingLenderProfileId} from "../../utils/rating/selectRatingProfileIdbyRatingLenderProfileId";
import {selectRatingProfileIdByRatingBorrowProfileId} from "../../utils/rating/selectRatingProfileIdByRatingBorrowProfileId";
import {selectRatingLenderProfileIdByProfileId} from "../../utils/rating/selectRatingLenderProfileIdByProfileId"
import {selectRatingProfileIdByBorrowerId} from "../../utils/rating/selectRatingProfileIdByBorrowerId"



// export async function getInsertRatingController(request: Request, response: Response) : Promise<Response<Status>> {
//     try{
//         // const rating: Rating = {
//         //     ratingProfileId: null,
//         //     // ratingBorrowProfileId: null,
//         //     ratingLenderProfileId: null,
//         //     Rating: null
//         }
//         const result = await insertRating(rating)
//         const status: Status = {
//             status: 200,
//             message: result,
//             data: null
//         };
//         return response.json(status);
//     } catch(error) {
//         return response.json({
//             status:500,
//             message: "Error: Could Not Find Rating",
//             data: null
//         });
//     }
// }
//
// export async function getRatingByRatingProfileIdController(request: Request, response: Response, nextFunction: NextFunction) {
//
//     try{
//         const {ratingProfileId} = request.params
//         const data = await selectRatingByRatingProfileId(ratingProfileId)
//         return response.json({status: 200, message: null,data});
//     } catch(error) {
//         return response.json({
//             status: 500,
//             message: "",
//             data:null
//         })
//     }
// }
//
// export async function getRatingProfileIdByRatingBorrowProfileIdController(request: Request, response: Response, nextFunction: NextFunction) {
//     try {
//         const {ratingBorrowProfileId} = request.params
//         const data = await selectRatingProfileIdByRatingBorrowProfileId(ratingborrowProfileId)
//         return response.json({status:200, message: null, data});
//     } catch(error) {
//         return response.json({
//             status: 500,
//             message: "",
//             data: null
//         })
//     }
// }
// export async function getRatingProfileIdByRatingLenderProfileId (request: Request, response: Response, nextFunction: NextFunction) {
//     try {
//         const {ratingLenderProfileId} = request.params
//         const data = await selectRatingProfileIdByRatingLenderProfileId(ratingLenderProfileId)
//         return response.json({status: 200, message: null, data})
//     } catch(error){
//         return response.json({
//             status: 500,
//             message: "",
//             data:null
//         })
//     }
// }
