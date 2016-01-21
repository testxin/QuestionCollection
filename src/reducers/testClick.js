import { CLICK_TITLE, FETCH_POSTS_REQUEST, FETCH_GET_REQUEST,REQUEST_SUCCESS,REQUEST_FAIL} from '../constants/ActionTypes'


const initialState = [
    {
        text: 'Use Redux 我感觉不爽啊',
        completed: false,
        id: 0
    }
]

export default function todos(state = initialState, action) {
    switch (action.type) {
        case CLICK_TITLE:
            console.log('所以会出到这里来...........')
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                },
                ...state
            ]

        default:
            return state
    }
}