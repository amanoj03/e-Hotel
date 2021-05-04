import React from "react";
import "../App.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../images/roompic1.jpg";
import image2 from "../images/roompic2.jpg";
import image3 from "../images/roompic3.jpg";
import image4 from "../images/roompic4.jpg";
import image5 from "../images/roompic5.jpg";
import image6 from "../images/bangalore.jpg";
import image7 from "../images/mumbai.png";
import image8 from "../images/delhi.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homepage" style={{ marginTop: "70px" }}>
      <AliceCarousel autoPlay autoPlayInterval="3000" infinite="true">
        <img src={image1} className="sliderimg" />
        <img src={image2} className="sliderimg" />
        <img src={image3} className="sliderimg" />
        <img src={image4} className="sliderimg" />
        <img src={image5} className="sliderimg" />
      </AliceCarousel>
      <div className="description">
        <h1
          style={{
            paddingTop: "10px",
            paddingLeft: "10px",
            fontStyle: "italic",
            fontWeight: 250,
          }}
        >
          Best Services Guranteed
        </h1>
        <p style={{ paddingLeft: "10px", color: "orange" }}>
          ___________________________________________
        </p>
        <p style={{ padding: "20px" }}>
          Make your bookings directly with us for the most seamless experience
          and the best value. With compelling exclusive offers, Pennsylvania
          InnerCircle reward points, and the best rates guaranteed experience
          our sincere care even before you check in.
          <br />
          <Link to="/about-us" style={{ color: "orange", fontWeight: 600 }}>
            {" "}
            Read More.
          </Link>
        </p>
      </div>
      <div className="destinations">
        <h1
          style={{
            paddingTop: "10px",
            paddingLeft: "10px",
            fontStyle: "italic",
            fontWeight: 250,
            textAlign: "center",
          }}
        >
          Popular Destinations
        </h1>
        <p
          style={{ paddingLeft: "10px", color: "orange", textAlign: "center" }}
        >
          ___________________________________________________________________________________________________________________________________________________________
        </p>
        <AliceCarousel autoPlay autoPlayInterval="3000" infinite="true">
          <img
            src={image6}
            className="destimages"
            title="Bangalore"
            alt="Bangalore"
          ></img>
          <img
            src={image7}
            className="destimages"
            title="Mumbai"
            alt="Mumbai"
          ></img>
          <img
            src={image8}
            className="destimages"
            title="Mumbai"
            alt="Mumbai"
          ></img>
        </AliceCarousel>
      </div>
      <div></div>
    </div>
  );
}

export default HomePage;
