import React, { Component } from 'react';
import { Checkbox,Button } from 'antd';
import './Todo.css';

export default class Todo extends Component {
  state = {
    editValue: this.props.todo.value,
    isVisible: false,
    isEdit: false,
  }

  handleChange = (e) => {
    this.props.selectTodo(e.target.checked, this.props.todo.id)
  }

  handleClick = (e) => {
    this.props.removeTodo(this.props.todo.id)
  }

  handleInputChange = (e) => {
    this.setState({
      editValue:e.target.value
    })
  }

  handleBlur = (e) => {
    this.setState({
      isEdit:false
    })
    if(!this.state.editValue.trim()){
      this.props.removeTodo(this.props.todo.id)
    }else{
      this.props.changeTodoVal(this.state.editValue, this.props.todo.id)
    }
  }

  handbleKeyDown = (e) => {
    switch(e.key){
      case 'Enter':
        this.setState({
          isEdit:false
        }, () => this.props.changeTodoVal(this.state.editValue, this.props.todo.id))
        break
      case 'Escape':
        this.setState({
          isEdit:false,
          editValue:this.props.todo.value
        })
        break
      default:
        break
    }
  }

  handleDbClick = (e) => {
    this.setState({
      isEdit:true
    },()=>this.inputTodo.focus())
  }

  handleMouseOver = (e) => {
    this.setState({
      isVisible:true
    })
  }

  handleMouseOut = (e) => {
    this.setState({
      isVisible:false
    })
  }

  render() {
    const { isEdit, isVisible, editValue } = this.state
    const { todo } = this.props
    const { id, value, checked } = todo

    return (
      <div
        className="Todo"
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        >
        <input
          className={isEdit ? 'todo_input' : 'todo_input hide'}
          autoFocus
          value={editValue}
          onChange={this.handleInputChange}
          onBlur={this.handleBlur}
          onKeyDown={this.handbleKeyDown}
          ref={input => this.inputTodo = input}
          />
        <div className={isEdit ? 'hide' : ''}>
          <Checkbox
            checked={checked}
            onChange={this.handleChange}
            value={id}
            />
          <label
            className={checked ? 'todo_label todo_checked' : 'todo_label'}
            onDoubleClick = {this.handleDbClick}
            >
            {value}
          </label>
          <Button
            className={isVisible ? 'todo_close' : 'todo_close hide'}
            icon="close"
            shape="circle"
            size="default"
            onClick={this.handleClick}
            />
        </div>
      </div>
    )
  }
}