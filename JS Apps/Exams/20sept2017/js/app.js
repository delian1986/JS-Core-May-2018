$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        //home
        this.get('index.html', displayHome);
        this.get('#/home', displayHome);

        //login
        this.post('#/login', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            if(validator.loginValidator(username,password)){
                auth.login(username, password)
                    .then(function (userInfo) {
                        auth.saveSession(userInfo);
                        notify.showInfo('Login successful.');
                        displayHome(ctx);
                    }).catch(auth.handleError)
            }else{
                notify.showError('Validation failed. Try again!')
            }

        });

        //register
        this.post('#/register', function (ctx) {
            let username = ctx.params.username;
            let password = ctx.params.password;
            let repeatPassword = ctx.params.repeatPass;

            if (validator.loginValidator(username,password,repeatPassword)) {
                auth.register(username, password)
                    .then(function (userInfo) {
                        auth.saveSession(userInfo);
                        notify.showInfo('User registration successful!');
                        ctx.redirect('#/catalog')
                    }).catch(notify.handleError)
            } else {
                notify.showError('Passwords do not match!')
            }
        });

        //logout
        this.get('#/logout', function (ctx) {
            auth.logout().then(function () {
                sessionStorage.clear();
                notify.showInfo('You have been successfully logged out!');
                ctx.redirect('#/home')
            })

        });

        //get all catalog posts
        this.get('#/catalog',function (ctx) {
            if (!auth.isAuth()){
                ctx.redirect('#/home');
                return;
            }
            
            posts.getAllPosts()
                .then(function (posts) {
                    posts.forEach((p,i)=>{
                        p.rank=i+1;
                        p.time=calcTime(p._kmd.ect);
                        p.isAuthor=p._acl.creator===sessionStorage.getItem('userId')
                    });
                    ctx.isAuth=auth.isAuth();
                    ctx.username=sessionStorage.getItem('username');
                    ctx.posts=posts;

                    ctx.loadPartials({
                        header: 'templates/common/header.hbs',
                        footer: 'templates/common/footer.hbs',
                        navigation:'templates/common/navigation.hbs',
                        post:'templates/posts/post.hbs'
                    }).then(function () {
                        this.partial('templates/posts/catalogPage.hbs')
                    })
                }).catch(auth.handleError)

        });

        //load create post page
        this.get('#/create/post',function (ctx) {
            if (!auth.isAuth()){
                ctx.redirect('#/home');
                return;
            }

            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                navigation:'templates/common/navigation.hbs'
            }).then(function () {
                this.partial('templates/posts/createPostPage.hbs')
            })
        });

        //create post functionality
        this.post('#/submitPost',function (ctx) {
            let author= sessionStorage.getItem('username');
           let url= ctx.params.url;
           let title=ctx.params.title;
           let imageUrl=ctx.params.image;
           let description=ctx.params.comment;

           if (validator.createPostValidator(url,title,imageUrl,content)){

                posts.createPost(author,title,description,url,imageUrl)
                    .then(function () {
                        notify.showInfo('Post created');
                        ctx.redirect('#/catalog')
                    })
           }
        });

        //view my posts page
        this.get('#/posts',function (ctx) {
           let author=sessionStorage.getItem('username');

           posts.viewMyPosts(author)
               .then(function (myPosts) {
                   myPosts.forEach((p,i)=>{
                       p.rank=i+1;
                       p.time=calcTime(p._kmd.ect);
                       p.isAuthor=p._acl.creator===sessionStorage.getItem('userId')
                   });
                   ctx.isAuth=auth.isAuth();
                   ctx.username=sessionStorage.getItem('username');
                   ctx.myPosts=myPosts;
                   ctx.loadPartials({
                       header: 'templates/common/header.hbs',
                       footer: 'templates/common/footer.hbs',
                       navigation:'templates/common/navigation.hbs',
                       myPost:'templates/posts/myPost.hbs',
                   }).then(function () {
                       this.partial('templates/posts/viewMyPostsPage.hbs')
                   })
               }).catch(auth.handleError)
        });

        //load edit page
        this.get('#/edit/:id',function (ctx) {
            let postId=ctx.params.id;

            posts.postDetails(postId)
                .then(function (postDetails) {
                    ctx.postId=postId;
                    ctx.url=postDetails.url;
                    ctx.title=postDetails.title;
                    ctx.imageUrl=postDetails.imageUrl;
                    ctx.description=postDetails.description;

                    ctx.loadPartials({
                        header: 'templates/common/header.hbs',
                        footer: 'templates/common/footer.hbs',
                        navigation:'templates/common/navigation.hbs'
                    }).then(function () {
                        this.partial('templates/posts/editPostPage.hbs')
                    })

                }).catch(auth.handleError)
        });

        //edit post functionality
        this.post('#/edit',function (ctx) {
            console.log(ctx);
            let url= ctx.params.url;
            let title=ctx.params.title;
            let imageUrl=ctx.params.imageUrl;
            let description=ctx.params.comment;
            let postId=ctx.params.id;

            console.log(postId);
            // let author=sessionStorage.getItem('username');
            //
            // if (validator.createPostValidator(url,title,imageUrl,description)){
            //     posts.editPost(postId,author,title,description,url,imageUrl)
            //         .then(function () {
            //             notify.showInfo(`Post ${title} updated`);
            //             ctx.redirect('#/catalog')
            //         }).catch(auth.handleError)
            // }
        });

        this.get('#/delete/:id',function (ctx) {
            let id = ctx.params.id;
            posts.deletePost(id)
                .then(function () {
                    notify.showInfo('Post deleted');
                    ctx.redirect('#/catalog')
                })
        });
        function displayHome(ctx) {
            if (!auth.isAuth()) {
                ctx.loadPartials({
                    header: 'templates/common/header.hbs',
                    footer: 'templates/common/footer.hbs'
                }).then(function () {
                    this.partial('templates/home/home_anonymous.hbs')
                })
            } else {
                ctx.redirect('#/catalog')
            }

        }
    });

    function calcTime(dateIsoFormat) {
        let diff = new Date - (new Date(dateIsoFormat));
        diff = Math.floor(diff / 60000);
        if (diff < 1) return 'less than a minute';
        if (diff < 60) return diff + ' minute' + pluralize(diff);
        diff = Math.floor(diff / 60);
        if (diff < 24) return diff + ' hour' + pluralize(diff);
        diff = Math.floor(diff / 24);
        if (diff < 30) return diff + ' day' + pluralize(diff);
        diff = Math.floor(diff / 30);
        if (diff < 12) return diff + ' month' + pluralize(diff);
        diff = Math.floor(diff / 12);
        return diff + ' year' + pluralize(diff);
        function pluralize(value) {
            if (value !== 1) return 's';
            else return '';
        }
    }


    app.run();
});