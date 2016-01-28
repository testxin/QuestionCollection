import { combineReducers } from 'redux';
import sortList from './sortList';
import toggleHeader from './toggleHeader';

const rootReducer = combineReducers({
  sortList,
  toggleHeader
});

export default rootReducer;
