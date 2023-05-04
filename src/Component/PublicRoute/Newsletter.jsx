import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
   <>
    <div className="newsletter-container common-bg d-flex justify-content-start justify-content-md-end">
        <div className="content mt-3">
            <h1 className='font-weight-bold text-info common-heading-text'>Join our <span className='special-text'>Newsletter</span></h1>
            <p className='text-light common-paragraph-text'>Get informed with latest cuisine <span className='special-text'>trips and tricks.</span> </p>
            <Link to='/login' className='w-100 d-flex justify-content-end text-decoration-none mt-4'>
                  <Button variant="outline-info" className=''>Join now</Button>
             </Link>
        </div>
    </div>
   </>
  )
}

export default Newsletter