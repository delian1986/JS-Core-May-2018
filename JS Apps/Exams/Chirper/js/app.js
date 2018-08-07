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
        this.get('#/login',function (ctx) {
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
        })
        //feed view
        this.get('#/feed',function (ctx) {
            
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
    app.run();
});