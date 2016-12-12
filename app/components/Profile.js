import React, { Component } from 'react';

import AuthBubbles from './auth/AuthBubbles';

import genStyles from './Home.css';
import styles from './Profile.css';

import AuthAPI from '../api/auth';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.currentUser = AuthAPI.getLogin();
    }
    render() {
        return (
            <div className={genStyles.bubbleWrapper}>

                <div className={styles.profileCard}>
                    <div className={styles.profile}>
                        <img src="../resources/usericons/default.png" className={styles.border} />
                    </div>
                    <div className={styles.profileName}>
                        {this.currentUser.username}
                    </div>
                </div>

                <AuthBubbles />
            </div>
        );
    }
}