import React from 'react'
import {Link } from 'react-router-dom'
import "./App.css"
import Carousel from 'react-bootstrap/Carousel'


const Homepage =(props)=>{
    
    return (<div>
      <h1></h1>
      <Carousel >
  <Carousel.Item >
  {/* <span aria-hidden="false" className="carousel-control-next-icon" /> */}
    <img
      className="d-block w-100"
      src="/images/one.jpeg"
      alt="First slide"
    />
    <Carousel.Caption >
      <p>Be curious. Use data. Leverage imagination. Be an expert. Be an enthusiast. Be authentic. Know your competition.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/3.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <p>Your human talent is your most important talent..</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <p>Hire people who are smarter than you are—whose talents surpass yours—and give them opportunities for growth. It’s the smart thing to do and it is a sign of high personal humility. </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
     
    )
}

export default Homepage

