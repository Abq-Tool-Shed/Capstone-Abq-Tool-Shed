import { Borrow } from "../interfaces/Borrow"
import { Rating } from "../interfaces/Rating"
import { connect } from "../database.utils"
import { RawDataPacket } from "mysql2"

export async function selectRatingProfileIdByBorrowerId {

    try {
        const mySqlConnect = await connect()
        const MySqlQuery = "SELECT BIN_TO_UUID(ratingProfileId) AS ratingProfileId, BIN_TO_UUID(borrowId) AS borrowId, borrowId = UUID_TO_BIN(:borrowId)"
        const Rating
    }
}