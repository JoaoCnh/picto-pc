import io from "socket.io-client";

const socketUtils = {

    init: (user) => {
        // TODO: ENV VAR
        let socket = io.connect("http://localhost:8080", {query: `user=${JSON.stringify(user)}`});
        return socket;
    },

};

export default socketUtils;