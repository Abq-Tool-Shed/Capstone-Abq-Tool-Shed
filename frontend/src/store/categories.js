import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config";


const slice = createSlice({
    name: "categories",
    initialState: [],
    reducers: {
        setAllCategories: (categories, action) => {
            return action.payload
        }
    }
})

export const {setAllCategories} = slice.actions


export const fetchAllCategories = () => async dispatch => {
    const {data} = await httpConfig("/apis/category/");
    dispatch(setAllCategories(data))
}


export default slice.reducer