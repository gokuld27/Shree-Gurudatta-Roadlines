import React from 'react';
import {Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../Assets/Images/Car1.jpg';
import image1 from '../Assets/Images/caar6.jpg';
import image2 from '../Assets/Images/Car2.jpg';
import './CarouselSection.css'

function Car()
{
    return(
      <div>
        <Carousel fade style={{width: "100vw !important"}}>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={image}  style={{ 'height': "640px" }}alt="First slide" />
          <Carousel.Caption>
            <h3 style={{ textAlign: "left"}}>TRANSPORT <br/> CONTRACTERS & FORWARDERS</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={image1}  style={{ 'height': "640px" }} alt="Second slide" />

          <Carousel.Caption>
            <h3 style={{ textAlign: "left"}}>ON-TIME SERVICE <br/> WITH NO DELAY</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2}  style={{ 'height': "640px" }} alt="Third slide" />

          <Carousel.Caption>
            <h3 style={{ textAlign: "left" }}>COST EFFICIENT <br/> WITH FRIENDLY SERVICE</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}

export default Car