import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import NavAll from "../NavAll"
import axios from "axios";
// import { Alert } from "./Alert";
// import { Navbar } from "./Navbar";
// import uri from './services/api.json';

function CheckOut() {
  const [email, setEmail] = useState("");
  const [bookName, setBookName] = useState("");


  function saveUser() {
    swal("Are you sure you want to do this?", {
      buttons: ["No!", "Yes!"],
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Checkout Succesfully!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    console.warn({ email, bookName });
    let data = {email, bookName};

    let url=new URL ("http://localhost:8080/customer-service/library/customer/checkout")
    url.search=new URLSearchParams({
      email:email,
      bookName:bookName
    })
    axios.post( "http://localhost:8080/customer-service/library/customer/checkout", {}, { params: { email, bookName} } 
    // fetch(
    //   "http://localhost:8080/customer-service/library/customer/checkout",
    //   {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }
    ).then((result) => {
      // console.warn("result", result);
     
        console.warn("result", result);
   
    });
  }

  return (
    <>
    <NavAll/>
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
                        <span>BOOK CHECKOUT</span>
                      </div>
                      <div
                        className="col-md-6 text-right"
                        style={{ "margin-top": "-5px" }}
                      >
                    
                      </div>
                    </div>
                  </div>
                  <div className="card-body" style={{ height: "350px" }}>
                    <div className="form-group">
                      <label for="cc-number" className="control-label">
                        Email Id
                      </label>
                      <input
                        type="text"
                        // onChange={handleCardNumber}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        id="acc-number"
                        className="input-lg form-control cc-number"
                        autocomplete="cc-number"
                        placeholder="Email Id"
                        // maxlength="16"
                        required
                      />
                    </div>
                    <br />

                    <div className="form-group">
                      <label for="cc-number" className="control-label">
                        Book Name
                      </label>
                      <input
                        type="text"
                        value={bookName}
                        onChange={(e) => {
                          setBookName(e.target.value);
                        }}
                        id="acc-number"
                        className="input-lg form-control cc-number"
                        autocomplete="cc-number"
                        placeholder="Book Name"
                       
                        required
                      />
                    </div>
                    <br />

                    {/* 
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="cc-otp" className="control-label">
                            AMOUNT
                          </label>
                          <input
                            type="number"
                            // onChange={handleAmount}
                            id="cc-amount"
                            className="input-lg form-control cc-exp"
                            autocomplete="cc-amount"
                            placeholder="0"
                            maxlength="6"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label for="cc-installment" className="control-label">
                            ENTER A EMI OPTION FROM
                          </label>
                          <input
                            type="number"
                            // onChange={handleInstallmentPeriod}
                            id="cc-installment"
                            className="input-lg form-control cc-exp"
                            autocomplete="cc-installment"
                            placeholder="0"
                            maxlength="2"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="col-md-12">
                      <div className="col-md-12">
                        <div class="list-group">
                          <a
                            href="#"
                            class="list-group-item list-group-item-action active"
                          >
                            CHOOSE EMI
                          </a>
                          <div id="emi"></div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="col-md-12">
                      <button
                        id="btnGetEmi"
                        // onClick={getEmi}
                        type="button"
                        className="btn btn-secondary btn-lg form-control"
                        style={{ "font-size": " .8rem" }}
                      >
                        <h7 id="loading1"> GET EMI OPTIONS </h7>
                      </button>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="cc-pin" className="control-label">
                          ENTER YOUR CARD PIN
                        </label>
                        <input
                          type="password"
                          //   onChange={handleCardPin}
                          id="cc-pin"
                          className="input-lg form-control cc-exp"
                          autocomplete="cc-pin"
                          placeholder="••••"
                          maxlength="4"
                          required
                        />
                      </div>
                    </div> */}
                    <br />
                    <div className="form-group">
                      <button
                        id="btnSend"
                        onClick={saveUser}
                        type="submit"
                        className="btn btn-success btn-lg form-control"
                        style={{ "font-size": " .8rem" }}
                        className="send"
                      >
                        <div className="btn_1">
                          <h7 id="loading"> CheckOut</h7>
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

export default CheckOut;
