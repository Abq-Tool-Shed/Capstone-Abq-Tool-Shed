import {Request, Response} from "express";
import {Tool} from "../../utils/interfaces/Tool";
import {setActivationToken, setHash} from '../../utils/auth.utils';
import {Status} from '../../utils/interfaces/Status';
import {insertProfile} from '../../utils/profile/insertProfile';
import formData from 'form-data'
import Mailgun from 'mailgun.js';
import Client from 'mailgun.js/dist/lib/client';
import {Profile} from "../../utils/interfaces/Profile";
import {selectWholeProfileByProfileId} from "../../utils/profile/selectWholeProfileByProfileId";
import {selectToolByToolId} from "../../utils/tool/selectToolByToolId";
import {postBorrow} from "../borrow/borrow.controller";
import {Borrow} from "../../utils/interfaces/Borrow";
import {insertBorrow} from "../../utils/borrow/insertBorrow";


export async function messageController(request: Request, response: Response): Promise<Response | undefined> {
    try {
        const {message, toolId, borrowProfileId} = request.body
        const mailgun: Mailgun = new Mailgun(formData)
        const mailgunClient: Client = mailgun.client({username: 'api', key: <string>process.env.MAILGUN_API_KEY})

        // Grabs the logged-in user from the session.
        const profile = <Profile>request.session.profile
        const profileIdFromSession = <string>profile.profileId
        // const profileImageUrlFromSession = <string>profile.profileImage
        if (profileIdFromSession !== borrowProfileId) {
            throw new Error("Only the person logged-in can borrow a tool.")
        }
        const profileNameFromSession = profile.profileName
        const tool : Tool | null = await selectToolByToolId(toolId)
        if (tool === null) {
            throw new Error("You may only borrow tools that exist.")
        }
        const toolOwner : Profile | null = await selectWholeProfileByProfileId(tool.toolProfileId) as Profile

        //created a borrow, with data we took from the end user and insert it into the email.
        const borrow : Borrow = {
            borrowId: null,
            borrowProfileId:profileIdFromSession,
            borrowToolId:toolId,
            borrowCompleted:"requested",
            borrowDateTime: null,
            borrowReturnedDateTime : null}
        // insert borrow maybe in a loop of some kind (map?)
         await insertBorrow(borrow)

        // send the message using data we defined and grabbed from the session

        const mailgunMessage = {
            from: `ABQ tool shed <postmaster@${process.env.MAILGUN_DOMAIN}`,
            to: toolOwner?.profileEmail,
            subject: ` ${profileNameFromSession} would like to borrow a tool`,
            message: ` ${message}  <p> You can reply to ${profileNameFromSession} directly with an email, or find out more about this user here - <a href="${request.protocol}://${request.hostname}/approve/
            "></a> </p>`
        }

        await mailgunClient.messages.create(<string>process.env.MAILGUN_DOMAIN, mailgunMessage)

        const status: Status = {
            status: 200,
            data: null,
            message: 'Tool Request Has Been Sent'
        };

        return response.json(status)
    } catch (error: any) {

        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        };

        return response.json(status)
    }
}
