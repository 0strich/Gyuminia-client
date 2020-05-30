import axios from "axios";
import produce from "immer";
import { Dispatch } from "redux";

// actions
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;
export const LOGIN_FAIL = "LOGIN_FAIL" as const;
export const REGISTER_SUCCESS = "REGISTER_SUCCESS" as const;
export const REGISTER_FAIL = "REGISTER_FAIL" as const;
export const CHARACTER_INFO_SUCCESS = "CHARACTER_INFO_SUCCESS" as const;
export const CHARACTER_INFO_FAIL = "CHARACTER_INFO_FAIL" as const;
export const CHANGE_SIGNIN_STATE = "CHANGE_SIGNIN_STATE" as const;
export const CHANGE_SIGNUP_STATE = "CHANGE_SIGNUP_STATE" as const;

// withCredentials
axios.defaults.withCredentials = true;

// action creators
export const signIn = (email: string, password: string): any => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios.post("http://localhost:5001/users/login", {
        email,
        password,
      });
      dispatch({ type: LOGIN_SUCCESS, success: res.data });

      // 로그인된 계정의 캐릭터 계정 불러오기
      try {
        const res = await axios.post("http://localhost:5001/characters/info");
        dispatch({ type: CHARACTER_INFO_SUCCESS, charInfo: res.data });
      } catch (err) {
        dispatch({ type: CHARACTER_INFO_FAIL, charInfo: {} });
      }
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

export default auth;
