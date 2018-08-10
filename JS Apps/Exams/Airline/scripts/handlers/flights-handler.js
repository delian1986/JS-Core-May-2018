handlers.addView = function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home')
    }
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/flights/createFlight.hbs')
    })
};

handlers.addFlight = function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home')
    }
    const destination = ctx.params.destination;
    const origin = ctx.params.origin;
    const departure = ctx.params.departureDate;
    const time = ctx.params.departureTime;
    const seats = ctx.params.seats;
    const cost = ctx.params.cost;
    const image = ctx.params.img;
    let isPublished = ctx.params.public;
    if (isPublished === 'on') {
        isPublished = true;
    } else {
        isPublished = false;
    }


    if (destination === '') {
        notify.showError('Destination should be non-empty string.')
    } else if (origin === '') {
        notify.showError('Origin should be non-empty string.')
    } else if (isNaN(seats) || Number(seats) <= 0) {
        notify.showError('Number of seats should be positive number')
    } else if (isNaN(cost) || Number(cost) <= 0) {
        notify.showError('Cost per seat should be positive number')
    } else {

        flightServices.createFlight(destination, origin, departure, time, seats, cost, image, isPublished)
            .then(function () {
                notify.showInfo('Created flight.');
                ctx.redirect('#/home')
            })
    }
};

handlers.viewDetails = async function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home')
    }
    const flightId = ctx.params.id;
    let flightDetails = await flightServices.flightDetails(flightId);

    ctx.flightId = flightDetails._id;
    ctx.isAuthor = flightDetails._acl.creator === sessionStorage.getItem('userId');
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.image = flightDetails.image;
    ctx.destination = flightDetails.destination;
    ctx.origin = flightDetails.origin;
    ctx.departure = flightDetails.departure;
    ctx.time = flightDetails.time;
    ctx.seats = flightDetails.seats;
    ctx.cost = flightDetails.cost;

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/flights/flightDetails.hbs')
    })
};

handlers.getEdit = async function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home')
    }
    const flightId = ctx.params.id;
    let flightDetails = await flightServices.flightDetails(flightId);

    ctx.flightId = flightDetails._id;
    ctx.isAuthor = flightDetails._acl.creator === sessionStorage.getItem('userId');
    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    ctx.image = flightDetails.image;
    ctx.destination = flightDetails.destination;
    ctx.origin = flightDetails.origin;
    ctx.departure = flightDetails.departure;
    ctx.time = flightDetails.time;
    ctx.seats = flightDetails.seats;
    ctx.cost = flightDetails.cost;

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs'
    }).then(function () {
        this.partial('templates/flights/editFlight.hbs')
    });


};

handlers.editCurrentFlight = function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home')
    }
    const flightId = ctx.params.flightId;

    const destination = ctx.params.destination;
    const origin = ctx.params.origin;
    const departure = ctx.params.departureDate;
    const time = ctx.params.departureTime;
    const seats = ctx.params.seats;
    const cost = ctx.params.cost;
    const image = ctx.params.img;
    let isPublished = ctx.params.public;
    if (isPublished === 'on') {
        isPublished = true;
    } else {
        isPublished = false;
    }

    if (destination === '') {
        notify.showError('Destination should be non-empty string.')
    } else if (origin === '') {
        notify.showError('Origin should be non-empty string.')
    } else if (isNaN(seats) || Number(seats) <= 0) {
        notify.showError('Number of seats should be positive number')
    } else if (isNaN(cost) || Number(cost) <= 0) {
        notify.showError('Cost per seat should be positive number')
    } else {
        flightServices.editFlight(flightId,destination, origin, departure, time, seats, cost, image, isPublished)
            .then(function () {
                notify.showInfo('Successfully edited flight');
                ctx.redirect(`#/catalog/${flightId}`)
            })
    }
};

handlers.myFlight = async function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home')
    }

    ctx.isAuth = auth.isAuth();
    ctx.username = sessionStorage.getItem('username');
    let flights = await flightServices.myFlights();

    ctx.flights = flights;
    flights.forEach((f)=>{
        f.flightId=f._id;
    });

    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs',
        myFlightPartial: 'templates/flights/myFlightPartial.hbs'
    }).then(function () {
        this.partial('templates/flights/myFlights.hbs')
    });
};

handlers.removeFlight=function (ctx) {
    if (!auth.isAuth()) {
        ctx.redirect('#/home')
    }
  const flightId=ctx.params.id;

  flightServices.deleteFlight(flightId)
      .then(function () {
          notify.showInfo('Flight deleted');
          ctx.redirect('#/flights');
      })
};