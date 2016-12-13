// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './Auth.css';
import AuthError from './AuthError';

import AuthAPI from '../../api/auth';

import strUtils from '../../utils/str';

export default class Register extends Component {
    _handleRegisterAttempt(event) {
        event.preventDefault();

        let invalidUsername = strUtils.isEmptyOrWhitespace(this.props.register.registerUsername);
        let invalidPassword = strUtils.isEmptyOrWhitespace(this.props.register.registerPassword);
        let invalidConfirmation
            = strUtils.isEmptyOrWhitespace(this.props.register.registerPasswordConfirmation);

        if (invalidUsername || invalidPassword || invalidConfirmation) {
            return this.props.registerError("Please fill all the form fields");
        }

        if (this.props.register.registerPassword !== this.props.register.registerPasswordConfirmation) {
            return this.props.registerError("The Passwords don't match!", true);
        }

        this.props.attemptRegister();

        AuthAPI.tryRegister(this.props.register.registerUsername, this.props.register.registerPassword)
            .then((res) => {
                if (res.error) {
                    return this.props.registerError(res.message);
                }

                this.props.registerSuccess();

                setTimeout(() => {
                    this.props.push("/auth/login");
                }, 1500);
            })
            .catch((err) => {
                this.props.registerError(err.message);
            });
    }

    _handleUsernameChange(event) {
        this.props.usernameChanged(event.target.value);
    }

    _handlePasswordChange(event) {
        this.props.passwordChanged(event.target.value);
    }

    _handlePasswordConfirmationChange(event) {
        this.props.passwordConfirmationChanged(event.target.value);
    }

    render() {
        let error = this.props.register.registerError ?
            <AuthError errorMessage={this.props.register.registerErrorMessage} /> : <div />;

        let btnTxt = this.props.register.isAttemptingRegister ? "Please wait..." : "Register";
        let registeringIcon = this.props.register.isAttemptingRegister ?
            <i className="fa fa-circle-o-notch fa-spin fa-fw"></i> : <div />;

        let formClassName = this.props.register.registerSuccess ? styles.fadeOut : "";
        let titleClassName = this.props.register.registerSuccess ? styles.slideDown : "";

        return (
            <div className={styles.authContainer}>
                <h1 className={titleClassName}>
                    {this.props.register.title}
                </h1>

                {error}

                <form className={formClassName}>
                    <input type="text" placeholder="Username / Email"
                        value={this.props.register.registerUsername}
                        onChange={this._handleUsernameChange.bind(this)} />
                    <input type="password" placeholder="Password"
                        value={this.props.register.registerPassword}
                        onChange={this._handlePasswordChange.bind(this)} />
                    <input type="password" placeholder="Password Confirmation"
                        value={this.props.register.registerPasswordConfirmation}
                        onChange={this._handlePasswordConfirmationChange.bind(this)} />

                    <button type="submit" className={styles.authButton}
                        disabled={this.props.register.isAttemptingRegister}
                        onClick={this._handleRegisterAttempt.bind(this)}>
                        {registeringIcon} {btnTxt}
                    </button>

                    <div className={styles.authExtraLink}>
                        {'Already have an account? '}
                        <Link to="/auth/login">
                            {'Login here '}
                            <i className="fa fa-arrow-right"></i>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}
