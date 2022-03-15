import {Profile} from "../interfaces/Profile"
import {connect} from "../database.utils"


export async function insertRating(rating: Rating): Promise<string> {
    try{
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO 'rating'(ratingBorrowerId, ratingLenderProfileId, ratingProfileId, rating)"
        await mySqlConnection.execute(mySqlQuery, rating)
        await mySqlConnection.release()
        return "Rating was Inserted Successfully"
    } catch(error) {
        throw error
    }
}