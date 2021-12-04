import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import NavAll from "../NavAll";
import axios from "axios";
import AdminBase from "./AdminBase";

function RevokeAccess() {
  const uploadBook = () => {
    var file = document.getElementById("file").files[0];
    upload(file);
  };

  const upload = (file) => {
    console.log(file);

    const formData = new FormData();

    formData.append("file", file);

    axios
      .post("http://localhost:8084/uploadCSVFile", formData)
      .then((res) => {
        console.log(res);
        if (res.status === 200) alert("success");
        else alert("Plaese Try Again");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <AdminBase />
      <div className="container">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.payment/3.0.0/jquery.payment.min.js"></script>
        <div className="padding my-2">
          <div className="row">
            <div className="container-fluid d-flex justify-content-center">
              <div className="col-sm-8 col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-md-6">
                        <span>UPLOAD FILE</span>
                      </div>
                      <div
                        className="col-md-6 text-right"
                        style={{ "margin-top": "-5px" }}
                      ></div>
                    </div>
                  </div>
                  <div className="card-body" style={{ height: "200px" }}>
                    <div className="form-group">
                      <label for="cc-number" className="control-label">
                        File
                      </label>
                      <input
                        type="file"
                        id="file"
                        className="input-lg form-control cc-number"
                        autocomplete="cc-number"
                        placeholder="Id"
                        required
                      />
                    </div>

                    <br />
                    <div className="form-group">
                      <button
                        onClick={uploadBook}
                        type="button"
                        className="btn btn-success btn-lg form-control"
                        style={{ "font-size": " .8rem" }}
                        className="send"
                      >
                        <div className="btn_1">
                          <h7 id="loading"> Revoke Access</h7>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RevokeAccess;
