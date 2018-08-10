handlers.viewWelcome = async function (ctx) {
    ctx.isAuth=auth.isAuth();
    if (auth.isAuth()) {
        ctx.username=sessionStorage.getItem('username');

        let flights= await flightServices.getPublishedFlights();
        ctx.flights=flights;

        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs',
            addedFlight:'templates/home/addedFlight.hbs'
        }).then(function () {
            this.partial('templates/home/home.hbs')
        })

    } else {
        ctx.redirect('#/registerPage')
    }

};

handlers.loginPage = function (ctx) {
    if(auth.isAuth()){
        ctx.redirect('#/home');
    }
    ctx.isAuth = auth.isAuth();

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/forms/login.hbs')
    })

};
handlers.registerPage = function (ctx) {
    if(auth.isAuth()){
        ctx.redirect('#/home');
    }
    ctx.isAuth = auth.isAuth();

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/forms/register.hbs')
    })

};

handlers.registerUser = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.pass;
    const repeatPassword = ctx.params.repeatPassword;

    if (username.length < 5) {
        notify.showError('A username should be a string with at least 5 characters long.');
    } else if (password === '') {
        notify.showError('Passwords input fields shouldn’t be empty.')
    } else if (password !== repeatPassword) {
        notify.showError('Both passwords should match.')
    } else {
        auth.register(username, password)
            .then(function (userData) {
                auth.saveSession(userData);
                notify.showInfo(`${username} registration successful.`);
                ctx.redirect('#/home');
            }).catch(notify.handleError)
    }
};

handlers.loginUser = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;

    auth.login(username, password)
        .then(function (userInfo) {
            auth.saveSession(userInfo);
            notify.showInfo(`${username} successful`);
            ctx.redirect('#/home');
        }).catch(notify.showError)
};

handlers.logout = function (ctx) {

    auth.logout().then(function () {
        sessionStorage.clear();
        notify.showInfo('Logout successful');
        ctx.redirect('#/home');
    })
};