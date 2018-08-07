let validator = (() => {
    function registerValidator(username, password, repeatPassword) {
        let usernameRegex = /[\w+]{5,}/;

        if (!usernameRegex.test(username)){
            notify.showError('username should be a string with at least 5 characters long');
            return false
        }

        if (password===''||repeatPassword===''){
            notify.showError('password cannot be empty');
            return false;
        }
        if (password!==repeatPassword){
            notify.showError('password and repeat password should match');
            return false;
        }

        return true
    }

    function createPostValidator(url, title) {
        let isTitleValid = false;
        let isUrlValid = false;
        // let isImageUrlValid=false;


        if (title === '') {
            notify.showError('Title cannot be empty');
        } else {
            isTitleValid = true;
        }
        if (url === '') {
            notify.showError('Link url cannot be empty');
        }
        if (url.substr(0, 4) === 'http') {
            isUrlValid = true;
        } else {
            notify.showError('URL should start with http');
        }


        return isTitleValid && isUrlValid;
    }

    return {
        registerValidator,
        createPostValidator
    }
})();

