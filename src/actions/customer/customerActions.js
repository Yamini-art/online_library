import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import {
  CUSTOMER_GET_ERRORS,
  CUSTOMER_GET_PROFILE,
  CUSTOMER_GET_USER,
  CUSTOMER_LOGOUT,
  CUSTOMER_SET_LOADING,
  CUSTOMER_SET_MESSAGE,
} from "./customerTypes";

export const loginCustomer = (customerData) => (dispatch) => {
  axios
    .post("/customer-service/library/customer/login", customerData)
    .then((res) => {
      // fetch the jwt token from the backend
      if (res.data.roles.includes("ROLE_CUSTOMER")) {
        const { accessToken } = res.data;
        // store the token in the local storage
        localStorage.setItem("jwtToken", accessToken);
        // set the token to the authorization header (the one that you find in postman)
        setAuthToken(accessToken);
        dispatch(getCustomerUser());
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
        type: CUSTOMER_GET_ERRORS,
        payload: err,
      });
    });
};

export const getCustomerUser = () => (dispatch) => {
  axios.get("/customer-service/library/customer/user").then((res) => {
    // console.log(res.data);
    dispatch({
      type: CUSTOMER_GET_USER,
      payload: res.data,
    });
  });
};

export const getCustomerProfile = () => (dispatch) => {
  axios.get("/customer-service/esmart/customer/").then((res) => {
    dispatch({
      type: CUSTOMER_GET_PROFILE,
      payload: res.data,
    });
  });
};

export const logoutCustomer = () => (dispatch) => {
  // Clear Errors
  // dispatch(clearErrors());
  // remove the token from the local storage
  localStorage.removeItem("jwtToken");
  // delete the authorization header
  setAuthToken(false);
  // remove the admin by setting isAuthenticated to false by sending an empty payload
  // dispatch(getAdmin({}));
  dispatch({
    type: CUSTOMER_LOGOUT,
    payload: {},
  });
};

export const setMessage = (msg) => {
  return {
    type: CUSTOMER_SET_MESSAGE,
    payload: msg,
  };
};
