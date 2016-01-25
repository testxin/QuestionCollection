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
import configureStore from './store/configureStore'

const store = configureStore();

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);