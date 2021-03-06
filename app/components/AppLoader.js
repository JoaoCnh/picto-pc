import React from 'react';

import styles from './AppLoader.css';

export default class AppLoader extends React.Component {
    render() {
        return (
            <div className={styles.loaderWrapper}>
                <div className={styles.loader}></div>

                <div className={styles.loaderSectionLeft}></div>
                <div className={styles.loaderSectionRight}></div>
            </div>
        );
    }
}