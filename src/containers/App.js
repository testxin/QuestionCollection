import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React,{Component,PropTypes}from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import Header from '../components/header/index.jsx';
import QuestionTitle from '../components/question/title.jsx';
import * as Actions from '../actions/sortList';


export default class App extends Component {
    render() {
        const { testClick } = this.props;
        console.log('testClick=='+testClick)
        return (
            <div className={classNames('container-full')}>
                <Header />
                <QuestionTitle onAddClick={text=>testClick(text)} />
            </div>
        )
    }
}



App.propTypes = {
    testClick: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        testClick: state.testClick
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
