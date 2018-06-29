import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducer'

const filterType = {
  'active': 1,
  'completed': 2,
  'all': 3,
}

const data = JSON.parse(localStorage.getItem('saveState')) || {}

let initValues = {
  type: data.type || filterType.all,
  todos: data.todos || [],
}

const store = createStore(reducer, initValues)

store.subscribe(()=>localStorage.setItem('saveState', JSON.stringify(store.getState())))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'))
registerServiceWorker()
