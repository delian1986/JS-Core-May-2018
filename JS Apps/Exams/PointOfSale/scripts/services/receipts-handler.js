handlers.getMyReceipts = function (ctx) {
    let userId = sessionStorage.getItem('userId');
    receiptService.getMyReceipts(userId)
        .then(function (allReceipts) {
            allReceipts.forEach((r) => {
                r.time = new Date(r._kmd.ect)
                    .toDateString();
            });
            ctx.isAuth=auth.isAuth();
            ctx.username=sessionStorage.getItem('username');
            ctx.receipts = allReceipts;
            ctx.total = allReceipts
                .map(e => +e.total)
                .reduce((a, b) => a + b)
                .toFixed(2);

            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                receipt: 'templates/allReceipts/receipt.hbs'
            }).then(function () {
                this.partial('templates/allReceipts/allReceipts.hbs')
            })
        }).catch(notify.handleError)
};

handlers.getReceiptById=function (ctx) {
    let receiptId=ctx.params.id;
     entriesServices.getEntries(receiptId)
         .then(function (entries) {

             entries.forEach((e)=>{
                 e.subTotal=(Number(e.qty)*Number(e.price)).toFixed(2)
             });
             ctx.entries=entries;
            ctx.isAuth=auth.isAuth();

             ctx.loadPartials({
                 header: 'templates/common/header.hbs',
                 footer: 'templates/common/footer.hbs',
                 entryDetails:'templates/allReceipts/entryDetails.hbs'
             }).then(function () {
                 this.partial('templates/allReceipts/receiptDetails.hbs')
             })
         })

};