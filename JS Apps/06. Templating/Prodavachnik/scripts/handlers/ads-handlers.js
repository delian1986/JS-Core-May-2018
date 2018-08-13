//Here I'll store CRUD operations and main functionality

handlers.createAdPage = function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home');
    }

    ctx.isAnonimous = !auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.isAuth = auth.isAuth();
    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/forms/createAd.hbs');
    })
};

handlers.createAdFunctionality = function (ctx) {
    if (!auth.isAuth()) {//if you are not logged in redirect to home
        ctx.redirect('#/home');
    }
    const title = ctx.params.title;
    const description = ctx.params.description;
    let date = getDate();
    const price = ctx.params.price;
    const imageUrl = ctx.params.imageUrl;

    if (title.length > 50) {
        notify.showError('Title must be between 1 and 50 symbols');
    } else if (description.length > 150) {
        notify.showError('Description cannot be longer than 150 symbols');
    } else if (isNaN(price)) {
        notify.showError('Price must be a number');
    } else if (imageUrl.substr(0, 4) !== 'http') {
        notify.showError('Image URL must start with http');
    } else {
        adsServices.createAd(title, description, date, price, imageUrl)
            .then(function () {
                notify.showInfo(`${title} created!`);
                ctx.redirect('#/listAds');
            }).catch(notify.handleError);
    }

};

handlers.listAllAdverts = async function (ctx) {
    if (!auth.isAuth()) {//if you are not logged in redirect to home
        ctx.redirect('#/home');
    }

    let ads = await adsServices.listAllAds();


    ctx.isAnonimous = !auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.isAuth = auth.isAuth();
    ctx.ads = ads;

    ctx.ads.forEach((a) => {
        a.isAuthor = sessionStorage.getItem('userId') === a._acl.creator;
    });
    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs',
        adBox: 'templates/listAds/adBox.hbs'
    }).then(function () {
        this.partial('templates/listAds/listAds.hbs');
    })

};

handlers.adDetails = async function (ctx) {
    if (!auth.isAuth()) {//if you are not logged in redirect to home
        ctx.redirect('#/home');
    }

    const adId = ctx.params.id;

    adsServices.getAd(adId)
        .then(function (ad) {
            adsServices.incrementViews(adId, ad.title, ad.description, ad.date, ad.price, ad.views, ad.publisher, ad.imageUrl)
                .then(async function () {
                    ad = await adsServices.getAd(adId);
                    ctx.title = ad.title;
                    ctx.imageUrl = ad.imageUrl;
                    ctx.description = ad.description;
                    ctx.publisher = ad.publisher;
                    ctx.date = ad.date;
                    ctx.views = ad.views;
                    ctx.isAnonimous = !auth.isAuth();
                    ctx.username = sessionStorage.getItem('username');
                    ctx.isAuth = auth.isAuth();
                    ctx.loadPartials({
                        header: 'templates/common/header.hbs',
                        footer: 'templates/common/footer.hbs',
                    }).then(function () {
                        this.partial('templates/details/detailsPage.hbs');
                    })
                }).catch(notify.handleError)
        }).catch(notify.handleError)
};

handlers.getEdit = async function (ctx) {
    if (!auth.isAuth()) {//if you are not logged in redirect to home
        ctx.redirect('#/home');
    }

    const adId = ctx.params.id;
    let ad = await adsServices.getAd(adId);
    ctx._id = ad._id;
    ctx.title = ad.title;
    ctx.imageUrl = ad.imageUrl;
    ctx.description = ad.description;
    ctx.publisher = ad.publisher;
    ctx.date = getDate();
    ctx.price = ad.price;
    ctx.views = ad.views;

    ctx.isAnonimous = !auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.isAuth = auth.isAuth();
    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/forms/editAd.hbs');
    })
};

handlers.editThisAd = function (ctx) {
    if (!auth.isAuth()) {//if you are not logged in redirect to home
        ctx.redirect('#/home');
    }
    const id = ctx.params.id;
    const title = ctx.params.title;
    const description = ctx.params.description;
    const date = getDate();
    const price = ctx.params.price;
    const imageUrl = ctx.params.imageUrl;
    const views=ctx.params.views;

    if (title.length > 50) {
        notify.showError('Title must be between 1 and 50 symbols');
    } else if (description.length > 150) {
        notify.showError('Description cannot be longer than 150 symbols');
    } else if (isNaN(price)) {
        notify.showError('Price must be a number');
    } else if (imageUrl.substr(0, 4) !== 'http') {
        notify.showError('Image URL must start with http');
    } else {
        adsServices.editAd(id, title, description, date, price, views, imageUrl)
            .then(function () {
                notify.showInfo(`${title} edited!`);
                ctx.redirect('#/listAds');
            }).catch(notify.handleError);
    }
};

handlers.deleteThisAd=function (ctx) {

    if (!auth.isAuth()) {//if you are not logged in redirect to home
        ctx.redirect('#/home');
    }
    const adId=ctx.params.id;

    adsServices.deleteAd(adId)
        .then(function () {
            notify.showInfo('Ad deleted');
            ctx.redirect('#/listAds');
        }).catch(notify.handleError)
};