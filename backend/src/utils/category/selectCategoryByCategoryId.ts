import {connect} from "../database.utils"
import {Category} from "../interfaces/Category";
import {RowDataPacket} from "mysql2";




export async function selectCategorybyCategoryId(categoryId: string|null) : Promise<Category|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(categoryId) AS categoryId, BIN_TO_UUID (categoryToolId) AS categoryToolID, category = UUID_TO_BIN(:categoryId)"
        const result = await mySqlConnection.execute(mySqlQuery, {categoryId}) as RowDataPacket[]
        const categorys : Array<Category> = result[0] as Array<Category>
        return categorys.length === 1 ? {...categorys[0]} : null;
    } catch (error) {
        throw error
    }
}



