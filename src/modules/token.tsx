import axios from "axios";
import produce from "immer";
import { Dispatch } from "redux";

// actions
export const TOKEN_CHECK_SUCCESS = "TOKEN_CHECK_SUCCESS" as const;
export const TOKEN_CHECK_FAIL = "TOKEN_CHECK_FAIL" as const;

// action creators

export const tokenCheck = (): any => {
  return async (dispatch: Dispatch) => {
    try {
      const headers = {
        authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
      };
      const res = await axios("http://localhost:5001/users/check", { headers });
      localStorage.setItem("accessToken", res.data.accessToken);
      dispatch({ type: TOKEN_CHECK_SUCCESS });
    } catch (err) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch({ type: TOKEN_CHECK_FAIL });
    }
  };
};

// state, action types
type stateType = { tokenAuth: boolean | null };
type actionType = ReturnType<typeof tokenCheck>;
const initState: stateType = { tokenAuth: null };

// reducer
const token = (state: stateType = initState, action: actionType) => {
  switch (action.type) {
    case TOKEN_CHECK_SUCCESS:
      return produce(state, (draft) => {
        draft.tokenAuth = true;
      });
    case TOKEN_CHECK_FAIL:
      return produce(state, (draft) => {
        draft.tokenAuth = false;
      });
    default:
      return state;
  }
};

export default token;
