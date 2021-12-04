import {
  ADMIN_GET_PROFILE,
  ADMIN_GET_TRANSACTION_HISTORY,
  ADMIN_GET_USER,
  ADMIN_LOGOUT,
  ADMIN_SET_LOADING,
} from "../actions/admin/adminTypes";
import { GET_TRANSACTION_HISTORY, SET_LOADING } from "../actions/types";
import IsEmpty from "../validations/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
  profile: {},
  transactions: [{}],
  loading: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_GET_USER:
      return {
        ...state,
        isAuthenticated: !IsEmpty(action.payload),
        user: action.payload,
      };
    case ADMIN_GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case ADMIN_GET_TRANSACTION_HISTORY:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case ADMIN_SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_LOGOUT:
      return action.payload;
    default:
      return state;
  }
};

export default adminReducer;
