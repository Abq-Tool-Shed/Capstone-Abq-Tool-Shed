import {Tool} from "../interfaces/Tool";
import {Category} from "../interfaces/Category";
import {connect} from '../database.utils';
import {RowDataPacket} from "mysql2";

export async function selectToolsByToolCategoryId(toolCategoryId: string) : Promise<Tool> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(toolId) AS toolId, BIN_TO_UUID(toolProfileId) AS toolProfileId, BIN_TO_UUID(toolCategoryId) as toolCategoryId, tool.toolDescription, tool.toolPostDate, tool.toolImage AS userTools FROM tool INNER JOIN category ON BIN_TO_UUID(toolCategoryId) = BIN_TO_UUID(categoryId)'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {toolCategoryId})
        await mySqlConnection.release()
        return result[0] as Tool
    } catch (error) {
        throw error
    }
}