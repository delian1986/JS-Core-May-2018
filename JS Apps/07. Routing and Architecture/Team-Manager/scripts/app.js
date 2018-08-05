$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');
        //Home page
        this.get('index.html', displayHome);
        this.get('#/home', displayHome);

        //About page
        this.get('#/about', function () {
            this.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
            }).then(function () {
                this.partial('templates/about/about.hbs')
            })
        });

        //Show login
        this.get('#/login', function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                loginForm: 'templates/login/loginForm.hbs'
            }).then(function () {
                this.partial('templates/login/loginPage.hbs')
            })
        });
        //Login logic
        this.post('/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;

            auth.login(username, password)
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo('You are logged in');

                    displayHome(ctx);
                }).catch(auth.handleError)
        });

        //Logout
        this.get('#/logout', function (ctx) {
            auth.logout().then(function () {
                sessionStorage.clear();
                auth.showInfo('You just logged out!');
                displayHome(ctx)
            })
        });

        //Show register
        this.get('#/register', function (ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            this.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                registerForm: 'templates/register/registerForm.hbs'
            }).then(function () {
                this.partial('templates/register/registerPage.hbs')
            })
        });
        //Register logic
        this.post('#/register', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPassword = ctx.params.repeatPassword;
            if (password === repeatPassword) {
                auth.register(username, password)
                    .then(function (userInfo) {
                        auth.saveSession(userInfo);
                        auth.showInfo('You are registered!');

                        displayHome(ctx);
                    }).catch(auth.handleError)
            } else {
                auth.showError('Passwords do not match!')
            }

        });

        //Team catalog
        this.get('#/catalog', function (ctx) {
            displayCatalog(ctx)
        });

        //Create team page
        this.get('#/create',function (ctx) {
           ctx.loadPartials({
               header: 'templates/common/header.hbs',
               footer: 'templates/common/footer.hbs',
               createForm:'templates/create/createForm.hbs'
           }).then(function () {
               this.partial('templates/create/createPage.hbs')
           })
        });

        //Post new team
        this.post('#/create',function (ctx) {
            let teamName=ctx.params.name;
            let teamComment=ctx.params.comment;

            teamsService.createTeam(teamName,teamComment)
                .then(function (teamInfo) {
                    teamsService.joinTeam(teamInfo._id)
                        .then(function (userInfo) {
                            auth.saveSession(userInfo);
                            auth.showInfo(`${teamName} has been created!`);
                            displayCatalog(ctx)
                        })
                }).catch(auth.handleError)
        });

        //Teams details page
        this.get('#/catalog/:id',function (ctx) {
            let teamId=ctx.params.id.substr(1);
            
            teamsService.loadTeamDetails(teamId)
                .then(function (teamInfo) {
                    ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
                    ctx.username = sessionStorage.getItem('username');
                    ctx.teamId=teamInfo._id;
                    ctx.name=teamInfo.name;
                    ctx.comment=teamInfo.comment;
                    ctx.isOnTeam=sessionStorage.getItem('teamId') === teamInfo._id;
                    ctx.isAuthor=teamInfo._acl.creator===sessionStorage.getItem('userId');
                    ctx.loadPartials({
                        header: 'templates/common/header.hbs',
                        footer: 'templates/common/footer.hbs',
                        teamControls:'templates/catalog/teamControls.hbs',
                    }).then(function () {
                        this.partial('templates/catalog/details.hbs')
                    })
                }).catch(auth.handleError);

        });

        //Join team (by Id)
        this.get('#/join/:id',function (ctx) {
            let teamId=ctx.params.id.substr(1);
            teamsService.joinTeam(teamId)
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo(`${ctx.team} joined`);
                    displayCatalog(ctx)
                }).catch(auth.handleError)
        });
        
        //Leave team
        this.get('#/leave',function (ctx) {
            teamsService.leaveTeam()
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo(`${userInfo.username} left the team`);
                    displayCatalog(ctx)
                }).catch(auth.handleError)
        });

        //Edit page
        this.get('#/edit/:id',function (ctx) {
           let teamId=ctx.params.id.substr(1);
           
           teamsService.loadTeamDetails(teamId)
               .then(function (teamInfo) {
                   ctx.teamId=teamId;
                   ctx.name=teamInfo.name;
                   ctx.comment=teamInfo.comment;

                   ctx.loadPartials({
                       header: 'templates/common/header.hbs',
                       footer: 'templates/common/footer.hbs',
                       editForm:'templates/edit/editForm.hbs'
                   }).then(function () {
                       this.partial('templates/edit/editPage.hbs')
                   })

               }).catch(auth.handleError)
            
        });

        //Post edited team info
        this.post('#/edit/:id',function (ctx) {
            let teamId=ctx.params.id.substr(1);
            let teamName=ctx.params.name;
            let teamComment=ctx.params.comment;

            teamsService.edit(teamId,teamName,teamComment)
                .then(function () {
                    auth.showInfo(`Team ${teamName} edited`);
                    displayCatalog(ctx)
                }).catch(auth.handleError)
        });

        //Display catalog
        function displayCatalog(ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            teamsService.loadTeams()
                .then(function (teams) {
                    ctx.hasNoTeam = sessionStorage.getItem('teamId') === null || sessionStorage.getItem('teamId') === "undefined";
                    ctx.teams = teams;
                    ctx.loadPartials({
                        header: 'templates/common/header.hbs',
                        footer: 'templates/common/footer.hbs',
                        team: 'templates/catalog/team.hbs'
                    }).then(function () {
                        this.partial('templates/catalog/teamCatalog.hbs')
                    })
                }).catch(auth.handleError)
        }

        //Display Home function
        function displayHome(ctx) {
            ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
            ctx.username = sessionStorage.getItem('username');
            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',

            }).then(function () {
                this.partial('templates/home/home.hbs')
            });
        }


    });

    app.run();
});