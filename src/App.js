import React, { Component } from 'react'
import './App.css'
import Login from './login'
import { Route, Switch } from 'react-router-dom'
import Main from './main'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/main' component={Main} />
          {/* <Redirect to='/login' /> */}
        </Switch>
      </div>
    )
  }
}