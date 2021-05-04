import React from "react";

function AboutUs() {
  return (
    <div style={{ marginTop: "70px" }}>
      <h1
        style={{
          color: "black",
          fontFamily: "monospace",
          textAlign: "center",
        }}
      >
        <b> Pennsylvania Group Of Hotels</b>
      </h1>
      <br></br>
      <p style={{ margin: "50px 50px 50px 50px", fontFamily: "monospace" }}>
        We, the best hotel providers in the east coast, believe in helping
        people and tourists get along with our services. We have bagged numerous
        awards including the presitgious{" "}
        <b>
          <i>Best Hotel Of the Year - 2019</i>
        </b>
        &nbsp;and&nbsp;
        <b>
          <i>Best Luxiorous Hotels to Stay in United States.</i>
        </b>
        We as a group, acknowledge to provide what the guests really deserve.
      </p>
      <p style={{ margin: "50px 50px 50px 50px", fontFamily: "monospace" }}>
        We also comply all the rules and regulations defined in the
        <b>
          <i> United States Protocol for Hotels - 1990.</i>
        </b>
      </p>
      <p
        style={{
          textAlign: "right",
          padding: "30px 30px 30px 30px",
          fontFamily: "monospace",
        }}
      >
        <h9 style={{ paddingRight: "222px" }}>Chief</h9>
        <br />
        Pennsylvania Group Of Hotels
        <br />
      </p>
    </div>
  );
}

export default AboutUs;
