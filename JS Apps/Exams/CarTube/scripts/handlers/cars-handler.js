handlers.createListing = function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home');
    }
    ctx.username = sessionStorage.getItem('username');
    ctx.isAuth = auth.isAuth();

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs',
    }).then(function () {
        this.partial('templates/forms/createListing.hbs');
    })
};

handlers.createNew = function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home');
    }
    const title = ctx.params.title;
    const description = ctx.params.description;
    const brand = ctx.params.brand;
    const model = ctx.params.model;
    const year = ctx.params.year;
    const imageUrl = ctx.params.imageUrl;
    const fuel = ctx.params.fuelType;
    const price = ctx.params.price;
    const seller = sessionStorage.getItem('username');

    if (title === '' || title.length > 33) {
        notify.showError('The title length must not exceed 33 characters!');
    } else if (description === '' || description.length < 30 || description.length > 450) {
        notify.showError('The description length must not exceed 450 characters and should be at least 30!');
    } else if (brand === '' || brand.length > 11) {
        notify.showError('The brand length must not exceed 11 characters or empty!');
    } else if (fuel === '' || fuel.length > 11) {
        notify.showError('The fuel length must not exceed 11 characters or empty!');
    } else if (model === '' || model.length > 11) {
        notify.showError('The model length must not exceed 11 characters or empty!');
    } else if (isNaN(year) || year.length !== 4) {
        notify.showError('The year must be only 4 chars long!');
    } else if (price === '' || isNaN(price) || Number(price > 1000000)) {
        notify.showError('The maximum price is 1000000$ and cannot be 0$')
    } else if (imageUrl.substr(0, 4) !== 'http') {
        notify.showError('Link url should always start with “http”.');
    } else {
        carsServices.createCarListing(brand, description, fuel, imageUrl, model, price, seller, title, year)
            .then(function () {
                notify.showInfo('Your listing was created');
                ctx.redirect('#/home');
            })
    }


};

handlers.editView = async function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home');
    }

    const carId = ctx.params.id;
    let car = await carsServices.carDetails(carId);

    ctx._id = car._id;
    ctx.title = car.title;
    ctx.description = car.description;
    ctx.brand = car.brand;
    ctx.model = car.model;
    ctx.year = car.year;
    ctx.imageUrl = car.imageUrl;
    ctx.fuel = car.fuel;
    ctx.price = car.price;

    ctx.username = sessionStorage.getItem('username');
    ctx.isAuth = auth.isAuth();

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs',
    }).then(function () {
        this.partial('templates/forms/editListing.hbs');
    })

};

handlers.editListing = function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home');
    }

    const carId = ctx.params.carId;
    const title = ctx.params.title;
    const description = ctx.params.description;
    const brand = ctx.params.brand;
    const model = ctx.params.model;
    const year = ctx.params.year;
    const imageUrl = ctx.params.imageUrl;
    const fuel = ctx.params.fuelType;
    const price = ctx.params.price;
    const seller = sessionStorage.getItem('username');

    if (title === '' || title.length > 33) {
        notify.showError('The title length must not exceed 33 characters!');
    } else if (description === '' || description.length < 30 || description.length > 450) {
        notify.showError('The description length must not exceed 450 characters and should be at least 30!');
    } else if (brand === '' || brand.length > 11) {
        notify.showError('The brand length must not exceed 11 characters or empty!');
    } else if (fuel === '' || fuel.length > 11) {
        notify.showError('The fuel length must not exceed 11 characters or empty!');
    } else if (model === '' || model.length > 11) {
        notify.showError('The model length must not exceed 11 characters or empty!');
    } else if (isNaN(year) || year.length !== 4) {
        notify.showError('The year must be only 4 chars long!');
    } else if (price === '' || isNaN(price) || Number(price > 1000000)) {
        notify.showError('The maximum price is 1000000$ and cannot be 0$')
    } else if (imageUrl.substr(0, 4) !== 'http') {
        notify.showError('Link url should always start with “http”.');
    } else {
        carsServices.editCarListing(carId, brand, description, fuel, imageUrl, model, price, seller, title, year)
            .then(function () {
                notify.showInfo(`Listing ${title} updated.`);
                ctx.redirect('#/home');
            }).catch(notify.handleError);
    }

};

handlers.deleteListing = function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home');
    }

    const carId = ctx.params.id;

    carsServices.deleteCarListing(carId)
        .then(function () {
            notify.showInfo('Listing deleted.');
            ctx.redirect('#/home');
        }).catch(notify.handleError)
};

handlers.getMyListings=async function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home');
    }

    let cars=await carsServices.myCarListings().catch(notify.handleError);
    ctx.cars=cars;
    ctx.username = sessionStorage.getItem('username');
    ctx.isAuth = auth.isAuth();

    ctx.cars.forEach((c) => {
        c.isMe = sessionStorage.getItem('userId') === c._acl.creator;
    });

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs',
        carListing:'templates/carsPartials/carListing.hbs'
    }).then(function () {
        this.partial('templates/myListings/myListings.hbs');
    })


};

handlers.listingDetails=async function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home');
    }

    let carId=ctx.params.id;
    let car=await carsServices.carDetails(carId).catch(notify.handleError);

    ctx._id = car._id;
    ctx.title = car.title;
    ctx.description = car.description;
    ctx.brand = car.brand;
    ctx.model = car.model;
    ctx.year = car.year;
    ctx.imageUrl = car.imageUrl;
    ctx.fuel = car.fuel;
    ctx.price = car.price;
    ctx.username = sessionStorage.getItem('username');
    ctx.isAuth = auth.isAuth();
    ctx.isMe = sessionStorage.getItem('userId') === car._acl.creator;


    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs',
    }).then(function () {
        this.partial('templates/details/detailsPage.hbs');
    })


};