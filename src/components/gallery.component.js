import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../images/service1.jpg";
import image2 from "../images/service2.jpg";
import image3 from "../images/service3.jpg";
import image4 from "../images/service4.jpg";
import image5 from "../images/service5.jpg";
import image6 from "../images/service6.jpg";
import image7 from "../images/service7.jpg";
import image8 from "../images/service8.jpg";
import image9 from "../images/service9.jpg";
import { Link } from "react-router-dom";
const images = [
  {
    id: 1,
    src: image1,
    description: "Service Pic",
  },
  {
    id: 2,
    src: image2,
    description: "Service Pic",
  },
  {
    id: 3,
    src: image3,
    description: "Service Pic",
  },
  {
    id: 4,
    src: image4,
    description: "Service Pic",
  },
  {
    id: 5,
    src: image5,
    description: "Service Pic",
  },
  {
    id: 6,
    src: image6,
    description: "Service Pic",
  },
  {
    id: 7,
    src: image7,
    description: "Service Pic",
  },
  {
    id: 8,
    src: image8,
    description: "Service Pic",
  },
  {
    id: 9,
    src: image9,
    description: "Service Pic",
  },
];
function Services() {
  return (
    <div style={{ marginTop: "70px", textAlign: "center" }}>
      <h1
        style={{
          color: "black",
          fontFamily: "monospace",
          textAlign: "center",
        }}
      >
        <b>Services we provide</b>
      </h1>
      {images.map(({ id, src, title, description }) => (
        <img
          src={src}
          title={title}
          alt={description}
          style={{
            textAlign: "center",
            width: "600px",
            height: "400px",
            padding: "25px 10px 10px 10px",
          }}
        />
      ))}
    </div>
  );
}

export default Services;
