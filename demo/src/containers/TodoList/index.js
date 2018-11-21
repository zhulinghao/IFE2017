import React from 'react';
import VisableTodoList from './VisableTodoList/index'
import AddTodo from './AddTodo/index'
import FilterTodo from './FilterTodo/index'
import Post from '@/components/HigherOrder'

import './index.less'

const TodoListRedux = () => (
  <div className="todo_list_wrapper">
    <div className="todo_tit">TodoList</div>
    <AddTodo />
    <VisableTodoList />
    <FilterTodo />
    <Post />
  </div>
)


export default TodoListRedux;
