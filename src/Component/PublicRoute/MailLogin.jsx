import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const MailLogin = () => {
  
  const handleLogin = (event) =>{
     event.preventDefault();
     const email = event.target.email.value;
     const password = event.target.password.value;
  }
  return (
    <>
        <Form onSubmit={handleLogin} className='w-25 mx-auto my-5'>
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
        </Form>
    </>
  )
}

export default MailLogin