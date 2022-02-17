import {Request, Response, NextFunction} from "express";
import {Status} from "../../utils/interfaces/Status";
import {Tool} from '../../utils/interfaces/Tool'
import {Profile} from '../../utils/interfaces/Profile'
import {Category} from '../../utils/interfaces/Category'
import {insertTool} from "../../utils/tool/insertTool";
import {selectAllTools} from "../../utils/tool/selectAllTools";
import {selectToolByToolId} from "../../utils/tool/selectToolByToolId";
import {selectToolsByToolProfileId} from "../../utils/tool/selectToolsByToolProfileId";
import {App} from '../../App'


export async function getAllToolsController(request: Request, response: Response): Promise<Response<Category>> {

    try {
        const data = await selectAllTools()
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        return response.json({
            status: 500,
            message: 'temp return msg',
            data: []
        })
    }
}

export async function getToolByToolProfileIdController(request: Request, response: Response, tempFunction: NextFunction): Promise<Response<Profile>>{
    try {
        const {toolProfileId} = request.params
        const data = await selectToolsByToolProfileId(toolProfileId)
        return response.json({status:200, message: null, data})
    } catch(error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function getToolByToolIdController(request : Request, response: Response, nextFunction: NextFunction) : Promise<Response<Status>>{
    try {
        const     {toolId} = request.params
        const data  = await selectToolByToolId(toolId)
        return response.json({status:200, message: null, data});
    } catch(error) {
        return response.json({
            status: 500,
            message: "",
            data: null
        })
    }
}

export async function postTool(request: Request, response: Response,): Promise<Response<Status>> {
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
