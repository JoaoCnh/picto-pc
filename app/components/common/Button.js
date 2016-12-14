import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './Common.css';

export default class Button extends Component {
    static propTypes = {
        asRoute: React.PropTypes.bool,
        route: React.PropTypes.string,
        asLink: React.PropTypes.bool,
        icon: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        text: React.PropTypes.string.isRequired,
        callback: React.PropTypes.func,
    }

    render() {
        let icon = null;

        if (this.props.icon != null) {
            icon = (<i className={`fa fa-${this.props.icon}`}></i>);
        }

        if (this.props.asRoute) {
            return (
                <Link to={this.props.route} className={styles.link}>
                    {icon}{" "}{this.props.text}
                </Link>
            );
        }

        if (this.props.asLink) {
            return (
                <a href="#" className={styles.link}
                    disabled={this.props.disabled}
                    onClick={this.props.callback}>
                    {icon}{" "}{this.props.text}
                </a>
            );
        }

        return (
            <button type="submit" className={styles.btn}
                disabled={this.props.disabled}
                onClick={this.props.callback}>
                {icon}{" "}{this.props.text}
            </button>
        );
    }
}