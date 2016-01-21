/**
 * Created by xinsw on 2016/1/20.
 */

import React from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import Header from '../components/header/index.jsx';
import QuestionTitle from '../components/question/title.jsx';


ReactDom.render(<div className={classNames('container-full')}>
    <Header />
    <QuestionTitle />
</div>, document.getElementById('app'));
