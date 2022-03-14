import {httpConfig} from "../utils/http-config";
import {createSlice} from "@reduxjs/toolkit";
import {fetchBorrowByBorrowToolId} from "./borrows";
import {fetchAllTools} from "./tools";
import {fetchAuth} from "./auth";




const profileSlice = createSlice({
    name: "profile",
    initialState: null,
    reducers: {
        setAllProfiles: (profile, action) => {
            return action.payload
        }
    }
})


export const {setAllProfiles} = profileSlice.actions


export const fetchProfileByProfileId = () => async (dispatch, getState) => {
    await dispatch(fetchAuth())
    const {auth} = getState()
    console.log(auth)
    if (auth !== null) {
        const {data} = await httpConfig.get(`/apis/profile/${auth.profileId}`)
        console.log(data)
        dispatch(setAllProfiles(data))
    }
}

export default profileSlice.reducer
