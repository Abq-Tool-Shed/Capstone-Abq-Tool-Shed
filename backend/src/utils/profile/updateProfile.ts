import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {ResultSetHeader, RowDataPacket} from "mysql2";

export async function updateProfile(profile: Profile): Promise<string> {
    try {
        const mysqlConnection = await connect()
        const sqlQuery: string = 'UPDATE profile SET profileActivationToken = :profileActivationToken, profileHandle = :profileHandle, profileName = :profileName WHERE profileId = UUID_TO_BIN(:profileId)'
        await mysqlConnection.execute(sqlQuery, profile)
        return 'Profile successfully updated'
    }catch (error) {
        throw (error)
    }
}