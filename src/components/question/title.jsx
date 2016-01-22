/**
 * Created by xinsw on 2016/1/19.
 *
 * 题目问题标题
 *
 */
import React, { Component, PropTypes } from 'react';
import Pagination from '../pagination.jsx';
import classNames from 'classnames';


class QuestionTitle extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            title: this.props.title || '未填写的标题'
        }
    }

    handleClick(e) {
        console.log('handleClick...........');
        this.props.onSave('handleClick')
        // this.setState({ clicked: 'true' })
    }

    render() {
        return (
            <div onClick={this.handleClick.bind(this)} className={classNames('question_title')}>
                <strong>{this.state.title}</strong><Pagination  />
            </div>
        )
    }



}

QuestionTitle.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}

export default QuestionTitle