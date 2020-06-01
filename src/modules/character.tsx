import axios from "axios";
import produce from "immer";
import { Dispatch } from "redux";

// actions
const CHARACTER_INFO_SUCCESS = "CHARACTER_INFO_SUCCESS" as const;
const CHARACTER_INFO_FAIL = "CHARACTER_INFO_FAIL" as const;

// action creators
export const characterInfo = (userId: number): any => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.post("http://localhost:5001/characters/info", {
        userId,
      });
      dispatch({ type: CHARACTER_INFO_SUCCESS, charInfo: res.data });
    } catch (err) {
      console.log(err);
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
      return produce(state, (draft) => {
        draft.charInfo = action.charInfo;
      });
    case CHARACTER_INFO_FAIL:
      return produce(state, (draft) => {
        draft.charInfo = action.charInfo;
      });
    default:
      return state;
  }
};

export default character;
