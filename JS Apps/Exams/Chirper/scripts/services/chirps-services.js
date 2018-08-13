let chirpsServices=(()=>{
    function listAllChirpsFromSubs() {
        const subs=JSON.parse(sessionStorage.getItem('subs'));
        const endpoint=`chirps?query={"author":{"$in": [${subs}]}}&sort={"_kmd.ect": 1}`;

        return remote.get('appdata',endpoint,'kinvey')
    }

    function createChirp(text,author) {
        const data={text,author};

        return remote.post('appdata','chirps','kinvey',JSON.stringify(data))
    }
    
    function deleteChirp(chirpId) {
        return remote.remove('appdata',`chirps/${chirpId}`,'kinvey');
    }
    
    function userChirps() {
        const username=sessionStorage.getItem('username');
        const endpoint=`chirps?query={"author":"${username}"}&sort={"_kmd.ect": 1}`;

        return remote.get('appdata',endpoint,'kinvey');
    }

    function countChirps(username) {
        // const username=sessionStorage.getItem('username');
        const endpoint=`chirps?query={"author":"${username}"}`;

        return remote.get('appdata',endpoint,'kinvey');
    }

    function countFollowing(username) {
        // const username=sessionStorage.getItem('username');
        const endpoint=`?query={"username":"${username}"}`;

        return remote.get('user',endpoint,'kinvey');
    }

    function countFollowers(username) {
        // const username=sessionStorage.getItem('username');
        const endpoint=`?query={"subscriptions":"${username}"}`;

        return remote.get('user',endpoint,'kinvey');
    }

    function discoverPage() {
        return remote.get('user','','kinvey')
    }

    function modifyUser(userId, newSubs) {
        let newUser = {
            subscriptions: newSubs
        };

        return remote.update('user', userId, 'kinvey', newUser)
    }


    return{
        listAllChirpsFromSubs,
        createChirp,
        deleteChirp,
        userChirps,
        countChirps,
        countFollowing,
        countFollowers,
        discoverPage,
        modifyUser
    }
})();