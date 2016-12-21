import React, { Component } from "react";

import styles from "./Chat.css";

export default class ChatForm extends Component {
    _handleSubmit(event) {
        event.preventDefault();
        this.props.submitHandler(this.props.currentMessage);
    }

    render() {
        let formButton = this.props.isSendingMessage ? (
            <button type="submit" className={styles.chatSendMessage} disabled="disabled">
                <div className={styles.chatText}>
                    <i className="fa fa-circle-o-notch fa-spin fa-fw"></i>
                </div>
            </button>
        ) : (
            <button type="submit" className={styles.chatSendMessage}>
                <div className={styles.chatText}>
                    <i className="fa fa-send"></i>
                </div>
            </button>
        );

        return (
            <form onSubmit={this._handleSubmit.bind(this)}>
                <div className={styles.chatMessageInputWrapper}>
                    <input className={styles.chatMessageInput}
                        placeholder="Type your message here..."
                        onChange={this.props.changeHandler}
                        value={this.props.currentMessage} />
                </div>

                {formButton}
            </form>
        );
    }
}