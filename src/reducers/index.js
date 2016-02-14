import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import sortList from './sortList';
import toggleHeader from './toggleHeader';


const rootReducer = combineReducers({
    sortList,
    router: routerStateReducer,
    toggleHeader
});

export default rootReducer;
