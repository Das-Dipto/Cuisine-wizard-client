import React from 'react'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Error = () => {
  return (
     <>
     <div className="error-container d-flex justify-content-center align-items-center">
       <div className="error-content">
            <h1 className='error-code mb-4 text-success text-center font-weight-bold'>404</h1>
            <h3 className=' my-4 text-center font-weight-bold'>  Opps! Something went wrong </h3>
            <p className=' my-3 text-center'> Apology for serving error dish </p>
            <div className='w-100 d-flex justify-content-center'>
              <Link to={`/`}>
                <Button variant="outline-success">Back to Homepage</Button>
              </Link>
            </div>
          
            </div>
       </div>
     </>
  )
}

export default Error