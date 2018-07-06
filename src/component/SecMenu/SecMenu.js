import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './SecMenu.css'
export default class SecMenu extends Component {
  render() {
    return (
      <div className='SecMenu'>
        <ul>
          <li><Link to='/main/other/secMenu1' className='nav_link'>secMenu1</Link></li>
          <li><Link to='/main/other/secMenu2' className='nav_link'>secMenu2</Link></li>
          <li><Link to='/main/other/secMenu3' className='nav_link'>secMenu3</Link></li>
        </ul>
      </div>
    )
  }
}