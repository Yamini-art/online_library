import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import NavAll from "../NavAll";

class CustomerDashboard extends React.Component {
  // onLogoutHandler = () => {
  //   this.props.logoutCustomer();
  // };
  render() {
    const { path } = this.props.match;

    return (
      <div>
        <NavAll />
        {/* Dashboard Sidebar Start
        <aside className="sidebar shadow mb-5 bg-body rounded">
          <ul className="sidebar_icon">
            <li>
              <Link className="em" to="/userprofile">
                PROFILE
              </Link>
            </li>
            <li>
              <Link className="em" to="/getoffers">
                OFFERS
              </Link>
            </li>
            <li>
              <Link className="em" to="/applyloan">
                APPLY LOAN
              </Link>
            </li>
            <li>
              <Link className="em" to="/transferfund">
                TRANSFER FUND
              </Link>
            </li>

            <li>
              <Link className="em" to="/payemi">
                PAY EMI
              </Link>
            </li>
            <li>
              <Link className="em" to="/getloandetails">
                LOAN DETAILS
              </Link>
            </li>

            <Link className="em" onClick={this.onLogoutHandler}>
              Logout
            </Link>
          </ul>
        </aside>
        {/*Dashboard Sidebar End*/}
        {/* {this.props.children} */}
        {/*Graph Area Start*/}
        <div className="graph_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="user_name">
                  <h2>
                    <strong>Welcome</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="value_cards_sec">
              <div className="row">
                <div className="col-lg-3">
                  <div className="value_card card_1">
                    <p>Books</p>
                    <h3>2000</h3>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="value_card card_2">
                    <p>Issued Books</p>
                    <h3>5</h3>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="value_card card_3">
                    <p>Downloded</p>
                    <h3>1</h3>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="value_card card_4">
                    <p>Approved Books</p>
                    <h3>2</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph_sec">
              <div className="row">
                <div className="col-lg-3">
                  <div className="graph_sec_2">
                    <p>Users Availability</p>
                    <img className="line_graph" src="donut-chart.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="graph_sec_2">
                    <p>Year wise graph</p>
                    <img src="line.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="graph_sec_2">
                  <p>Year wise graph</p>
                  <img className="bar_graph" src="current-ratio.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="copyright_txt">
            <p>All rights reserved. Copyright © 2021.</p>
          </div>
        </div>
        {/*Graph Area End*/}
        );
      </div>
    );
  }
}

export default withRouter(CustomerDashboard);
