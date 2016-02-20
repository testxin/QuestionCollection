/**
 * Created by xinsw on 2016/1/21.
 *
 * 入口js dev会增加日志,devtools方便调试
 *
 */

import React from 'react'
import ReactDom,{ render } from 'react-dom'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router';
import DevTools from './containers/DevTools'
import configureStore from './store/configureStore.dev'
import routes from './routes';

const store = configureStore();

ReactDom.render(
    <Provider store={store} key="provider">
        <div>

            <ReduxRouter routes={routes}/>
            <DevTools />
        </div>
    </Provider>
    , document.getElementById('app')
);