import React, { Component } from 'react';
import { Checkbox } from 'antd';
import './App.css';
import Todo from './component/Todo/Todo';
import Operator from './component/Operator/Operator';
import store from './redux/store';
import * as Actions from './redux/action';

const filterType = {
  'active': 1,
  'completed': 2,
  'all': 3,
}

class TodoItem {
  constructor(value) {
    let timestamp = new Date().getTime().toString();

    this.id = timestamp;
    this.value = value;
    this.checked = false;
  }
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      type: store.getState().type,
      todos: store.getState().todos,
    }
  }

  componentDidMount = () => {
    store.subscribe(this.saveState);
  }

  saveState = () => {
    const newState = store.getState()
    this.setState(newState)
    localStorage.setItem('saveState', JSON.stringify(newState))
  }

  handleInputTodos = (e) => {
    this.setState({
      inputVal: e.target.value
    });
  }



  //全选
  handleCheckAll=(e)=>{
    store.dispatch(Actions.checkAll(e.target.checked));
  }

  //Operator操作
  handleClearCompleted = () => {
    store.dispatch(Actions.clearCompleted());
  }

  handleFilter = (type) => {
    store.dispatch(Actions.filter(type));
  }

  //Todo操作
  handleChangeTodoVal = (val, id) => {
    store.dispatch(Actions.changeTodoVal(val,id));
  }

  handleRemove = (id) => {
    store.dispatch(Actions.removeTodo(id));
  }

  handleSelect = (checked, id) => {
    store.dispatch(Actions.selectTodo(checked, id));
  }

  //输入框回车事件监听
  handleKeyPress = (e) => {
    let todo = new TodoItem(this.state.inputVal);

    if(e.key === 'Enter'){
      if(this.state.inputVal.trim()){
        store.dispatch(Actions.addTodo(todo));
      }
    }
  }

  renderTodoList =()=> {
    const { type, todos } = this.state;
    let renderData = [];

    switch (type) {
      case filterType.active:
        renderData = todos.filter((todo) => {return !todo.checked});
        break;
      case filterType.completed:
        renderData = todos.filter((todo) => {return todo.checked});
        break;
      case filterType.all:
        renderData = todos;
        break;
      default:
        renderData = todos;
        break;
    }

    return (
      <div className="todo_list">
        <Checkbox
          className={todos.length ? 'toggle_all' : 'toggle_all hide'}
          checked={!this.state.todos.some(todo => !todo.checked)}
          onChange={this.handleCheckAll}
          />
        {
          renderData.map(todo => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                onSelect={ checked => this.handleSelect(checked, todo.id)}
                onRemove={() => this.handleRemove(todo.id)}
                onChangeVal={val => this.handleChangeTodoVal(val, todo.id)}
                />
            )
          })
        }
      </div>
    )
  }

  render() {
    const { inputVal, type, todos } = this.state;

    return (
      <div className='App'>
        <h1>todos</h1>
        <div className='content'>
          <input
            className='main_input'
            value={inputVal}
            placeholder=' What needs to be done?'
            onChange={this.handleInputTodos}
            onKeyPress={this.handleKeyPress}
            />
          {this.renderTodoList()}
          <Operator
            type={type}
            todos={todos}
            onClearCompleted={this.handleClearCompleted}
            onFilter={this.handleFilter}
            />
        </div>
        <footer className='info'>
          <p>Double-click to edit a todo</p><p>Created by <a href="http://github.com/petehunt/">petehunt</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
