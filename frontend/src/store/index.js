import {combineReducers} from "@reduxjs/toolkit";
import {configureStore} from "@reduxjs/toolkit";
import tools from "./tools";
import borrows from "./borrows"
import auth from "./auth"
import profile from "./profiles"



const reducer = combineReducers({tools, borrows, auth, profile})

export const store = configureStore({reducer})

