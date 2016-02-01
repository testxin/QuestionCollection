import { createStore, applyMiddleware, combineReducers,compose} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { createHistory } from 'history';
import rootReducer from '../reducers'
import routes from '../routes'
import DevTools from '../containers/DevTools';
import { persistState } from 'redux-devtools';

import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';


const logger = createLogger();

const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunk,
        logger,
        promise
    ),
    reduxReactRouter({
        routes,
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
    return (matches && matches.length > 0) ? matches[1] : null;
}

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

