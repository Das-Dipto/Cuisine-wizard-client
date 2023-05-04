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
            <h1 className='carousel-heading banner-heading font-weight-bold'>Welcome to <span className='special-text'>Cusine Wizard</span></h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Cuisine}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h1 className='banner-heading'>Affiliate with the <span className='banner-special-text'>best cuisine in town</span> </h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={Cuisine}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h1 className='banner-heading'>Explore thousand receipes from <span className='banner-special-text'>East to West Coast</span> </h1>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Banner