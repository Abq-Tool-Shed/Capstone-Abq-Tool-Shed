import {Tool} from "../interfaces/Tool";
import {connect} from '../database.utils';
import {Profile} from '../interfaces/Profile';
import {Status} from '../interfaces/Status';
import {RowDataPacket} from "mysql2";

// @ts-ignore
export async function selectAllTools() : Promise<Tool[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(toolId) AS toolId, BIN_TO_UUID (toolProfileId AS toolProfileId, toolDescription, toolDate, profile.profileHandle, profile.profileProfileImage'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Tool>
    }   catch (error) {
            throw error
    }
}