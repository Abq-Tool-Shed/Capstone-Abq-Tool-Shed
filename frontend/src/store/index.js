import {combineReducers} from "@reduxjs/toolkit";
import {configureStore} from "@reduxjs/toolkit";
import tools from "./tools";
import auth from "./auth"
import profile from "./profiles"


const reducer = combineReducers({tools, auth, profile})
export const store = configureStore({reducer})

