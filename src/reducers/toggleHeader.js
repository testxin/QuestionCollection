import { SHOW_LEFT_NAV ,HIDE_LEFT_NAV} from '../constants/ActionTypes'


const initialState = {
    text: '响应操作header',
    open: false,
    id: 0
};


export default function testClick(state = initialState, action) {
    switch (action.type) {
        case SHOW_LEFT_NAV:
            return Object.assign({}, state, {open: !state.open});
        case HIDE_LEFT_NAV:
            return Object.assign({}, state, {open: false});
        default:
            return state
    }
}
