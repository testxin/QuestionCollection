/**
 * Created by xinsw on 2016/1/19.
 *
 * 分页管理器
 *
 */

import React,{Component,PropTypes} from 'react';
import classNames from 'classnames';

export default class Pagination extends Component {

    /**
     * 构造函数
     * @param props
     * @param context
     */
    constructor(props, context) {
        super(props, context)
        this.state = {
            pageNum: this.props.pageNum || 0,
            pageSum: this.props.pageSum || 0
        }
    }


    /**
     * 渲染
     *
     * @returns {XML}
     */
    render() {
        return (
            <div className={classNames('pull-right')}>
                <span className={classNames('mintgreen')}>{this.state.pageNum}</span>/{this.state.pageSum}
            </div>
        )
    }


}