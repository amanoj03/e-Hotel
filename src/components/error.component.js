import React from "react";
import { Link } from "react-router-dom";
function ErrorComponent() {
  return (
    <div style={{ marginTop: "70px", backgroundColor: "white" }}>
      <div
        style={{
          textAlign: "center",
          display: "block",
          margin: " 220px auto",
          width: "950px",
          height: "100px",
          backgroundColor: "",
        }}
      >
        <p style={{ fontFamily: "fantasy", fontSize: 100 }}>Error!!</p>
        <Link to="/admin-login">
          <div className="form-group">
            <input
              type="submit"
              value="Go Back"
              style={{ width: "150px" }}
              className="btn btn-warning"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ErrorComponent;
