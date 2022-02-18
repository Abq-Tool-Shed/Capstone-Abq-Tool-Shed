import {Category} from "../interfaces/Category";
import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";


// @ts-ignore
export async function selectCategoryByCategoryToolId(categoryToolId: string) : Promise<Category[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(Category) AS Category, BIN_TO_UUID(categoryToolId) AS categoryToolId, = UUID_TO_BIN(:categoryToolId)'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {categoryToolId})
        return result[0] as Category[]
    } catch(error) {
        throw error
    }
}