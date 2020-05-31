import axios from "axios";
import produce from "immer";
import { Dispatch } from "redux";
import { characterInfo } from "./character";

// actions
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;
export const LOGIN_FAIL = "LOGIN_FAIL" as const;
export const REGISTER_SUCCESS = "REGISTER_SUCCESS" as const;
export const REGISTER_FAIL = "REGISTER_FAIL" as const;
export const CHANGE_SIGNIN_STATE = "CHANGE_SIGNIN_STATE" as const;
export const CHANGE_SIGNUP_STATE = "CHANGE_SIGNUP_STATE" as const;

// action creators
export const signIn = (email: string, password: string): any => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.post("http://localhost:5001/users/login", {
        email,
        password,
      });
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      dispatch({ type: LOGIN_SUCCESS, success: "success" });
      dispatch(characterInfo());
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, err });
    }
  };
};

export const signUp = (
  username: string,
  password: string,
  email: string,
  mobile: string,
  setSuccess: Function,
  setFail: Function
): any => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.post("http://localhost:5001/users/signup", {
        username,
        password,
        email,
        mobile,
        setSuccess,
        setFail,
      });
      setSuccess(true);
      dispatch({ type: REGISTER_SUCCESS, success: res.data });
    } catch (err) {
      setFail(true);
      dispatch({ type: REGISTER_FAIL, err });
    }
  };
};

export const changeSigninState = (key: string, value: string): Object => {
  return {
    type: CHANGE_SIGNIN_STATE,
    key,
    value,
  };
};

export const changeSignupState = (key: string, value: string): any => {
  return {
    type: CHANGE_SIGNUP_STATE,
    key,
    value,
  };
};

// state, action types
type stateType = {
  signin: any;
  signup: any;
  isLogin: boolean;
  authSuccess: any;
  authError: any;
  charInfo: Array<any>;
};

type actionType =
  | ReturnType<typeof signIn>
  | ReturnType<typeof signUp>
  | ReturnType<typeof changeSigninState>
  | ReturnType<typeof changeSignupState>;

const initState: stateType = {
  signin: { username: "", password: "" },
  signup: { username: "", password: "", email: "", mobile: "" },
  isLogin: false,
  authSuccess: null,
  authError: null,
  charInfo: [],
};

// reducer
const auth = (state: stateType = initState, action: actionType) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return produce(state, (draft) => {
        draft.isLogin = true;
        draft.authSuccess = action.success;
      });
    case LOGIN_FAIL:
      return produce(state, (draft) => {
        draft.isLogin = false;
        draft.authError = action.err;
      });
    case REGISTER_SUCCESS:
      return produce(state, (draft) => {
        draft.isLogin = true;
        draft.authSuccess = action.success;
      });
    case REGISTER_FAIL:
      return produce(state, (draft) => {
        draft.isLogin = true;
        draft.authError = action.err;
      });
    case CHANGE_SIGNIN_STATE:
      return produce(state, (draft) => {
        draft.signin[action.key] = action.value;
      });
    case CHANGE_SIGNUP_STATE:
      return produce(state, (draft) => {
        draft.signup[action.key] = action.value;
      });
    default:
      return state;
  }
};

export default auth;
