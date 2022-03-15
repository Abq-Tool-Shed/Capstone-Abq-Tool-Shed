import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function insertProfile(profile: Profile) : Promise<string> {
    try {
        const mySqlConnection = await connect();
        console.log(profile)
        const query : string = 'INSERT INTO profile(profileId, profileActivationToken, profileEmail, profileHandle, profileHash, profileImage, profileName, profilePhoneNumber ) VALUES (UUID_TO_BIN(UUID()), :profileActivationToken, :profileEmail, :profileHandle, :profileHash, :profileImage, :profileName, :profilePhoneNumber)';

        await mySqlConnection.execute(query,profile);
        await mySqlConnection.release()
        return 'Profile Successfully Created'
    } catch (error) {
        throw error
    }
}