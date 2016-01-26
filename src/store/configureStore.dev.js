import { createStore, applyMiddleware, combineReducers,compose} from 'redux'
import { reduxReactRouter} from 'redux-router'
import thunk from 'redux-thunk'
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { default as createHistory } from 'history/lib/createBrowserHistory';
import rootReducer from '../reducers'
import routers from '../routers'
import DevTools from '../containers/DevTools';
import { persistState } from 'redux-devtools';



const logger = createLogger();

const createStoreWithMiddleware = compose(
    applyMiddleware(
        //  promiseMiddleware,
        thunk,
        logger,
        promise
//   apiMiddleware,
        // loggerMiddleware
    ),
    reduxReactRouter({
        routers,
        createHistory
    }),
    DevTools.instrument(),
    persistState(getDebugSessionKey())
//, devTools()
)
(createStore);


function getDebugSessionKey() {
    // You can write custom logic here!
    // By default we try to read the key from ?debug_session=<key> in the address bar
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    return (matches && matches.length > 0)? matches[1] : null;
}

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

