/**
 * Created by Administrator on 2016/1/21.
 *
 * 定义root分类和子分类的Action
 *
 */

import * as types from '../constants/ActionTypes'

export function testClick() {
    console.log('testClick======init......');
    return {type: types.CLICK_TITLE}
}

export function requestData() {
    return {type: types.FETCH_POSTS_REQUEST}
}

export function requestSuccess() {
    return {type: types.REQUEST_SUCCESS}
}

export function requestFail() {
    return {type: types.REQUEST_FAIL}
}