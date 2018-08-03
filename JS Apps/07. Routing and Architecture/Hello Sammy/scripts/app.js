const app=Sammy('#main',function () {
    this.use('Handlebars', 'hbs');

    this.route('get','#/about',function () {
        this.swap('<h2>This is my first Sammy.js page</h2>')
    });
    this.route('get','#/contact',function () {
        this.swap('<h2>Sammy.js contact page</h2>')
    });
    this.route('get','#/index.html',function () {
       this.swap('<h1>Hello Sammy.js</h1>')
    });
    this.get('#/greet/:name',function () {
        this.title='Hello!';
       this.name=this.params.name;
       this.partial('./template/greetSammy.hbs')
    });

    this.route('get','#/login',function () {
       this.swap(`<form action="#/login" method="post">
  User: <input name="user" type="text">
  Pass: <input name="pass" type="password">
  <input type="submit" value="Login">
</form>`);

    });
    this.post('#/login',(context)=>{
        console.log(context.params.user);
        console.log(context.params.pass);
        context.redirect('#/index.html')
    })
});

$(()=>app.run('#/index.html'));