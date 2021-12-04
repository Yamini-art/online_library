import axios from "axios";
import {
  GET_ERRORS,
  GET_OFFERS,
  SET_LOADING,
  SET_MESSAGE,
} from "./types";


export const offers= () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get("/esmart/customer/offers")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_OFFERS,
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
