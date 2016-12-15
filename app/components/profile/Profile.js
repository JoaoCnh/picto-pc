import React, { Component } from 'react';
import { Link } from 'react-router';

import Button from '../common/Button';

import styles from './Profile.css';

import AuthAPI from '../../api/auth';
import imageUtils from '../../utils/images';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.currentUser = AuthAPI.getLogin();
    }

    _handleLogout(event) {
        event.preventDefault();
        this.props.logout();
        return this.props.push("/auth/login");
    }

    render() {
        return (
            <div className={styles.profileCard}>
                <div className={styles.profile}>
                    <img src={imageUtils.getUserPic(this.currentUser)}
                        className={styles.border} />

                    <div className={styles.profileName}>
                        {this.currentUser.username}
                    </div>
                </div>

                <Button asRoute={true} route="profile/info" icon="user"
                    text="Change Information" />
                <Button asRoute={true} route="profile/achievements" icon="trophy"
                    text="Achievements" />
                <Button asLink={true} callback={this._handleLogout.bind(this)}
                    icon="sign-out" text="Logout" />
            </div>
        );
    }
}