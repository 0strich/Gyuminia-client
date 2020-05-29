import axios from "axios";
import { Dispatch } from "redux";

// actions
const WEAPON_DATA_SUCCESS = "WEAPON_DATA_SUCCESS" as const;
const WEAPON_DATA_FAIL = "WEAPON_DATA_FAIL" as const;

// action creators
export const weaponData = (): any => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await axios(
        "http://www.mocky.io/v2/5eb14c183200005f0028f59b"
      );
      dispatch({ type: WEAPON_DATA_SUCCESS, weapons: res.data });
    } catch (err) {
      dispatch({ type: WEAPON_DATA_FAIL, weapons: [] });
    }
  };
};

// types
type stateType = { weapons: Array<any> };
type actionType = ReturnType<typeof weaponData>;
const initState: stateType = { weapons: [] };

// reducer
const weapon = (state: stateType = initState, action: actionType) => {
  switch (action.type) {
    case WEAPON_DATA_SUCCESS:
      return { ...state, weapons: action.weapons };
    case WEAPON_DATA_FAIL:
      return { ...state, weapons: action.weapons };
    default:
      return state;
  }
};

export default weapon;
