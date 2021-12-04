import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import NavAll from "../NavAll"
import AdminBase from "./AdminBase";

function ListUploadedBook() {
  const [data, setData] = useState([]);

  const GetOffers = async () => {
    axios
      .get(
        "http://localhost:8080/admin-service/library/admin/getIssueDetails"
      )
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
          console.log(data);
        }
      });
  };

  useEffect(() => {
    GetOffers();
  }, [data]);

  return (
    <>
    <AdminBase/>
    <div className="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded fixed-top ">
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
              <b>Uploaded Books</b>
            </h2>
          </div>
          {/*<div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">*/}
          {/*    <Button variant="primary " onClick={handleShow}>*/}
          {/*        Activate Id*/}
          {/*    </Button>*/}
          {/*</div>*/}
        </div>
        <div className="row">
          <div className="table-responsive ">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>List Of Uploaded Books</th>
                  
                </tr>
              </thead>
              <tbody>
                {data.map((e) => {
                  return [
                   
                  ];
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}

        {/* Model Box Finsihs */}
      </div>
    </div>
  </>
  );
}
export default ListUploadedBook;
