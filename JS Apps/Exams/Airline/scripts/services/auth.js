let auth = (() => {
    function isAuth() {

        return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authtoken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);
        // sessionStorage.setItem('teamId', userInfo.teamId);
    }

    // user/login
    function login(username, password) {
        let userData = {
            username,
            password
        };

        return remote.post('user', 'login', 'basic', userData);
    }

    // user/register
    function register(username, password) {
        let userData = {
            username,
            password
        };

        return remote.post('user', '', 'basic', userData);
    }

    // user/logout
    function logout() {
        let logoutData = {
            authtoken: sessionStorage.getItem('authtoken')
        };

        return remote.post('user', '_logout', 'kinvey', logoutData);
    }

    function handleError(reason) {
        notify.showError(reason.responseJSON.description);
    }

    return {
        login,
        register,
        logout,
        saveSession,
        handleError,
        isAuth

    }
})();