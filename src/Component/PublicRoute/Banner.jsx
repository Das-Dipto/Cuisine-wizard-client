import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import BannerOne from '../../assets/BannerOne.jpg'



const Banner = () => {
  return (
    <div className='banner'>
        <Carousel >
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={BannerOne}
            alt="First slide"
            />
            <Carousel.Caption className='carousel'>
            <h1 className='carousel-heading banner-heading font-weight-bold'>Welcome to <span className='special-text'>Cusine Wizard</span></h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={BannerOne}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h1 className='banner-heading'>Affiliate with the <span className='special-text'>best cuisine in town</span> </h1>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={BannerOne}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h1 className='banner-heading'>Explore thousand receipes from <span className='special-text'>East to West Coast</span> </h1>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Banner