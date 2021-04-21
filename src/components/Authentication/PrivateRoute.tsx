import * as React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import { TStore } from '../../shared/state/store'

const PrivateRoute = ({ ...rest }: RouteProps) => {
  const [isLoggedOut, setIsLoggedOut] = React.useState(false)
  const { email, password } = useSelector(
    (state: TStore) => state.authenticationReducer
  )

  React.useEffect(() => {
    if (email !== 'test@test.com' && password !== 'test') {
      setIsLoggedOut(true)
    }
  }, [email, password])

  return isLoggedOut ? <Redirect to="/auth" /> : <Route {...rest} />
}

export default PrivateRoute
