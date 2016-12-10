import URL from '../config';
import storageKeys from '../utils/storageKeys';

const AuthAPI = {

    setLogin: (user) => {
        return localStorage.setItem(storageKeys.auth, user);
    },

    isAuthenticated: () => {
        return localStorage.getItem(storageKeys.auth) != null;
    },

    tryLogin: (username, password) => {
        return fetch(`${URL}auth/login`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({username, password}),
        }).then((res) => res.json());
    },

    tryRegister: (username, password, passwordConfirmation) => {
        return fetch(`${URL}auth/register`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => res.json());
    },

};

export default AuthAPI;