import React, { Component } from 'react';
import { Button, Input, Popconfirm } from 'antd';
import uuidv1 from 'uuid/v1';
import ls from '@/services/LocalStorage';  // localstorage 封装
import './index.css';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todoVal: '',
      list: []
    }
  }
  componentWillMount() {
    const getList = ls.Get('todos');
    this.setState({
      list: getList || []
    })
  }
  componentDidUpdate() {
    const { list } = this.state;
    ls.Set('todos', list);
  }
  
  handleEnter = () => {
    const ramdomId = uuidv1();    //根据时间戳生成唯一字符串
    this.setState({
      list: [ { id: ramdomId, content: this.state.todoVal, done: false }, ...this.state.list],
      todoVal: ''
    })
  }
  changeTodoVal = (e) => {
    this.setState({
      todoVal: e.target.value
    })
  }
  handleDone = (id) => {
    const { list } = this.state;
    const result = list.filter(item => {
      if (item.id !== id) return item;
      item.done ? item.done = false : item.done = true;
      return item;
    });
    this.setState({
      list: result
    })
  }
  handleDelete = (id) => {
    const { list } = this.state;
    const result = list.filter(item => item.id !== id);
    this.setState({
      list: result
    })
  }
  emptyTodo = () => {
    this.setState({
      list: []
    })
  }
  render() {
    const { list, todoVal } = this.state;
    return (
      <div className="container">
        <h1>todolist</h1>
        <div className="content">
          {list.map((item) => (
            <div className={item.done ? 'done item' : 'item'} key={item.id}>
              {item.content}
              <Button 
                size="small" 
                onClick={this.handleDone.bind(this, item.id)} 
                style={{marginRight: '20px',marginLeft: '20px'}} 
                type="primary">
                {item.done ? '取消' : '完成'}
              </Button>
              <Popconfirm title="Delete?" onConfirm={this.handleDelete.bind(this, item.id)}>
                <Button size="small" type="danger">删除</Button>
              </Popconfirm>
            </div>
          ))}
        </div>
        <div className="foot">
          <Input placeholder="输入todo(Enter输入)" value={todoVal} onChange={this.changeTodoVal} onPressEnter={this.handleEnter} />
        </div>
        <Popconfirm title="清空?" onConfirm={this.emptyTodo}>
          <Button size="small" type="danger">清空todo</Button>
        </Popconfirm>
      </div>
    );
  }
}
export default TodoList;

