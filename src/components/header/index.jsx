/**
 * Created by xinsw on 2016/1/20.
 * 头部
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';


export default class Header extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            title: this.props.title || ''
        }
    }

    handleClick(e) {
        this.props.toggleLeftNav(e);
    }

    render() {
        return (
            <AppBar
                title={this.props.title} className='text-center'
                iconElementLeft={<IconButton onTouchTap={(e) => this.handleClick(e)}><MenuIcon  /></IconButton>}
                iconElementRight={
                  <IconMenu
                    iconButtonElement={
                      <IconButton><MoreVertIcon /></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem primaryText="刷新" />
                    <MenuItem primaryText="关于" />
                    <MenuItem primaryText="注销" />
                  </IconMenu>
                }
            />

        )
    }
}

Header.propTypes = {
    toggleLeftNav: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
};