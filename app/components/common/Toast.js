import React, { Component } from "react";

import styles from './Common.css';

export default class Toast extends Component {
    render() {
        return (
            <div className={styles.toast}>
                <img src={this.props.iconPath} />
            </div>
        );
    }
}