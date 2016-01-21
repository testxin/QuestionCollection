/**
 * Created by xinsw on 2016/1/20.
 */

import React,{Component,PropTypes}from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import Header from '../components/header/index.jsx';
import QuestionTitle from '../components/question/title.jsx';


export default class App extends Component {
    render() {
        //const { todos, actions } = this.props
        return (
            <div className={classNames('container-full')}>
                <Header />
                <QuestionTitle />
            </div>
        )
    }
}