// @flow
import React, { Component } from "react";
import { Link } from "react-router";

import AppLoader from "./AppLoader";
import Chat from "./chat/Chat";

import AuthAPI from "../api/auth";

import styles from "./Home.css";
import loaderStyles from "./AppLoader.css";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.currentUser = AuthAPI.getLogin();
    }

    componentWillMount() {
        if (!this.props.app.loadFinished) {
            this.props.startAppLoading();

            setTimeout(() => {
                this.props.stopAppLoading();
            }, 5000);
        }
    }

    render() {
        let loadClassName = this.props.app.isLoadingApp ? "loading" : loaderStyles.loaded;

        return (
            <div className={loadClassName}>
                <AppLoader />

                <div className={styles.container}>
                    <div className={styles.leftContainer}>
                        <h1>Olá esquerda</h1>
                    </div>
                    <div className={styles.rightContainer}>
                        <Chat messages={this.props.chat.messages}
                            currentUser={this.currentUser}
                            currentMessage={this.props.chat.currentMessage}
                            isSendingMessage={this.props.chat.isSendingMessage}
                            updateMessage={this.props.updateMessage}
                            error={this.props.chat.error} />
                    </div>
                </div>
            </div>
        );
    }
}
