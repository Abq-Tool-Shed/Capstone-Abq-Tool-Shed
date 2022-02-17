import {Tool} from '../interfaces/Tool';
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from "mysql2";

export async function insertTool(tool: Tool) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO tool(toolId, toolProfileId, toolDescription, toolDate) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:toolProfileId), :toolDescription, NOW())";

        const [result] = await mySqlConnection.execute(mySqlQuery, tool) as [ResultSetHeader, RowDataPacket]
        return 'Tool created successfully'
    }   catch (error) {
        throw error
    }

}

// insertTool, selectToolByToolId, updateTool, selectToolsByToolProfileId