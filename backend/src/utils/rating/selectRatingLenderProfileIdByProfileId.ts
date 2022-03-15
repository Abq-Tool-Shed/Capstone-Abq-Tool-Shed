import { Profile } from "../interfaces/Profile"
import { Rating } from "../interfaces/Rating"
import { connect } from "../database.utils"
import { RawDataPacket } from "mysql2"

export async function selectRatingLenderProfileIdByProfileId(lenderProfileId: string|null, profileId: string|null) : Promise<Rating|null> {
    try {
        const mySqlConnect = await connect()
        const mySqlQuery = "SELECT BIN_TO_UUID(ratingLenderProfileId) AS ratingLenderProfileId, BIN_TO_UUID(profileId) AS profileId, lenderProfileId = UUID_TO_BIN(:profileId)"
        const result = await mySqlConnect.execute(mySqlQuery, {lenderProfileId}) as RawDataPacket[]
        const Profile.Length Array<Profile> = result[0] as Array<Profile>
        await mySqlConnection.release()
        return Profile.length === 1 ? {...Profile[0]} : null;
    } catch(error) {
        throw error
    }
}
