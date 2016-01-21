/**
 * Created by xinsw on 2016/1/19.
 *
 * 题目问题标题
 *
 */
import React, { Component, PropTypes } from 'react';
import Pagination from '../pagination.jsx';
import classNames from 'classnames';

export default class questionTitle extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            title: this.props.title || '未填写的标题'
        }
    }

    render() {
        return (
            <div className={classNames('question_title')}>
                <strong>{this.state.title}</strong><Pagination  />
            </div>
        )
    }

}