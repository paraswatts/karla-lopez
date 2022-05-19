import { REHYDRATE } from "redux-persist";
import { ACTION_TYPES } from "../actions";

const initialState = {
  authToken: "",
  loading: false,
  userDetails: {},
};

const CommonReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ACTION_TYPES.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case ACTION_TYPES.UPDATE_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      };
    case REHYDRATE:
      return {
        ...initialState,
        ...((action.payload || {}).common || {}),
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default CommonReducer;
