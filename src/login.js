import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
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

class LoginPage extends Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render(){
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return (
        <Redirect to='/main' />
      )
    }
    return (
      <div className='login'>
        <h2>Login Page</h2>
        <input
          className='login-input'
          placeholder='username'
          />
        <input
          className='login-input'
          placeholder='password'
          />
        <button onClick={ this.login }>Log in</button>
      </div>
    )
  }
}

export default LoginPage