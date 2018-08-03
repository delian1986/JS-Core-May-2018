let remote = (() => {
    const BASE_URL = 'https://baas.kinvey.com/';
    const APP_KEY = 'kid_rycVRTZHm';
    const APP_SECRET = '749c323653c64efcbd6472232163afff';

    function makeAuth(auth) {
        switch (auth) {
            case 'basic':
                return `Basic ${btoa(APP_KEY + ":" + APP_SECRET)}`;
            case 'kinvey':
                return `Kinvey ${localStorage.getItem('authtoken')}`;
        }
    }

    //request method GET, POST, PUT, DELETE
    //kinvey module (user/appdata)
    //url endpoint
    //auth

    function makeRequest(method, module, endpoint, auth) {
        return {
            url: BASE_URL + module + '/' + APP_KEY + '/' + endpoint,
            method: method,
            headers: {
                "Authorization": makeAuth(auth)
            }
        }
    }

    function get(module, endpoint, auth) {
        return $.ajax(makeRequest('GET', module, endpoint, auth))
    }

    function post(module, endpoint, auth, data) {
        let obj = makeRequest('POST', module, endpoint, auth, data);
        if (data) {
            obj.data = data;
        }
        return $.ajax(obj);
    }

    function update(module, endpoint, auth, data) {
        let obj = makeRequest('PUT', module, endpoint, auth, data);
        obj.data = data;
        return $.ajax(obj);
    }

    function remove(module, endpoint, auth) {
        return $.ajax(makeRequest('DELETE', module, endpoint, auth));
    }

    return {
        get,
        post,
        update,
        remove
    }
})();