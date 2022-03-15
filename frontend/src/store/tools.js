import {httpConfig} from "../utils/http-config";
import {createSlice} from "@reduxjs/toolkit";
import {fetchBorrowByBorrowToolId} from "./borrows";


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
    const {data} = await httpConfig("/apis/tool/");
    dispatch(setAllTools(data))
}

export const fetchToolsByProfileId = (profileId) => async dispatch => {
    const {data} = await httpConfig(`/apis/tool/toolProfileId/${profileId}`);
    dispatch(setAllTools(data))
}

export const fetchAllToolsAndBorrows = () => async (dispatch, getState) => {
    await dispatch(fetchAllTools())
    const toolIds = getState().tools.map(tool => tool.toolId)
    for (let borrowToolId of toolIds) {
        dispatch(fetchBorrowByBorrowToolId(borrowToolId))
    }
}


// other exports

export default slice.reducer