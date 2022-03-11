import {combineReducers} from "@reduxjs/toolkit";
import {configureStore} from "@reduxjs/toolkit";
import tools from "./tools";
import auth from "./auth"
import profile from "./profiles"


const reducer = combineReducers({tools, auth, profile})

import borrows from "./borrows";
import auth from "./auth";

const reducer = combineReducers({tools, borrows, auth})
>>>>>>> frontEnd_mz
export const store = configureStore({reducer})

