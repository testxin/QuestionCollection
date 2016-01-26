import { combineReducers } from 'redux';
import testClick from './testClick';
import toggleHeader from './toggleHeader';

const rootReducer = combineReducers({
  testClick,
  toggleHeader
});

export default rootReducer;
