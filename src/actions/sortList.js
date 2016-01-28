/**
 * Created by Administrator on 2016/1/21.
 *
 * 定义root分类和子分类的Action
 *
 */
import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
import  promise from 'es6-promise';
import configureStore from '../store/configureStore'
const store = configureStore();

promise.polyfill();

export function toggleLeftNav() {
    return {type: types.SHOW_LEFT_NAV}
}

export function getRootSortList() {
    console.log('getRootSortList======init......');
    return fetch('../api/rootSortList.json')
        .then(function (response) {
            if (response.status >= 400) {
                store.dispatch(requestFail(json));
               // throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(json => store.dispatch(requestSuccess(json)));
}


export function requestSuccess(data) {
    return {
        type: types.REQUEST_SUCCESS,
        data
    }
}

export function requestFail() {
    return {type: types.REQUEST_FAIL}
}