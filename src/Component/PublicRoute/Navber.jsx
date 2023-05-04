import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';

const Navber = () => {
    //Used for active route styling
    const navLinkStyles = ({isActive}) => {
      return{
         color: isActive ? '#FFA500' : '#fff'
      }
    }

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
      <Link to="/home"className='text-decoration-none' ><h2 className='text-light logo-text'>Cuisine Wizard</h2></Link> 
      <div className="links">
          <NavLink style={navLinkStyles} to='/home' className='text-decoration-none mt-2 mt-md-0  mx-4'>Home</NavLink>
          <NavLink style={navLinkStyles} to='/blog' className='text-decoration-none mt-2 mt-md-0   mx-4'>Blog</NavLink>
          <NavLink style={navLinkStyles} to='/about' className='text-decoration-none mt-2 mt-md-0   mx-4'>About</NavLink>
          {
            user ? <>
              {(user.photoURL) ?  
              <img className='mt-2 mt-md-0 ms-3 ms-md-0' title={user.displayName || user.reloadUserInfo.screenName} src={user.photoURL} alt={user.displayName} /> : 
              ''}
            <Link to=''>  
                  <Button onClick={signingOut} variant="outline-info" className='mt-2 mt-md-0 ms-4'>Logout</Button>
              </Link>
              </>
             : 
             <Link to='/login'>
                  <Button variant="outline-info" className='mt-2 mt-md-0 ms-md-4'>Login</Button>
             </Link>
          }
         
      </div>
   </div>
   </div>
    
  )
}

export default Navber