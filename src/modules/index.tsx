import { combineReducers } from "redux";
import authReducer from "./auth";
import charReducer from "./character";
import weaponReducer from "./weapon";

const reducers = combineReducers({ authReducer, charReducer, weaponReducer });

export type reducerState = ReturnType<typeof reducers>;
export default reducers;
