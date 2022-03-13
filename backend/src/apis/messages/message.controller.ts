import {Request, Response} from "express";

import {setActivationToken, setHash} from '../../utils/auth.utils';
import {Status} from '../../utils/interfaces/Status';
import {insertProfile} from '../../utils/profile/insertProfile';
import formData from 'form-data'
import Mailgun from 'mailgun.js';
import Client from 'mailgun.js/dist/lib/client';


export async function messageController(request: Request, response: Response): Promise<Response | undefined> {
    try {
        console.log("test test")
        const mailgun: Mailgun = new Mailgun(formData)
        const mailgunClient: Client = mailgun.client({username: 'api', key: <string>process.env.MAILGUN_API_KEY})

        const {profileEmail, messageName, messageSubject, messageMessage} = request.body


        const mailgunMessage = {
            from: ` ${messageName} <postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: profileEmail,
            subject: messageSubject,
            textarea: messageMessage
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
