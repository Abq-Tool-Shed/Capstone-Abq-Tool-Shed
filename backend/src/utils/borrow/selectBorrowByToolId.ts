import {Borrow} from "../interfaces/Borrow";
import {Profile} from "../interfaces/Profile";
import {connect} from '../database.utils';
import {RowDataPacket} from "mysql2";

export async function selectBorrowByToolId(borrowToolId: string) : Promise<Borrow> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(borrowId) AS borrowId, BIN_TO_UUID(borrowProfileId) AS borrowProfileId, BIN_TO_UUID(borrowToolId) AS borrowToolId, borrowCompleted, borrowDateTime, borrowReturnedDateTime FROM borrow WHERE BIN_TO_UUID(borrowToolId) = :borrowToolId'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {borrowToolId})
        return result[0] as Borrow
    } catch (error) {
        throw error
    }
}