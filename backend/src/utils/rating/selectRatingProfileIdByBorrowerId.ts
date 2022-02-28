import { Borrow } from "../interfaces/Borrow"
import { Rating } from "../interfaces/Rating"
import { connect } from "../database.utils"
import { RawDataPacket } from "mysql2"

export async function selectRatingProfileIdByBorrowerId (borrowProfileId: string|null, borrowId: string|null)  : Promise<Rating|null>{

    try {
        const mySqlConnect = await connect()
        const MySqlQuery = "SELECT BIN_TO_UUID(ratingProfileId) AS ratingProfileId, BIN_TO_UUID(borrowId) AS borrowId, borrowId = UUID_TO_BIN(:borrowId)"
        const result = await mySqlConnect.execute(mySqlQuery, {borrowProfileId}) as RawDataPacket[]
        const Profile.Length Array<Borrow> = result[0] as Array<Borrow>
        return Profile.length === 1 ? {...Borrow[0]} : null;
    } catch(error) {
        throw error
    }
}