import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { loadUser } from '../redux/auth/authActions'
import { useSelector, useDispatch } from 'react-redux'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(loadUser())
  }, []) 

  return (
    <Route {...rest} render={
      (props) => {
        if (auth.isAuthenticated) {
          return <Component {...props} />
        }
        else if (auth.loading) {
        //   return (<div class="spinner-border text-primary" role="status">
        //     <span class="sr-only">Loading...</span>
        //   </div>)
        return(<h3>Loadin...</h3>)
        }
        else if (!auth.isAuthenticated && !auth.token) {
          return <Redirect to={
            {
              pathname: '/login',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}


export default ProtectedRoute;