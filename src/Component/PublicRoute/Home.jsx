import React from 'react'
import Banner from './Banner';
import PopularChef from './PopularChef';
import Newsletter from './Newsletter';
import BookCuisine from './BookCuisine';


const Home = () => {
  return (
     <>
      <Banner></Banner>
      <BookCuisine></BookCuisine>
      <PopularChef></PopularChef>
      <Newsletter></Newsletter>
     </>
  )
}

export default Home