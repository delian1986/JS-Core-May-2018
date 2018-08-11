const handlers = {};

$(() => {
    const app = Sammy('#app', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', handlers.viewHome);
        this.get('#/home', handlers.viewHome);
        //login
        this.get('#/loginView', handlers.loginView);
        this.post('#/login', handlers.userLogin);
        //register
        this.get('#/registerView', handlers.registerView);
        this.post('#/register', handlers.userRegister);
        //logout
        this.get('#/logout', handlers.userLogout);

        //list all products
        this.get('#/shop',handlers.getShop);

        //mycart
        this.get('#/cart',handlers.myCart);




    }).run();
});


