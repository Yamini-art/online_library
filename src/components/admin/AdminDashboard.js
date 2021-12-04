import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import AdminBase from "./AdminBase";
import AdminHome from "./AdminHome";
import ApproveLoan from "./ApproveLoan";

class AdminDashboard extends React.Component {
  render() {
    const { path } = this.props.match;
    return (
      <AdminBase>
        <Route exact path={`${path}`}>
          <AdminHome />
        </Route>
        <Route exact path={`${path}/activateid`}>
          <AdminHome />
        </Route>
        <Route exact path="/admindashboard/loandetails">
          <ApproveLoan />
        </Route>
      </AdminBase>
    );
  }
}

export default withRouter(AdminDashboard);
