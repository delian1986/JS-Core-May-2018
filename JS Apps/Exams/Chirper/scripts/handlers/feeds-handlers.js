handlers.getFeed = async function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/registerView')
    }

    ctx.username = sessionStorage.getItem('username');
    let currUserId = sessionStorage.getItem('userId');

    let chirps = await chirpsServices.listAllChirpsFromSubs();
    let userChirps = await chirpsServices.countChirps(ctx.username);
    let [userFollowing] = await chirpsServices.countFollowing(ctx.username).catch(notify.handleError);
    let userFollowers = await chirpsServices.countFollowers(ctx.username);

    console.log(userFollowing);
    ctx.chirps = chirps;
    // console.log(chirps);
    chirps.forEach((c) => {
        ctx._id = c._id;
        ctx.author = c.author;
        ctx.text = c.text
    });
    ctx.userChirps = userChirps.length;
    ctx.userFollowing =userFollowing.subscriptions.length;
    ctx.userFollowers = userFollowers.length;


    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs',
        menu: 'templates/common/menu.hbs',
        mainPageChirp: 'templates/feed/mainPageChirp.hbs'
    }).then(function () {
        this.partial('templates/feed/mainFeed.hbs')
    })
};

handlers.submitChirp = function (ctx) {
    const author = sessionStorage.getItem('username');
    const text = ctx.params.text;

    if (text.length === 0 || text.length > 150) {
        notify.showError('A chirp text shouldn’t be empty and shouldn’t contain more than 150 symbols.');
    } else {
        chirpsServices.createChirp(text, author)
            .then(function () {
                notify.showInfo('Chirp created');
                ctx.redirect('#/me');
            }).catch(notify.handleError)
    }
};

handlers.allMyChirps = async function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/registerView')
    }

    ctx.username = sessionStorage.getItem('username');
    let currUserId = sessionStorage.getItem('userId');

    let chirps = await chirpsServices.listAllChirpsFromSubs();
    let userChirps = await chirpsServices.countChirps(ctx.username);
    let userFollowing = await chirpsServices.countFollowing(ctx.username);
    let userFollowers = await chirpsServices.countFollowers(ctx.username);


    ctx.chirps = userChirps;
    // console.log(chirps);
    ctx.chirps.forEach((c) => {
        // console.log(c);
        ctx._id = c._id;
        ctx.author = c.author;
        c.time = calcTime(c._kmd['ect']);
        ctx.text = c.text;
        c.isMe = sessionStorage.getItem('userId') === c._acl.creator
    });

    ctx.userChirps = userChirps.length;
    ctx.userFollowing = JSON.parse(userFollowing[0].subscriptions).length;
    ctx.userFollowers = userFollowers.length;


    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs',
        menu: 'templates/common/menu.hbs',
        mainPageChirp: 'templates/feed/mainPageChirp.hbs'
    }).then(function () {
        this.partial('templates/myChirps/myChirps.hbs')
    })
};

handlers.deleteChirp = function (ctx) {
    const chirpId = ctx.params.id;

    chirpsServices.deleteChirp(chirpId)
        .then(function () {
            notify.showInfo('Chirp deleted.');
            ctx.redirect('#/me');
        }).catch(notify.handleError)
};

handlers.discover = async function (ctx) {
    let discover = await chirpsServices.discoverPage();
    let currUser = sessionStorage.getItem('userId');
    discover = discover.filter(function (user) {
        return !user._id.includes(currUser);
    });

    ctx.users = discover;
    ctx.users.sort(function(a, b){
        return b.subscriptions.length - a.subscriptions.length;
    });

    ctx.users.forEach((u)=>{
        try {

        console.log(JSON.parse(u.subscriptions).length);
        u.userFollowers=JSON.parse(u.subscriptions).length
        }catch  {
            // console.log(JSON.parse(u.subscriptions).length);
            u.userFollowers=0

        }
    });

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs',
        menu: 'templates/common/menu.hbs',
        userbox: 'templates/discover/userbox.hbs'
    }).then(function () {
        this.partial('templates/discover/discoverPage.hbs')
    })
};

handlers.userDetails=async function (ctx) {
    let username=ctx.params.username;
    // ctx.userId=userId;
    let [details]=await auth.loadUserByUsername(username);

    console.log(details);
    ctx.user=details.username;
    let chirpsCreated=await chirpsServices.countChirps(details.username);
    let following=await chirpsServices.countFollowing(details.username);
    ctx.chirps=chirpsCreated;
    ctx.chimpsCreated=chirpsCreated.length;
    console.log(details.subscriptions);
    ctx.followers=details.subscriptions.length;

    ctx.following=following.length;
    ctx.isFollowed = JSON.parse(sessionStorage.getItem('subs')).includes(details.username);
    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs',
        menu: 'templates/common/menu.hbs',
        mainPageChirp: 'templates/feed/mainPageChirp.hbs'
    }).then(function () {
        this.partial('templates/profileDetails/profileDetails.hbs')
    })
};

handlers.followUser= async function (ctx) {
    let username = ctx.params.user;
    console.log(username);
    let userId = sessionStorage.getItem('userId');
    let newSubArr = JSON.parse(sessionStorage.getItem('subs')).splice(0); // Create a copy of arr
    newSubArr.push(username);
    chirpsServices.modifyUser(userId, newSubArr)
        .then(() => {
            notify.showInfo(`Subscribed to ${username}`);
            sessionStorage.setItem('subs', JSON.stringify(newSubArr));
            ctx.redirect(`#/user/${username}`);
        }).catch(notify.handleError);
};


handlers.unfollowUser=function (ctx) {
    let username = ctx.params.user;
    let userId = sessionStorage.getItem('userId');
    let newSubArr = JSON.parse(sessionStorage.getItem('subs'));
    let indexOfEl = newSubArr.indexOf(username);
    newSubArr.splice(indexOfEl, 1);

    chirpsServices.modifyUser(userId, newSubArr)
        .then(() => {
            notify.showInfo(`Unsubscribed to ${username}`);
            sessionStorage.setItem('subs', JSON.stringify(newSubArr));
            ctx.redirect(`#/user/${username}`);
        }).catch(notify.handleError);
};