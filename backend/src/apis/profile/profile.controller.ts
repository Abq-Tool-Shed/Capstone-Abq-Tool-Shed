import {Request, Response} from "express";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {selectPartialProfileByProfileId} from "../../utils/profile/selectPartialProfileByProfileId";
import {Status} from "../../utils/interfaces/Status";
import {selectWholeProfileByProfileId} from "../../utils/profile/selectWholeProfileByProfileId";
import {updateProfile} from "../../utils/profile/updateProfile";

export async function putProfileController(request: Request, response: Response) : Promise<Response>{
    try {
        const {profileId} = request.params
        const {profileEmail, profileHandle, profileName, profilePhoneNumber, profileProfileImage} = request.body
        // const profilePhoneNumber = request.body.profilePhoneNumber ?? null
        const profile = <Profile>request.session.profile
        const profileIdFromSession = <string>profile.profileId

        const preformUpdate = async (partialProfile: PartialProfile) : Promise<Response> => {
            const previousProfile: Profile = await selectWholeProfileByProfileId(<string>partialProfile.profileId) as Profile
            const newProfile: Profile = {...previousProfile, ...partialProfile}
            await updateProfile(newProfile)
            return response.json({status: 200, data: null, message: "Profile updated successfully"})
        }

        const updateFailed = (message: string) : Response => {
            return response.json({status: 400, data: null, message: "Update failed"})
        }

        return profileId === profileIdFromSession
        ? preformUpdate({profileId, profileEmail, profileHandle, profileName, profileProfileImage, profilePhoneNumber})
            : updateFailed("You do not have permission to perform this action ")
    }catch (error: any) {
        return response.json( {status:400, data: null, message: error.message})
    }
}

export async function getProfileByProfileId(request: Request, response: Response) : Promise<Response>{
    try {
        const {profileId} = request.params
        const mysqlResult = await selectPartialProfileByProfileId(profileId)
        const data = mysqlResult ?? null
        const status: Status = {status:200, data, message:null}
        return response.json(status)
    }catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}
