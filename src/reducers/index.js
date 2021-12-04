import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import customerReducer from "./customerReducer";

export default combineReducers({
  admin: adminReducer,
  customer: customerReducer,
});
