handlers.homeHandler=function (ctx) {
    ctx.isAuth = auth.isAuth();
    $.ajax('data.json')
        .then((contacts)=>{
            ctx.contacts=contacts;
            ctx.loadPartials({
                navigation: './templates/common/navigation.hbs',
                header: './templates/common/header.hbs',
                contactPage: './templates/contacts/contactPage.hbs',
                contact:'./templates/contacts/contact.hbs',
                contactDetails:'./templates/contacts/contactsDetails.hbs',
                contactList:'./templates/contacts/contactList.hbs',
                loginForm: './templates/forms/loginForm.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                ctx.partials=this.partials;
                render()
            })
        })
        .catch(console.error);

    function render() {
        ctx.partial('./templates/welcome.hbs')
            .then(attachEvents)
    }

    function attachEvents() {
        $('.contact').on('click', ((e)=>{
            let index= $(e.target).closest('.contact').attr('data-id');
            ctx.selected=ctx.contacts[index];
            render();
        }))
    }

};