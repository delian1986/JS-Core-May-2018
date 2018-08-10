$(()=>{

    const app=Sammy('#main',function () {
        this.use('Handlebars', 'hbs');

        //home view
        this.get('index.html',displayHome);
        //loginView
        this.get('#/loginView',function (ctx) {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    header: 'templates/common/header.hbs',
                    footer: 'templates/common/footer.hbs'
                }).then(function () {
                    this.partial('templates/forms/loginForm.hbs')
                })
            }else{
                displayHome(ctx);
            }
        });

        //login functionality
        this.post('#/login',function (ctx) {
            if (auth.isAuth()) {
                ctx.redirect('#/feed');
                return;
            }
           let username=ctx.params.username;
           let password=ctx.params.password;

            auth.login(username,password)
               .then(function (userInfo) {
                   auth.saveSession(userInfo);
                   notify.showInfo(`${userInfo.username} logged if successful.`);
                   ctx.redirect('#/feed')
               }).catch(auth.handleError)
        });

        //register view
        this.get('#/registerView',displayHome);

        //register functionality
        this.post('#/register',function (ctx) {
            let username=ctx.params.username;
            let password=ctx.params.password;
            let repeatPassword=ctx.params.repeatPass;
            if (validator.registerValidator(username,password,repeatPassword)){
                auth.register(username,password)
                    .then(function (userInfo) {
                        auth.saveSession(userInfo);
                        notify.showInfo(`${userInfo.username} registration successful.`);
                        ctx.redirect('#/feed')
                    }).catch(auth.handleError)
            }
        });

        //feed view
        this.get('#/feed',function (ctx) {
            chirps.getChirps()
                .then(function (chirps) {
                    ctx.chirps=chirps;
                    ctx.username=sessionStorage.getItem('username');
                    ctx.loadPartials({
                        header:'templates/common/header.hbs',
                        menu:'templates/common/menu.hbs',
                        chirp:'templates/chirp.hbs',
                        footer:'templates/common/footer.hbs'
                    }).then(function () {
                        this.partial('templates/feed.hbs')
                    })
                }).catch(auth.handleError)
        });

        //submit chirp
        this.post('#/submitChirp',function (ctx) {
            let text=ctx.params.text;
            chirps.createChirp(text)
                .then(function () {
                    notify.showInfo('Chirp published.');
                    ctx.redirect('#/me')
                }).catch(auth.handleError)
        });

        //my chirps
        this.get('#/me',function (ctx) {
            chirps.loadAllMyChirps()
                .then(function (chirps) {
                    ctx.chirps=chirps;
                    chirps.forEach(c=>{
                        c.time = calcTime(c._kmd.ect);
                        c.isAuthor = c._acl.creator === sessionStorage.getItem('userId');
                    });
                    ctx.username=sessionStorage.getItem('username');
                    ctx.loadPartials({
                        header:'templates/common/header.hbs',
                        menu:'templates/common/menu.hbs',
                        chirp:'templates/chirp.hbs',
                        footer:'templates/common/footer.hbs'
                    }).then(function () {
                        this.partial('templates/feed.hbs')
                    })
                }).catch(auth.handleError)
        })
        
    });

    function displayHome(ctx){
        if (!auth.isAuth()) {
            ctx.loadPartials({
                header:'templates/common/header.hbs',
                footer:'templates/common/footer.hbs'
            }).then(function () {
                this.partial('templates/forms/registerForm.hbs')
            })
        }else{
            
        }

    }
    function calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }

    app.run();
});