import {connect} from "../database.utils";
import {Category} from "../interfaces/Category";
import {ResultSetHeader, RowDataPacket} from "mysql2";

export async function insertCategory(category: Category) : Promise<string> {
    try {
        const mySqlConnection = await connect();
        const query : string = 'INSERT INTO category(categoryId, categoryName) values (UUID_TO_BIN(UUID()),  :categoryName)';
        await mySqlConnection.execute(query,category);
        await mySqlConnection.release()
        return 'Category Successfully Made'
    } catch (error) {
        throw error
    }
}