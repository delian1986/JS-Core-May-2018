function cappyJuice(input) {
    let juice={};
    let bottles={};

    for (let line of input) {
        let args = line.split(/\s*=>\s*/);
        let name = args[0];
        let quantity = Number(args[1]);

        if (!juice.hasOwnProperty(name)) {
            juice[name]=0;
        }
        juice[name]+=quantity;

        if (juice[name]>=1000){
            let liter=Math.floor(juice[name]/1000);
            bottles[name]=(liter);
        }
    }
    for (let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

cappyJuice(['Orange => 2000\n',
    'Peach => 1432\n',
    'Banana => 450\n',
    'Peach => 600\n',
    'Strawberry => 549\n']);