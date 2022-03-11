import {combineReducers} from "@reduxjs/toolkit";
import {configureStore} from "@reduxjs/toolkit";
import tools from "./tools";
import auth from "./auth";
import profiles from "./profiles";

const reducer = combineReducers({tools, auth, profiles})
export const store = configureStore({reducer})
