import {connect} from "../database.utils";
import {Borrow} from "../interfaces/Borrow";

export async function updateBorrow(borrow: Borrow) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'UPDATE borrow SET borrowCompleted = :borrowCompleted AND borrowReturnedDateTime = NOW() WHERE borrowId = uuid_to_bin(:borrowId)'
        const [result] = await mySqlConnection.execute(mySqlQuery, borrow)
        return "borrow successfully deleted"
    } catch(error) {
        throw error
    }
}
