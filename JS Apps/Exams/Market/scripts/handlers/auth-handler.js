handlers.viewHome = function (ctx) {
    ctx.isAnonymous = !auth.isAuth();
    if (auth.isAuth()) {
        ctx.username=sessionStorage.getItem('username');
        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs'
        }).then(function () {
            this.partial('templates/home/home.hbs')
        })
    } else {
        ctx.redirect('#/loginView');
    }
};

handlers.loginView = function (ctx) {
    ctx.isAnonymous = !auth.isAuth();

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/welcome/login.hbs')
    })
};
handlers.userLogin = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;

    auth.login(username, password)
        .then(function (userInfo) {
            notify.showInfo('Logged in');
            auth.saveSession(userInfo);
            ctx.redirect('#/home')
        })
};

handlers.registerView = function (ctx) {
    ctx.isAnonymous = !auth.isAuth();

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/welcome/register.hbs')
    })
};

handlers.userRegister = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;
    const name = ctx.params.name;

    auth.register(username, password, name)
        .then(function (userInfo) {
            notify.showInfo('Registered');
            auth.saveSession(userInfo);
            ctx.redirect('#/home')
        }).catch(notify.handleError)
};
handlers.userLogout = function (ctx) {
    auth.logout().then(function () {
        sessionStorage.clear();
        notify.showInfo('Logged out.');
        ctx.redirect('#/home');
    }).catch(notify.handleError)
};