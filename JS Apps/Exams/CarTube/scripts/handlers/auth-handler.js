handlers.viewHome = async function (ctx) {
    ctx.isAuth = auth.isAuth();
    if (auth.isAuth()) {
        let cars = await carsServices.listAllCars();
        ctx.cars = cars;
        ctx.username = sessionStorage.getItem('username');
        ctx.cars.forEach((c) => {
            c.isMe = sessionStorage.getItem('userId') === c._acl.creator;
        });


        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs',
            homeCar: 'templates/carsPartials/homeCar.hbs'
        }).then(function () {
            this.partial('templates/home/home.hbs');
        })


    } else {
        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs'
        }).then(function () {
            this.partial('templates/home/welcome.hbs')
        })

    }

};

handlers.registerView = function (ctx) {
    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/forms/register.hbs')
    })
};

handlers.registerUser = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;
    const repeatPassword = ctx.params.repeatPass;

    let usernameRegex = /^[a-zA-Z]{3,}$/;
    let passwordRegex = /^[0-9a-zA-Z]{6,}$/;

    if (!usernameRegex.test(username)) {
        notify.showError('A username should be at least 3 characters long and should contain only english alphabet letters.');
    } else if (!passwordRegex.test(password)) {
        notify.showError('A user‘s password should be at least 6 characters long and should contain only english alphabet letters and digits.');
    } else if (password !== repeatPassword) {
        notify.showError('Both passwords must match.');
    } else {
        auth.register(username, password)
            .then(function (userDetails) {
                auth.saveSession(userDetails);
                notify.showInfo(`${username} registration successful.`);
                ctx.redirect('#/home');
            }).catch(notify.handleError)
    }
};

handlers.loginView = function (ctx) {
    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/forms/login.hbs')
    })
};

handlers.loginUser = function (ctx) {
    const username = ctx.params.username;
    const password = ctx.params.password;

    auth.login(username, password)
        .then(function (userInfo) {
            auth.saveSession(userInfo);
            notify.showInfo(`${userInfo.username} successful.`);
            ctx.redirect('#/home');
        }).catch(notify.handleError)
};

handlers.userLogout = function (ctx) {
    auth.logout()
        .then(function () {
            sessionStorage.clear();
            notify.showInfo('Logout successful.');
            ctx.redirect('#/home');
        })

};