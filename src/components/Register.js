import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
 

  function saveUser() {
    console.warn({
      username,
      email,
      password,
      mobileNumber,
    
    });
    let data = {
      username,
      email,
      password,
      mobileNumber,
    
    };

    fetch(
      "http://localhost:8080/customer-service/library/customer/register-customer",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((result) => {
      // console.warn("result", result);
      result.json().then((Response) => {
        console.warn("response", Response);
      });
    });
  }

  return (
    <div>
      <div className="container">
        <h1 className="shadow-sm text-primary mt-5 p-3 text-center rounded">
          Register
        </h1>
        <div className="mt-5 row">
          <div className="p-5 m-auto shadow rounded-ig col col-lg-5 col-md-6 col-sm-12">
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="inputUsername">
                  Username
                </label>
                <input
                  id="inputUsername"
                  className="form-control"
                  type="text"
                  placeholder="Enter Username"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="inputEmail">
                  Email address
                </label>
                <input
                  id="inputEmail"
                  className="form-control"
                  type="email"
                  placeholder="Enter email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="inputPassword">
                  Password
                </label>
                <input
                  id="inputPassword"
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              

              

            

              <div className="mb-3">
                <label className="form-label" htmlFor="inputMobileNumber">
                  Mobile No.
                </label>
                <input
                  id="inputMobileNumber"
                  className="form-control"
                  placeholder="mobile no"
                  autoComplete="off"
                  value={mobileNumber}
                  onChange={(e) => {
                    setMobileNumber(e.target.value);
                  }}
                />
              </div>

    

              <button
                className="btn-primary btn w-25"
                type="submit"
                onClick={saveUser}
              >
                Register
              </button>
            </form>
          </div>
        </div>

        <h6 className="mt-5 p-5 text-center text-secondary">
          Copyright © 2021. All Right Reserved.
        </h6>
      </div>
    </div>
  );
}

export default Register;
