import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const MailLogin = () => {
  const [fieldErrorMessage, setFieldErrorMessage, loading] = useState('');
  const { mailSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/chefreceipes/1111'

  if(loading){
    return <div className='d-flex justify-content-center mt-4 w-100'>
    <Spinner animation="border" variant="primary" />
  </div> 
  }

  const handleLogin = (event) =>{
     event.preventDefault();
     const email = event.target.email.value;
     const password = event.target.password.value;

     if(email,password){
        mailSignIn(email, password)
        .then((result)=>{
           const loggeInUser = result.user;
           console.log(loggeInUser);
           setFieldErrorMessage('');
           navigate(from, { replace: true })
        })
        .catch((error)=>{
           setFieldErrorMessage('wrong email or password! Try again');
           console.log(error.message);
        })
       
    }   
  }
  return (
    <div className='login-form-container py-5'>
        <Form onSubmit={handleLogin} className='w-25 mx-auto bg-white p-3 common-form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" required/>
            </Form.Group>
        
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <h4 className='text-danger'>{fieldErrorMessage}</h4>
        </Form>
    </div>
  )
}

export default MailLogin