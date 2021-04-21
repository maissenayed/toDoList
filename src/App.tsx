import './App.less'

import React from 'react'
import { Switch } from 'react-router-dom'

import Authentication from './components/Authentication/Authentication'
import PrivateRoute from './shared/widgets/PrivateRoute'
import PublicRoute from './shared/widgets/PublicRoute'
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
