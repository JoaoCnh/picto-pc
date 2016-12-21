import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import styles from "./Chat.css";

export default class ChatMessage extends Component {
    render() {
        let messageCssClass = this.props.isAuthor ? styles.chatMessageRight : styles.chatMessageLeft;

        return (
            <ReactCSSTransitionGroup transitionName="chatMessage"
                transitionAppear={true}
                transitionAppearTimeout={250}
                transitionEnter={false}
                transitionLeave={false}>
                <li className={messageCssClass}>
                    <div className={styles.chatAvatar}></div>
                    <div className={styles.chatTextWrapper}>
                        <div className={styles.chatText}>
                            <strong>{this.props.message.username} says:</strong>
                            {" "}
                            {this.props.message.content}
                        </div>
                    </div>
                </li>
            </ReactCSSTransitionGroup>
        );
    }
}