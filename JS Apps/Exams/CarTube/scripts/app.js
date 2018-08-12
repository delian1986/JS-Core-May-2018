const handlers = {};

$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');
        this.get('index.html', handlers.viewHome);
        this.get('#/home', handlers.viewHome);

        //register
        this.get('#/registerView',handlers.registerView);
        this.post('#/register',handlers.registerUser);

        //login
        this.get('#/loginView',handlers.loginView);
        this.post('#/login',handlers.loginUser);

        //logout
        this.get('#/logout',handlers.userLogout);

        //create listing
        this.get('#/createListing',handlers.createListing);
        this.post('#/create',handlers.createNew);

        //edit
        this.get('#/edit/:id',handlers.editView);
        this.post('#/edit',handlers.editListing);

        //delete
        this.get('#/delete/:id',handlers.deleteListing);

        //get my listings
        this.get('#/myListings',handlers.getMyListings);

        //details
        this.get('#/details/:id',handlers.listingDetails);

    });
    app.run();
});