let validator=(()=>{
    function loginValidator(username, password, repeatPassword) {
        let usernameRegex = /[a-zA-Z]{3,}/;
        let passwordRegex = /[a-zA-Z0-9]{6,}/;

        if (repeatPassword === undefined) {
            return (usernameRegex.test(username) && passwordRegex.test(password))
        }
        return (usernameRegex.test(username) && passwordRegex.test(password) && password === repeatPassword)
    }
    
    function createPostValidator(url,title) {
        let isTitleValid=false;
        let isUrlValid=false;
        // let isImageUrlValid=false;


        if (title===''){
            notify.showError('Title cannot be empty');
        }else{
            isTitleValid=true;
        }
        if (url===''){
            notify.showError('Link url cannot be empty');
        }
        if (url.substr(0,4)==='http'){
            isUrlValid=true;
        }else{
            notify.showError('URL should start with http');
        }
        // if (imageUrl!==''){
        //     if (imageUrl.substr(0,4)==='http'){
        //         isImageUrlValid=true
        //     }else{
        //         notify.showError('Image URL should start with http');
        //     }
        // }else{
        //     isImageUrlValid=true
        // }

        return isTitleValid&&isUrlValid;
    }
    return{
        loginValidator,
        createPostValidator
    }
})();

