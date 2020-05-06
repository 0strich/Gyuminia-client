import axios from "axios";

const CHARACTER_INFO_SUCCESS = "CHARACTER_INFO_SUCCESS" as const;
const CHARACTER_INFO_FAIL = "CHARACTER_INFO_FAIL" as const;

export const characterInfo = (): any => {
  return async (dispatch: any) => {
    try {
      const res = await axios(
        "http://www.mocky.io/v2/5ea54b6c3000008050ce2ecb"
      );
      dispatch({ type: CHARACTER_INFO_SUCCESS, charInfo: res.data });
    } catch (err) {
      dispatch({ type: CHARACTER_INFO_FAIL, charInfo: [] });
    }
  };
};

type stateType = { charInfo: Array<any> };

type actionType = ReturnType<typeof characterInfo>;

const initState: stateType = { charInfo: [] };

const charReducer = (state: stateType = initState, action: actionType) => {
  switch (action.type) {
    case CHARACTER_INFO_SUCCESS:
      return { ...state, charInfo: action.charInfo };
    case CHARACTER_INFO_FAIL:
      return { ...state, charInfo: action.charInfo };
    default:
      return state;
  }
};

export default charReducer;