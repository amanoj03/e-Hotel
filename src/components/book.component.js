import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class BookComponent extends Component {
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
    };
  }
  componentDidMount() {
    console.log("here");
    axios
      .get("http://localhost:5000/customers/")
      .then((response) => console.log(response));
  }
  onChangeName(e) {
    console.log(e.target.value);
    this.setState({
      customername: e.target.value,
    });
  }
  onChangeAddress(e) {
    console.log(e.target.value);
    this.setState({
      address: e.target.value,
    });
  }
  onChangeCity(e) {
    console.log(e.target.value);
    this.setState({
      city: e.target.value,
    });
  }
  onChangeCountry(e) {
    console.log(e.target.value);
    this.setState({
      country: e.target.value,
    });
  }
  onChangePhoneNumber(e) {
    console.log(e.target.value);
    this.setState({
      phonenumber: e.target.value,
    });
  }
  onChangeEmail(e) {
    console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  }
  onChangeDateFrom(date) {
    console.log(date);
    this.setState({
      datefrom: date,
    });
  }
  onChangeDateTo(date) {
    console.log(date);
    this.setState({
      dateto: date,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    console.log("here");

    const cusomter = {
      customername: this.state.customername,
      address: this.state.address,
      city: this.state.city,
      country: this.state.country,
      phonenumber: this.state.phonenumber,
      email: this.state.email,
      datefrom: this.state.datefrom,
      dateto: this.state.dateto,
    };
    console.log(cusomter);

    // axios({
    //   method: "post",
    //   url: "http://localhost:5000/customers/add",
    //   data: cusomter,
    // })
    //   .then((res) => {
    //     if (res.status == 200) console.log(res);
    //   })
    //   .catch((err) => {
    //     if (err.request) {
    //       console.log(err.request);
    //     }
    //     if (err.response) {
    //       console.log(err.response);
    //     }
    //   });
    axios
      .post("http://localhost:5000/customers/add", cusomter)
      .then((res) => console.log(res.data))
      .catch((err) => {
        if (err.request) {
          console.log(err.request);
        }
        if (err.response) {
          console.log(err.response);
        }
        if (err.message) {
          console.log(err.message);
        }
      });

    window.location = "/";
  }
  render() {
    return (
      <div style={{ marginTop: "70px", backgroundColor: "whitesmoke" }}>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "monospace",
            fontWeight: "normal",
            color: "orange",
          }}
        >
          Book Your Comfort
        </h1>
        <div
          style={{
            margin: "30px 30px 0px 30px",
          }}
        >
          <form onSubmit={this.onSubmit}>
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
                type="email"
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
                  required
                  selected={this.state.datefrom}
                  onChange={this.onChangeDateFrom}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Date To: </label>
              <div>
                <DatePicker
                  required
                  selected={this.state.dateto}
                  onChange={this.onChangeDateTo}
                />
              </div>
            </div>
            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Book"
                style={{ width: "150px" }}
                className="btn btn-warning"
              />
            </div>
            <br />
          </form>
        </div>
      </div>
    );
  }
}
