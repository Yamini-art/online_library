import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import {
  ADMIN_GET_ERRORS,
  ADMIN_GET_PROFILE,
  ADMIN_GET_TRANSACTION_HISTORY,
  ADMIN_GET_USER,
  ADMIN_LOGOUT,
  ADMIN_SET_LOADING,
  ADMIN_SET_MESSAGE,
} from "./adminTypes";

axios.defaults.baseURL = "http://localhost:8080";

export const loginAdmin = (adminData) => (dispatch) => {
  axios
    .post("/admin-service/library/admin/login", adminData)
    .then((res) => {
      // fetch the jwt token from the backend
      if (res.data.roles.includes("ROLE_ADMIN")) {
        const { accessToken } = res.data;
        // store the token in the local storage
        localStorage.setItem("jwtToken", accessToken);
        // set the token to the authorization header (the one that you find in postman)
        setAuthToken(accessToken);
        dispatch(getAdminUser());
        // decode the jwt token to get admin data
        // const decoded = jwt_decode(accessToken);
        // send the decoded data to a reducer to use the admin in our componentsl
      } else {
        dispatch(setMessage("Invalid user login request"));
      }
    })
    .catch((err) => {
      console.log("err:", err);
      dispatch({
        type: ADMIN_GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getAdminUser = () => (dispatch) => {
  axios.get("/admin-service/library/admin/user").then((res) => {
    // console.log(res.data);
    dispatch({
      type: ADMIN_GET_USER,
      payload: res.data,
    });
  });
};

export const getAdminProfile = () => (dispatch) => {
  axios.get("/admin-service/esmart/admin/").then((res) => {
    dispatch({
      type: ADMIN_GET_PROFILE,
      payload: res.data,
    });
  });
};

export const logoutAdmin = () => (dispatch) => {
  // Clear Errors
  // dispatch(clearErrors());
  // remove the token from the local storage
  localStorage.removeItem("jwtToken");
  // delete the authorization header
  setAuthToken(false);
  // remove the admin by setting isAuthenticated to false by sending an empty payload
  // dispatch(getAdmin({}));
  dispatch({
    type: ADMIN_LOGOUT,
    payload: {},
  });
};

export const getTransactionHistory = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get("admin-service/esmart/admin/getTransactionHistory")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ADMIN_GET_TRANSACTION_HISTORY,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("err:", err);

      dispatch({
        type: ADMIN_GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const setMessage = (msg) => {
  return {
    type: ADMIN_SET_MESSAGE,
    payload: msg,
  };
};

export const setLoading = () => {
  return {
    type: ADMIN_SET_LOADING,
  };
};
