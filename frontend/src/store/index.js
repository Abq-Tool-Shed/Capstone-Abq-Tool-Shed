import {combineReducers} from "@reduxjs/toolkit";
import {configureStore} from "@reduxjs/toolkit";
import tools from "./tools";
import borrows from "./borrows";
import auth from "./auth";

const reducer = combineReducers({tools, borrows, auth})
export const store = configureStore({reducer})
