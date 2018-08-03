let auth=(()=>{

    function isAuth() {
        return localStorage.getItem('authtoken')!==null;
    }

    function saveSession(userData) {
        localStorage.setItem('authtoken',userData._kmd.authtoken);
        localStorage.setItem('username',userData.username);
        localStorage.setItem('userId',userData._id);
    }
    function register(username,password) {
        remote.post('user','','basic',{username,password})
            .then(saveSession)
            .catch(console.error)
    }
    function login(username,password) {
        remote.post('user','login','basic',{username,password})
            .then(saveSession)
            .catch(console.error)
    }

    function logout() {
        remote.post('user','_logout','kinvey')
            .then(()=>{
                localStorage.clear();
            })
            .catch()
    }

    return{
        isAuth,
        register,
        login,
        logout
    }
})();