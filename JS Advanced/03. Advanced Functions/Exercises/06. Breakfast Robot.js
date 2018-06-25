let manager=(() => {
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };


    let robot = {
        prepare: function (item, quantity) {

            switch (item) {
                case 'apple':
                    if (store.carbohydrate - (quantity) < 0) {
                        return 'Error: not enough carbohydrate in stock';
                    } else if (store.flavour - (quantity * 2) < 0) {
                        return 'Error: not enough flavour in stock';
                    } else {
                        store.carbohydrate -= quantity;
                        store.flavour -= quantity * 2;
                        return 'Success'
                    }
                case 'coke':
                    if (store.carbohydrate - (quantity * 10) < 0) {
                        return 'Error: not enough carbohydrate in stock';
                    } else if (store.flavour - (quantity * 20) < 0) {
                        return 'Error: not enough flavour in stock';
                    } else {
                        store.carbohydrate -= quantity * 10;
                        store.flavour -= quantity * 20;
                        return 'Success'
                    }
                case 'burger':
                    if (store.carbohydrate - (quantity * 5) < 0) {
                        return 'Error: not enough carbohydrate in stock';
                    } else if (store.fat - (quantity * 7) < 0) {
                        return 'Error: not enough fat in stock';
                    } else if (store.flavour - (quantity * 3) < 0) {
                        return 'Error: not enough flavour in stock';
                    } else {
                        store.carbohydrate -= quantity * 5;
                        store.fat -= quantity * 7;
                        store.flavour -= quantity * 3;
                        return 'Success'
                    }
                case 'omelet':
                    if (store.protein - (quantity * 5) < 0) {
                        return 'Error: not enough protein in stock';
                    } else if (store.fat - (quantity) < 0) {
                        return 'Error: not enough fat in stock';
                    } else if (store.flavour - (quantity) < 0) {
                        return 'Error: not enough flavour in stock';
                    } else {
                        store.protein -= quantity * 5;
                        store.fat -= quantity;
                        store.flavour -= quantity;
                        return 'Success'
                    }
                case 'cheverme':
                    if (store.protein - (quantity * 10) < 0) {
                        return 'Error: not enough protein in stock';
                    } else if (store.carbohydrate - (quantity*10) < 0) {
                        return 'Error: not enough carbohydrate in stock';
                    } else if (store.fat - (quantity*10) < 0) {
                        return 'Error: not enough fat in stock';
                    }else if (store.flavour - (quantity*10) < 0) {
                        return 'Error: not enough flavour in stock';
                    } else {
                        store.protein -= quantity * 10;
                        store.carbohydrate -= quantity*10;
                        store.fat -= quantity*10;
                        store.flavour -= quantity*10;
                        return 'Success'
                    }
            }

        },
        restock: function (item, quantity) {
            
            store[item] += quantity;
            console.log('Success');
            return 'Success';
        },
        report:function () {
            return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`

        }
    };

    return function instructions(input) {
        let args = input.split(' ');
        let cmd = args[0];

        let item = args[1];
        let quantity = Number(args[2]);

        switch (cmd) {
            case 'restock':
                return robot.restock(item, quantity);
            case 'prepare':
                return robot.prepare(item, quantity);
            case 'report':
                return robot.report();
        }
    }

})

manager("restock carbohydrateohydrate 10");
manager("restock flavour 10");

