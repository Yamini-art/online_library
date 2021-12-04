import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { getAdminUser, logoutAdmin } from "../../actions/admin/adminActions";
import store from "../../store";

// I want the user to remain logged in even after refreshing the page or moving between pages
if (localStorage.jwtToken) {
  // set the token to the authorization header (the one that you find in postman)
  setAuthToken(localStorage.jwtToken);
  //   console.log(localStorage.jwtToken);
  // decode the jwt token to get user data
  const decoded = jwt_decode(localStorage.jwtToken);
  // send the decoded data to a reducer to use the user in our components
  store.dispatch(getAdminUser());
  //check if the token is expired
  const currentTime = Date.now() / 1000;
  //   console.log(decoded);
  if (currentTime > decoded.exp) {
    // logout admin
    store.dispatch(logoutAdmin());
    //redirect to login
    window.location.href = "/";
  }
}

const AdminRoute = ({ component: Component, admin, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        admin.isAuthenticated === true &&
        admin.user.roles.some((role) => role.name === "ROLE_ADMIN") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

AdminRoute.propTypes = {
  admin: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps)(AdminRoute);
