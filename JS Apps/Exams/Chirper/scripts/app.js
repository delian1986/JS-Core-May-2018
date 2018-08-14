//Exam Chirper solved. All functionality are working but still have some bugs. Need refactor.

const handlers={};

$(()=>{
    const app=Sammy('#main',function () {
        this.use('Handlebars','hbs');

        //home
        this.get('index.html',handlers.viewHome);
        this.get('#/home',handlers.viewHome);

        //register
        this.get('#/registerView',handlers.registerView);
        this.post('#/register',handlers.registerUser);

        //login
        this.get('#/loginView',handlers.loginView);
        this.post('#/login',handlers.loginUser);

        //logout
        this.get('#/logout',handlers.logout);

        //main feed
        this.get('#/feed',handlers.getFeed);

        //post chirp
        this.post('#/submitChirp',handlers.submitChirp);

        //all my created chirps
        this.get('#/me',handlers.allMyChirps);

        //delete my chirp
        this.get('#/delete/chirp/:id',handlers.deleteChirp);

        //discover page
        this.get('#/discover',handlers.discover);

        //user details
        this.get('#/user/:username',handlers.userDetails);

        //follow
        this.get('#/follow/:user',handlers.followUser);
        this.get('#/unfollow/:user', handlers.unfollowUser);

    }).run()

});