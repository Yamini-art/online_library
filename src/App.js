import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import AdminRoute from "./components/admin/AdminRoute";
import AdminDashboard from "./components/admin/AdminDashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import CustomerDashboard from "./components/Customer/CustomerDashboard";
import CustomerRoute from "./components/Customer/CustomerRoute";
import CheckOut from "./components/Customer/CheckOut";
import BookIssueDetails from "./components/Customer/BookIssueDetails";
import DownloadBook from "./components/Customer/DownloadBook";
import ActivateId from "./components/admin/ActivateId";
import GetIssueDetails from "./components/admin/GetIssueDetails";
import ListUploadedBook from "./components/admin/ListUploadedBook";
import BookList from "./components/Customer/BookList";
import AdminBookList from "./components/admin/AdminBookList";
import Upload from "./components/admin/Upload";
import RevokeAccess from "./components/admin/RevokeAccess";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/checkout" component={CheckOut} />
      </Switch>
      <Switch>
        <Route exact path="/bookissuedetails" component={BookIssueDetails} />
      </Switch>
      <Switch>
        <Route exact path="/downloadbook" component={DownloadBook} />
      </Switch>
      <Switch>
        <Route exact path="/activateid" component={ActivateId} />
      </Switch>
      <Switch>
        <Route exact path="/getissuedetails" component={GetIssueDetails} />
      </Switch>
      <Switch>
        <Route exact path="/listuploadedbook" component={ListUploadedBook} />
      </Switch>
    

      <Switch>
        <Route exact path="/booklist" component={BookList} />
      </Switch>
      <Switch>
        <Route exact path="/adminbooklist" component={AdminBookList} />
      </Switch>
      <Switch>
        <Route exact path="/upload" component={Upload} />
      </Switch>
   
     

      {/* <Switch>
        <Route exact path="/getloandetails" component={GetLoanDetails} />
      </Switch>

      <Switch>
        <Route exact path="/getoffers" component={GetOffers} />
      </Switch> */}
      <Switch>
        <Route exact path="/revokeaccess" component={RevokeAccess} />
      </Switch>

      {/* <Switch>
        <Route exact path="/adminoffers" component={AdminOffers} />
      </Switch>
      <Switch>
        <Route exact path="/applyloan" component={ApplyLoan} />
      </Switch>

      <Switch>
        <Route exact path="/payemi" component={PayEmi} />
      </Switch>

      <Switch>
        <Route exact path="/transferfund" component={TransferFund} />
      </Switch>

      <Switch>
        <Route exact path="/userprofile" component={UserProfile} />
      </Switch>

      <Switch>
        <Route exact path="/adminappliedloans" component={AdminAppiledLoans} />
      </Switch> */}

      
      <Switch>
        <AdminRoute path="/admindashboard" component={AdminDashboard} />
      </Switch>
      <Switch>
        <CustomerRoute
          path="/customerdashboard"
          component={CustomerDashboard}
        />
      </Switch>
      {/* <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch> */}
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
      <Switch>
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
};

export default App;
