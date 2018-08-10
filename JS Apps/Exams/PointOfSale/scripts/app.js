const handlers={};

$(()=>{
    const app=Sammy('#container', function () {
        this.use('Handlebars','hbs');

        this.get('index.html',handlers.getWelcomePage);
        this.get('#/home',handlers.getWelcomePage);

        //user login / register/ logout
        this.post('#/register',handlers.registerUser);
        this.post('#/login',handlers.userLogin);
        this.get('#/logout',handlers.userLogout);

        //editor view
        this.get('#/editor',handlers.getEditor);

        //addEntry
        this.post('#/createEntry',handlers.createEntry);

        //delete entry
        this.post('#/deleteEntry',handlers.deleteEntry);

        //checkout
        this.post('#/commitReceipt',handlers.commitReceipt);

        //all my receipts
        this.get('#/overview',handlers.getMyReceipts);

        //view receipt details
        this.get('#/receipt/details/:id',handlers.getReceiptById);

    });

    app.run();
});
