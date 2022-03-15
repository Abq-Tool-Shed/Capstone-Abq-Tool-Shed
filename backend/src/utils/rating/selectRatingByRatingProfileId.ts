import { Rating } from "../interfaces/Rating"
import { connect } from "../database.utils"
import { RawDataPacket } from "mysql2"

export async function selectRatingByRatingProfileId(ratingProfileId: string) : Promise<Rating[]> {
    try{
        const mySqlConnection = await connect()
        const mySqlQuery = 'SELECT BIN_TO_UUID(Rating) AS Rating, BIN_TO_UUID(ratingProfileId) AS ratingProfileId, UUID_TO_BIN(: ratingProfileId)'
        const result = await <RawDataPacket>mySqlConnection.execute(mySqlQuery, {ratingProfileId})
        await mySqlConnection.release()
        return result[0] as Rating[]
    } catch(error) {
        throw error
    }
}