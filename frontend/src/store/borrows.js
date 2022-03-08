import {httpConfig} from "../utils/http-config";
import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "borrows",
    initialState: [],
    reducers: {
        setBorrowByToolId: (borrows, action) => {
            return [...new Set( [...borrows, action.payload])]
        //    Set removes duplicates and creates objects with value, ...new changes it back into an array
        }
    }
})

export const {setBorrowByToolId} = slice.actions

export const fetchBorrowByBorrowToolId = (borrowToolId) => async dispatch => {
    const {data} = await httpConfig(`/apis/borrow/borrowToolId/${borrowToolId}`);
    dispatch(setBorrowByToolId(data))

}

export default slice.reducer