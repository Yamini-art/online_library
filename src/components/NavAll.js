import React from "react";
import { logoutCustomer} from "../actions/customer/customerActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class NavAll extends React.Component {
  onLogoutHandler = () => {
    this.props.logoutCustomer();
  };
  render() {
    const { path } = this.props.match;
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/customerdashboard">
                HOME
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/booklist">
                BOOK LIST
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/downloadbook">
               DOWNLOAD
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/checkout">
                CHECKOUT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/bookissuedetails">
                BOOK ISSUED DETAILS
              </a>
            </li>
           
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={this.onLogoutHandler}>
                LOG OUT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
  }
}

NavAll.propTypes = {
  customer: PropTypes.object.isRequired,
  logoutCustomer: PropTypes.func.isRequired,

};
const mapStateToProps = (state) => ({
  customer: state.customer,
});

export default withRouter(
  connect(mapStateToProps, { logoutCustomer})(NavAll)
);
