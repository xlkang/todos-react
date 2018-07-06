import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './Other.css'
import SecMenu from '../SecMenu/SecMenu'
export default class Other extends Component {
  render() {
    const Sec = ({ match }) => (
      <div className=''>
        <h2>{match.params.secMenu}</h2>
      </div>
    )
    return (
      <div className='Other'>
        <SecMenu/>
        <Switch>
          <Route path={`${this.props.match.path}/:secMenu`} component={Sec} />
          <Redirect to={`${this.props.match.path}/secMenu1`}/>
        </Switch>
      </div>
    )
  }
}