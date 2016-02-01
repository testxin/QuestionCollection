import { combineReducers } from 'redux';
import sortList from './sortList';
import toggleHeader from './toggleHeader';
import {routerStateReducer} from 'redux-router';


const rootReducer = combineReducers({
    sortList,
    toggleHeader,
    router: routerStateReducer
});

export default rootReducer;
