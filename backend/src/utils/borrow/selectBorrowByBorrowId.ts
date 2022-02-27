import {Borrow} from "../interfaces/Borrow";
import {connect} from '../database.utils';
import {RowDataPacket} from "mysql2";

export async function selectBorrowByBorrowId(borrowId: string) : Promise<Borrow|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = " SELECT BIN_TO_UUID(borrowId) AS borrowId, BIN_TO_UUID (borrowProfileId) AS borrowProfileId, BIN_TO_UUID(borrowToolId) as borrowToolId, borrowCompleted, borrowDateTime from borrow where borrowId = UUID_TO_BIN(:borrowId)"
        const result = await mySqlConnection.execute(mySqlQuery, {borrowId}) as RowDataPacket[]
        const borrows : Array<Borrow> = result [0] as Array<Borrow>
        return borrows.length === 1 ? {...borrows[0]} : null;
    } catch (error) {
        throw error
    }
}