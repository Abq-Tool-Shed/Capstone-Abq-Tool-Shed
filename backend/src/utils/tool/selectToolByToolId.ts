import {Tool} from "../interfaces/Tool";
import {connect} from '../database.utils';
import {RowDataPacket} from "mysql2";

export async function selectToolByToolId(toolId: string) : Promise<Tool|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = " SELECT BIN_TO_UUID(toolId) AS toolId, BIN_TO_UUID (toolProfileId) AS toolProfileId, toolDescription, toolDate from tool where toolId = UUID_TO_BIN(:toolId)"
        const result = await mySqlConnection.execute(mySqlQuery, {toolId}) as RowDataPacket[]
        const tools : Array<Tool> = result [0] as Array<Tool>
        return tools.length === 1 ? {...tools[0]} : null;
    } catch (error) {
        throw error
    }
}