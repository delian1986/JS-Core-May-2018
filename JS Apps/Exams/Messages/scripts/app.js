const handlers = {};

$(() => {
    const app = Sammy('#app', function () {
        this.use('Handlebars', 'hbs');

        //home
        this.get('index.html', handlers.displayHome);
        this.get('#/home', handlers.displayHome);

        //login
        this.get('#/loginUser', handlers.loginUser);
        this.post('#/login', handlers.login);

        //register
        this.get('#/registerUser', handlers.registerUser);
        this.post('#/register',handlers.register);

        //logout
        this.get('#/logout',handlers.logout);

        //send message
        this.get('#/send',handlers.getSend);
        this.post('#/sendMessage',handlers.sendMessage);

        //sent archive
        this.get('#/sent',handlers.getSentArchive);

        //delete message
        this.post('#/deleteMessage',handlers.deleteSentMessage);

        //my messages
        this.get('#/messages',handlers.viewMyMessages);

    }).run();

});
