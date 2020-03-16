import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import cafe from "../assets/cafe.jpg";
import chicago from "../assets/chicago.jpg";
import coffee from "../assets/coffee.jpg";
import CarouselCaption from "react-bootstrap/CarouselCaption";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100%" src={cafe} alt="flag" />
          <Carousel.Caption>
            <h3>"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100%" src={chicago} alt="flag" />
          <Carousel.Caption>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100%" src={coffee} alt="flag" />
          <Carousel.Caption>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
