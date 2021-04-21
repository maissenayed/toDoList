import * as React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { hardCodedUser } from '../state/slices/authentication.slice'
import { TStore } from '../state/store'

const PublicRoute = ({ ...rest }: RouteProps) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const { email, password } = useSelector(
    (state: TStore) => state.authenticationReducer
  )

  React.useEffect(() => {
    if (email === hardCodedUser.email && password === hardCodedUser.password) {
      setIsLoggedIn(true)
    }
  }, [email, password])
  return isLoggedIn ? <Redirect to="/" /> : <Route {...rest} />
}

export default PublicRoute
