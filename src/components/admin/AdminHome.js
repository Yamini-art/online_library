import React from 'react';

const AdminHome= ()=> {
    return (<>
          {/*Graph Area Start*/}
          <div className="graph_area">
          <div className="container">
              <div className="row">
                  <div className="col-lg-4">
                      <div className="user_name">
                          <h2>Welcome,<strong>Yamini</strong></h2>
                      </div>
                  </div>
              </div>
              <div className="value_cards_sec">
                  <div className="row">
                      <div className="col-lg-3">
                          <div className="value_card card_1">
                              <p>Uploaded Books</p>
                              <h3>2000</h3>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="value_card card_2">
                              <p>Issued Details</p>
                              <h3>1000</h3>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="value_card card_3">
                              <p>Access</p>
                              <h3>557</h3>
                          </div>
                      </div>
                      <div className="col-lg-3">
                          <div className="value_card card_4">
                              <p>Approved Users</p>
                              <h3>450</h3>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="graph_sec">
                  <div className="row">
                      <div className="col-lg-3">
                          <div className="graph_sec_2">
                              <p>Users Availability</p>
                              <img className="line_graph" src="donut-chart.png" alt=""/>
                          </div>
                      </div>
                      <div className="col-lg-9">
                          <div className="graph_sec_2">
                              <p>Year wise graph</p>
                              <img src="line.png" alt=""/>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-9">
                      <div className="graph_sec_2">
                          <p>Year wise graph</p>
                          <img className="bar_graph" src="current-ratio.png" alt=""/>
                      </div>
                  </div>
              </div>
          </div>
          <div className="copyright_txt">
              <p>All rights reserved. Copyright © 2021.</p>
          </div>
      </div>
      {/*Graph Area End*/}
</>
    );
}

export default AdminHome;