import React from 'react'
import './App.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './component/Home/Home'
import Todos from './component/Todos/Todos'
import Nav from './component/Nav/Nav'
import Other from './component/Other/Other'

const Main = ({ match }) => {
  console.log(match)
  return (
    <div className='main'>
      <Nav />
      <Switch>
        <Route exact path={`${match.path}/home`} component={Home} />
        <Route path={`${match.path}/todos`} component={Todos} />
        <Route path={`${match.path}/other`} component={Other} />
        {/* <Route path='/NotFound' component={NotFound} /> */}
        <Redirect to={`${match.path}/home`}/>
      </Switch>
    </div>
  )
}

export default Main