import { FETCH_POSTS_REQUEST,REQUEST_SUCCESS,REQUEST_FAIL,REQUEST_SORTBYID_SUCCESS } from '../constants/ActionTypes'


const initialState = {
    text: '操作分类列表',
    isFetching: false,
    id: 0,
    rootSortList: {
        errorCode: 0,
        errorMessage: "",
        data: []
    },
    chooseSortObj:{

    }
};


export default function testClick(state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return Object.assign({}, state, {text: '发送请求', isFetching: true});
        case REQUEST_SUCCESS:
            return Object.assign({}, state, {text: '请求数据成功', rootSortList: action.rootSortList});
        case REQUEST_SORTBYID_SUCCESS:
            return Object.assign({}, state, {text: '请求数据成功', chooseSortObj: action.sortObj})
        case REQUEST_FAIL:
            return Object.assign({}, state, {text: '请求数据失败', rootSortList: []});
        default:
            return state
    }
}
