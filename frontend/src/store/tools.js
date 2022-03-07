import {httpConfig} from "../utils/http-config";
import {createSlice} from "@reduxjs/toolkit";


const slice = createSlice({
    name: "tools",
    initialState: [],
    reducers: {
        setAllTools: (tools, action) => {
            return action.payload
        }
    }
})

export const {setAllTools} = slice.actions


export const fetchAllTools = () => async dispatch => {
    const {data} = await httpConfig("/apis/tool");
    dispatch(setAllTools(data))
}


// other exports

export default slice.reducer