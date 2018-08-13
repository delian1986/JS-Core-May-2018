//In this object I'll keep all handlers
const handlers={};

$(()=>{
   const app=Sammy('#content',function () {
       this.use('Handlebars','hbs');

        //home
       this.get('index.html',handlers.viewHome);
       this.get('#/home',handlers.viewHome);

       //register
       this.get('#/registerView',handlers.registerView);
       this.post('#/register',handlers.registerUser);

       //login
       this.get('#/loginView',handlers.loginView);
       this.post('#/login',handlers.loginUser);

        //logout
       this.get('#/logout',handlers.logout);

       //create Ad
       this.get('#/createAd',handlers.createAdPage);
       this.post('#/create',handlers.createAdFunctionality);

       //list all ads
       this.get('#/listAds',handlers.listAllAdverts);

       //details
       this.get('#/details/:id',handlers.adDetails);

       //edit ad
       this.get('#/edit/:id',handlers.getEdit);
       this.post('#/edit',handlers.editThisAd);

       //delete
       this.get('delete/:id',handlers.deleteThisAd);

   }).run();


});