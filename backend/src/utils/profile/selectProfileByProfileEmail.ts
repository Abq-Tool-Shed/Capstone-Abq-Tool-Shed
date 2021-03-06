import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {RowDataPacket} from "mysql2";

export async function selectProfileByProfileEmail(profileEmail: string): Promise<Profile | null> {
    try {
        const mysqlConnection = await connect()
        const mysqlQuery: string = 'SELECT BIN_TO_UUID(profileId) as profileId, profileActivationToken, profileEmail, profileHandle, profileHash, profileImage, profileName, profilePhoneNumber   FROM profile WHERE profileEmail = :profileEmail'
        const result = await mysqlConnection.execute(mysqlQuery, {profileEmail}) as RowDataPacket[]
        const rows: Profile[] = result[0] as Profile[]
        await mysqlConnection.release()
        return rows.length === 1 ? {...rows[0]} : null
    } catch (error) {
        throw error
    }


}