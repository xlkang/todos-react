import { createStore } from 'redux';
import reducer from './reducer';

const filterType = {
  'active': 1,
  'completed': 2,
  'all': 3,
}

const data = JSON.parse(localStorage.getItem('saveState')) || {};

let initValues = {
  pending:true,
  logged:false,
  type: data.type || filterType.all,
  todos: data.todos || [],
};

const store = createStore(reducer, initValues);

export default store;