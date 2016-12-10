const strUtils = {

    isEmptyOrWhitespace: (str) => {
        return str === null || str.match(/^ *$/) !== null;
    },

};

export default strUtils;