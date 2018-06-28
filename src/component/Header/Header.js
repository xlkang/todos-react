import React, { Component } from 'react';
import './Header.css';

class TodoItem {
  constructor(value) {
    let timestamp = new Date().getTime().toString()

    this.id = timestamp
    this.value = value
    this.checked = false
  }
}

export default class Header extends Component {
  state = {
    value:''
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleKeyPress = (e) => {
    let todo = new TodoItem(this.state.value)

    if (e.key === 'Enter') {
      if (this.state.value.trim()) {
        this.props.addTodo(todo)
        this.setState({
          value: ''
        })
      }
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className='main_input'
          value={this.state.value}
          placeholder=' What needs to be done?'
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </header>
    )
  }
}