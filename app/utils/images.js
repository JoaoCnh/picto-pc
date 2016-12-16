const USER_ICONS_PATH = "../resources/usericons/";

const USER_ICONS = [
    "default.png",
    "user-icon-circle-dark.png",
    "user-icon-circle.png",
    "user-icon-pingu.png",
    "user-icon-square-dark.png",
    "user-icon-square.png",
    "user-icon-triangle-dark.png",
    "user-icon-triangle.png",
    "user-icon-x-dark.png",
    "user-icon-x.png",
];

const imageUtils = {

    getDefault: () => {
        return `${USER_ICONS_PATH}default.png`;
    },

    getUserPic: (user) => {
        // Getting resources it's from app root
        if (!user.icon) return `${USER_ICONS_PATH}default.png`;

        return `${USER_ICONS_PATH}${user.icon}`;
    },

    getIcons: () => {
        return USER_ICONS;
    },

    buildIconPath: (icon) => {
        return `${USER_ICONS_PATH}${icon}`;
    },

};

export default imageUtils;
