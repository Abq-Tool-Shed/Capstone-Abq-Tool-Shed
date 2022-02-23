import {Category} from "../interfaces/Category";
import {connect} from "../database.utils"
import {Profile} from "../interfaces/Profile";
import {Status} from "../interfaces/Status"
import { RowDataPacket } from "mysql2"

export async function selectAllCategory() : Promise<Category[]> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(categoryId) AS categoryId, categoryName FROM category'
        const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
        return result[0] as Array<Category>
    } catch (error) {
        throw error
    }
}