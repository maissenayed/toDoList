import * as React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { hardCodedUser } from '../state/slices/authentication.slice'
import { TStore } from '../state/store'

const PrivateRoute = ({ ...rest }: RouteProps) => {
  const [isLoggedOut, setIsLoggedOut] = React.useState(false)
  const { email, password } = useSelector(
    (state: TStore) => state.authenticationReducer
  )

  React.useEffect(() => {
    if (email !== hardCodedUser.email && password !== hardCodedUser.password) {
      setIsLoggedOut(true)
    }
  }, [email, password])

  return isLoggedOut ? <Redirect to="/auth" /> : <Route {...rest} />
}

export default PrivateRoute
