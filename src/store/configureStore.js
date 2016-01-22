import { createStore, applyMiddleware, combineReducers,compose} from 'redux'
import { reduxReactRouter} from 'redux-router'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import { default as createHistory } from 'history/lib/createBrowserHistory';
import rootReducer from '../reducers'
import routers from '../routers'


const createStoreWithMiddleware = compose(
    applyMiddleware(
        //  promiseMiddleware,
        thunkMiddleware,
//   apiMiddleware,
        loggerMiddleware
    ),
    reduxReactRouter({
        routers,
        createHistory
    })
//, devTools()
)
(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    console.log('store0=====' + JSON.stringify(store));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

