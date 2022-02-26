import {Request, Response, NextFunction} from "express";
import {Status} from "../../utils/interfaces/Status";
import {Tool} from '../../utils/interfaces/Tool'
import {Profile} from '../../utils/interfaces/Profile'
import {Category} from '../../utils/interfaces/Category'
import {deleteBorrow} from "../../utils/borrow/deleteBorrow";
import {insertBorrow} from "../../utils/borrow/insertBorrow";
import {selectBorrowByBorrowId} from "../../utils/borrow/selectBorrowByBorrowId";
import {selectBorrowByProfileId} from "../../utils/borrow/selectBorrowByProfileId";
import {App} from '../../App'
import {Borrow} from "../../utils/interfaces/Borrow";




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

export async function getBorrowByBorrowToolIdController(request: Request, response: Response,): Promise<Response<Status>> {
    try {
        const {toolDescription} = request.body;
        const profile : Profile = request.session.profile as Profile
        const toolProfileId : string = <string>profile.profileId

        const tool: Tool = {
            toolId: null,
            toolProfileId,
            toolDescription,
            toolDate: null
        }
        const result = await insertTool(tool)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        return response.json({
            status: 500,
            message: 'Error creating tool, try again.',
            data: null
        });
    }
}

export async function toggleBorrowController(request: Request, response: Response): Promise<Response<string>> {

    try {

        const {borrowToolId} = request.body;
        const profile = <Profile>request.session.profile
        const borrowProfileId = <string>profile.profileId

        const borrow: Borrow = {
            borrowId,
            borrowProfileId,
            borrowToolId,
            borrowCompleted,
            borrowDateTime: null,
            borrowReturnedDateTime: null
        }

        const select = await selectBorrowByBorrowId(borrow)
        // @ts-ignore
        if (select[0]){
            const result = await deleteBorrow(borrow)
        }else {
            const result = await insertBorrow(borrow)
        }

        const status: Status = {
            status: 200,
            message: 'Borrow successfully updated',
            data: null
        };
        return response.json(status);

    } catch(error: any) {
        return(response.json({status: 500, data: null, message: error.message}))
    }
}
