import {Tool} from "../interfaces/Tool";
import {Profile} from "../interfaces/Profile";
import {connect} from '../database.utils';
import {RowDataPacket} from "mysql2";

export async function selectToolsByToolProfileId(toolProfileId: string) : Promise<Tool> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(toolId) AS toolId, BIN_TO_UUID(toolProfileId) AS toolProfileId, BIN_TO_UUID(toolCategoryId) as toolCategoryId, tool.toolDescription, tool.toolPostDate, tool.toolImage AS userTools FROM tool INNER JOIN profile ON BIN_TO_UUID(toolProfileId) = BIN_TO_UUID(profileId)'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {toolProfileId})
        await mySqlConnection.release()
        return result[0] as Tool
    } catch (error) {
        throw error
    }
}