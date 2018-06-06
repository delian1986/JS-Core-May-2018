function autoEngineeringCompany(input) {
    let cars=new Map();

    for (let line of input) {
        let args= line.split(/\s*\|\s*/);
        
        let brand=args[0];
        let model=args[1];
        let quantity=Number(args[2]);
        
        if (!cars.has(brand)){
            cars.set(brand,new Map());
        } 
        if (!cars.get(brand).get(model)){
            cars.get(brand).set(model,0);
        }

        cars.get(brand).set(model, cars.get(brand).get(model)+quantity);
    }

    for (let [brand,modelCount] of cars) {
        console.log(brand);

        for (let [model,count] of modelCount) {
            console.log(`###${model} -> ${count}`);
        }
    }
}

autoEngineeringCompany(['Audi | Q7 | 1000\n' ,
'Audi | Q6 | 100\n' ,
'BMW | X5 | 1000\n' ,
'BMW | X6 | 100\n' ,
'Citroen | C4 | 123\n' ,
'Volga | GAZ-24 | 1000000\n' ,
'Lada | Niva | 1000000\n' ,
'Lada | Jigula | 1000000\n' ,
'Citroen | C4 | 22\n' ,
'Citroen | C5 | 10\n']);