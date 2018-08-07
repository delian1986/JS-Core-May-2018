let comments=(()=>{
    function createComment(postId,content,author) {
        let data={postId:postId,content:content,author:author};
        return requester.post('appdata','comments','kinvey',data)
    }

    function deleteComment(commentId) {
        let endpoint=`comments/${commentId}`;
        return requester.remove('appdata',endpoint,'kinvey');
    }
    
    function loadPostComments(postId) {
        let endpoint=`comments?query={"postId":"${postId}"}&sort={"_kmd.ect": -1}`;

        return requester.get('appdata',endpoint,'kinvey')
    }

    return{
        createComment,
        deleteComment,
        loadPostComments,

    }

})();