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
        sessionStorage.setItem('subs', JSON.stringify(userInfo.subscriptions));
    }

    // user/login
    function login(username, password) {
        let userData = {
            username,
            password
        };

        return remote.post('user', 'login', 'basic', JSON.stringify(userData));
    }

    // user/register
    function register(username, password) {
        let userData = {
            username,
            password,
            "subscriptions":[]
        };

        return remote.post('user', '', 'basic', JSON.stringify(userData));
    }

    // user/logout
    function logout() {
        let logoutData = {
            authtoken: sessionStorage.getItem('authtoken')
        };

        return remote.post('user', '_logout', 'kinvey', JSON.stringify(logoutData));
    }

    function userDetails(userId) {
        //A GET to /user/:appKey/:id fetches the user object.
        return remote.get('user',userId,'kinvey')
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
        isAuth,
        userDetails

    }
})();