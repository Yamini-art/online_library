import {
  CUSTOMER_GET_PROFILE,
  CUSTOMER_GET_USER,
  CUSTOMER_LOGOUT,
} from "../actions/customer/customerTypes";
import {
  GET_ADMIN,
  GET_TRANSACTION_HISTORY,
  SET_LOADING,
} from "../actions/types";
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
    case CUSTOMER_GET_USER:
      return {
        ...state,
        isAuthenticated: !IsEmpty(action.payload),
        user: action.payload,
      };
    case CUSTOMER_GET_PROFILE:
      return {
        ...state,
        isAuthenticated: !IsEmpty(action.payload),
        profile: action.payload,
      };
    case GET_TRANSACTION_HISTORY:
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CUSTOMER_LOGOUT:
      return action.payload;
    default:
      return state;
  }
};

export default adminReducer;
