/**
 * Created by xinsw on 2016/1/21.
 *
 * 入口js
 *
 */

import React from 'react'
import ReactDom,{ render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router';
import DevTools from './containers/DevTools'
import configureStore from './store/configureStore'
import routes from './routes';

const store = configureStore();

ReactDom.render(
    <Provider store={store} key="provider">
        <div>
            <ReduxRouter routes={routes}/>
        </div>
    </Provider>
    , document.getElementById('app')
);