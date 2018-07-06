import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { Redirect } from 'react-router-dom'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

export default class Nav extends Component {
  state = {
    redirectToReferrer: false
  }

  logout = () => {
    fakeAuth.signout(() => {
      this.setState({ redirectToReferrer: true })
    })
  }
  render() {
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <div className='Nav'>
        <Link to='/main/home' className='nav_link'><span className='nav_bar'>Home</span></Link>
        <Link to='/main/todos' className='nav_link'><span className='nav_bar'>Todos</span></Link>
        <Link to='/main/other' className='nav_link'><span className='nav_bar'>Other</span></Link>
        <button onClick={this.logout}>Log out</button>
      </div>
    )
  }
}