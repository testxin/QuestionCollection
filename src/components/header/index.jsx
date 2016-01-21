/**
 * Created by xinsw on 2016/1/20.
 * 头部
 */
import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Header extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {}
    }

    render() {
        return (
            <div className={classNames({fixed:true,header:true})}>

            </div>
        )
    }
}