import axios from "axios";
import produce from "immer";
import { Dispatch } from "redux";

// actions
const CHARACTER_INFO_SUCCESS = "CHARACTER_INFO_SUCCESS" as const;
const CHARACTER_INFO_FAIL = "CHARACTER_INFO_FAIL" as const;
const RANKING_INFO_SUCCESS = "RANKING_INFO_SUCCESS" as const;
const RANKING_INFO_FAIL = "RANKING_INFO_FAIL" as const;
const NEW_CHARACTER = "NEW_CHARACTER" as const;
const RESET_STATUS = "RESET_STATUS" as const;

// action creators
export const characterInfo = (userId: number | null): any => {
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

export const newChar = (userId: number | null, characterName: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.post("http://localhost:5001/characters/newChar", {
        userId,
        characterName,
      });
      dispatch({ type: NEW_CHARACTER, status: res.status });
      window.history.go();
    } catch (err) {
      dispatch({ type: NEW_CHARACTER, status: err.response.status });
    }
  };
};

export const ranking = (): any => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios("http://localhost:5001/characters/rank");
      dispatch({ type: RANKING_INFO_SUCCESS, rankInfo: res.data });
    } catch (err) {
      dispatch({ type: RANKING_INFO_FAIL });
    }
  };
};

export const reset = (): Object => ({ type: RESET_STATUS });

// types
type stateType = {
  charInfo: Array<any>;
  rankInfo: Array<any>;
  status: number | null;
};
type actionType =
  | ReturnType<typeof characterInfo>
  | ReturnType<typeof newChar>
  | ReturnType<typeof ranking>
  | ReturnType<typeof reset>;
const initState: stateType = { charInfo: [], rankInfo: [], status: null };

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
    case RANKING_INFO_SUCCESS:
      return produce(state, (draft) => {
        draft.rankInfo = action.rankInfo;
      });
    case RANKING_INFO_FAIL:
      return produce(state, (draft) => {
        draft.rankInfo = [];
      });
    case NEW_CHARACTER:
      return produce(state, (draft) => {
        draft.status = action.status;
      });
    case RESET_STATUS:
      return produce(state, (draft) => {
        draft.status = null;
      });
    default:
      return state;
  }
};

export default character;
