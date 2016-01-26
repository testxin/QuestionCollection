import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React,{Component,PropTypes}from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import Header from '../components/header/index.jsx';
import QuestionTitle from '../components/question/title.jsx';
import * as Actions from '../actions/sortList';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleHeader: {
                open: false
            }
        };
    }


    render() {

        const { testClick,toggleLeftNav,toggleHeader} = this.props;

        console.log('toggleHeader=======' + toggleHeader);

        return (
            <div className={classNames('container-full')}>
                <Header clickMenuIcon={toggleLeftNav} title={"题集"}/>
                <QuestionTitle onAddClick={text=>testClick(text)}/>
                <LeftNav open={toggleHeader.open}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </LeftNav>
            </div>
        )
    }
}


App.propTypes = {
    testClick: PropTypes.func.isRequired,
    toggleLeftNav: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        // testClick: state.testClick,
        toggleHeader: state.toggleHeader
    };
}

function mapDispatchToProps(dispatch) {
    console.log('a=======');
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
