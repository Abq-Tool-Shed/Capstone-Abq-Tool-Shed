import {httpConfig} from "../utils/http-config";
import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "borrows",
    initialState: [],
    reducers: {
        setBorrowByToolId: (borrows, action) => {
            return [...new Set( [...borrows, ...action.payload])]
        //    Set removes duplicates and creates objects with value, ...new changes it back into an array
        },

        setBorrowByProfileId: (borrows, action) => {
            return [...new Set([...borrows, ...action.payload])]
        }
    }
})

export const {setBorrowByToolId} = slice.actions

export const fetchBorrowByBorrowToolId = (borrowToolId) => async dispatch => {
    const {data} = await httpConfig(`/apis/borrow/borrowToolId/${borrowToolId}`);
    console.log(data)
    dispatch(setBorrowByToolId(data))
}

export const {setBorrowByProfileId} = slice.actions
export const {fetchBorrowByBorrowProfileId} = (borrowProfileId) => async dispatch => {
    const {data} = await httpConfig(`/apis/borrow/${borrowProfileId}`);
    console.log(data)
    dispatch(setBorrowByProfileId(data))
}

export default slice.reducer