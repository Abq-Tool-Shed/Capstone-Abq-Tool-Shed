import {connect} from "../database.utils";
import {Borrow} from "../interfaces/Borrow";

export async function deleteBorrow(borrow: Borrow) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `borrow` WHERE borrowProfileId = UUID_TO_BIN(:borrowProfileId) AND borrowId = UUID_TO_BIN(:borrowId)'
        const [result] = await mySqlConnection.execute(mySqlDelete, borrow)
        return "borrow successfully deleted"
    } catch(error) {
        throw error
    }
}
