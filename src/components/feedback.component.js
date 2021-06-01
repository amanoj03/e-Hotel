import React, { Component } from "react";
import axios from "axios";

export default class ContactComponent extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeSummary = this.onChangeSummary.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      age: "",
      summary: "",
      description: "",
    };
  }
  componentDidMount() {
    console.log("mount here");
    axios
      .get("http://localhost:5000/feedback/")
      .then((response) => console.log(response));
  }
  onChangeName(e) {
    console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  }
  onChangeAge(e) {
    console.log(e.target.value);
    this.setState({
      age: e.target.value,
    });
  }
  onChangeSummary(e) {
    console.log(e.target.value);
    this.setState({
      summary: e.target.value,
    });
  }
  onChangeDescription(e) {
    console.log(e.target.value);
    this.setState({
      description: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    console.log("here submit");

    const feedback = {
      name: this.state.name,
      age: this.state.age,
      summary: this.state.summary,
      description: this.state.description,
    };
    console.log(feedback);

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
      .post("http://localhost:5000/feedback/add", feedback)
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
          Leave Your Feedback
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
                placeholder="Your Sweet Name"
                required
                className="form-control"
                style={{ width: "300px" }}
                value={this.state.name}
                onChange={this.onChangeName}
              />
            </div>

            <div className="form-group">
              <label>Age: </label>
              <input
                type="text"
                placeholder="Optional"
                className="form-control"
                style={{ width: "300px" }}
                value={this.state.age}
                onChange={this.onChangeAge}
              />
            </div>

            <div className="form-group">
              <label>Summary: </label>
              <input
                type="text"
                placeholder="Happy Or Not Happy"
                required
                className="form-control"
                style={{ width: "300px" }}
                value={this.state.summary}
                onChange={this.onChangeSummary}
              />
            </div>
            <div className="form-group">
              <label>Description: </label>
              <textarea
                type="text"
                placeholder="Write in Detail"
                required
                className="form-control"
                style={{ width: "850px", height: "150px" }}
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </div>
            <br />
            <div className="form-group">
              <input
                type="submit"
                value="Submit"
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
