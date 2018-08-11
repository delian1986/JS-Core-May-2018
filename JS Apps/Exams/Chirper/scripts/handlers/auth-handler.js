handlers.viewHome=function (ctx) {
if (!auth.isAuth()){
    ctx.redirect('#/registerView');
} else{
    ctx.redirect('#/feed')
}
};

handlers.registerView=function (ctx) {

    ctx.loadPartials({
        header:'templates/common/header.hbs',
        footer:'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/welcome/register.hbs')
    })
};

handlers.registerUser=function(ctx){
  const username=ctx.params.username;
  const password=ctx.params.password;
  const repeatPassword=ctx.params.repeatPass;

  if(username.length<5){
      notify.showError('A username should be a string with at least 5 characters long.');
  }else if(password===''||repeatPassword===''){
      notify.showError('Passwords input fields shouldn’t be empty.')
  }else if (password!==repeatPassword){
      notify.showError('Both passwords should match.')
  }else{
      auth.register(username,password)
          .then(function (userData) {
              auth.saveSession(userData);
              notify.showInfo(`${username} registration successful.`);
              ctx.redirect('#/feed')
          }).catch(notify.handleError)
  }

};

handlers.loginView=function (ctx) {
    ctx.loadPartials({
        header:'templates/common/header.hbs',
        footer:'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/welcome/login.hbs')
    })
};

handlers.loginUser=function (ctx) {
    const username=ctx.params.username;
    const password=ctx.params.password;

    auth.login(username,password)
        .then(function (userData) {
            auth.saveSession(userData);
            notify.showInfo(`${username} logged in.`);
            ctx.redirect('#/feed');
        }).catch(notify.handleError)

};

handlers.logout=function (ctx) {
  auth.logout().then(function () {
      sessionStorage.clear();
      notify.showInfo('Logged out');
      ctx.redirect('#/registerView');
  }).catch(notify.handleError)
};