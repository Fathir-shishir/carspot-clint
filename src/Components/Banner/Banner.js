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
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://templates.scriptsbundle.com/carspot/demos/images/slider/slider-banner2.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://templates.scriptsbundle.com/carspot/demos/images/banner-5.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;