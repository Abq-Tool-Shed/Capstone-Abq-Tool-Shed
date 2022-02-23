import {Tool} from "../interfaces/Tool";
import {connect} from '../database.utils';
import {RowDataPacket} from "mysql2";


export async function selectAllTools() : Promise<Tool[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(toolId) AS toolId, BIN_TO_UUID (toolCategoryId) AS toolCategoryId, BIN_TO_UUID (toolProfileId) AS toolProfileId, toolDescription, toolImage, toolLat, toolLendRules, toolLong, toolName FROM tool'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Tool>
    }   catch (error) {
            throw error
    }
}