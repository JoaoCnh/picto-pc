import URL from '../config';

import { fetchPOST } from '../utils/fetch';

const UserAPI = {

    setIcon: (id, icon) => {
        return fetchPOST(`${URL}users/icon`, {
            body: JSON.stringify({id, icon}),
        }).then((res) => res.json());
    },

};

export default UserAPI;