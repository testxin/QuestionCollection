/**
 * Created by xinsw on 2016/1/21.
 *
 * 入口js
 *
 */

import React from 'react'
import ReactDom,{ render } from 'react-dom'
import { Provider } from 'react-redux'
import {Router ,browserHistory} from 'react-router';
import DevTools from './containers/DevTools'
import configureStore from './store/configureStore.dev'
import routes from './routes';


console.log()


const store = configureStore();

ReactDom.render(
    <Provider store={store} key="provider">
        <div>
            <Router history={browserHistory} routes={routes}/>
            <DevTools />
        </div>
    </Provider>
    , document.getElementById('app')
);