import {Tool} from "../interfaces/Tool";
import {connect} from '../database.utils';
import {RowDataPacket} from "mysql2";

export async function selectToolsByToolProfileId(toolProfileId: string) : Promise<Tool> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = ' SELECT BIN_TO_UUID(toolId) AS toolId, BIN_TO_UUID (toolProfileId) AS toolProfileId, toolDescription, toolDate, profile.profileHandle, profile.profileProfileImage'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {toolProfileId})
        return result[0] as Tool
    } catch (error) {
        throw error
    }
}