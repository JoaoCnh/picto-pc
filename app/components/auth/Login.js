// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './Auth.css';
import AuthBubbles from './AuthBubbles';
import AuthError from './AuthError';

import AuthAPI from '../../api/auth';

import strUtils from '../../utils/str';

export default class Login extends Component {
    _handleLoginAttempt(event) {
        event.preventDefault();

        let invalidUsername = strUtils.isEmptyOrWhitespace(this.props.login.loginUsername);
        let invalidPassword = strUtils.isEmptyOrWhitespace(this.props.login.loginPassword);

        if (invalidUsername || invalidPassword) {
            return this.props.loginError("Please fill all the form fields");
        }

        this.props.attemptLogin();

        AuthAPI.tryLogin(this.props.login.loginUsername, this.props.login.loginPassword)
            .then((res) => {
                if (res.error) {
                    return this.props.loginError(res.message);
                }

                this.props.loginSuccess(res.user.username);

                AuthAPI.setLogin(res.user);

                setTimeout(() => {
                    this.props.router.push("/");
                }, 1500);
            })
            .catch((err) => {
                this.props.loginError(err.message);
            });
    }
    _handleUsernameChange(event) {
        this.props.usernameChanged(event.target.value);
    }
    _handlePasswordChange(event) {
        this.props.passwordChanged(event.target.value);
    }
    render() {
        let error = this.props.login.loginError ?
            <AuthError errorMessage={this.props.login.loginErrorMessage} /> : <div />;

        let btnTxt = this.props.login.isAttemptingLogin ? "Logging in..." : "Login";
        let loggingInIcon = this.props.login.isAttemptingLogin ?
            <i className="fa fa-circle-o-notch fa-spin fa-fw"></i> : <div />;

        let formClassName = this.props.login.loginSuccess ? styles.fadeOut : "";
        let titleClassName = this.props.login.loginSuccess ? styles.slideDown : "";

        return (
            <div className={styles.authWrapper}>
                <div className={styles.authContainer}>
                    <h1 className={titleClassName}>
                        {this.props.login.title}
                    </h1>

                    {error}

                    <form className={formClassName}>
                        <input type="text" placeholder="Username / Email"
                            value={this.props.login.loginUsername}
                            onChange={this._handleUsernameChange.bind(this)} />
                        <input type="password" placeholder="Password"
                            value={this.props.login.loginPassword}
                            onChange={this._handlePasswordChange.bind(this)} />
                        <button type="submit" className={styles.authButton}
                            disabled={this.props.login.isAttemptingLogin}
                            onClick={this._handleLoginAttempt.bind(this)}>
                            {loggingInIcon} {btnTxt}
                        </button>

                        <div className={styles.authExtraLink}>
                            {'Not a member? '}
                            <Link to="/auth/register">
                                {'Register here '}
                                <i className="fa fa-arrow-right"></i>
                            </Link>
                        </div>
                    </form>
                </div>

                <AuthBubbles />
            </div>
        );
    }
}
