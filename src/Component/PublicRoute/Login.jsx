import React from 'react'
import Anim from '../../lottieAnim.json'
import Lottie from 'lottie-react'
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="login-container d-flex flex-column flex-md-row align-items-center w-75 mx-auto">
        <div style={{maxWidth:600}}>
            <Lottie animationData={Anim} />
        </div>
        <div className="login-item">
            <div className="Google-login d-flex w-100 justify-content-center align-items-center login-bar p-4">
                 <FcGoogle style={{fontSize:30}} className='me-2'/>
                  Sign in with Google
            </div>
            <div className="Github-login d-flex w-100 justify-content-center align-items-center login-bar p-4 my-3">
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