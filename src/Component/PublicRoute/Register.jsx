import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const Register = () => {
    const { loading, createUser, updateUserData} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/chefreceipes/1111'
    const [passwordError, setPasswordError] = useState('');
    const [inputFieldError, setInputFieldError] = useState('');

    if(loading){
        return <div className='d-flex justify-content-center mt-4 w-100'>
          <Spinner animation="border" variant="primary" />
      </div> 
    }
    
    const handleRegisterSubmit = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const photoURL = event.target.url.value;
    
        if(password.length < 6){
            setPasswordError("Password cannot be less than 6 character")
            return;
        }

        else{
            setPasswordError('');
        }

        if(email, password){
            createUser(email, password)
            .then((result)=>{
                const registeredUser = result.user;
                console.log(registeredUser);
                navigate(from, { replace: true })

                updateUserData(result.user, name, photoURL)
                .then(()=>{
                    console.log('user name updated');
                })
                .catch((error)=>{
                    console.log(error.message);
                })
            })
            .catch((error)=>{
                console.log(error.message);
            })
            setInputFieldError('');
        }

        else{
            setInputFieldError("Email & Passport field should not be empty. ")
        }

    }

  

  return (
    <div className='registration-form-container py-5'>
       <Form style={{ minWidth: '250px', maxWidth:'400px' }}onSubmit={handleRegisterSubmit} className=' mx-auto my-5 register-form bg-light p-3 common-form'>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name='name' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' required/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' required/>
                <p className='text-danger'>{passwordError}</p>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Photo</Form.Label>
                <Form.Control type="text" placeholder="Photo URL" name='url' />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Register
            </Button>
            <h4 className='text-danger'>{inputFieldError}</h4>
    </Form>
    </div>
  )
}

export default Register