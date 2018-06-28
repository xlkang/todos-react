import React, { Component } from 'react'
import { Checkbox } from 'antd'
import './App.css'
import Todo from './component/Todo/Todo'
import Operator from './component/Operator/Operator'
import Header from './component/Header/Header'
import * as Actions from './redux/action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const filterType = {
  'active': 1,
  'completed': 2,
  'all': 3,
}

class App extends Component {
  //全选
  handleCheckAll=(e)=>{
    this.props.actions.checkAll(e.target.checked)
  }

  renderTodoList =()=> {
    const { type, todos } = this.props
    let renderData = []

    switch (type) {
      case filterType.active:
        renderData = todos.filter((todo) => {return !todo.checked})
        break
      case filterType.completed:
        renderData = todos.filter((todo) => {return todo.checked})
        break
      case filterType.all:
        renderData = todos
        break
      default:
        renderData = todos
        break
    }

    return (
      <div className="todo_list">
        <Checkbox
          className={todos.length ? 'toggle_all' : 'toggle_all hide'}
          checked={!todos.some(todo => !todo.checked)}
          onChange={this.handleCheckAll}
          />
        {
          renderData.map(todo => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                {...this.props.actions}
                />
            )
          })
        }
      </div>
    )
  }

  render() {
    const { type,todos } = this.props
    return (
      <div className='App'>
        <Header
          {...this.props.actions}
          />
        <div className='content'>
          {this.renderTodoList()}
          <Operator
            type={type}
            todos={todos}
            {...this.props.actions}
            />
        </div>
        <footer className='info'>
          <p>Double-click to edit a todo</p><p>Created by <a href="http://github.com/petehunt/">petehunt</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.type,
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
