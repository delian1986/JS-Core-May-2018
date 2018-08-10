const messagesServices=(()=>{
    function listMyMessages() {
        const username=sessionStorage.getItem('username');
        const endpoint=`messages?query={"recipient_username":"${username}"}`;

        return remote.get('appdata',endpoint,'kinvey');
    }
    
    function sentArchive() {
        const username=sessionStorage.getItem('username');
        const endpoint=`messages?query={"sender_username":"${username}"}`;

        return remote.get('appdata',endpoint,'kinvey')
    }
    
    function sendMessage(data) {
        
        return remote.post('appdata','messages','kinvey',data);
    }

    function deleteMessage(messageId) {
        return remote.remove('appdata',`messages/${messageId}`,'kinvey')
    }
    
    return{
        listMyMessages,
        sentArchive,
        sendMessage,
        deleteMessage

        
    }
    
})();