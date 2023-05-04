import React, { useContext } from 'react'
import Anim from '../../lottieAnim.json'
import Lottie from 'lottie-react'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const Login = () => {
  const {googleSignIn ,githubSignIn, loading} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/chefreceipes/1111'

  if(loading){
    return <div className='d-flex justify-content-center mt-4 w-100'>
        <Spinner animation="border" variant="primary" />
    </div> 
  }

  const googleLogin = () =>{
      googleSignIn()
      .then((result)=>{
         const loggedInUser =result.user;
         console.log(loggedInUser);
         navigate(from, { replace: true })
      })
      .catch((error)=>{
        console.log(error.message);
      })
  }

  const githubLogin = () =>{
    githubSignIn()
    .then((result)=>{
       const loggedInUser =result.user;
       console.log(loggedInUser);
       navigate(from, { replace: true })
    })
    .catch((error)=>{
      console.log(error.message);
    })
}
  return (
    <>
      <div className="login-container d-flex flex-column flex-md-row align-items-center w-75 mx-auto">
        <div style={{maxWidth:600}}>
            <Lottie animationData={Anim} />
        </div>
        <div className="login-item">
            <div onClick={googleLogin} className="Google-login d-flex w-100 justify-content-center align-items-center login-bar p-4">
                 <FcGoogle style={{fontSize:30}} className='me-2'/>
                  Sign in with Google
            </div>
            <div onClick={githubLogin} className="Github-login d-flex w-100 justify-content-center align-items-center login-bar p-4 my-3">
                 <FaGithub style={{fontSize:30}} className='me-2'/>
                  Sign in with Github
            </div>
            <Link to="/signInWithMail" className="Email-login text-dark d-flex w-100 justify-content-center align-items-center login-bar p-4 text-decoration-none">
                 <AiOutlineMail style={{fontSize:30}} className='me-2'/>
                 Sign in with Email
            </Link>
            <Link to="/register" className='text-primary'>New here? Please register</Link>
        </div>
      </div>
       
    </>
  )
}

export default Login