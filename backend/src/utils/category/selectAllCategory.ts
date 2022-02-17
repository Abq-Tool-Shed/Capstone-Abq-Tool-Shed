import {Category} from "../interfaces/Category";
import {connect} from "../database.utils"
import {Profile} from;
import {Status} from "../interfaces/Status"
import { RowDataPacket,} from "mysql2"

export async function selectAllCategory() : Promise<Category[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(categoryID) AS categoryID, bin_TO_UUID(categoryToolId) AS categoryToolId, BIN_TO_UUID(category) AS category, Category = UUID_TO_BIN(:Category)'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Category>
    } catch (error) {
        throw error
    }
}