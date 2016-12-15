import React, { Component } from "react";

import UserIcon from "./UserIcon";
import Button from "../common/Button";

import styles from "./Info.css";

import AuthAPI from "../../api/auth";
import imageUtils from "../../utils/images";

export default class Info extends Component {
    constructor(props) {
        super(props);
        this.currentUser = AuthAPI.getLogin();
    }

    componentWillMount() {
        this.props.selectIcon(this.currentUser.icon);
    }

    _selectIcon(icon) {
        this.props.selectIcon(icon);
    }

    _saveInfo() {

    }

    render() {
        let images = imageUtils.getUserIcons().map((icon, index) => {
            let cssClass = icon === this.props.info.selectedIcon ? styles.userIconSelected
                : styles.userIcon;

            return (
                <UserIcon key={index} src={icon} cssClass={cssClass}
                    callback={this._selectIcon.bind(this)} />
            );
        });

        return (
            <div className={styles.container}>
                <h1>Change information</h1>

                <div>
                    {images}
                </div>

                <Button asLink={true} callback={this._saveInfo.bind(this)}
                    icon="save" text="Save" />
            </div>
        );
    }
}