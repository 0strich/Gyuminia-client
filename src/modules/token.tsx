import axios from "axios";
import produce from "immer";
import { Dispatch } from "redux";

// actions
export const TOKEN_REFRESH_SUCCESS = "TOKEN_REFRESH_SUCCESS" as const;
export const TOKEN_REFRESH_FAIL = "TOKEN_REFRESH_FAIL" as const;

// action creators

export const refresh = (): any => {
  return async (dispatch: Dispatch) => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const res = await axios.post("http://localhost:5001/users/token", {
        token: refreshToken,
      });
      localStorage.setItem("accessToken", res.data.accessToken);
      dispatch({ type: TOKEN_REFRESH_SUCCESS });
    } catch (err) {
      dispatch({ type: TOKEN_REFRESH_FAIL });
    }
  };
};

// state, action types
type stateType = { refreshStatus: boolean | null };
type actionType = ReturnType<typeof refresh>;
const initState: stateType = { refreshStatus: null };

// reducer
const token = (state: stateType = initState, action: actionType) => {
  switch (action.type) {
    case TOKEN_REFRESH_SUCCESS:
      return produce(state, (draft) => {
        draft.refreshStatus = true;
      });
    case TOKEN_REFRESH_FAIL:
      return produce(state, (draft) => {
        draft.refreshStatus = false;
      });
    default:
      return state;
  }
};

export default token;
