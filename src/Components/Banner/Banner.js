import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner'>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://templates.scriptsbundle.com/carspot/demos/images/slider/slider-banner.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>The Wind is </h2>
      <h1>Not even Close to Us</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://templates.scriptsbundle.com/carspot/demos/images/slider/slider-banner2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2>We have a lot  </h2>
      <h1> Everything your car needs!</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://templates.scriptsbundle.com/carspot/demos/images/banner-5.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>Come and see the </h2>
      <h1>Most stunning car here</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;