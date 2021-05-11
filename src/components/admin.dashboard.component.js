import React, { Component } from "react";
import axios from "axios";
const Customers = (props) => (
  <tr>
    <td>{props.customers.customername}</td>
    <td>{props.customers.address}</td>
    <td>{props.customers.city}</td>
    <td>{props.customers.country}</td>
    <td>{props.customers.phonenumber}</td>
    <td>{props.customers.email}</td>
    <td>{props.customers.datefrom.substring(0, 10)}</td>
    <td>{props.customers.dateto.substring(0, 10)}</td>
    <td>
      <a
        href="/"
        onClick={() => {
          props.deleteCustomer(props.customers._id);
        }}
      >
        <p style={{ color: "orange", fontFamily: "monospace" }}>Delete</p>
      </a>
    </td>
  </tr>
);
export default class AdminDashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.deleteCustomer = this.deleteCustomer.bind(this);
    this.state = { customers: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/customers/")
      .then((response) => this.setState({ customers: response.data }))
      .catch((errr) => console.log(errr));
  }
  deleteCustomer(id) {
    axios.delete("http://localhost:5000/customers/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      customers: this.state.customers.filter((el) => el._id !== id),
    });
  }

  customerList() {
    return this.state.customers.map((currcustomer) => {
      return (
        <Customers
          customers={currcustomer}
          deleteCustomer={this.deleteCustomer}
          key={currcustomer._id}
        />
      );
    });
  }
  render() {
    return (
      <div style={{ marginTop: "70px" }}>
        <h1
          style={{
            color: "orange",
            fontFamily: "monospace",
            textAlign: "center",
          }}
        >
          People Who have done their booking
        </h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name </th>
              <th>Address</th>
              <th>City</th>
              <th>Country</th>
              <th>Phonenumber</th>
              <th>Email</th>
              <th>Datefrom</th>
              <th>Dateto</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.customerList()}</tbody>
        </table>
      </div>
    );
  }
}
