import React, { Component } from "react";

import UserIcon from "./UserIcon";
import Button from "../common/Button";

import styles from "./Info.css";

import AuthAPI from "../../api/auth";
import UserAPI from "../../api/user";
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

    _saveInfo(event) {
        event.preventDefault();

        this.props.savingInfo(true);

        UserAPI.setIcon(this.currentUser.id, this.props.info.selectedIcon)
            .then((res) => {
                if (res.error) {

                }

                AuthAPI.setLogin(res.user);
                this.props.savingInfo(false);

                // Atualizamos a informação presente no localStorage
                return this.props.push("/profile");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        let images = imageUtils.getIcons().map((icon, index) => {
            let cssClass = icon === this.props.info.selectedIcon ? styles.userIconSelected
                : styles.userIcon;

            return (
                <UserIcon key={index} src={icon} cssClass={cssClass}
                    callback={this._selectIcon.bind(this)} />
            );
        });

        let savingInfoIcon = this.props.info.savingInfo ? "circle-o-notch fa-spin fa-fw" : "save";

        return (
            <div className={styles.container}>
                <h1>Change information</h1>

                <div className={styles.iconContainer}>
                    {images}
                </div>

                <Button asLink={true} callback={this._saveInfo.bind(this)}
                    icon={savingInfoIcon} text="Save" />
            </div>
        );
    }
}