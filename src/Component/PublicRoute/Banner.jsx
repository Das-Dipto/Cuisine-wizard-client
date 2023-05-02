import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Cuisine from '../../assets/cuisine.jpg'


const Banner = () => {
  return (
    <div className='banner'>
        <Carousel >
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Cuisine}
            alt="First slide"
            />
            <Carousel.Caption className='carousel'>
            <h3 className='carousel-heading'>First slide label</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Cuisine}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Cuisine}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Banner