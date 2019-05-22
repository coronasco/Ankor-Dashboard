import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      err: "",
      errorShow: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      err:
        "There is no account with such credentials. Please Register with some dummy text to see the dashboard!",
      errorShow: true
    });
  };
  render() {
    return (
      <div className="login-page">
        <div className="login-wrapper">
          <h1 className="cyan-text">Login</h1>
          <hr />
          <br />
          <br />
          <div className="input-field container">
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              data-length="20"
            />
            <label>Email</label>
          </div>
          <div className="brake" />
          <div className="input-field container">
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              data-length="20"
            />
            <label>Password</label>
          </div>
          {this.state.errorShow ? (
            <p className="container red-text">
              {this.state.err}
              <br />
              <br />
            </p>
          ) : null}
          <br />
          <br />
          <br />
          <button className="center btn cyan" onClick={this.onSubmit}>
            Log In
          </button>
          <br />
          <br />

          <p className="grey-text text-lighten">
            You don't have an account?{" "}
            <Link to="/register">
              <p href="/" className="cyan-text">
                Register
              </p>
            </Link>
          </p>
          <br />
        </div>
      </div>
    );
  }
}

export default Login;
