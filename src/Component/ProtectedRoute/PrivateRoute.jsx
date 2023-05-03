import React, { useContext } from 'react'
import {AuthContext} from '../ContextProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
       return <div className='d-flex justify-content-center mt-4 w-100'>
        <Spinner animation="border" variant="primary" />
     </div> 
    }

    if(!user){
        return <Navigate state={{from: location}} to="/login" replace/>
    }

    return children;
}

export default PrivateRoute