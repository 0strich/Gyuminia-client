import axios from "axios";
import { Dispatch } from "redux";

// actions
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" as const;
export const LOGIN_FAIL = "LOGIN_FAIL" as const;
export const REGISTER_SUCCESS = "REGISTER_SUCCESS" as const;
export const REGISTER_FAIL = "REGISTER_FAIL" as const;
export const CHARACTER_INFO_SUCCESS = "CHARACTER_INFO_SUCCESS" as const;
export const CHARACTER_INFO_FAIL = "CHARACTER_INFO_FAIL" as const;

// withCredentials
axios.defaults.withCredentials = true;

// action creators
export const login = (email: string, password: string): any => {
  return async (dispatch: Dispatch) => {
    try {
      await axios.post("http://localhost:5001/users/login", {
        email,
        password,
      });
      dispatch({ type: LOGIN_SUCCESS });

      // 로그인된 계정의 캐릭터 계정 불러오기
      try {
        const res = await axios.post("http://localhost:5001/characters/info");
        dispatch({ type: CHARACTER_INFO_SUCCESS, charInfo: res.data });
      } catch (err) {
        dispatch({ type: CHARACTER_INFO_FAIL, charInfo: {} });
      }
    } catch (err) {
      dispatch({ type: LOGIN_FAIL });
    }
  };
};

export const register = (): any => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: REGISTER_SUCCESS });
    } catch (err) {
      dispatch({ type: REGISTER_FAIL });
    }
  };
};

// state, action types
type stateType = { isLogin: boolean; charInfo: Array<any>; authError: any };
type actionType = ReturnType<typeof login> | ReturnType<typeof register>;
const initState: stateType = { isLogin: false, charInfo: [], authError: null };

// reducer
const auth = (state: stateType = initState, action: actionType) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLogin: false,
      };
    case CHARACTER_INFO_SUCCESS:
      return {
        ...state,
        charInfo: action.charInfo,
      };
    case CHARACTER_INFO_FAIL:
      return {
        ...state,
        charInfo: action.charInfo,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLogin: true,
      };
    default:
      return state;
  }
};

export default auth;
