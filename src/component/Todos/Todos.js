import React, { Component } from 'react'
import './Todos.css'
import Operator from '../Operator/Operator'
import Header from '../Header/Header'
import TodoList from '../TodoList/TodoList'
import Footer from '../Footer/Footer'

export default class Todos extends Component {
  render() {
    return (
      <div className='Todos'>
        <Header/>
        <TodoList/>
        <Operator/>
        <Footer/>
      </div>
    )
  }
}