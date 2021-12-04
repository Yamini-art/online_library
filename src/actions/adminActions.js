import axios from "axios";
import {
  GET_ADMIN,
  GET_APPLIED_LOANS,
  GET_ERRORS,
  GET_TRANSACTION_HISTORY,
  SET_LOADING,
  SET_MESSAGE,
} from "./types";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";

export const loginAdmin = (adminData) => (dispatch) => {
  console.log(adminData);
  axios
    .post("/api/auth/login", adminData)
    .then((res) => {
      // fetch the jwt token from the backend
      const { accessToken } = res.data;
      console.log(res.data);
      // store the token in the local storage
      localStorage.setItem("jwtToken", accessToken);
      // set the token to the authorization header (the one that you find in postman)
      setAuthToken(accessToken);
      // decode the jwt token to get admin data
      const decoded = jwt_decode(accessToken);
      // send the decoded data to a reducer to use the admin in our components
      dispatch(getAdmin(decoded));
    })
    .catch((err) => {
      console.log("err:", err);

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getAdmin = (adminInfo) => {
  return {
    type: GET_ADMIN,
    payload: adminInfo,
  };
};

export const logoutAdmin = () => (dispatch) => {
  // Clear Errors
  dispatch(clearErrors());
  // remove the token from the local storage
  localStorage.removeItem("jwtToken");
  // delete the authorization header
  setAuthToken(false);
  // remove the admin by setting isAuthenticated to false by sending an empty payload
  dispatch(getAdmin({}));
};

export const getAppliedLoans = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get("/esmart/admin/getAppliedLoans")
    .then((res) => {
      dispatch({
        type: GET_APPLIED_LOANS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("err:", err);

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getTransactionHistory = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get("/esmart/admin/getTransactionHistory")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_TRANSACTION_HISTORY,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("err:", err);

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const setMessage = (msg) => {
  return {
    type: SET_MESSAGE,
    payload: msg,
  };
};

export const clearErrors = () => {
  return {
    type: GET_ERRORS,
    payload: {},
  };
};
