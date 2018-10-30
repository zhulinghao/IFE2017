import ls from '@/services/LocalStorage'
const todos = (state = ls.Get('todoData') || [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const addTodoResult = [
        { id: action.id, text: action.text, completed: false },
        ...state,
      ]
      ls.Set('todoData', addTodoResult)
      return addTodoResult;
    case 'TOGGLE_TODO':
      const toggleTodoResult = state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
      ls.Set('todoData', toggleTodoResult)
      return toggleTodoResult;
    default:
      return state
  }
}
export default todos