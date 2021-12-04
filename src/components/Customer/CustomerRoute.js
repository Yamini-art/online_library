import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  getCustomerUser,
  logoutCustomer,
} from "../../actions/customer/customerActions";
import store from "../../store";

// I want the user to remain logged in even after refreshing the page or moving between pages
if (localStorage.jwtToken) {
  // set the token to the authorization header (the one that you find in postman)
  setAuthToken(localStorage.jwtToken);
  //   console.log(localStorage.jwtToken);
  // decode the jwt token to get user data
  const decoded = jwt_decode(localStorage.jwtToken);
  // send the decoded data to a reducer to use the user in our components
  store.dispatch(getCustomerUser());
  //check if the token is expired
  const currentTime = Date.now() / 1000;
  //   console.log(decoded);
  if (currentTime > decoded.exp) {
    // logout admin
    store.dispatch(logoutCustomer());
    //redirect to login
    window.location.href = "/";
  }
}

const CustomerRoute = ({ component: Component, customer, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        customer.isAuthenticated === true &&
        customer.user.roles.some((role) => role.name === "ROLE_CUSTOMER") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

CustomerRoute.propTypes = {
  customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  customer: state.customer,
});

export default connect(mapStateToProps)(CustomerRoute);
