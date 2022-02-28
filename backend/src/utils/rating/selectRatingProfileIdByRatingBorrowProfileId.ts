import { Rating } from "../interfaces/Rating"
import { connect } from "../database.utils"
import {RowDataPacket} from 'mysql2'


export async function selectRatingProfileIdByRatingBorrowProfileId(rating: Rating): Promise<Rating|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID (ratingProfileId) AS ratingProfileId, BIN_TO_UUID(ratingBorrowProfileId) AS ratingBorrowProfileId, ratingProfileId = UUID_TO_BIN(:ratingProfileId), ratingBorrowProfileId = UUID_TO_BIN(:ratingBorrowProfileId)'
        const result : RowDataPacket[]= await mySqlConnection.execute(mySqlSelectQuery, rating) as RowDataPacket[]
        const rows: Rating[] = result[0] as Rating[]
        return.rows.length !== 0 ? {...rows[]} : null;
    } catch(error) {
        throw error
    }
}
