import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React,{Component,PropTypes}from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router';
import classNames from 'classnames';
import Header from '../components/header/index.jsx';
import QuestionTitle from '../components/question/title.jsx';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import * as SortActions from '../actions/sortList';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyRawTheme from '../components/theme/myTheme.jsx';


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

    getChildContext() {

        return {
            muiTheme: ThemeManager.getMuiTheme(MyRawTheme)
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
        //  console.log('tempProps=============' + JSON.stringify(this.props.location));

    }

    handleClose(e, id) {
        const { dispatch } = this.props;
        dispatch(SortActions.goNewRootSort(id))
    }

    render() {
        const {toggleHeader,sortList,actions} = this.props;
        return (
            <div>
                <Header toggleLeftNav={actions.toggleLeftNav} title={"题集"}/>
                <QuestionTitle />
                <LeftNav  open={toggleHeader.open}>
                    {
                        sortList.rootSortList.data.map(
                            sortObj =>
                                <MenuItem key={sortObj.id}
                                          onTouchTap={(e,id) => this.handleClose(e,sortObj.id)}>{sortObj.name}</MenuItem>
                        )
                    }
                </LeftNav>
                {this.props.children}
            </div>

        )
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired
};


App.childContextTypes = {
    muiTheme: React.PropTypes.object
}


/**
 *
 * 将属性注入到props
 * @param state
 * @returns {{sortList: *, toggleHeader: *,routerState:*}}
 */
function mapStateToProps(state) {
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
