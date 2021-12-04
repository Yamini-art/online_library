import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { Button,Modal } from 'react-bootstrap';


function ApproveLoan() {

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
                    <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred text-primary"><h2><b>Loan Details</b></h2></div>
                    <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
                        <Button variant="primary " onClick={handleShow}>
                            Activate Id
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="table-responsive " >
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Email Address</th>

                            </tr>
                            </thead>
                            <tbody>

                            <tr>
                                <td>1</td>
                                <td>yamigathibandhe@gmail.com</td>

                                <td >
                                    <Button  variant="primary " className="btn">
                                        Approve
                                    </Button>
                                    <Button  variant="primary" >
                                        Delete
                                    </Button>
                                    {/*<Link to="#" className="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i className="material-icons">&#xE417;</i></Link>*/}
                                    {/*<Link to="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></Link>*/}
                                    {/*<Link to="#" className="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i className="material-icons">&#xE872;</i></Link>*/}

                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>saurmaurya@hotmail.com</td>

                                <td>
                                    <Button variant="primary">
                                        Approve
                                    </Button>
                                    <Button variant="primary">
                                        Delete
                                    </Button>
                                    {/*<Link to="#" className="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i className="material-icons">&#xE417;</i></Link>*/}
                                    {/*<Link to="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></Link>*/}
                                    {/*<Link to="#" className="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i className="material-icons">&#xE872;</i></Link>*/}
                                </td>
                            </tr>


                            <tr>
                                <td>3</td>
                                <td>patrorupak99@gmail.com</td>

                                <td>
                                    <Button variant="primary">
                                        Approve
                                    </Button>
                                    <Button variant="primary">
                                        Delete
                                    </Button>

                                </td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>yamanigathibandhe1997@gmail.com</td>

                                <td>
                                    <Button variant="primary">
                                        Approve
                                    </Button>
                                    <Button variant="primary">
                                        Delete
                                    </Button>

                                </td>
                            </tr>


                            <tr>
                                <td>5</td>
                                <td>yaminigathibandhe@gmail.com</td>
                                <td>
                                    <Button variant="primary">
                                        Approve
                                    </Button>
                                    <Button variant="primary">
                                        Delete
                                    </Button>

                                </td>
                            </tr>


                            <tr>
                                <td>6</td>
                                <td>samrudhi1998@gmail.com</td>

                                <td>
                                    <Button variant="primary">
                                        Approve
                                    </Button>
                                    <Button variant="primary">
                                        Delete
                                    </Button>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <!--- Model Box ---> */}
                <div className="model_box">
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Activate User Id</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="inputid" placeholder="Enter Id"/>
                                </div>


                                <button type="submit" className="btn btn-success mt-4">Activate</button>
                            </form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                        </Modal.Footer>
                    </Modal>

                    {/* Model Box Finsihs */}
                </div>
            </div>
        </div>
    );
}

export default ApproveLoan;