import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselBootstrap() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/vectors/abstract-rhythmic-sound-wave-vector-id1155459225?k=6&m=1155459225&s=612x612&w=0&h=8-JdB_816NE0L3Jzvel5lQUYpBqfU-vBQSDucXdDPKU="
            alt="First slide"
          />
          <Carousel.Caption>
            <h3> First slide label </h3>{" "}
            <p> Nulla vitae elit libero, a pharetra augue mollis interdum. </p>{" "}
          </Carousel.Caption>{" "}
        </Carousel.Item>{" "}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/colorful-forest-picture-id1173544039?k=6&m=1173544039&s=612x612&w=0&h=tS7MH0LP7Pvp7L_oL0b7phGeaDw54-KMcwEn3-ToPRI="
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3> Second slide label </h3>{" "}
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>{" "}
          </Carousel.Caption>{" "}
        </Carousel.Item>{" "}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/one-palm-tree-on-pink-sky-background-picture-id1065223440?k=6&m=1065223440&s=612x612&w=0&h=RwvUToy0IFjG5ohRMMvQMIM9CcRJFuys44j6e5vGfo4="
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3> Third slide label </h3>{" "}
            <p>
              {" "}
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.{" "}
            </p>{" "}
          </Carousel.Caption>{" "}
        </Carousel.Item>{" "}
      </Carousel>
    </div>
  );
}
