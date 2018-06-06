function storeCatalogue(input) {
    let store=new Map();

    for (let line of input) {
        let args=line.split(/\s*:\s*/);

        let product=args[0];
        let quantity=Number(args[1]);

        store.set(product,quantity);
    }

    let letters=new Set();
    Array.from(store.keys()).forEach(k=>
        letters.add(k[0]));

    for (let letter of Array.from(letters.keys()).sort()){
        console.log(letter);

        for (let key of Array.from(store.keys()).sort()) {
            if (key.startsWith(letter)){
            console.log(`  ${key}: ${store.get(key)}`);
            }
        }
    }
}

storeCatalogue(['Appricot : 20.4\n' ,
'Fridge : 1500\n' ,
'TV : 1499\n' ,
'Deodorant : 10\n' ,
'Boiler : 300\n' ,
'Apple : 1.25\n' ,
'Anti-Bug Spray : 15\n' ,
'T-Shirt : 10\n']);