import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginAdmin } from "../actions/admin/adminActions";
import { loginCustomer } from "../actions/customer/customerActions";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    userType: "",
    errors: {},
  };
  componentDidMount() {
    if (this.props.admin.isAuthenticated) {
      this.props.history.push("/admindashboard");
    }
    if (this.props.customer.isAuthenticated) {
      this.props.history.push("/customerdashboard");
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.admin.isAuthenticated) {
      props.history.push("/admindashboard");
    }
    if (props.customer.isAuthenticated) {
      props.history.push("/customerdashboard");
    }
    if (props.errors) {
      return {
        errors: props.errors,
      };
    }
  }

  onChangeHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    switch (this.state.userType) {
      case "admin":
        this.props.loginAdmin(userData);
        break;
      case "customer":
        this.props.loginCustomer(userData);
        break;
      default:
        break;
    }
  };
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [allEntry, setAllEntry] = useState([]);
  //
  // const submitForm = (e) => {
  //     e.preventDefault();
  //     const newEntry = {email: email, password: password}
  //
  //     setAllEntry([...allEntry, newEntry]);
  //     console.log(allEntry);
  //
  // }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="shadow-sm text-primary mt-5 p-3 text-center rounded">
            Sign In
          </h1>
          <div className="mt-5 row">
            <div className="p-5 m-auto shadow rounded-ig col col-lg-5 col-md-6 col-sm-12">
              <form onSubmit={this.onSubmitHandler}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="inputEmail">
                    Email Id
                  </label>
                  <input
                    id="inputEmail"
                    className="form-control"
                    type="text"
                    placeholder="Email Id"
                    autoComplete="off"
                    name="email"
                    onChange={this.onChangeHandler}
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
                    name="password"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="userType">
                    Login as
                  </label>
                  <select
                    id="userType"
                    className="form-control form-select"
                    name="userType"
                    onChange={this.onChangeHandler}
                  >
                    <option defaultValue={null}>Select user type</option>
                    <option value="admin">Admin</option>
                    <option value="customer">Customer</option>
                  </select>
                </div>
                <button className="btn-primary btn w-25" type="submit">
                  Login
                </button>
                <div className="py-4 row">
                  <div className="col">
                    {/*Are you new here? <a href="/registration">Register Now</a>*/}
                    Are you new here? <Link to="/register">Register Now</Link>
                  </div>
                </div>
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
}

Login.propTypes = {
  loginAdmin: PropTypes.func.isRequired,
  loginCustomer: PropTypes.func.isRequired,
  admin: PropTypes.object.isRequired,
  customer: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  admin: state.admin,
  customer: state.customer,
});

export default withRouter(
  connect(mapStateToProps, { loginAdmin, loginCustomer })(Login)
);
