import React from "react";
import { useState } from "react";
import swal from "sweetalert";
import NavAll from "../NavAll"
import axios from "axios";
import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function DownloadBook() {
  const [email,setEmail] = useState("");
  const [bookName,setBookname] = useState("");
  const [data,setData] = useState([]);
  const [numPages, setNumPages] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);
  const [currPage, setCurrPage] = useState(1);
  const [file, setFile] = useState(null);
  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log(numPages);
    setNumPages(numPages);
  };
 
  const GetOffers = async () => {
   
   
   // "http://localhost:8080/customer-service/library/customer/download/AUP..9,10.docx?email=yami@gmail.com"

  };

  // useEffect(() => {
  //   GetOffers();
  // }, [data]);

  const renderbook = (bookName,email) => {
   
   
    axios
      .get(`http://localhost:8080/customer-service/library/customer/download/${bookName}?email=${email}`, {
        responseType: "blob",
      })
      .then((res) => {
        let file1 = new File([res.data], "book.pdf");
        const url = URL.createObjectURL(file1);
        setFile(url);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                        <span>DOWNLOAD BOOK</span>
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
                        Email
                      </label>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        id="email"
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
                           setBookname(e.target.value);
                         }}
                        id="bookName"
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
                      
                       <button className="download" onClick={()=>renderbook(bookName,email)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Read Book</button>
                      
                      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div class="modal-dialog modal-fullscreen">
                      <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Reading Mode</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      {file && (
            <div>
              <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber}></Page>
              </Document>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>
          )}
      </div>
      <div class="modal-footer">
      <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary" onClick={() => setPageNumber(pageNumber - 1)}
                disabled={pageNumber <= 1}>Previous</button>
      <button type="button" class="btn btn-primary"  onClick={() => setPageNumber(pageNumber + 1)}
                disabled={pageNumber >= numPages}>Next</button>
 
</div>
      </div>
    </div>
                      </div>
                      </div>

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

export default DownloadBook;
