import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import website from './website';

export default combineReducers({
  todos,
  visibilityFilter,
  website
})
