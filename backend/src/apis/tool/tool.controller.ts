import {Request, Response, NextFunction} from "express";

import {tool} from ''
import {profile} from ''
import {category} from ''
import



export async function getAllToolsController(request: Request, response: Response): Promise<Response<Category>> {

    try {
        const data = await selectAllTools()
        const status: Status - {status: 200, message: null, data};
        return response.json(status);
    } catch(error) {
        return response.json({
            status: 500,
            message: 'temp return msg',
            data: []
        })
    }
}

export async function getToolByToolProfileIdController(request: Request, response: Response, tempFunction: NextFunction): Promise<Response<profile>>{
    try {
        const {toolProfileId} request.params
        const data = await selectToolsbyToolProfileId(toolProfileId)
        return response.json({status:200, message: null, data})
    } catch(error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function postTool(request: Request, response: Response, tempFunction: NextFunction): Promise<Response<profile>>{
    try {
        const {toolContent} = request.body;
        const profile : Profile = request.session.profile as Profile
        cosnt toolProfileId : string = <string>profile.profile.Id

        cosnt tool: Tool = {
            toolId: null
            toolProfileId,
            toolContent,
            toolPostDate: null
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
