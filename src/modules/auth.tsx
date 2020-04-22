// import axios from "axios";

// actions
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;
export const LOGIN_FAIL = "LOGIN_FAIL" as const;
export const REGISTER_SUCCESS = "REGISTER_SUCCESS" as const;
export const REGISTER_FAIL = "REGISTER_FAIL" as const;

// state type
type stateType = { isLogin: boolean };

// state
const initState: stateType = { isLogin: false };

// actions creators
export const register = () => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: REGISTER_SUCCESS });
    } catch (err) {
      dispatch({ type: REGISTER_FAIL });
    }
  };
};

// reducer
const authReducer = (state: stateType = initState, action: any) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    default:
      return state;
  }
};

export default authReducer;
