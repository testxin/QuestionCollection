/**
 * Created by xinsw on 2016/1/21.
 *
 * 入口js
 *
 */

import React from 'react'
import ReactDom,{ render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import DevTools from './containers/DevTools'
import configureStore from './store/configureStore.dev'
import { getRootSortList } from './actions/sortList'

const store = configureStore();
//store.dispatch(getRootSortList());
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';


import routes from './routes';

ReactDom.render(
    <Provider store={store}>
        <div>
            <ReduxRouter routes={routes} />
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('app')
);