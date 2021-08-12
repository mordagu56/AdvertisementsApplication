import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from '../containers/Page'
import Login from '../containers/Login'
import Home from '../containers/Home'
import Registration from '../containers/Registration'


class Router extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/page' component={Page} />
        <Route exact path='/registration' component={Registration} />
      </Switch>
    )
  }
}

export default Router;
