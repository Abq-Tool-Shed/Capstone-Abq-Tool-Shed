import {connect} from "../database.utils";
import {Category} from "../interfaces/Category";

export async function insertCategory(category: Category) : Promise<string> {
    try {
        const mySqlConnection = await connect();
        const query : string = 'INSERT INTO category(categoryId, categoryToolId, category)';
        await mySqlConnection.execute(query,category);
        return 'Category Successfully Made'
    } catch (error) {
        throw error
    }
}