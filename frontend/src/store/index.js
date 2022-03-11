import {combineReducers} from "@reduxjs/toolkit";
import {configureStore} from "@reduxjs/toolkit";
import tools from "./tools";
import auth from "./auth"
import profile from "./profiles"


const reducer = combineReducers({tools, borrows, auth, profile})

import borrows from "./borrows";


export const store = configureStore({reducer})

