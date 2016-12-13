import React, { Component } from 'react';
import { Link } from 'react-router';

import AuthBubbles from './auth/AuthBubbles';

import genStyles from './Home.css';
import styles from './Profile.css';

import AuthAPI from '../api/auth';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.currentUser = AuthAPI.getLogin();
    }

    _handleLogout(event) {
        event.preventDefault();
        this.props.logout();
        return this.props.router.push("/auth/login");
    }

    render() {
        return (
            <div className={genStyles.bubbleWrapper}>

                <div className={styles.profileCard}>
                    <div className={styles.profile}>
                        <img src="../resources/usericons/default.png" className={styles.border} />

                        <div className={styles.profileName}>
                            {this.currentUser.username}
                        </div>
                    </div>

                    <Link className={styles.profileBtn} to="info">
                        <i className="fa fa-user"></i>
                        {` Change Information`}
                    </Link>
                    <Link className={styles.profileBtn} to="achievements">
                        <i className="fa fa-trophy"></i>
                        {` Achievements`}
                    </Link>
                    <a href="#" className={styles.profileBtn}
                        onClick={this._handleLogout.bind(this)}>
                        <i className="fa fa-sign-out"></i>
                        {` Logout`}
                    </a>
                </div>

                <AuthBubbles />
            </div>
        );
    }
}