/**
 * Created by xinsw on 2016/1/20.
 */

import React,{Component,PropTypes}from 'react';
import ReactDom from 'react-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames';
import Header from '../components/header/index.jsx';
import QuestionTitle from '../components/question/title.jsx';
import {testClick} from '../actions/sortList'


export default class App extends Component {
    render() {
        //const {  actions } = this.props;
        const { testClick } = this.props;

        //const actions = bindActionCreators(TodoActions, dispatch);

        return (
            <div className={classNames('container-full')}>
                <Header />
                <QuestionTitle />
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log('state====' + JSON.stringify(state));
    return {
        testClick: state.testClick
    }
}

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(testClick, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)