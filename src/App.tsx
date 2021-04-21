import './App.less'

import React from 'react'
import { Switch } from 'react-router-dom'

import Authentication from './components/Authentication/Authentication'
import PrivateRoute from './components/Authentication/PrivateRoute'
import PublicRoute from './components/Authentication/PublicRoute'
import AppLayout from './shared/layout/Layout'

const App = () => {
  return (
    <Switch>
      <PublicRoute path="/auth" component={Authentication} />
      <PrivateRoute component={AppLayout} />
    </Switch>
  )
}

export default App
