import {Borrow} from "../interfaces/Borrow";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from "mysql2";

export async function insertBorrow(borrow: Borrow) : Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO borrow(borrowId, borrowProfileId, borrowCompleted, borrowDateTime) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:borrowProfileId), :borrowDateTime, NOW())";

        const [result] = await mySqlConnection.execute(mySqlQuery, borrow) as [ResultSetHeader, RowDataPacket]
        return 'Borrow created successfully'
    }   catch (error) {
        throw error
    }

}