import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='info'>
          <p>Double-click to edit a todo</p><p>Created by <a href="http://github.com/petehunt/">petehunt</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </div>
    )
  }
}