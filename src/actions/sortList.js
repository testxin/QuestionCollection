/**
 * Created by Administrator on 2016/1/21.
 *
 * 定义root分类和子分类的Action
 *
 */
import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
import  promise from 'es6-promise';
promise.polyfill();

export function toggleLeftNav() {
    return {type: types.SHOW_LEFT_NAV}
}


/***
 *
 * @param state
 */
function shouldFetchPosts(state) {

    return true;
}


/**
 *
 * 判断是否需要加载数据
 *
 * @returns {Function}
 */
export function fetchPostsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState())) {
            return dispatch(getRootSortList());
        }
    };
}

export function getRootSortList() {
    /*return fetch('../api/rootSortList.json')
     .then(function (response) {
     if (response.status >= 400) {
     store.dispatch(requestFail(json));
     // throw new Error("Bad response from server");
     }
     return response.json();
     })
     .then(json => store.dispatch(requestSuccess(json)));
     */
    return dispatch => {
        dispatch(requestPosts());
        return fetch('../api/rootSortList.json')
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    dispatch(requestFail());
                    var error = new Error(response.statusText)
                    error.response = response
                    throw error
                }
            })
            .then(json => dispatch(requestSuccess(json)));
    };
}


function requestPosts() {
    return {
        type: types.FETCH_POSTS_REQUEST
    };
}

export function requestSuccess(rootSortList) {
    return {
        type: types.REQUEST_SUCCESS,
        rootSortList
    }
}

export function requestFail() {
    return {type: types.REQUEST_FAIL}
}