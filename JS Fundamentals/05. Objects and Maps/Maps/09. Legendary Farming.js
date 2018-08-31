//70/100

function legendaryFarming(input) {
    let legendary = new Map();
    let junk = new Map();

    legendary.set('shards', 0);
    legendary.set('motes', 0);
    legendary.set('fragments', 0);
    let itemObtained='';

    for (let line of input) {
        let args = line.split(' ');

        for (let i = 0; i < args.length; i += 2) {
            let material = args[i + 1].toLowerCase();
            let quantity = Number(args[i]);
            if (!legendary.has(material)) {
                if (!junk.has(material)) {
                    junk.set(material, 0);
                }
                let currentQuantity = Number(junk.get(material));
                junk.set(material, quantity + currentQuantity);
            } else {
                let currentQuantity = Number(legendary.get(material));
                legendary.set(material, quantity + currentQuantity);
                if (quantity + currentQuantity >= 250) {
                    let currentQuantity = Number(legendary.get(material));
                    legendary.set(material, currentQuantity-250);

                    switch (material) {
                        case 'shards':
                            itemObtained='Shadowmourne';
                            break;
                        case 'fragments':
                            itemObtained='Valanyr';
                            break;
                        case 'motes':
                            itemObtained='Dragonwrath';
                            break;
                    }
                    break;
                }
            }
        }
    }

    let sortedLegendary=[...legendary].sort((a,b)=>{
       if (b[1]-a[1]===0){
           return a[0].localeCompare(b[0]);
       }  else{
           return b[1]-a[1];
       }
    });
    let sortedJunk=[...junk].sort((a,b)=>{
        return a[0].localeCompare(b[0])
    });

    console.log(`${itemObtained} obtained!`);
    for (let item of sortedLegendary) {
        console.log(`${item[0]}: ${item[1]}`);
    }
    for (let junk of sortedJunk) {
        console.log(`${junk[0]}: ${junk[1]}`);
    }
}

legendaryFarming(['123 silver 6 shards 8 shards 5 motes',
    '9 fangs 75 motes 103 MOTES 8 Shards',
    '86 Motes 7 stones 19 silver']);

// legendaryFarming([ '3 Motes 5 stones 5 Shards',
//     '6 leathers 255 fragments 7 Shards' ]);