import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function insertProfile(profile: Profile) : Promise<string> {
    try {
        const mySqlConnection = await connect();
        const query : string = 'INSERT INTO profile(profileId, profileActivationToken, profileHandle, profileName, profilePhoneNumber, profileEmail, profileImage, profileHash) VALUES (UUID_TO_BIN(UUID()), :profileActivationToken, :profileHandle, :profileName, :profilePhoneNumber, :profileEmail, :profileImage, :profileHash)';
        await mySqlConnection.execute(query,profile);
        return 'Profile Successfully Created'
    } catch (error) {
        throw error
    }
}