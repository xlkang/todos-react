import React, { Component } from 'react';
import { Checkbox} from 'antd';
import './TodoList.css';
import Todo from '../Todo/Todo'
import * as Actions from '../../redux/action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const filterType = {
  'active': 1,
  'completed': 2,
  'all': 3
}

class TodoList extends Component {
  handleCheckAll = (e) => {
    this.props.actions.checkAll(e.target.checked)
  }

  render() {
    const { type,todos } = this.props
    let renderData = []

    switch (type) {
      case filterType.active:
        renderData = todos.filter((todo) => { return !todo.checked })
        break
      case filterType.completed:
        renderData = todos.filter((todo) => { return todo.checked })
        break
      case filterType.all:
        renderData = todos
        break
      default:
        renderData = todos
        break
    }

    return (
      <div className="TodoList">
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

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer