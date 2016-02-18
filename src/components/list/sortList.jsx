/**
 * Created by xinsw on 2016/1/29.
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts';
import ContentSend from 'material-ui/lib/svg-icons/content/send';

export default class SortList extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {}
    }

    render() {
        return (
            <List subheader="Nested List Items">
                <ListItem primaryText="Sent mail" leftIcon={<ContentSend />}/>
                <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />}/>
                <ListItem
                    primaryText="Inbox"
                    leftIcon={<ContentInbox />}
                    initiallyOpen={true}
                    primaryTogglesNestedList={true}
                    nestedItems={[
                          <ListItem
                            key={1}
                            primaryText="Starred"
                            leftIcon={<ActionGrade />}
                          />,
                          <ListItem
                            key={2}
                            primaryText="Sent Mail"
                            leftIcon={<ContentSend />}
                            nestedItems={[
                              <ListItem key={1} primaryText="Drafts" leftIcon={<ContentDrafts />} />,
                            ]}
                        />,
                        ]}
                />
            </List>
        )
    }
}

SortList.propTypes = {};
