import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AdminAppiledLoans() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">
          <div className="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              {/*<form className="form-inline">*/}
              {/*    <input className="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search"/>*/}

              {/*</form>*/}
            </div>
          </div>
          <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred text-primary">
            <h2>
              <b>Applied Loans</b>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive ">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email Address</th>
                  <th>Loan Number</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>yamigathibandhe@gmail.com</td>

                  <td>101</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>saurmaurya@hotmail.com</td>
                  <td>201</td>
                  <td>2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
      </div>
    </div>
  );
}

export default AdminAppiledLoans;
