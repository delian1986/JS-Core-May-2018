handlers.getShop = function (ctx) {
    shopServices.getAllShop()
        .then(function (products) {
            ctx.username = sessionStorage.getItem('username');
            ctx.products = products;

            ctx.loadPartials({
                header: 'templates/common/header.hbs',
                footer: 'templates/common/footer.hbs',
                product: 'templates/shop/product.hbs'
            }).then(function () {
                this.partial('templates/shop/shopList.hbs').then(function () {
                    $('button').on('click', function () {
                        let productId = $(this).attr('data-id');
                        productPurchase(productId).catch(notify.handleError)
                    })
                })

            })

        })
};

async function productPurchase(productId) {
    let userId = sessionStorage.getItem('userId');
    let userCart = await shopServices.listUser(userId);
    let product = await shopServices.getProductById(productId);
    userCart.cart = userCart.cart || {};

    if (userCart.cart.hasOwnProperty(productId)) {
        userCart.cart[product._id].quantity = Number(userCart.cart[product._id].quantity) + 1;
    } else {
        userCart.cart[product._id] = {
            quantity: 1,
            product: {
                name: product.name,
                description: product.description,
                price: product.price
            }
        }
    }
    shopServices.updateUser(userId, userCart)
        .then(function (userInfo) {
            notify.showInfo('Product added!');
        }).catch(auth.handleError);

}

handlers.myCart = async function (ctx) {
    let userId = sessionStorage.getItem('userId');
    let user = await
        shopServices.listUser(userId);

    ctx.username = sessionStorage.getItem('username');
    let products = [];

    let cart = user.cart;
    let keys = Object.keys(cart);

    for (let k of keys) {
        products.push({
            name: cart[k]['product']['name'],
            description: cart[k]['product']['description'],
            quantity: Number(cart[k]['quantity']),
            total: (Number(cart[k]['quantity']) * Number(cart[k]['product']['price'])).toFixed(2),
            _id: k
        });
    }
    ctx.products = products;
    ctx.loadPartials({
        header: 'templates/common/header.hbs',
        footer: 'templates/common/footer.hbs',
        cartProduct: 'templates/shop/cartProduct.hbs'
    }).then(function () {
        this.partial('templates/shop/cartList.hbs')
            .then(function () {
                $('button').on('click', function () {
                    let productId = $(this).attr('data-id');
                    removeProduct(productId)
                })
            })
    });
    function removeProduct(id) {
        let userId = sessionStorage.getItem('userId');

        shopServices.listUser(userId)
            .then(function (userInfo) {
                let cart = userInfo['cart'];

                cart[id]['quantity']--;
                if (Number(cart[id]['quantity']) === 0) {
                    delete cart[id];
                }

                userInfo['cart'] = cart;
                shopServices.updateUser(userId,userInfo)
                    .then(function () {
                        handlers.myCart(ctx)
                    }).catch(auth.handleError);
            }).catch(auth.handleError);
    }

};






