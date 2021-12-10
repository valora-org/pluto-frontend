/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from 'services/userAuth'
import Header from '../Header'

type PrivateRouteType = {
  component: any
  path: string
  exact?: boolean
}

function PrivateRoute({
  component: Component,
  path = '/',
  exact = false,
  ...rest
}: PrivateRouteType) {
  return (
    <>
      <Header />
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated() ? (
            <Component {...props} path={path} exact={exact} />
          ) : (
            <Redirect
              to={{
                pathname: '/getting-started',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    </>
  )
}

export default PrivateRoute
