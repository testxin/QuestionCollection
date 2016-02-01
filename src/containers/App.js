import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React,{Component,PropTypes}from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import Header from '../components/header/index.jsx';
import QuestionTitle from '../components/question/title.jsx';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import * as SortActions from '../actions/sortList';

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

    /**
     * 在挂载结束之后马上被调用
     */
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(SortActions.fetchPostsIfNeeded());

    }

    /**
     * 当一个挂载的组件接收到新的props的时候被调用
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {

    }

    render() {
        const {toggleHeader,sortList,actions} = this.props;
        return (
            <div className={classNames('container-full')}>
                <Header toggleLeftNav={actions.toggleLeftNav} title={"题集"}/>
                <QuestionTitle />
                <LeftNav open={toggleHeader.open}>
                    {
                        sortList.rootSortList.data.map(
                            sortObj =>
                                <MenuItem primaryText={sortObj.name} />
                        )
                    }
                </LeftNav>
            </div>
        )
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {

    console.log('state.router======='+JSON.stringify(state))

    return {
        // testClick: state.testClick,
        sortList: state.sortList,
        toggleHeader: state.toggleHeader,
        routerState: state.router
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(SortActions, dispatch),
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
