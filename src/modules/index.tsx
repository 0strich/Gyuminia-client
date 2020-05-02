import { combineReducers } from "redux";
import authReducer from "./auth";
import charReducer from "./character";

const reducers = combineReducers({ authReducer, charReducer });

export type reducerState = ReturnType<typeof reducers>;
export default reducers;
