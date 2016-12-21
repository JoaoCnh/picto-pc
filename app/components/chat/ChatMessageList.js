import React, { Component } from "react";

import ChatMessage from "./ChatMessage";

import styles from "./Chat.css";

export default class ChatMessageList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.messages.length > this.props.messages.length;
    }

    componentDidUpdate() {
        let messageList = document.getElementById("chat-message-list");
        messageList.scrollTop = messageList.scrollHeight;
    }

    render() {
        let chatMessages = this.props.messages.map((message, index) => {
            let isAuthor = this.props.currentUser.id === message.userId;

            return (
                <ChatMessage key={index} isAuthor={isAuthor} message={message} />
            );
        });

        return (
            <ul id="chat-message-list" className={styles.chatMessages}>
                {chatMessages}
            </ul>
        );
    }
}