function gladiatorInventory(items) {
    let inventory = new Set();

    for (let i = 0; i < items.length; i++) {
        let args = items[i].split(/\s+/);
        if (i == 0) {
            for (let item of args) {
                inventory.add(item);
            }
        } else {
            if (args[0] === 'Buy') {
                for (let j = 1; j < args.length; j++) {
                    inventory.add(args[j]);
                }
            } else if (args[0] === 'Trash') {
                for (let j = 1; j < args.length; j++) {
                    inventory.delete(args[j]);
                }
            } else if (args[0] === 'Repair') {
                for (let j = 1; j < args.length; j++) {
                    if (inventory.has(args[j])) {
                        inventory.delete(args[j]);
                        inventory.add(args[j]);
                    }
                }
            } else if (args[0] === 'Upgrade') {
                for (let j = 1; j < args.length; j++) {
                    let upgrade = args[j].split('-');
                    if (inventory.has(upgrade[0])){
                        let arrayInv=[...inventory];
                        for (let k = 0; k < arrayInv.length; k++) {
                            if (arrayInv[k]===upgrade[0]){
                                let upgraded=`${upgrade[0]}:${upgrade[1]}`;
                                arrayInv.splice(k+1,0,upgraded);
                            }

                        }


                        inventory=new Set(arrayInv);
                    }
                }
            }else if(args[0] === 'Fight!'){
                break;
            }

        }

    }
        let readyToPrint=[...inventory];
        console.log(readyToPrint.join(' '));
}

gladiatorInventory(['Spear SWORD Shield' ,
'Buy       Bag' ,
'Trash Shield' ,
'Repair Spear' ,
'Upgrade Spear-Steel' ,
'Fight!']);

