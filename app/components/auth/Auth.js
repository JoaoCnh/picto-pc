import React, { Component } from 'react';

import BubbleWrap from '../common/BubbleWrap';

import styles from './Auth.css';

import AuthAPI from '../../api/auth';

export default class Auth extends Component {
    componentWillMount() {
        if (AuthAPI.isAuthenticated()) {
            return this.props.push("/");
        }
    }

    render() {
        return (
            <BubbleWrap>
                {this.props.children}
            </BubbleWrap>
        );
    }
}