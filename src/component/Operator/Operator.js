import React, { Component } from 'react';
import { Radio,Button } from 'antd';
import './Operator.css';
import * as Actions from '../../redux/action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const filterType =  {
  'active':1,
  'completed':2,
  'all':3
}
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

class Operator extends Component {
  render() {
    const { type, todos, actions } = this.props
    const allNum = todos.length
    const activeNum = todos.filter(todo => !todo.checked).length
    const completedNum = allNum - activeNum
    return (
      <div
        className={allNum ? 'Operator' : 'Operator hide'}
      >
        <span className='mr_80'>{activeNum > 1 ? `${activeNum} items left` : `${activeNum} item left`}</span>
        <RadioGroup
          className='mr_80'
          onChange={(e) => actions.filter(e.target.value)}
          defaultValue={type ? type : filterType.all}
          size='small'>
          <RadioButton value={filterType.all}>All</RadioButton>
          <RadioButton value={filterType.active}>Active</RadioButton>
          <RadioButton value={filterType.completed}>Completed</RadioButton>
        </RadioGroup>
        <Button
          className={completedNum ? '' : 'hide'}
          size='small'
          onClick={actions.clearCompleted}>
          Clear completed
        </Button>
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

const OperatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Operator)

export default OperatorContainer