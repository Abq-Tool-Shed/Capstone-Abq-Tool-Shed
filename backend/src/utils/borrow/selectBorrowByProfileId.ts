import {Borrow} from "../interfaces/Borrow";
import {Profile} from "../interfaces/Profile";
import {connect} from '../database.utils';
import {RowDataPacket} from "mysql2";

export async function selectBorrowByProfileId(borrowProfileId: string) : Promise<Borrow> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = 'SELECT BIN_TO_UUID(borrowId) AS borrowId, BIN_TO_UUID(borrowProfileId) AS borrowProfileId, BIN_TO_UUID(borrowToolId) AS borrowToolId, borrow.borrowCompleted, borrow.borrowDateTime, borrow.borrowReturnedDateTime, tool.toolDescription, tool.toolPostDate, tool.toolImage AS userTools FROM borrow,tool INNER JOIN profile ON BIN_TO_UUID(toolProfileId) = BIN_TO_UUID(profileId)'
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {borrowProfileId})
        return result[0] as Borrow
    } catch (error) {
        throw error
    }
}
