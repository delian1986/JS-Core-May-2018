//In this file I'll handle basics user functionality home screen view,login , register, logout

handlers.viewHome = function (ctx) {
    ctx.isAnonimous = !auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.isAuth = auth.isAuth();
    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/home/home.hbs');
    })
};

handlers.registerView = function (ctx) {
    ctx.isAnonimous = !auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.isAuth = auth.isAuth();
    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/forms/register.hbs');
    })
};

handlers.registerUser = function (ctx) {

    const username = ctx.params.username;
    const password = ctx.params.password;
    if (username.length < 3) {
        notify.showError('Username must be at least 3 chars long!')
    } else if (password.length < 3) {
        notify.showError('Password must be at least 3 chars long!')
    } else {
        auth.register(username, password)
            .then(function (userInfo) {
                notify.showInfo(`${username} registered! You can now use the site!`);
                auth.saveSession(userInfo);
                ctx.redirect('#/home');
            }).catch(notify.handleError)

    }
};

handlers.loginView = function (ctx) {
    ctx.isAnonimous = !auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.isAuth = auth.isAuth();
    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/forms/login.hbs');
    })
};

handlers.loginUser = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;

    auth.login(username, password)
        .then(function (userInfo) {
            notify.showInfo(`${username} logged in! You can now use the site!`);
            auth.saveSession(userInfo);
            ctx.redirect('#/home');
        }).catch(notify.handleError)
};

handlers.logout = function (ctx) {
    auth.logout()
        .then(function () {
            sessionStorage.clear();
            notify.showInfo("You've just logged out!");
            ctx.redirect('#/home');
        }).catch(notify.handleError);
};



