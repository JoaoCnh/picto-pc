import React, { Component } from "react";

import ChatMessageList from "./ChatMessageList";
import ChatForm from "./ChatForm";

import styles from "./Chat.css";

export default class Chat extends Component {
    _onMessageChange(event) {
        this.props.updateMessage(event.target.value);
    }

    _sendMessage() {

    }

    render() {
        return (
            <div className={styles.chatWindow}>
                <ChatMessageList messages={this.props.messages}
                    currentUser={this.props.currentUser} />

                <div className={styles.chatBottomWrapper}>
                    <ChatForm currentMessage={this.props.currentMessage}
                        isSendingMessage={this.props.isSendingMessage}
                        error={this.props.error}
                        changeHandler={this._onMessageChange.bind(this)}
                        submitHandler={this._sendMessage.bind(this)} />
                </div>
            </div>
        );
    }
}