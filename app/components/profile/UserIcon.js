import React, { Component } from "react";

import imageUtils from '../../utils/images';

export default class UserIcon extends Component {
    _handleClick(event) {
        event.preventDefault();
        this.props.callback(this.props.src);
    }

    render() {
        return (
            <a href="#" onClick={this._handleClick.bind(this)}>
                <img src={imageUtils.buildIconPath(this.props.src)} className={this.props.cssClass} />
            </a>
        );
    }
}