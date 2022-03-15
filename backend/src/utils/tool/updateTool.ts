import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from "mysql2";
import {Tool} from "../interfaces/Tool";

// @ts-ignore
export async function updateTool(tool: Tool): Promise<string> {
    try{
        const mySqlConnection = await connect();
        const query : string = 'UPDATE tool SET toolImage = :toolImage, toolName = :toolName, toolDescription = :toolDescription, toolLendRules = :toolLendRules, toolLat = :toolLat, toolLong = :toolLong';
        await mySqlConnection.execute(query, tool)
        await mySqlConnection.release()
        return 'tool successfully updated'
    }   catch (error) {
        throw error
    }

}