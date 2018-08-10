handlers.displayHome = function (ctx) {
    ctx.isAuth = auth.isAuth();

    if (auth.isAuth()) { //logged in user
        ctx.loggedUser = sessionStorage.getItem('name');
        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs'
        }).then(function () {
            this.partial('templates/welcome/home.hbs')

        })
    } else { // anonymous
        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs'
        }).then(function () {
            this.partial('templates/welcome/welcome.hbs')
        })

    }
};

handlers.loginUser = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/forms/loginForm.hbs');
    })

};

handlers.registerUser = function (ctx) {
    ctx.isAuth = auth.isAuth();
    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/forms/registerUser.hbs')
    })
};

handlers.register = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;
    const name = ctx.params.name;

    auth.register(username, password, name)
        .then(function (userData) {
            auth.saveSession(userData);
            notify.showInfo(`${name} registration successful.`);
            ctx.redirect('#/home');
        }).catch(notify.handleError)
};

handlers.login = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;

    auth.login(username, password)
        .then(function (userInfo) {
            auth.saveSession(userInfo);
            notify.showInfo(`${userInfo.name} Login successful`);
            ctx.redirect('#/home')
        }).catch(notify.handleError)
};

handlers.logout = function (ctx) {
    sessionStorage.clear();
    notify.showInfo('Logout successful');
    ctx.redirect('#/home')
};