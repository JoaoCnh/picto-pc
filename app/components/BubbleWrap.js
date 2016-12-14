import React, { Component } from 'react';

import styles from './Home.css';

import AuthBubbles from './auth/AuthBubbles';

export default class BubbleWrap extends Component {
    _logout() {
        this.props.logout();
        return this.props.push("/auth/login");
    }

    render() {
        return (
            <div className={styles.bubbleWrapper}>
                {this.props.children}

                <AuthBubbles />
            </div>
        );
    }
}