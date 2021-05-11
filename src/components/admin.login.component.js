import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export default class AdminLoginComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      password: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    if (
      this.state.username == "admin" &&
      this.state.password == "admin" &&
      this.state.username.length > 0 &&
      this.state.password.length > 0
    ) {
      window.location = "/admin-dashboard";
    } else window.location = "/error";
  }
  render() {
    return (
      <div style={{ marginTop: "70px", backgroundColor: "white" }}>
        <div
          style={{
            margin: "30px 30px 0px 30px",
          }}
        >
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                required
                className="form-control"
                style={{ width: "300px" }}
                value={this.state.username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                required
                className="form-control"
                style={{ width: "300px" }}
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Login"
                style={{ width: "150px" }}
                className="btn btn-warning"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
