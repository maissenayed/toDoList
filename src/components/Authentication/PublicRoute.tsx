import * as React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, RouteProps } from 'react-router-dom'

import { TStore } from '../../shared/state/store'

const PublicRoute = ({ ...rest }: any) => {
  const [isLoggedIn, setisLoggedIn] = React.useState(false)
  const { email, password } = useSelector(
    (state: TStore) => state.authenticationReducer
  )

  React.useEffect(() => {
    if (email === 'test@test.com' && password === 'test') {
      setisLoggedIn(true)
    }
  }, [email, password])
  return isLoggedIn ? <Redirect to="/" /> : <Route {...rest} />
}

export default PublicRoute
