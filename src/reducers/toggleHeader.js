import { SHOW_LEFT_NAV } from '../constants/ActionTypes'


const initialState = {
    text: '响应操作header',
    open: false,
    id: 0
};


export default function testClick(state = initialState, action) {
    switch (action.type) {
        case SHOW_LEFT_NAV:
            state.open=state.open ? false : true;
            state.text= 'Toggle ... LEFT_NAV';
            return state;
        default:
            return state
    }
}
