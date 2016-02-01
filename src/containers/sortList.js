import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React,{Component,PropTypes}from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import * as SortActions from '../actions/sortList';
import ListComp from '../components/list/sortList.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class SortList extends Component {

    constructor(props) {

        super(props);
        this.state = {
            toggleHeader: {
                open: false
            }
        };
    }

    /**
     * 在挂载结束之后马上被调用
     */
    componentDidMount() {
        const { dispatch } = this.props;
       // dispatch(SortActions.fetchPostsIfNeeded());

    }

    /**
     * 当一个挂载的组件接收到新的props的时候被调用
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {

    }

    render() {


        console.log('come on SortList render........')

      //  const {toggleHeader,sortList,actions} = this.props;
        return (
           <ListComp />
        )
    }
}

SortList.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        // testClick: state.testClick,
        sortList: state.sortList,
        routerState: state.router

    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(SortActions, dispatch),
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
