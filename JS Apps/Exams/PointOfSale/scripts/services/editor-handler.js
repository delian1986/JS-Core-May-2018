handlers.getEditor = async function (ctx) {
    try {
        let userId = sessionStorage.getItem('userId');
        let [receipt] = await receiptService.getActiveReceipt(userId);

        if (!receipt) {
            receipt = await receiptService.createReceipt()
        }
        let entries = await entriesServices.getEntries(receipt._id);
        entries.forEach((e) => {
            if (entries.length > 0) {
                e.subTotal = (e.qty * e.price).toFixed(2);
                ctx.total = entries.map(e => e.subTotal)
                    .reduce((a, b) => Number(a) + Number(b)
                        .toFixed(2));
                ctx.productCount = entries.length;
            } else {
                ctx.total = 0;
                ctx.productCount = 0;
            }

        });

        ctx.entries = entries;
        ctx.isAuth = auth.isAuth();
        ctx.username = sessionStorage.getItem('username');
        ctx.receiptId = receipt._id;
        ctx.loadPartials({
            header: 'templates/common/header.hbs',
            footer: 'templates/common/footer.hbs',
            activeEntry: 'templates/editor/activeEntry.hbs'
        }).then(function () {
            this.partial('templates/editor/createReceipt.hbs')
        })
    } catch (err) {
        notify.handleError(err);
    }

};
handlers.createEntry = function (ctx) {
    let type = ctx.params.type;
    let qty = ctx.params.qty;
    let price = ctx.params.price;
    let receiptId = ctx.params.receiptId;

    if (type.length === 0) {
        notify.showError('Product mut me non empty');
    } else if (isNaN(qty) || qty.length === 0) {
        notify.showError('Quantity must be number')
    } else if (isNaN(price) || price.length === 0) {
        notify.showError('Price must be number')
    } else {
        entriesServices.createEntry(type, qty, price, receiptId)
            .then(function () {
                notify.showInfo(`${type} added`);
                ctx.redirect('#/editor');
            }).catch(notify.handleError)
    }
};

handlers.deleteEntry = function (ctx) {
    let entryId = ctx.params.entryId;
    entriesServices.deleteEntry(entryId)
        .then(() => {
            notify.showInfo('Entry deleted');
            ctx.redirect('#/editor')
        })
};

handlers.commitReceipt = function (ctx) {
    const receiptId = ctx.params.id;
    const productCount = ctx.params.prodCount;
    const total = ctx.params.totalPrice;

    if (productCount === 0) {
        notify.showError('Cannot checkout empty receipt')

    } else {
        receiptService.commitReceipt(receiptId,productCount,total)
            .then(function () {
                notify.showInfo('Received checkout');
                ctx.redirect('#/editor')
            }).catch(notify.handleError)
    }
};

