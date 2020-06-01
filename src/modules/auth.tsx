import axios from "axios";
import produce from "immer";
import { Dispatch } from "redux";
import { characterInfo } from "./character";
import { history } from "../index";

// actions
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS" as const;
export const SIGN_IN_FAIL = "SIGN_IN_FAIL" as const;
export const SIGN_OUT = "SIGN_OUT" as const;
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS" as const;
export const SIGN_UP_FAIL = "SIGN_UP_FAIL" as const;
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
      dispatch({
        type: SIGN_IN_SUCCESS,
        success: "success",
        username: res.data.username,
        userId: res.data.userId,
      });
      history.push("/home");
      dispatch(characterInfo(res.data.userId));
    } catch (err) {
      dispatch({ type: SIGN_IN_FAIL, err });
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
      dispatch({ type: SIGN_UP_SUCCESS, success: res.data });
    } catch (err) {
      setFail(true);
      dispatch({ type: SIGN_UP_FAIL, err });
    }
  };
};

export const signOut = () => {
  return async (dispatch: Dispatch) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    history.push("/");
    // 로그아웃 api 요청 필요
    dispatch({ type: SIGN_OUT });
  };
};

export const changeSigninState = (key: string, value: string): Object => {
  return {
    type: CHANGE_SIGNIN_STATE,
    key,
    value,
  };
};

export const changeSignupState = (key: string, value: string): Object => {
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
  username: string;
  userId: number | null;
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
  signin: {},
  signup: {},
  isLogin: false,
  username: "",
  userId: null,
  authSuccess: null,
  authError: null,
  charInfo: [],
};

// reducer
const auth = (state: stateType = initState, action: actionType) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return produce(state, (draft) => {
        draft.isLogin = true;
        draft.authSuccess = action.success;
        draft.username = action.username;
        draft.userId = action.userId;
        draft.signin = {};
      });
    case SIGN_IN_FAIL:
      return produce(state, (draft) => {
        draft.isLogin = false;
        draft.authError = action.err;
        draft.signin = {};
      });
    case SIGN_OUT:
      return produce(state, (draft) => {
        draft.isLogin = false;
      });
    case SIGN_UP_SUCCESS:
      return produce(state, (draft) => {
        draft.isLogin = true;
        draft.authSuccess = action.success;
        draft.signup = {};
      });
    case SIGN_UP_FAIL:
      return produce(state, (draft) => {
        draft.isLogin = true;
        draft.authError = action.err;
        draft.signup = {};
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
