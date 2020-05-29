import { combineReducers } from "redux";
import auth from "./auth";
import character from "./character";
import weapon from "./weapon";

const reducers = combineReducers({ auth, character, weapon });

export type reducerState = ReturnType<typeof reducers>;
export default reducers;
