import {combineReducers} from "@reduxjs/toolkit";
import {configureStore} from "@reduxjs/toolkit";
import tools from "./tools";

const reducer = combineReducers({tools})
export const store = configureStore({reducer})
