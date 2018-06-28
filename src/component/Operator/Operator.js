import React, { Component } from 'react';
import { Radio,Button } from 'antd';
import './Operator.css';

const filterType =  {'active':1,'completed':2,'all':3}
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

class Operator extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  handleChangeType = (e) => {
    this.props.onFilter(e.target.value);
  }

  handleClearCompleted = (e) => {
    this.props.onClearCompleted();
  }

  render() {
    const { type,todos } = this.props;
    const allNum = todos.length;
    const activeNum = todos.filter(todo => todo.checked === false).length;
    const completedNum = allNum - activeNum;

    return (
      <div
        className={allNum ? 'operator' : 'operator hide'}
      >
        <span className='mr_80'>{activeNum > 1 ? `${activeNum} items left` : `${activeNum} item left`}</span>
        <RadioGroup className='mr_80' onChange={this.handleChangeType} defaultValue={type ? type : filterType.all} size='small'>
          <RadioButton value={filterType.all}>All</RadioButton>
          <RadioButton value={filterType.active}>Active</RadioButton>
          <RadioButton value={filterType.completed}>Completed</RadioButton>
        </RadioGroup>
        <Button className={completedNum ? '' : 'hide'} size='small' onClick={this.handleClearCompleted}>Clear completed</Button>
      </div>
    )
  }
}

export default Operator;
