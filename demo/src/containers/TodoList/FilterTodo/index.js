import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter, VisibilityFilters } from '@/actions/todo'
import { Button } from 'antd'
const btnStyle = {
  marginRight: '10px'
}
const filterTodo = ({ dispatch }) => {
  return (
    <div>
      <span>Show: </span>
      <Button style={btnStyle} size="small" onClick={ () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))}>All</Button>
      <Button style={btnStyle} size="small" onClick={ () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))}>Active</Button>
      <Button style={btnStyle} size="small" onClick={ () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))}>Ccompleted</Button>
    </div>
  )
}

export default connect()(filterTodo)
