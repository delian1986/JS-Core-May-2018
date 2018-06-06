function heroicInventory(input) {
    let heroArmory=[];
    for (let line of input) {
        let heroArgs = line.split(/\s*\/\s*/);
        let heroItems=[];
        if (heroArgs.length > 2) {
            heroItems = heroArgs[2].split(/\s*,\s*/);

        }
        let heroName = heroArgs[0];
        let heroLevel = Number(heroArgs[1]);

        let hero={
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        heroArmory.push(hero);
    }

    console.log(JSON.stringify(heroArmory));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun\n',
    'Derek / 12 / BarrelVest, DestructionSword\n',
    'Hes / 1 / Desolator, Sentinel, Antara\n']);