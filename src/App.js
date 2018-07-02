import React, { Component } from 'react'
import './App.css'
import Operator from './component/Operator/Operator'
import Header from './component/Header/Header'
import TodoList from './component/TodoList/TodoList'
import Footer from './component/Footer/Footer'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <TodoList/>
        <Operator/>
        <Footer/>
      </div>
    )
  }
}