import React from "react";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router";
import { logoutAdmin, getAdminProfile } from "../../actions/admin/adminActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AdminBase extends React.Component {


  onLogoutHandler = () => {
    this.props.logoutAdmin();
  };
  render() {
    const { path } = this.props.match;
    return (
      <div>
        {/*Dashboard Header start*/}

        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-light fixed-top shadow mb-5 bg-body rounded">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Appearance
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        {/*Dashboard header End*/}

        {/*Dashboard Sidebar Start*/}
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
              <a class="nav-link" href="/upload">
                UPLOAD 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/revokeaccess">
               REVOKE ACCESS
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/adminbooklist">
                BOOK UPLOAD LIST
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/getissuedetails">
                ISSUED DETAILS
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
        {/* Dashboard Sidebar End */}
        {this.props.children}
      </div>
    );
  }
}

AdminBase.propTypes = {
  admin: PropTypes.object.isRequired,
  logoutAdmin: PropTypes.func.isRequired,
  getAdminProfile: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default withRouter(
  connect(mapStateToProps, { logoutAdmin })(AdminBase)
);
