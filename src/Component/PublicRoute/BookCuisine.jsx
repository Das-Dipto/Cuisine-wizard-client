import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const BookCuisine = () => {
  return (
    <>
    <div className="bookcuisine-container common-bg d-flex justify-content-start ">
        <div className="content mt-3">
            <h1 className='font-weight-bold text-info common-heading-text'>Book your <span className='special-text'>Table</span></h1>
            <small className='text-light common-paragraph-text'>Schedule your next dine within<span className='special-text'> reasonable price</span> </small>
            <Link to='/register' className='w-100 d-flex justify-content-start text-decoration-none mt-4'>
                  <Button variant="outline-info" className=''>Register now</Button>
             </Link>
        </div>
    </div>
    </>
  )
}

export default BookCuisine