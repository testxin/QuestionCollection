/**
 * Created by Administrator on 2016/1/21.
 *
 * 定义root分类和子分类的Action
 *
 */
import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';
import  promise from 'es6-promise';
import { pushState } from 'redux-router';


promise.polyfill();


/**
 * 点击左边隐藏菜单
 * @returns {{type}}
 */
export function toggleLeftNav() {
    return {type: types.SHOW_LEFT_NAV}
}


/***
 * 判断是否需要加载数据的函数,暂时直接返回true
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


/**
 * 获取所有子分类的数据列表
 * @returns {Function}
 */
export function getRootSortList() {

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


/**
 * 根据ID获取分类数据
 * @param _id
 * @returns {Function}
 */
export function showSortById(_id) {
    return dispatch => {
        dispatch(requestPosts());
        return fetch('../api/rootSortList.json?' + _id)
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
            .then(json => {
                dispatch(requestSortByIdSuccess(json));
                dispatch(pushState(null, '/sortlist/' + _id, ''))

            });
    };
}

/**
 * 跳转到新的root分类
 * @param _id
 * @returns {Function}
 */
export function goNewRootSort(_id) {
    return dispatch => {
        dispatch(showSortById(_id));
        dispatch(hideLeftNav());
    }
}

/**
 * 隐藏左边导航栏
 * @returns {{type}}
 */
export function hideLeftNav() {
    return {
        type: types.HIDE_LEFT_NAV
    }
}


/**
 * 请求数据状态
 * @returns {{type}}
 */
function requestPosts() {
    return {
        type: types.FETCH_POSTS_REQUEST
    };
}


/**
 * 请求数据成功
 * @param rootSortList
 * @returns {{type, rootSortList: *}}
 */
export function requestSuccess(rootSortList) {
    return {
        type: types.REQUEST_SUCCESS,
        rootSortList
    }
}


/**
 * 根据ID请求数据分类成功
 *
 * @param sortObj
 * @returns {{type, sortObj: *}}
 */
export function requestSortByIdSuccess(sortObj) {
    return {
        type: types.REQUEST_SORTBYID_SUCCESS,
        sortObj
    }
}

/**
 * 请求失败
 * @returns {{type}}
 */
export function requestFail() {
    return {type: types.REQUEST_FAIL}
}