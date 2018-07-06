import * as actionType from './actionType';

const todo =  (state, action) => {
  switch(action.type) {
    case actionType.ADD_TODO:
      return Object.assign({}, state, {
        todos: state.todos.concat(action.todo),
        inputVal:''
      })
    case actionType.CHECK_ALL:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          todo.checked = action.checked
          return todo
        }),
      })
    case actionType.CLEAR_COMPLETED:
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => !todo.checked),
      })
    case actionType.FILTER:
        return Object.assign({}, state, {
          type: action.filterType,
        })
    case actionType.CHANGE_TODO_VAL:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if(todo.id === action.id) todo.value = action.value;
          return todo
        }),
      })
    case actionType.REMOVE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.id),
      })
    case actionType.SELECT_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if(todo.id === action.id){
            todo.checked = action.checked;
          }
          return todo
        }),
      })
    case actionType.SET_LOGGED_USER:
      return Object.assign({}, state, {
        pending: false,
        logged: action.logged
      })
    case actionType.GET_LOGGED_USER:
      return Object.assign({}, state, {
        pending: false
      })
    default:
      return state
  }
}

export default todo