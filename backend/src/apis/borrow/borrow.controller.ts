import {Request, Response, NextFunction} from "express";
import {Status} from "../../utils/interfaces/Status";
import {Borrow} from '../../utils/interfaces/Borrow'
import {Profile} from '../../utils/interfaces/Profile'
import {Category} from '../../utils/interfaces/Category'
import {updateBorrow} from "../../utils/borrow/updateBorrow";
import {insertBorrow} from "../../utils/borrow/insertBorrow";
import {selectBorrowByBorrowId} from "../../utils/borrow/selectBorrowByBorrowId";
import {selectBorrowByProfileId} from "../../utils/borrow/selectBorrowByProfileId";


export async function postBorrow(request: Request, response: Response) : Promise<Response<Status>> {
    try {
        const { borrowToolId, borrowCompleted, borrowDateTime, borrowReturnedDateTime} = request.body
        const profile : Profile = request.session.profile as Profile
        const borrowProfileId : string = <string>profile.profileId

        const borrow: Borrow = {
            borrowId:null,
            borrowProfileId,
            borrowToolId,
            borrowCompleted,
            borrowDateTime: null,
            borrowReturnedDateTime: null
        }
        const result = await insertBorrow(borrow)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)

    }catch (error) {
        return response.json({
            status:500,
            message: "Error creating submitting borrow",
            data: null
        })
    }
}




export async function getBorrowByBorrowProfileIdController(request: Request, response: Response,): Promise<Response<Profile>>{
    try {
        const {borrowProfileId} = request.params
        const data = await selectBorrowByProfileId(borrowProfileId)
        return response.json({status:200, message: null, data})
    } catch(error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getBorrowByBorrowIdController(request : Request, response: Response,) : Promise<Response<Status>>{
    try {
        const {borrowId} = request.params
        const data  = await selectBorrowByBorrowId(borrowId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}


export async function putBorrowController(request: Request, response: Response): Promise<Response<string>> {

    try {
        const {borrowId} = request.params
        const {borrowToolId, borrowCompleted, borrowDateTime, borrowReturnedDateTime} = request.body
        const profile = <Profile>request.session.profile
        const borrowProfileId = <string>profile.profileId

        const performUpdate = async (borrow: Borrow): Promise<Response> => {
            const previousBorrow: Borrow = await selectBorrowByBorrowId(<string>borrow.borrowId) as Borrow
            const newBorrow: Borrow = {...previousBorrow, ...borrow}
            await updateBorrow(newBorrow)
            return response.json({status: 200, data: null, message: "Borrow successful"})
        }

        // const updateFailed = (message: string): Response => {
        //     return response.json({status: 400, data: null, message: "Total failure"})
        // }

        return performUpdate({
            borrowId,
            borrowProfileId,
            borrowToolId,
            borrowCompleted,
            borrowDateTime,
            borrowReturnedDateTime
        })

    }

        // const select = await selectBorrowByBorrowId(borrow)
        // // @ts-ignore
        // if (select[0]){
        //     const result = await updateBorrow(borrow)
        // }else {
        //     const result = await insertBorrow(borrow)
        // }
        //
        // const status: Status = {
        //     status: 200,
        //     message: 'Borrow successfully updated',
        //     data: null
        // };
        // return response.json(status);

     catch(error: any) {
        return(response.json({status: 500, data: null, message: error.message}))
    }
}
