import React from "react";
import NavAll from "../components/NavAll";

const UserProfile = () => {
  return (
    <div>
      <NavAll />
      <div className="container">
        <h3 className="text-primary">User Profile</h3>

        <div className="main-body">
          <div className="row gutters-sm py-3">
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Customer Id</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">1234</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email Id</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      mayuri@gmail.com
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Account Number</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">123456789</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Bank Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Axis</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Account Type</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Saving</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Account Holder</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Mayuri Deshamukh
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Communication address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      Nagpur, Maharashtra
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile Number</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">8600766534</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">PAN Number</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">CUMPG48R</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Amount</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">75000</div>
                  </div>
                  <hr />
                </div>
              </div>

              {/* <div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    <div className="card-body"> */}
              {/* <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          My Cibil
                        </i>{" "}
                        Score
                      </h6>
                      <small>CIBIL Score</small> */}
              {/* <div className="progress mb-3" style={{ height: "5px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          // style={{ width : data.cibilScore }}
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="900"
                        ></div>
                      </div> */}
              {/* <small>Score</small>
                      <div className="col-sm-3"> */}
              {/* <h6 className="mb-0">{data.cibilScore}</h6> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body"> */}
      {/* <h6 className="d-flex align-items-center mb-3">
                        <i className="material-icons text-info mr-2">
                          My credit
                        </i>
                        Elegibility
                      </h6> */}
      {/* <small>Elegibility</small>
                      <div className="col-sm-3">
                        {/* <h6 className="mb-0">{data.cardEligibility===0?'No':'Yes'}</h6> */}
      {/* </div>
            <br />  */}
      {/* <small>Card Type</small> */}
      {/* <div className="col-sm-3"> */}
      {/* <h6 className="mb-0">{data.cardType}</h6> */}
    </div>
  );
};

export default UserProfile;
