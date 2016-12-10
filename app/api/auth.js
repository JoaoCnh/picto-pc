import URL from '../config';

import { fetchPOST } from '../utils/fetch';
import storageKeys from '../utils/storageKeys';

const AuthAPI = {

    setLogin: (user) => {
        return localStorage.setItem(storageKeys.auth, user);
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