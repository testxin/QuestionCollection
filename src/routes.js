/**
 * Created by xinsw on 2016/1/22.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './containers/App';
import SortList from './components/list/sortList.jsx';
import Error404 from './components/list/error-404.jsx';


const routes = (
    <Route component={App} path="/">
        <Route component={SortList} path="/sortlist/:id"/>
        <Route component={SortList} path="/sortlist/test/:id"/>
        <Route component={Error404} path="*"/>
    </Route>
);

export default routes;