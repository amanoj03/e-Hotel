import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCity = this.onChangeCity.bind(this);
    this.onChangeCountry = this.onChangeCountry.bind(this);
    this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDateFrom = this.onChangeDateFrom.bind(this);
    this.onChangeDateTo = this.onChangeDateTo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      customername: "",
      address: "",
      city: "",
      country: "",
      phonenumber: "",
      email: "",
      datefrom: new Date(),
      dateto: new Date(),
      users: [],
    };
  }
  componentDidMount() {}
  onChangeName(e) {
    this.setState({
      customername: e.target.value,
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }
  onChangeCity(e) {
    this.setState({
      city: e.target.value,
    });
  }
  onChangeCountry(e) {
    this.setState({
      country: e.target.value,
    });
  }
  onChangePhoneNumber(e) {
    this.setState({
      phonenumber: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeDateFrom(date) {
    this.setState({
      datefrom: date,
    });
  }
  onChangeDateTo(date) {
    this.setState({
      dateto: date,
    });
  }
  onSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div style={{ marginTop: "70px", backgroundColor: "whitesmoke" }}>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "monospace",
            color: "orange",
          }}
        >
          Book Component
        </h1>
        <div
          style={{
            margin: "30px 30px 0px 30px",
          }}
        >
          <form>
            <div className="form-group">
              <label>Your Name: </label>
              <input
                type="text"
                required
                className="form-control"
                style={{ width: "300px" }}
                value={this.state.customername}
                onChange={this.onChangeName}
              />
            </div>
            <div className="form-group">
              <label>Address: </label>
              <input
                type="text"
                required
                className="form-control"
                style={{ width: "500px" }}
                value={this.state.address}
                onChange={this.onChangeAddress}
              />
            </div>
            <div className="form-group">
              <label>City: </label>
              <input
                type="text"
                required
                className="form-control"
                style={{ width: "300px" }}
                value={this.state.city}
                onChange={this.onChangeCity}
              />
            </div>
            <div className="form-group">
              <label>Country: </label>
              <input
                type="text"
                required
                className="form-control"
                style={{ width: "300px" }}
                value={this.state.country}
                onChange={this.onChangeCountry}
              />
            </div>
            <div className="form-group">
              <label>Phone Number: </label>
              <input
                type="text"
                required
                className="form-control"
                style={{ width: "300px" }}
                value={this.state.phonenumber}
                onChange={this.onChangePhoneNumber}
              />
            </div>
            <div className="form-group">
              <label>Email: </label>
              <input
                type="text"
                required
                className="form-control"
                style={{ width: "300px" }}
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
            <div className="form-group">
              <label>Date From: </label>
              <div>
                <DatePicker
                  selected={this.state.datefrom}
                  onChange={this.onChangeDateFrom}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Date To: </label>
              <div>
                <DatePicker
                  selected={this.state.dateto}
                  onChange={this.onChangeDateTo}
                />
              </div>
            </div>
            <br />
            <div className="form-group">
              <input type="submit" value="Book" className="btn btn-warning" />
              <br />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
