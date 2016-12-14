import React, { Component } from 'react';

import Bubbles from './Bubbles';

import styles from './Common.css';

export default class BubbleWrap extends Component {
    render() {
        return (
            <div className={styles.bubbleWrapper}>
                {this.props.children}
                <Bubbles />
            </div>
        );
    }
}