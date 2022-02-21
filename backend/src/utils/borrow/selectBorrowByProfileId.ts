import {Borrow} from "../interfaces/Borrow";
import {connect} from '../database.utils';
import {RowDataPacket} from "mysql2";

export async function selectBorrowByProfileId(borrowProfileId: string) : Promise<Borrow> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = ' SELECT BIN_TO_UUID(borrowId) AS borrowId, BIN_TO_UUID (borrowProfileId) AS borrowProfileId, borrowCompleted, borrowDateTime, profile.profileHandle, profile.profileProfileImage'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {borrowProfileId})
        return result[0] as Borrow
    } catch (error) {
        throw error
    }
}
