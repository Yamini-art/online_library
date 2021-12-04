import React from "react";
import { Link, Route } from "react-router-dom";

const Navbar = () => {
  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    //     <div className="container">
    //       <Link to="/" className="navbar-brand">
    //         Dashboard
    //       </Link>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav ms-auto">
    //           <li className="nav-item">
    //             <a className="nav-link active" aria-current="page" href="#">
    //               Profile
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link active" href="#">
    //               Offers
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className={"nav-link active"} href="#">
    //               Loan Details
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link active">Log Out</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
      <div class="container-fluid">
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/userprofile"
              >
                PROFILE
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/getoffers">
                OFFERS
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/applyloan">
                APPLY LOAN
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="transferfund"
              >
                TRANSFER FUND
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/payemi">
                PAY EMI
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/getloandetails">
                LOAN DETAILS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
