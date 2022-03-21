import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Route, Navigate } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    const auth = useSelector(state => state.auth);
    const {loading, isAuthenticated } = auth;

  return (
    <Route
        {...rest}
        render={props =>
            !isAuthenticated && !loading ? (
                <Navigate to="/login"/>
            ) : (
                <Component {...props}/>
            )
        }
    />
  )
}

export default PrivateRoute