/**
 * Created by xinsw on 2016/1/21.
 *
 * 入口js
 *
 */

import React from 'react'
import ReactDom,{ render } from 'react-dom'
import { Provider,connect } from 'react-redux'
import App from './containers/App'
import DevTools from './containers/DevTools'
import configureStore from './store/configureStore.dev'
import { getRootSortList } from './actions/sortList'
import {ReduxRouter } from 'redux-router';

const store = configureStore();
//store.dispatch(getRootSortList());


import routes from './routes';

//tyest

ReactDom.render(
    <Provider store={store} key="provider">
        <div>
            <ReduxRouter routes={routes}/>
            <DevTools />
        </div>
    </Provider>
    , document.getElementById('app')
);