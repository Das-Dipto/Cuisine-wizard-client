import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';

const Navber = () => {
  const {user, logOut} = useContext(AuthContext);

  const signingOut = () =>{
      logOut()
      .then(()=>{
        console.log("sign out successful")
      })
      .catch((error)=>{
        console.log(error.message);
      })

  }

  return (
   <div className='nav-container py-3'>
   <div className='nav-item'>
      <h2 className='text-light'>Cuisine Wizard</h2>
      <div className="links">
          <Link to='/home' className='text-decoration-none text-light mx-4'>Home</Link>
          <Link to='/blog' className='text-decoration-none text-light mx-4'>Blog</Link>
          {
            user ? 
            <Link to=''>
                  <img src={user.photoURL} alt={user.displayName} />
                  <Button onClick={signingOut} variant="outline-info" className='ms-4'>Logout</Button>
              </Link>
             : 
             <Link to='/login'>
                  <Button variant="outline-info" className='ms-4'>Login</Button>
             </Link>
          
          }
         
      </div>
   </div>
   </div>
    
  )
}

export default Navber