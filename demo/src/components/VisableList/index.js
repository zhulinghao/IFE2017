import React from 'react';
import Todo from './VisableTodo/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './index.less'

const VisableList = ({ todos, toggleTodo }) => (
  <ul className="visable_list">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

VisableList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}


export default connect()(VisableList);
