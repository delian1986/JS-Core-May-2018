const userServices=(()=>{
    function listAllUsers() {
        return remote.get('user','','kinvey');
    }

    return{
        listAllUsers
    }
})();