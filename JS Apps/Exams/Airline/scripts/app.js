const handlers = {};

$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');
        //unauthorized user
        this.get('index.html', handlers.viewWelcome);
        this.get('#/home', handlers.viewWelcome);

        //login
        this.get('#/loginPage', handlers.loginPage);
        this.post('#/login', handlers.loginUser);

        //register
        this.get('#/registerPage', handlers.registerPage);
        this.post('#/register', handlers.registerUser);

        //logout
        this.get('#/logout',handlers.logout);

        //create flight
        this.get('#/add',handlers.addView);
        this.post('#/addFlight',handlers.addFlight);

        //details
        this.get('#/catalog/:id',handlers.viewDetails);

        //edit view
        this.get('#/edit/:id',handlers.getEdit);
        this.post('#/editFlight',handlers.editCurrentFlight);

        //my flights
        this.get('#/flights',handlers.myFlight);

        //delete flight
        this.get('#/delete/:id',handlers.removeFlight)

    });
    app.run();
});