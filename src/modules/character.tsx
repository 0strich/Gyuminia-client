import axios from "axios";
import { Dispatch } from "redux";

// actions
const CHARACTER_INFO_SUCCESS = "CHARACTER_INFO_SUCCESS" as const;
const CHARACTER_INFO_FAIL = "CHARACTER_INFO_FAIL" as const;

// action creators
export const characterInfo = (): any => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.post("http://localhost:5001/characters/info");
      console.log("character res ==> ", res.data);
      dispatch({ type: CHARACTER_INFO_SUCCESS, charInfo: res.data });
    } catch (err) {
      dispatch({ type: CHARACTER_INFO_FAIL, charInfo: [] });
    }
  };
};

// types
type stateType = { charInfo: Array<any> };
type actionType = ReturnType<typeof characterInfo>;
const initState: stateType = { charInfo: [] };

// reducer
const character = (state: stateType = initState, action: actionType) => {
  switch (action.type) {
    case CHARACTER_INFO_SUCCESS:
      return { ...state, charInfo: action.charInfo };
    case CHARACTER_INFO_FAIL:
      return { ...state, charInfo: action.charInfo };
    default:
      return state;
  }
};

export default character;
