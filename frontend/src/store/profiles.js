import {httpConfig} from "../utils/http-config";
import {createSlice} from "@reduxjs/toolkit";




const slice = createSlice({
    name: "profiles",
    initialState: [],
    reducers: {
        setAllProfiles: (profiles, action) => {
            return action.payload
        }
    }
})

export const {setAllProfiles} = slice.actions

export const fetchAllProfiles = () => async dispatch => {
    const {data} = await httpConfig("/apis/profile/");
    dispatch(setAllProfiles(data))
}


export default slice.reducer
