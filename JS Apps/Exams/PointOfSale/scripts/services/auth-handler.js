handlers.getWelcomePage=function (ctx) {
    ctx.loadPartials({
        footer:'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/home.hbs')
    })
};
handlers.registerUser=function (ctx) {
  const username=ctx.params.usernameRegister;
  const password=ctx.params.passwordRegister;
  const repeatPassword=ctx.params.repeatPasswordRegister;

  if (username.length<5){
      notify.showError('Username must be least 5 symbols')
  }else if(password.length===0){
      notify.showError('Password cannot be empty')
  }else if(password!==repeatPassword){
      notify.showError('Passwords must match')
  } else{
      auth.register(username,password)
          .then(function (userData) {
              auth.saveSession(userData);
              notify.showInfo('User registration successful.');
              ctx.redirect('#/editor');
          }).catch(notify.handleError)
  }
};
handlers.userLogin=function (ctx) {
    let username=ctx.params.usernameLogin;
    let password=ctx.params.passwordLogin;

    auth.login(username,password)
        .then(function (userData) {
            auth.saveSession(userData);
            notify.showInfo('Login successful');
            ctx.redirect('#/editor')
        }).catch(notify.handleError)
};
handlers.userLogout=function (ctx) {
    auth.logout()
        .then(function () {
            sessionStorage.clear();
            notify.showInfo('Logout successful');
            ctx.redirect('#/home')
        })
};

