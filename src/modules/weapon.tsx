import axios from "axios";

const WEAPON_DATA_SUCCESS = "WEAPON_DATA_SUCCESS" as const;
const WEAPON_DATA_FAIL = "WEAPON_DATA_FAIL" as const;

type stateType = { weapons: Array<any> };
type actionType = ReturnType<typeof weaponData>;

const initState: stateType = { weapons: [] };

export const weaponData = (): any => {
  return async (dispatch: any) => {
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

const weaponReducer = (state: stateType = initState, action: actionType) => {
  switch (action.type) {
    case WEAPON_DATA_SUCCESS:
      return { ...state, weapons: action.weapons };
    case WEAPON_DATA_FAIL:
      return { ...state, weapons: action.weapons };
    default:
      return state;
  }
};

export default weaponReducer;
