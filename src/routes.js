/**
 * Created by xinsw on 2016/1/22.
 */
import React from 'react';
import { Router, Route } from 'react-router';
import App from './containers/App';
import SortList from './containers/SortList';


const routes = (
    <Route path="/" component={App}>
        <Route path="sortlist" component={SortList}>

        </Route>
    </Route>

);

export default routes;