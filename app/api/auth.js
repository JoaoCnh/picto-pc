import URL from '../config';

import { fetchPOST } from '../utils/fetch';
import storageKeys from '../utils/storageKeys';

const AuthAPI = {

    getLogin: () => {
        return JSON.parse(localStorage.getItem(storageKeys.auth));
    },

    setLogin: (user) => {
        return localStorage.setItem(storageKeys.auth, JSON.stringify(user));
    },

    logout: () => {
        return localStorage.removeItem(storageKeys.auth);
    },

    isAuthenticated: () => {
        return localStorage.getItem(storageKeys.auth) != null;
    },

    tryLogin: (username, password) => {
        return fetchPOST(`${URL}auth/login`, {
            body: JSON.stringify({username, password}),
        }).then((res) => res.json());
    },

    tryRegister: (username, password, passwordConfirmation) => {
        return fetchPOST(`${URL}auth/register`, {
            body: JSON.stringify({ username, password }),
        }).then((res) => res.json());
    },

};

export default AuthAPI;