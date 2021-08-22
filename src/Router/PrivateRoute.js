import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute =({component:Component, ...rest})=>{
    const login = useSelector((state)=>state.token.isAuthenticated)
    console.log(login)
    return(
        <div>
            <Route 
            {...rest} render={(props) =>
            login===true? <Component {...props}/> : <Redirect to='/'/> }
            />
        </div>
    )
}
        
  export default PrivateRoute;