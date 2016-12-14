const batteryUtils = {

    setup: (updateLevelCb) => {
        if (!updateLevelCb) return false;

        navigator.getBattery().then((batteryManager) => {
            updateLevelCb(batteryManager.level);

            batteryManager.onlevelchange = () => {
                updateLevelCb(batteryManager.level);
            };
        });
    },

};

export default batteryUtils;