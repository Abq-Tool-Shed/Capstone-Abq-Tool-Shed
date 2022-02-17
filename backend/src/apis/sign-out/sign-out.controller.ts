import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";

export function signOutController(request:Request, response: Response): Response<Status> {
    let status : Status = {status:200, message: "sign out successful", data: null}
    const {session} = request

    const executeSignOut = () => {
        // @ts-ignore: broken typing is requiring a callback function that is optional.
        session?.destroy()
    };

    const signOutFailed = () => {
        status.status = 400;
        status.message = 'your are not signed in'
    };

    session ? executeSignOut() : signOutFailed();

    return response.json(status)
}